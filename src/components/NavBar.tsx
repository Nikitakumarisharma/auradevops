"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/weblogo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto pl-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Company Logo"
                className="h-16 w-auto pr-0 "
              />
              <span className="text-orange-600 font-bold">Auradevops</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="/Services" className="text-gray-700 hover:text-blue-500">
              Services
            </a>
            <a href="/Contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mb-2">
            <div className="flex flex-col space-y-2 ">
              <a href="/" className="text-gray-700 hover:text-blue-500">
                Home
              </a>
              <a
                href="/Services"
                className="text-gray-700 hover:text-blue-500 "
              >
                Services
              </a>
              <a href="/Contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
