import React, { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleCategoryDropdown = () =>
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);

  return (
    <nav className="bg-[#ffe2c7] fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Menu Links for larger screens */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-500 px-3 py-2 transition duration-150 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-500 px-3 py-2 transition duration-150 ease-in-out"
            >
              Trending Products
            </a>
            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={toggleCategoryDropdown}
                className="text-gray-700 hover:text-gray-500 px-3 py-2 transition duration-150 ease-in-out"
              >
                Category
              </button>
              {isCategoryDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Skin Care
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Makeup
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Hair Products
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Center - Title */}
          <div className="flex-shrink-0">
            <span className="text-gray-700 text-2xl font-bold">
              Hilda-Beauty
            </span>
          </div>

          {/* Right - Order Now Button and Cart Icon */}
          <div className="flex items-center space-x-4">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md transition duration-150 ease-in-out hover:bg-gray-800">
              Order
            </button>
            <FiShoppingCart className="text-gray-700 h-6 w-6 cursor-pointer hover:text-gray-500 transition duration-150 ease-in-out" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Trending Products
            </a>
            {/* Mobile Category Dropdown */}
            <div className="relative">
              <button
                onClick={toggleCategoryDropdown}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Category
              </button>
              {isCategoryDropdownOpen && (
                <div className="pl-4">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Skin Care
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Makeup
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Hair Products
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
