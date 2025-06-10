import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const isAdmin = localStorage.getItem("ADMIN_KEY") === process.env.ADMIN_KEY;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [isAdmin, navigate]);

  return (
    isAdmin && (
      <div className="min-h-dvh bg-[#161616] p-4 text-grayText w-[calc(100%-24px)] max-w-[776px] mx-auto md:w-full md:max-w-full">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold ">Admin Dashboard</h1>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default AdminLayout;
