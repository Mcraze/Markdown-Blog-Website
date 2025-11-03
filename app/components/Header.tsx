"use client";

import { useState } from "react";
import Link from "next/link"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle";

const menuLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Portfolio", href: "https://mitesh-adelkar.netlify.app/" },
];

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div className="max-w-7xl mx-auto p-4 flex justify-between items-center gap-4">
                <div className="text-xl">
                    <Link href="/">McrazeBlog</Link>
                </div>
                <ul className="hidden sm:flex items-center gap-8">
                    {
                        menuLinks.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))
                    }
                    <ThemeToggle />
                </ul>
                <button onClick={() => setIsOpen(!isOpen)} className="block sm:hidden cursor-pointer">
                    {isOpen ? <X /> : <Menu />}
                </button>
                {
                    isOpen && (
                        <ul className="absolute top-16 left-0 w-full bg-white border-t sm:hidden flex flex-col items-center gap-4 p-4">
                            {
                                menuLinks.map((link) => (
                                    <li key={link.name} onClick={() => setIsOpen(false)}>
                                        <Link href={link.href}>{link.name}</Link>
                                    </li>
                                ))
                            }
                            <ThemeToggle />
                        </ul>
                    )
                }
            </div>
        </header>
    )
}

export default Header