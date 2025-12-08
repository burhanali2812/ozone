"use client";

export default function FeatureSection() {
  return (
    <section id="about" className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Feature 1: Left Image, Right Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl flex items-center justify-center animate-fade-in-left">
            <div className="text-center">
              <div className="text-8xl mb-4">🏔️</div>
              <p className="text-xl font-semibold text-gray-700">
                Mountain Fresh
              </p>
            </div>
          </div>
          <div className="space-y-4 animate-fade-in-right">
            <h3 className="text-3xl font-bold text-gray-900">
              Sourced from Pure Springs
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our water comes from pristine mountain springs, naturally filtered
              through layers of rock. This ensures the highest purity and
              quality, delivering essential minerals straight from nature to
              your bottle.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>100% Natural Source
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                No Artificial Additives
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Environmentally Protected
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 2: Left Text, Right Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-4 order-2 md:order-1 animate-fade-in-left">
            <h3 className="text-3xl font-bold text-gray-900">
              Rich in Essential Minerals
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              OZONE Mineral Water is enriched with essential minerals like
              calcium, magnesium, and potassium. These minerals support your
              body's daily needs, promoting better health and vitality with
              every sip.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Calcium for Strong Bones
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>Magnesium for
                Energy
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>Balanced pH Level
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] bg-gradient-to-br from-cyan-200 to-blue-200 rounded-3xl flex items-center justify-center order-1 md:order-2 animate-fade-in-right">
            <div className="text-center">
              <div className="text-8xl mb-4">⚗️</div>
              <p className="text-xl font-semibold text-gray-700">
                Pure Minerals
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3: Left Image, Right Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl flex items-center justify-center animate-fade-in-left">
            <div className="text-center">
              <div className="text-8xl mb-4">♻️</div>
              <p className="text-xl font-semibold text-gray-700">
                Eco-Friendly
              </p>
            </div>
          </div>
          <div className="space-y-4 animate-fade-in-right">
            <h3 className="text-3xl font-bold text-gray-900">
              Sustainable & Eco-Friendly
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We care about our planet. Our bottles are made from 100%
              recyclable materials, and we follow sustainable practices
              throughout our production process. Choose OZONE for a healthier
              you and a healthier planet.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                100% Recyclable Bottles
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Carbon Neutral Production
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Sustainable Sourcing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
