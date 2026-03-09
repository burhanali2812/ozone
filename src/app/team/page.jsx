"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OurTeam() {
  const router = useRouter();

  const teamMembers = [
    {
      id: 1,
      name: "Syed Burhan Ali",
      role: "CEO",
      image: "/images/burhan.jpeg",
      message:
        "Leading Ozone Water with an unwavering vision to provide clean, safe drinking water to every household across the nation. My mission is to revolutionize the water industry through cutting-edge purification technology and sustainable practices. Our commitment to quality, innovation, and customer satisfaction drives everything we do. I believe that access to pure water is not just a necessity but a fundamental right, and we're dedicated to making it affordable and accessible to all. Together with our exceptional team, we're building a future where every family can trust the water they drink, creating healthier communities and a better tomorrow for generations to come.",
      email: "burhan@ozonewater.com",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Syed Iftikhar Ali",
      role: "Director",
      image: "/images/iftikhar.jpeg",
      message:
        "My mission at Ozone Water is to build strong, lasting relationships with our partners and ensure operational excellence at every level. I am dedicated to creating a culture of trust, transparency, and continuous improvement throughout our organization. By fostering collaboration between our team, suppliers, and customers, we're making a tangible difference in people's lives every single day. I believe that success comes from empowering people and maintaining the highest standards of quality control. Through strategic partnerships and innovative supply chain management, we ensure that every bottle of water meets our rigorous standards, bringing health and happiness to families nationwide.",
      email: "iftikhar@ozonewater.com",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Sharjeel Ahmad Khan",
      role: "Director",
      image: "/images/sharjeel.jpeg",
      message:
        "My focus is on driving strategic growth and pioneering innovation in water purification technology. At Ozone Water, our mission is to set new benchmarks in the industry by integrating advanced filtration systems with environmentally sustainable practices. I am passionate about research and development, constantly exploring new technologies that can enhance water quality while reducing our environmental footprint. Through data-driven decision making and market analysis, we're expanding our reach to serve more communities while maintaining our unwavering commitment to excellence. I believe that innovation is the key to solving today's water challenges, and together, we're creating solutions that will shape the future of clean water access for millions.",
      email: "sharjeel@ozonewater.com",
      linkedin: "#",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto mb-6">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </button>
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-6">
          Meet Our Team
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Behind every drop of pure water is a team of dedicated professionals
          committed to excellence and innovation.
        </p>
      </div>

      {/* Team Members - Alternating Layout */}
      <div className="max-w-7xl mx-auto space-y-20">
        {teamMembers.map((member, index) => (
          <div key={member.id} className="relative">
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-16`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-2/5 relative">
                {/* Decorative Background Square */}
                <div className="absolute -left-4 -top-4 w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl -z-10"></div>
                
                {/* Main Image Container with Left Border Accent */}
                <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Left Border Accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-600 via-cyan-600 to-blue-600 z-10"></div>
                  
                  {/* Top Border Accent */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 z-10"></div>
                  
                  {/* Corner Decoration */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-blue-600 rounded-tr-lg z-10"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-blue-600 rounded-bl-lg z-10"></div>
                  
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-3/5 p-4 flex flex-col justify-center">
                {/* Role Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider ${
                      member.role === "CEO"
                        ? "bg-purple-600 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {member.role}
                  </span>
                </div>

                {/* Name */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {member.name}
                </h2>

                {/* Message */}
                <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                  {member.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
            <p className="text-gray-600">
              Uncompromising commitment to delivering the highest quality water
              products.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-cyan-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              Constantly pushing boundaries with cutting-edge water purification
              technology.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
            <p className="text-gray-600">
              Building trust through transparency and ethical business
              practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
