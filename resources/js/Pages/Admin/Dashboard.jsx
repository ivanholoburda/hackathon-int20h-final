import AdminLayout from "../../Layouts/Admin/AdminLayout.jsx";
import React from "react";

export default function Dashboard() {
    return (
        <AdminLayout>
            <h1 className="text-2xl font-bold mb-4">📊 Адмін-Дашборд</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">🛒 Товари</h2>
                    <p>Кількість: 120</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">📦 Замовлення</h2>
                    <p>В обробці: 35</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">👥 Користувачі</h2>
                    <p>Зареєстровані: 450</p>
                </div>
            </div>
        </AdminLayout>
    );
}
