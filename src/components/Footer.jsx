"use client";
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";
import { IoWaterSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-cyan-900/20"></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logo2.png"
                alt="OZONE Mineral Water"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm italic mb-4">
              Sip the Good Life
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium mineral water with perfect TDS balance for your health and
              wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <FaChevronRight className="text-xs mr-2 group-hover:translate-x-1 transition-transform" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <FaChevronRight className="text-xs mr-2 group-hover:translate-x-1 transition-transform" />
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <FaChevronRight className="text-xs mr-2 group-hover:translate-x-1 transition-transform" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <FaChevronRight className="text-xs mr-2 group-hover:translate-x-1 transition-transform" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Our Products</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-blue-400 transition-colors flex items-center cursor-pointer group">
                <IoWaterSharp className="text-blue-400 mr-2 text-sm" />
                500ml Bottle
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors flex items-center cursor-pointer group">
                <IoWaterSharp className="text-blue-400 mr-2 text-sm" />
                1500ml Bottle
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors flex items-center cursor-pointer group">
                <IoWaterSharp className="text-blue-400 mr-2 text-sm" />
                6L Bottle
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors flex items-center cursor-pointer group">
                <IoWaterSharp className="text-blue-400 mr-2 text-sm" />
                Bulk Orders
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors flex items-center cursor-pointer group">
                <IoWaterSharp className="text-blue-400 mr-2 text-sm" />
                Corporate Packages
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Get in Touch</h4>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+923266783442"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors">
                  <FaPhone className="text-sm" />
                </div>
                <span className="text-sm">+92 326 6783442</span>
              </a>
              <a
                href="mailto:ozonewater12@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors">
                  <FaEnvelope className="text-sm" />
                </div>
                <span className="text-sm">ozonewater12@gmail.com</span>
              </a>
              <div className="text-gray-400 flex items-start group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <span className="text-sm">Pakistan</span>
              </div>
            </div>

            <h5 className="font-semibold text-sm mb-3 text-white">Follow Us</h5>
            <div className="flex space-x-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61584809927661"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transform hover:scale-110 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-base group-hover:scale-110 transition-transform" />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ozone_mineral_water?igsh=MzB5eTBiNmdjbnZq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transform hover:scale-110 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <FaInstagram className="text-base group-hover:scale-110 transition-transform" />
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/923266783442"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transform hover:scale-110 transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-base group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} OZONE Mineral Water. All rights
              reserved.
            </p>
          
          </div>
        </div>
      </div>
    </footer>
  );
}
