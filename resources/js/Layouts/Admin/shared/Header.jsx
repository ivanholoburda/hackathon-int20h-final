import { Link } from "@inertiajs/react";
import React from "react";

const Header = () => {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between">
            <h1 className="text-xl font-semibold">Панель адміністратора</h1>
            <Link href="/logout" className="text-red-500">Вийти</Link>
        </header>
    );
};

export default Header;
