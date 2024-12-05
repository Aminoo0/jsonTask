'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
    let router = usePathname()

    return (
        <nav className="w-full fixed top-5 z-50">
            <div className="flex justify-center bg-[#f3f3e8] z-30 mx-auto w-3/4 border border-gray-100 py-3 shadow-2xl rounded-xl lg:w-7/12 xl:w-1/3">
                <div className="px-4">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center gap-5">
                            <Link href="/" className={`${router == '/' ? 'active' : ''} rounded-lg cursor-pointer px-2 py-1 font-medium transition-all duration-200 hover:bg-gray-800 hover:text-gray-100`}>Home</Link>
                            <Link href="/myBlog" className={`${router == '/myBlog' ? 'active' : ''} rounded-lg cursor-pointer px-2 py-1 font-medium transition-all duration-200 hover:bg-gray-800 hover:text-gray-100`}>My Blogs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
