"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Helper function to get image based on size
const getImageForSize = (size) => {
  switch (size) {
    case "500ml":
      return "/images/litter0.51.png";
    case "1500ml":
      return "/images/litter1.51.png";
    case "6L":
      return "/images/litter61.png";
    default:
      return "/images/litter0.51.png";
  }
};

// Helper function to get title based on size
const getTitleForSize = (size) => {
  switch (size) {
    case "500ml":
      return "Pocket Size";
    case "1500ml":
      return "Family Size";
    case "6L":
      return "Mega Pack";
    default:
      return "Water Bottle";
  }
};

// Helper function to get description based on size
const getDescriptionForSize = (size) => {
  switch (size) {
    case "500ml":
      return "Perfect for on-the-go hydration";
    case "1500ml":
      return "Ideal for home & office use";
    case "6L":
      return "Perfect for gatherings & events";
    default:
      return "Premium mineral water";
  }
};

// Helper function to get features based on product schema
const getFeaturesForProduct = (product) => {
  const features = [];

  if (product.waterQuality) {
    features.push(`Water Quality: ${product.waterQuality}`);
  }

  if (product.bottleQuality) {
    features.push(`Bottle Quality: ${product.bottleQuality}`);
  }

  return features;
};

export default function ProductSection() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/product");
        const data = await response.json();
        if (data.success && data.products) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const gotoOrderPage = () => {
    router.push("/order");
  };

  return (
    <section
      id="products"
      className="w-full py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
            <span className="text-2xl">💧</span>
            <span className="text-sm font-semibold text-blue-700">
              Our Products
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Size
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Premium mineral water available in three convenient sizes to fit
            your lifestyle
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {loading ? (
            <div className="col-span-full flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : products.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className="text-xl text-gray-600">No products available</p>
            </div>
          ) : (
            products.map((product, index) => {
              const productImage = getImageForSize(product.size);
              const productTitle = getTitleForSize(product.size);
              const productDescription = getDescriptionForSize(product.size);
              const productFeatures = getFeaturesForProduct(product);

              // Determine badge based on size or quality
              let badge = "Premium";
              let badgeColor = "bg-blue-500";
              if (product.size === "500ml") {
                badge = "Popular";
                badgeColor = "bg-blue-500";
              } else if (product.size === "1500ml") {
                badge = "Best Value";
                badgeColor = "bg-green-500";
              } else if (product.size === "6L") {
                badge = "Economy";
                badgeColor = "bg-purple-500";
              }

              return (
                <div
                  key={product._id}
                  className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Badge */}
                  <div
                    className={`absolute top-4 right-4 ${badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg`}
                  >
                    {badge}
                  </div>

                  {/* Image Container */}
                  <div className="relative h-40 sm:h-48 lg:h-56 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"></div>

                    <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-6">
                      <Image
                        src={productImage}
                        alt={`${product.size} Ozone Mineral Water`}
                        width={150}
                        height={180}
                        className="object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Decorative Circle */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 border-2 border-blue-200 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-700"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 lg:p-6">
                    {/* Size & Title */}
                    <div className="text-center mb-2 sm:mb-3">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                        {product.size}
                      </h3>
                      <p className="text-blue-600 font-semibold text-sm sm:text-base">
                        {productTitle}
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm mt-1 hidden sm:block">
                        {productDescription}
                      </p>
                    </div>

                    {/* Price Section */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg sm:rounded-xl p-2 sm:p-3 mb-2 sm:mb-3 text-center">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">
                          Rs. {product.price}
                        </span>
                        <span className="text-gray-600 text-xs">/-</span>
                      </div>
                      <p className="text-gray-600 text-xs mt-1 truncate">
                        {product.packingType}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
                      {productFeatures.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-xs sm:text-sm text-gray-700"
                        >
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-100 rounded-full flex items-center justify-center mr-1.5 sm:mr-2 flex-shrink-0">
                            <svg
                              className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              );
            })
          )}

          {/* Single Order Button */}
          <div className="text-center">
            <button
              onClick={gotoOrderPage}
              className="group inline-flex  items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Order Now</span>
              <svg
                className="w-6 h-6 group-hover:translate-x-1 transition-transform"
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
            <p className="text-gray-600 text-sm mt-4">
              Choose your preferred size during checkout
            </p>
          </div>

        
        </div>
		  {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                100%
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Pure & Natural</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                ISO
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Certified Quality
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                24/7
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Fresh Supply</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                500+
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Happy Customers
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}
