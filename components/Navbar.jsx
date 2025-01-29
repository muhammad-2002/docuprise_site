"use client";
import Link from "next/link";
import { useState } from "react";
// import logo from "/logo.png";
import Image from "next/image";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed z-50 top-0 left-1/2 transform -translate-x-1/2 bg-background-primary w-full px-4 py-2 mx-auto ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">
          <Link href="/">
            <Image src="/logo.png" width={200} height={200} alt="logo"></Image>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6  items-center">
          <Link
            href="/"
            className="text-white hover:font-medium hover:text-[#cc2684] transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-[#cc2684] hover:font-medium transition"
          >
            About
          </Link>
          <Link
            href="/capabilities"
            className="text-white hover:text-[#cc2684] hover:font-medium transition"
          >
            Capabilities
          </Link>
          {/* Dropdown for Markets Served */}
          <div className="relative">
            <button
              className="text-white hover:font-medium  hover:text-[#cc2684] transition flex items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Markets Served
              <svg
                className="ml-1 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute top-8 left-0 bg-white hover:text-[#cc2684] shadow-lg rounded-md z-10">
                <Link
                  href="/markets-served/local"
                  className="block px-4 py-2 text-gray-700 rounded-t-md hover:bg-[#575759] hover:text-white transition"
                >
                  Local Markets
                </Link>
                <Link
                  href="/markets-served/international"
                  className="block px-4 py-2  text-gray-700 hover:bg-[#575759] hover:text-white transition"
                >
                  International Markets
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Contact Us Button */}
        <Link
          href="#_"
          className="relative sm:inline-flex items-center justify-center px-2 md:px-6 md:py-3 py-2 overflow-hidden hidden font-bold text-white rounded-md shadow-2xl group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

          <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

          <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

          <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

          <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
          <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>

          <span className="relative text-[14px] sm:text-base md:text-md">
            Contact Us
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden ">
          <button
            className=" focus:outline-none text-3xl text-white"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-background-primary shadow-md"
      >
        <div className="flex flex-col space-y-4 px-4 py-3">
          <Link
            href="/"
            className="text-white hover:font-semibold hover:text-white transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:font-semibold hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="/capabilities"
            className="text-white hover:font-semibold hover:text-white transition"
          >
            Capabilities
          </Link>
          <div className="relative">
            <button
              className="text-white  hover:text-white transition"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Markets Served
            </button>
            {dropdownOpen && (
              <div className="bg-white shadow-lg rounded-md z-10 mt-2">
                <Link
                  href="/markets-served/local"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#575759] hover:text-white transition"
                >
                  Local Markets
                </Link>
                <Link
                  href="/markets-served/international"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#575759] hover:text-white transition"
                >
                  International Markets
                </Link>
              </div>
            )}
          </div>
          {/* Contact Us Button */}
          <Link
            href="#_"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 sm:h-1/3"></span>

            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>

            <span className="relative text-[14px] sm:text-base md:text-md">
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
