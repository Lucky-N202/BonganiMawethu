"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-green-500 rounded-t-2xl  py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="text-white text-xl font-bold">
            BonganiMawethu Pty
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4 text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About </Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact </Link></li>
          </ul>
        </nav>
        <div className="block md:hidden">
          
            <MenuIcon onClick={toggleMenu} className="text-white focus:outline-none" />
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900 py-4">
          <ul className="text-white text-center">
            <li><Link href="/" className="block py-2">Home</Link></li>
            <li><Link href="/about" className="block py-2">About </Link></li>
            <li><Link href="/services" className="block py-2">Services</Link></li>
            <li><Link href="/projects"className="block py-2">Project</Link></li>
            <li><Link href="/contact"className="block py-2">Contact </Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar