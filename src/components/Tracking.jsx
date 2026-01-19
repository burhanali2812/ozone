"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdTrackChanges } from "react-icons/md";

export default function Tracking() {
  const router = useRouter();

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative group order-2 lg:order-1">
            <div className="w-full rounded-2xl overflow-hidden  bg-white">
              {/* Image */}
              <img
                src="/images/tracking.png"
                alt="Track Your Order"
                className="w-full h-auto"
              />

            

          
            </div>

            {/* Floating Animation Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-400 rounded-full blur-2xl opacity-50 animate-pulse delay-75"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              <MdTrackChanges className="text-lg" />
              Order Tracking
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Track Your Order
              <span className="block text-blue-600 mt-2">In Real-Time</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Stay updated with your order's journey from our facility to your
              doorstep. Enter your tracking ID and contact number to get instant
              updates on your delivery status.
            </p>

            {/* Tracking Button */}
            <div className="pt-4">
              <button
                onClick={() => router.push("/tracking")}
                className="group relative bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-blue-700 flex items-center gap-3 overflow-hidden"
              >
                {/* Button Background Animation */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>

                {/* Button Content */}
                <MdTrackChanges className="text-2xl relative z-10 group-hover:rotate-180 transition-transform duration-500" />
                <span className="relative z-10">Track Your Order</span>

                {/* Arrow Animation */}
                <svg
                  className="w-5 h-5 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>

              {/* Helper Text */}
              <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available 24/7 - Track anytime, anywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
