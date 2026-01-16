"use client";

import {
  FaWater,
  FaFlask,
  FaCheckCircle,
  FaBolt,
  FaDumbbell,
  FaBone,
  FaHeartbeat,
  FaWind,
  FaChevronDown,
  FaGlobeAmericas,
} from "react-icons/fa";
import { GiWaterDrop, GiMineralHeart } from "react-icons/gi";
import { IoWaterSharp } from "react-icons/io5";
import { MdScience } from "react-icons/md";

export default function FeatureSection() {
  return (
    <section
      id="about"
      className="w-full py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50 to-cyan-50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full px-4 py-2 mb-4">
            <GiWaterDrop className="text-2xl text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              Our Purification Process
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            From Source to Perfection
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Witness how we transform natural water into perfectly balanced,
            mineral-rich OZONE Water with ideal TDS of 140
          </p>
        </div>

        {/* Process Flow */}
        <div className="max-w-6xl mx-auto">
          {/* Step 1: Source Water */}
          <div className="mb-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-amber-100 to-yellow-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <FaGlobeAmericas className="text-5xl sm:text-6xl text-amber-700" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 uppercase tracking-wide">
                    STEP 1
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Source Water
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg mb-4">
                    We extract water from deep underground sources with natural
                    TDS of 350+ containing various minerals and impurities.
                  </p>
                  <div className="inline-block bg-amber-50 border-2 border-amber-300 px-4 sm:px-6 py-2 rounded-xl">
                    <span className="text-amber-800 font-bold text-base sm:text-lg">
                      TDS: 350+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="text-blue-600 text-4xl sm:text-5xl animate-bounce">
              <FaChevronDown />
            </div>
          </div>

          {/* Step 2: RO Filtration */}
          <div className="mb-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <MdScience className="text-5xl sm:text-6xl text-cyan-700" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block bg-cyan-100 text-cyan-800 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 uppercase tracking-wide">
                    STEP 2
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    RO Filtration & Purification
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg mb-4">
                    Water passes through advanced Reverse Osmosis (RO) system
                    and multi-stage filters, removing all impurities,
                    contaminants, and dissolved solids, resulting in pure H₂O.
                  </p>
                  <div className="inline-block bg-cyan-50 border-2 border-cyan-300 px-4 sm:px-6 py-2 rounded-xl">
                    <span className="text-cyan-800 font-bold text-base sm:text-lg">
                      TDS: 0 (Pure Water)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="text-blue-600 text-4xl sm:text-5xl animate-bounce">
              <FaChevronDown />
            </div>
          </div>

          {/* Step 3: Mineral Addition */}
          <div className="mb-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-green-300 hover:border-green-400 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 uppercase tracking-wide">
                  STEP 3
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Essential Mineral Addition
                </h3>
                <p className="text-gray-600 text-base sm:text-lg mb-6">
                  We carefully add essential minerals back to create perfectly
                  balanced, healthy water your body needs.
                </p>
              </div>

              {/* Minerals Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
                {/* Sodium */}
                <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-yellow-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <FaBolt className="text-2xl text-yellow-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                      Sodium
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    • Maintains proper fluid balance
                    <br />• Supports nerve and muscle function
                  </p>
                </div>

                {/* Magnesium */}
                <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <FaDumbbell className="text-2xl text-purple-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                      Magnesium
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    • Promotes bone health and strength
                    <br />• Reduces fatigue and muscle cramps
                  </p>
                </div>

                {/* Calcium */}
                <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FaBone className="text-2xl text-blue-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                      Calcium
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    • Strengthens bones and teeth
                    <br />• Supports heart and blood function
                  </p>
                </div>

                {/* Potassium */}
                <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-red-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <FaHeartbeat className="text-2xl text-red-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                      Potassium
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    • Regulates blood pressure naturally
                    <br />• Enhances cardiovascular health
                  </p>
                </div>

                {/* Ozone */}
                <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-cyan-200 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-cyan-100 rounded-lg">
                      <FaWind className="text-2xl text-cyan-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                      Ozone (O₃)
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    • Natural disinfectant, eliminates bacteria
                    <br />• Enhances oxygen levels and freshness
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="text-blue-600 text-4xl sm:text-5xl animate-bounce">
              <FaChevronDown />
            </div>
          </div>

          {/* Final Result */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl shadow-2xl p-6 sm:p-8 text-white text-center transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute top-0 left-0 w-full h-full bg-white"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <div className="inline-block bg-white bg-opacity-20 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wide">
                FINAL PRODUCT
              </div>
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <IoWaterSharp className="text-6xl sm:text-7xl text-white" />
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Perfectly Balanced OZONE Water
              </h3>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                The result is ideal drinking water with perfect mineral balance,
                optimal taste, and maximum health benefits.
              </p>
              <div className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-xl text-lg sm:text-xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <FaCheckCircle className="inline mr-2 text-green-500" />
                TDS: 140 (Ideal Range)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience Pure Hydration?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who trust OZONE for their
              daily hydration needs
            </p>
            <button
              onClick={() =>
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
