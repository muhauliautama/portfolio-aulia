import React, { useState, useCallback, useEffect } from "react";
import RichTextEditor from "@/components/RichTextEditor";
import AdminLayout from "@/pages/admin/AdminLayout";
import axios from "axios";
import Input from "@/components/Input";
import Card from "@/components/Card";
import { useParams, useNavigate } from "react-router-dom";

function BlogForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const isEditing = !!id;

  const [blogContent, setBlogContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [currentPhoto, setCurrentPhoto] = useState<string>("");

  useEffect(() => {
    if (isEditing) {
      fetchBlog(id);
    } else {
      setTitle("");
      setBlogContent("");
      setMainImage(null);
      setCurrentPhoto("");
    }
  }, [isEditing, id]);

  const fetchBlog = async (blogId: string) => {
    try {
      const response = await axios.get(
        process.env.API_DEV + `blogs/detail/${blogId}`
      );
      const blog = response.data;
      setTitle(blog.title);
      setBlogContent(blog.content);
      setCurrentPhoto(blog.photo);
    } catch (error) {
      console.error("Gagal mengambil data blog:", error);
      alert("Gagal mengambil data blog");
      navigate("/admin");
    }
  };

  const handleEditorChange = useCallback((content: string) => {
    setBlogContent(content);
  }, []);

  const handleMainImageChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setMainImage(file);
      }
    },
    []
  );

  const handleImageUpload = useCallback(async (file: File): Promise<string> => {
    const uploadUrl = process.env.API_DEV + "uploads/image";
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post<{ imageUrl: string }>(
        uploadUrl,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Gambar berhasil diupload:", response.data.imageUrl);
      return response.data.imageUrl;
    } catch (error) {
      console.error("Gagal mengupload gambar:", error);
      alert("Gagal mengupload gambar");
      throw new Error("Gagal mengupload gambar");
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!title || !blogContent) {
      alert("Judul dan konten blog tidak boleh kosong!");
      return;
    }

    try {
      let photoUrl = currentPhoto;

      if (mainImage) {
        const mainImageFormData = new FormData();
        mainImageFormData.append("image", mainImage);

        const mainImageUploadResponse = await axios.post<{ imageUrl: string }>(
          process.env.API_DEV + "uploads/image",
          mainImageFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        photoUrl = mainImageUploadResponse.data.imageUrl;
      } else if (!isEditing && !currentPhoto) {
        alert("Gambar utama tidak boleh kosong!");
        return;
      }

      const requestMethod = isEditing ? axios.put : axios.post;
      const requestUrl = isEditing
        ? process.env.API_DEV + `blogs/${id}`
        : process.env.API_DEV + "blogs";

      const payload = {
        title: title,
        content: blogContent,
        status: "PUBLISHED",
        photo: photoUrl,
      };

      const response = await requestMethod(requestUrl, payload);

      console.log("Blog berhasil diproses:", response.data);
      alert(`Blog berhasil ${isEditing ? "diupdate" : "disimpan"}!`);

      if (!isEditing) {
        setTitle("");
        setBlogContent("");
        setMainImage(null);
        setCurrentPhoto("");
      }
      navigate("/admin");
    } catch (error) {
      console.error(
        `Gagal ${isEditing ? "mengupdate" : "menyimpan"} blog:`,
        error
      );
      alert(`Gagal ${isEditing ? "mengupdate" : "menyimpan"} blog!`);
    }
  }, [title, blogContent, mainImage, currentPhoto, isEditing, id, navigate]);

  return (
    <AdminLayout>
      <Card dark={false}>
        <div className="flex justify-between items-center pb-4 border-b">
          <h2 className="text-xl font-bold">
            {isEditing ? "Edit Blog" : "Buat Postingan Blog Baru"}
          </h2>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-semibold">
              Judul
            </label>
            <Input
              type="text"
              id="title"
              className="w-full !px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none text-base"
              placeholder="Masukkan judul blog"
              value={title}
              onChange={setTitle}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="mainImage" className="block text-sm font-semibold">
              Gambar Utama
            </label>
            {isEditing && currentPhoto && !mainImage && (
              <img
                src={currentPhoto}
                alt="Current"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
            )}
            {mainImage && (
              <img
                src={URL.createObjectURL(mainImage)}
                alt="New Preview"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
            )}
            <input
              type="file"
              id="mainImage"
              accept="image/*"
              onChange={handleMainImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0 file:text-sm file:font-semibold
              file:bg-grayText file:text-grayTextContent hover:file:bg-[#373737] file:cursor-pointer"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold">Konten Blog</label>
            <RichTextEditor
              initialValue={blogContent}
              onChange={handleEditorChange}
              onImageUpload={handleImageUpload}
            />
          </div>
          <div className="flex justify-end pt-4 border-t">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-grayBg border font-semibold rounded-md hover:bg-[#373737] focus:outline-none transition-colors duration-200"
            >
              {isEditing ? "Update Blog" : "Simpan Blog"}
            </button>
          </div>
        </div>
        <div className="mt-1 pt-6 border-t">
          <h3 className="text-xl font-bold mb-4">Preview Konten:</h3>
          <div
            className="prose max-w-none border border-gray-300 rounded-md p-6 bg-gray-50 overflow-auto"
            dangerouslySetInnerHTML={{ __html: blogContent }}
          />
        </div>
      </Card>
    </AdminLayout>
  );
}

export default BlogForm;
