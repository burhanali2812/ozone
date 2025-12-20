"use client";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    rating: 5,
    review:
      "OZONE mineral water has become an essential part of my daily routine. The taste is pure and refreshing, and I love that it's enriched with natural minerals. Highly recommended!",
    location: "Karachi",
  },
  {
    id: 2,
    name: "Fatima Ali",
    rating: 5,
    review:
      "As someone who writes about health and wellness, I'm very particular about water quality. OZONE delivers consistently pure and mineral-rich water. My family loves it!",
    location: "Lahore",
  },
  {
    id: 3,
    name: "Hassan Raza",
    rating: 5,
    review:
      "We've been using OZONE for our restaurant for over a year now. Our customers appreciate the quality, and the delivery service is always on time. Great product!",
    location: "Islamabad",
  },
  {
    id: 4,
    name: "Ayesha Malik",
    rating: 5,
    review:
      "Perfect for my family! The different sizes make it easy to pack for school and work. My kids love the taste, and I love knowing they're drinking pure, healthy water.",
    location: "Rawalpindi",
  },
  {
    id: 5,
    name: "Usman Tariq",
    rating: 5,
    review:
      "I recommend OZONE to all my clients. Proper hydration is crucial for fitness, and this water provides the minerals needed for optimal performance. Best choice!",
    location: "Faisalabad",
  },
  {
    id: 6,
    name: "Sara Ahmed",
    rating: 5,
    review:
      "Teaching requires staying hydrated throughout the day. OZONE water keeps me refreshed and energized. The 1.5L bottle is perfect for my classroom.",
    location: "Multan",
  },
  {
    id: 7,
    name: "Ali Hussain",
    rating: 5,
    review:
      "Premium quality water at reasonable prices. We supply OZONE to our entire office. The bulk ordering process is smooth and delivery is always prompt.",
    location: "Karachi",
  },
  {
    id: 8,
    name: "Zainab Fatima",
    rating: 5,
    review:
      "Pure, clean, and refreshing! OZONE water complements my healthy lifestyle perfectly. I can taste the difference in quality compared to other brands.",
    location: "Lahore",
  },
];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 5);

  return (
    <section className="w-full py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
            <span className="text-2xl">💬</span>
            <span className="text-sm font-semibold text-blue-700">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust OZONE for their
            daily hydration needs
          </p>
        </div>

        {/* Testimonials Horizontal Scroll */}
        <div className="relative mb-8">
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex gap-6" style={{ width: "max-content" }}>
              {displayedTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ minWidth: "350px", maxWidth: "350px" }}
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    "{testimonial.review}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-blue-600 flex items-center gap-1 mt-1">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicators for Mobile */}
          {!showAll && (
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
              {[...Array(Math.ceil(testimonials.slice(0, 5).length / 2))].map(
                (_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-blue-300"
                  ></div>
                )
              )}
            </div>
          )}
        </div>

        {/* More Button */}
        {!showAll && testimonials.length > 5 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span>View More Testimonials</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="bg-white text-blue-600 px-2 py-1 rounded-full text-xs font-bold">
                +{testimonials.length - 5}
              </span>
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(false)}
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 mx-auto"
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
                  d="M5 15l7-7 7 7"
                />
              </svg>
              Show Less
            </button>
          </div>
        )}

        {/* Trust Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
            <p className="text-sm text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <p className="text-sm text-gray-600">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-sm text-gray-600">Support Available</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
