import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "@/pages/admin/AdminLayout";
import Card from "@/components/Card";
import axios from "axios";
import { Clock2 } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  content: string;
  status: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
}

function ListBlogContent() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(process.env.API_DEV + "blogs");
      setBlogs(response.data);
    } catch (error) {
      console.error("Gagal mengambil data blog:", error);
      alert("Gagal mengambil data blog");
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/admin/edit/${id}`);
  };

  const handleCreate = () => {
    navigate("/admin/create");
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus blog ini?")) {
      try {
        await axios.delete(`${process.env.API_DEV}blogs/${id}`);
        await fetchBlogs();
        alert("Blog berhasil dihapus");
      } catch (error) {
        console.error("Gagal menghapus blog:", error);
        alert("Gagal menghapus blog");
      }
    }
  };

  const handleToggleStatus = async (blog: Blog) => {
    const newStatus = blog.status === "DRAFT" ? "PUBLISHED" : "DRAFT";
    try {
      await axios.put(`${process.env.API_DEV}blogs/${blog.id}`, {
        status: newStatus,
      });
      await fetchBlogs();
    } catch (error) {
      console.error("Gagal mengubah status blog:", error);
      alert("Gagal mengubah status blog");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <AdminLayout>
      <Card dark={false}>
        <div className="flex justify-between items-center pb-4 border-b">
          <h2 className="text-xl font-bold">Daftar Blog</h2>
          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-grayBg border font-semibold rounded-md hover:bg-[#373737] focus:outline-none transition-colors duration-200"
          >
            Tambah Blog
          </button>
        </div>
        <div className="mt-6 space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="p-4 border border-gray-300 rounded-lg space-y-4"
            >
              <div className="flex flex-col gap-1 justify-between items-start">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <div className="flex items-center gap-2">
                  <Clock2 size={16} strokeWidth={1} />
                  <p className="text-sm text-gray-500 capitalize">
                    {new Date(blog.createdAt).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </p>
                </div>
                <span
                  className={`inline-block mt-2 px-2 py-1 text-xs font-semibold rounded ${
                    blog.status === "PUBLISHED"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {blog.status === "PUBLISHED" ? "Published" : "Draft"}
                </span>
              </div>
              {blog.photo && (
                <img
                  src={blog.photo}
                  alt={blog.title}
                  className="w-full h-32 object-cover rounded-md"
                />
              )}
              <div className="flex gap-2">
                <button
                  onClick={() => handleToggleStatus(blog)}
                  className="w-full px-3 py-1 bg-blue-500 text-white font-semibold text-sm rounded-md hover:bg-blue-600 focus:outline-none transition-colors duration-200"
                >
                  {blog.status === "PUBLISHED" ? "Set Draft" : "Publish"}
                </button>
                <button
                  onClick={() => handleEdit(blog.id)}
                  className="w-full px-3 py-1 bg-grayBg border font-semibold text-sm rounded-md hover:bg-[#373737] focus:outline-none transition-colors duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="w-full px-3 py-1 bg-red-500 text-white font-semibold text-sm rounded-md hover:bg-red-600 focus:outline-none transition-colors duration-200"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </AdminLayout>
  );
}

export default ListBlogContent;
