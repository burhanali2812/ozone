"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    const existUSer = localStorage.getItem("user2");
    if (existUSer) {
      router.push("/orderDashboard");
      return;
    }
    else{
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
              className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="#products"
              className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all duration-300 font-medium"
            >
              Products
            </Link>
            <Link
              href="#about"
              className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all duration-300 font-medium"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all duration-300 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={handleLogin}
              className="bg-white text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Login
            </button>
            <button
              onClick={() => router.push("/order")}
              className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 pb-3 space-y-2 border-t border-white border-opacity-20 pt-3">
            <Link
              href="#home"
              className="block text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#products"
              className="block text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#about"
              className="block text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <button
                onClick={() => {
                  router.push("/auth");
                  setIsMenuOpen(false);
                }}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all font-semibold flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Login
              </button>
              <button
                onClick={() => {
                  router.push("/order");
                  setIsMenuOpen(false);
                }}
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-300 transition-all font-semibold"
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
