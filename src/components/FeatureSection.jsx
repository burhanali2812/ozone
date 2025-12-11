"use client";

export default function FeatureSection() {
  return (
    <section id="about" className="w-full py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
            <span className="text-2xl">✨</span>
            <span className="text-sm font-semibold text-blue-700">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Premium Quality Water
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Experience the difference with OZONE Mineral Water - pure, natural,
            and enriched with essential minerals for your health and wellness
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="group text-center">
            <div className="relative h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl flex items-center justify-center mb-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center transform group-hover:scale-110 transition-transform duration-500">
                <div className="text-8xl mb-4">🏔️</div>
                <p className="text-xl font-semibold text-gray-700">
                  Mountain Fresh
                </p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pure Springs Source
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sourced from pristine mountain springs, naturally filtered through
              layers of rock for highest purity and quality.
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center text-gray-700">
                <span className="text-blue-600 mr-2 text-lg">✓</span>
                <span className="text-sm">100% Natural Source</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-blue-600 mr-2 text-lg">✓</span>
                <span className="text-sm">No Artificial Additives</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-blue-600 mr-2 text-lg">✓</span>
                <span className="text-sm">Environmentally Protected</span>
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="group text-center">
            <div className="relative h-64 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl flex items-center justify-center mb-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-blue-200 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center transform group-hover:scale-110 transition-transform duration-500">
                <div className="text-8xl mb-4">⚗️</div>
                <p className="text-xl font-semibold text-gray-700">
                  Pure Minerals
                </p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Essential Minerals
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Enriched with calcium, magnesium, and potassium to support your
              body's daily needs and promote better health.
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center text-gray-700">
                <span className="text-blue-600 mr-2 text-lg">✓</span>
                <span className="text-sm">Calcium for Strong Bones</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-blue-600 mr-2 text-lg">✓</span>
                <span className="text-sm">Magnesium for Energy</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-blue-600 mr-2 text-lg">✓</span>
                <span className="text-sm">Balanced pH Level</span>
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="group text-center sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
            <div className="relative h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl flex items-center justify-center mb-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center transform group-hover:scale-110 transition-transform duration-500">
                <div className="text-8xl mb-4">♻️</div>
                <p className="text-xl font-semibold text-gray-700">
                  Eco-Friendly
                </p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sustainable Practices
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Made from 100% recyclable materials with sustainable practices for
              a healthier you and a healthier planet.
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center text-gray-700">
                <span className="text-blue-600 mr-2 text-lg">✓</span>
                <span className="text-sm">100% Recyclable Bottles</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-blue-600 mr-2 text-lg">✓</span>
                <span className="text-sm">Carbon Neutral Production</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-blue-600 mr-2 text-lg">✓</span>
                <span className="text-sm">Sustainable Sourcing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 max-w-2xl">
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
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
