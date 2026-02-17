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
      className="w-full py-20 sm:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1e40af 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-100 rounded-full px-5 py-2.5 mb-6 shadow-sm">
            <GiWaterDrop className="text-xl text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
              Our Purification Process
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            From Source to Perfection
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Witness how we transform natural water into perfectly balanced,
            mineral-rich Ozone Mineral Water® Pvt Ltd with ideal TDS of 140
          </p>
        </div>

        {/* Process Flow */}
        <div className="max-w-6xl mx-auto">
          {/* Step 1: Source Water */}
          <div className="mb-10 group">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 sm:p-10 border border-gray-100 hover:border-amber-200 transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-lg transition-shadow duration-500 border border-amber-200/50">
                    <FaGlobeAmericas className="text-5xl sm:text-6xl text-amber-600" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold mb-4 uppercase tracking-widest shadow-sm">
                    STEP 1
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                    Source Water
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg mb-5 leading-relaxed">
                    We extract water from deep underground sources with natural
                    TDS of 350+ containing various minerals and impurities.
                  </p>
                  <div className="inline-block bg-amber-50 border border-amber-200 px-5 sm:px-6 py-2.5 rounded-lg shadow-sm">
                    <span className="text-amber-700 font-bold text-base sm:text-lg">
                      TDS: 350+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-10">
            <div className="w-12 h-12 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md">
              <FaChevronDown className="text-white text-xl" />
            </div>
          </div>

          {/* Step 2: RO Filtration */}
          <div className="mb-10 group">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 sm:p-10 border border-gray-100 hover:border-cyan-200 transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-lg transition-shadow duration-500 border border-cyan-200/50">
                    <MdScience className="text-5xl sm:text-6xl text-cyan-600" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block bg-cyan-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold mb-4 uppercase tracking-widest shadow-sm">
                    STEP 2
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                    RO Filtration & Purification
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg mb-5 leading-relaxed">
                    Water passes through advanced Reverse Osmosis (RO) system
                    and multi-stage filters, removing all impurities,
                    contaminants, and dissolved solids, resulting in pure H₂O.
                  </p>
                  <div className="inline-block bg-cyan-50 border border-cyan-200 px-5 sm:px-6 py-2.5 rounded-lg shadow-sm">
                    <span className="text-cyan-700 font-bold text-base sm:text-lg">
                      TDS: 0 (Pure Water)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-10">
            <div className="w-12 h-12 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md">
              <FaChevronDown className="text-white text-xl" />
            </div>
          </div>

          {/* Step 3: Mineral Addition */}
          <div className="mb-10 group">
            <div className="bg-gradient-to-br from-emerald-50/50 via-white to-green-50/50 rounded-2xl shadow-md hover:shadow-xl p-8 sm:p-10 border border-emerald-100 hover:border-emerald-200 transition-all duration-500">
              <div className="text-center mb-8">
                <div className="inline-block bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold mb-4 uppercase tracking-widest shadow-sm">
                  STEP 3
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                  Essential Mineral Addition
                </h3>
                <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed max-w-3xl mx-auto">
                  We carefully add essential minerals back to create perfectly
                  balanced, healthy water your body needs.
                </p>
              </div>

              {/* Minerals Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {/* Sodium */}
                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-yellow-200 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-yellow-50 rounded-lg border border-yellow-100 group-hover:bg-yellow-100 transition-colors">
                      <FaBolt className="text-xl text-yellow-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Sodium</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    • Maintains proper fluid balance
                    <br />• Supports nerve and muscle function
                  </p>
                </div>

                {/* Magnesium */}
                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-purple-200 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-purple-50 rounded-lg border border-purple-100 group-hover:bg-purple-100 transition-colors">
                      <FaDumbbell className="text-xl text-purple-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">
                      Magnesium
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    • Promotes bone health and strength
                    <br />• Reduces fatigue and muscle cramps
                  </p>
                </div>

                {/* Calcium */}
                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-blue-50 rounded-lg border border-blue-100 group-hover:bg-blue-100 transition-colors">
                      <FaBone className="text-xl text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Calcium</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    • Strengthens bones and teeth
                    <br />• Supports heart and blood function
                  </p>
                </div>

                {/* Potassium */}
                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-rose-200 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-rose-50 rounded-lg border border-rose-100 group-hover:bg-rose-100 transition-colors">
                      <FaHeartbeat className="text-xl text-rose-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">
                      Potassium
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    • Regulates blood pressure naturally
                    <br />• Enhances cardiovascular health
                  </p>
                </div>

                {/* Ozone */}
                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-cyan-200 sm:col-span-2 lg:col-span-1 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-cyan-50 rounded-lg border border-cyan-100 group-hover:bg-cyan-100 transition-colors">
                      <FaWind className="text-xl text-cyan-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">
                      Ozone (O₃)
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    • Natural disinfectant, eliminates bacteria
                    <br />• Enhances oxygen levels and freshness
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-10">
            <div className="w-12 h-12 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md">
              <FaChevronDown className="text-white text-xl" />
            </div>
          </div>

          {/* Final Result */}
          <div className="bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 sm:p-12 text-white text-center relative overflow-hidden border border-blue-500">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute top-0 left-0 w-full h-full bg-white"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1.5 rounded-lg text-xs font-bold mb-6 uppercase tracking-widest shadow-sm">
                FINAL PRODUCT
              </div>
              <div className="flex justify-center mb-6">
                <div className="w-28 h-28 sm:w-36 sm:h-36 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                  <IoWaterSharp className="text-6xl sm:text-7xl text-white" />
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
                Perfectly Balanced Water
              </h3>
              <p className="text-base sm:text-lg text-blue-50 mb-8 max-w-2xl mx-auto leading-relaxed">
                The result is ideal drinking water with perfect mineral balance,
                optimal taste, and maximum health benefits.
              </p>
              <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 sm:px-8 py-3.5 rounded-xl text-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <FaCheckCircle className="text-emerald-500 text-xl" />
                <span>TDS: 140 (Ideal Range)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-2xl p-8 sm:p-10 max-w-2xl mx-auto shadow-md border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              Ready to Experience Pure Hydration?
            </h3>
            <p className="text-gray-600 mb-7 leading-relaxed">
              Join thousands of satisfied customers who trust Ozone Mineral Water® Pvt Ltd for their
              daily hydration needs
            </p>
            <button
              onClick={() =>
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
