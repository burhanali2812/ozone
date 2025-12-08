import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-cyan-50"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              OZONE
              <span className="block text-blue-600">MINERAL WATER</span>
            </h1>
            <p className="text-2xl text-gray-600 italic">Sip the Good Life</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Experience pure hydration with our premium mineral water. Sourced
              from pristine springs and enriched with essential minerals for
              your health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg">
                Order Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative h-[500px] bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">💧</div>
                <p className="text-xl font-semibold text-gray-700">
                  Pure & Fresh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
