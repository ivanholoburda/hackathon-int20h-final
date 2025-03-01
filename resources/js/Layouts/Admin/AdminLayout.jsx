import Sidebar from "./shared/Sidebar.jsx";
import Header from "./shared/Header.jsx";
import React from "react";

const AdminLayout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Header />

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <main className="p-6 overflow-auto flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
