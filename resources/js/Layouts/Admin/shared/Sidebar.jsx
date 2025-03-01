import { Link } from "@inertiajs/react";
import React from "react";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white h-screen p-4">
            <h2 className="text-xl font-bold mb-4">Адмін-панель</h2>
            <nav>
                <ul>
                    <li className="mb-2">
                        <Link href="/admin/dashboard" className="block p-2 rounded hover:bg-gray-700">
                            📊 Дашборд
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/admin/products" className="block p-2 rounded hover:bg-gray-700">
                            🛒 Товари
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/admin/orders" className="block p-2 rounded hover:bg-gray-700">
                            📦 Замовлення
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
