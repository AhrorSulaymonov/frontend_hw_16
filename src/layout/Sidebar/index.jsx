import React from "react"
import { Link } from "react-router"

function Sidebar() {
    return (
        <div className="bg-amber-500 max-w-[180px] w-full overflow-y-auto border-r border-slate-300 h-[100vh] sticky top-0">
            <div className="h-[50px] flex items-center justify-center">
                <img className="w-[140px]" src="/logoipsum.svg" alt="Logo Ipsum" />
            </div>
            <span className="text-sm font-bold border-b ml-2">Pages</span>
            <div className="px-3 w-full flex flex-col gap-2 mt-2">
                <Link to={'/dashboard/'} className="border p-2 rounded border-amber-600">
                    Home
                </Link>
                <Link to={'/dashboard/users'} className="border p-2 rounded border-amber-600">
                    Users
                </Link>
                <Link to={'/dashboard/products'} className="border p-2 rounded border-amber-600">
                    Products
                </Link>
                <Link to={'/dashboard/counter'} className="border p-2 rounded border-amber-600">
                    Counter
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
