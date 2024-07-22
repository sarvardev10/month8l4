"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FC, useState } from "react";

interface NavLink {
  path: string;
  title: string;
}

const Index: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links: NavLink[] = [
    { path: "/", title: "Marketplace" },
    { path: "/trending-collection", title: "Rankings" },
    { path: "/top-creator", title: "Connect a Wallet" },
  ];

  return (
    <header className="sticky top-0 py-4 bg-black flex flex-col md:flex-row justify-between items-center px-4 md:px-8 z-50 shadow-md transition-all duration-300 ease-in-out">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <Image src={Logo} alt="Logo" width={32} height={32} className="rounded-full" />
        <h1 className="text-xl font-bold text-white">NFT Marketplace</h1>
      </div>

      {/* Burger Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`fixed inset-0 top-0 left-0 bg-gray-900 md:bg-transparent md:relative md:static flex flex-col md:flex-row md:gap-7 gap-4 items-center transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}
      >
        {/* Back Button in Menu */}
        {isMenuOpen && (
          <button
            className="text-white md:hidden mb-4 ml-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <ArrowBackIcon />
          </button>
        )}
        
        {links.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className={`text-white font-medium hover:text-purple-400 transition-transform duration-300 ease-in-out transform hover:scale-105`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.title}
          </Link>
        ))}
        <Link
          href="/sign-up"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
          onClick={() => setIsMenuOpen(false)}
        >
          <AssignmentIndIcon />
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Index;
