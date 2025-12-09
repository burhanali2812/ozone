"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
const products = [
  {
    id: 1,
    size: "500ml",
    description: "Perfect for on-the-go hydration.",
    image: "/images/500ml.png", // Replace with actual image path
  },
  {
    id: 2,
    size: "1500ml",
    description: "Stay refreshed with our larger size.",
    image: "/images/1500ml.png", // Replace with actual image path
  },
];

export default function ProductSection() {
  const router = useRouter();
  const gotoOrderPage = () => {
  router.push("./order")
  }
  return (
    <section id="products" className="w-full py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600">
            Available in two perfect sizes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* 500ml Product */}
          <div className="group">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 transform group-hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-center mb-6">
                <div className="text-7xl mb-4">🍶</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">500ml</h3>
                <p className="text-blue-600 text-xl font-semibold">
                  Perfect for On-the-Go
                </p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Compact & Portable
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  BPA-Free Bottle
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Rich in Minerals
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  pH Balanced
                </li>
              </ul>
              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors" onClick={gotoOrderPage}>
                Order 500ml
              </button>
            </div>
          </div>

          {/* 1500ml Product */}
          <div className="group">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 transform group-hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-center mb-6">
                <div className="text-7xl mb-4">🍾</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  1500ml
                </h3>
                <p className="text-blue-600 text-xl font-semibold">
                  Perfect for Home & Office
                </p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Family Size
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Easy to Pour
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Premium Quality
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Value Pack
                </li>
              </ul>
              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors" onClick={gotoOrderPage}>
                Order 1500ml
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
