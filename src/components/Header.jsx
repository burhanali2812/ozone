"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaHome,
  FaBox,
  FaInfoCircle,
  FaEnvelope,
  FaUserCircle,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    const user = localStorage.getItem("user2");
    if (user) {
      router.push("/orderDashboard");
    } else {
      router.push("/auth");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Image
                src={"/images/logo2.png"}
                alt="OZONE MINER WATER Logo"
                width={150}
                height={45}
                className="transition-transform group-hover:scale-110 duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-white tracking-wide">
                OZONE
              </span>
              <span className="text-[10px] sm:text-xs text-blue-100 -mt-1">
                MINERAL WATER
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="#home"
              className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all duration-300 font-medium flex items-center gap-2"
            >
              <FaHome className="text-sm" />
              Home
            </Link>
            <Link
              href="#products"
              className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all duration-300 font-medium flex items-center gap-2"
            >
              <FaBox className="text-sm" />
              Products
            </Link>
            <Link
              href="#about"
              className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all duration-300 font-medium flex items-center gap-2"
            >
              <FaInfoCircle className="text-sm" />
              About
            </Link>
            <Link
              href="#contact"
              className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all duration-300 font-medium flex items-center gap-2"
            >
              <FaEnvelope className="text-sm" />
              Contact
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={handleLogin}
              className="bg-white text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <FaUserCircle className="text-base" />
              Login
            </button>
            <button
              onClick={() => router.push("/order")}
              className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-300 font-semibold shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <FaShoppingCart className="text-base" />
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 pb-3 space-y-2 border-t border-white border-opacity-20 pt-3">
            <Link
              href="#home"
              className="flex items-center gap-2 text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaHome className="text-sm" />
              Home
            </Link>
            <Link
              href="#products"
              className="flex items-center gap-2 text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaBox className="text-sm" />
              Products
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-2 text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaInfoCircle className="text-sm" />
              About
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-2 text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaEnvelope className="text-sm" />
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <button
                onClick={() => {
                  handleLogin();
                  setIsMenuOpen(false);
                }}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all font-semibold flex items-center justify-center gap-2"
              >
                <FaUserCircle className="text-base" />
                Login
              </button>
              <button
                onClick={() => {
                  router.push("/order");
                  setIsMenuOpen(false);
                }}
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-300 transition-all font-semibold flex items-center justify-center gap-2"
              >
                <FaShoppingCart className="text-base" />
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
