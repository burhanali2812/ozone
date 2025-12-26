"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const products = [
	{
		id: 1,
		size: "500ml",
		title: "Pocket Size",
		description: "Perfect for on-the-go hydration",
		image: "/images/litter0.51.png",
		price: "260",
		unit: "12 bottles",
		features: [
			"Compact & Portable",
			"BPA-Free Bottle",
			"Rich in Minerals",
			"pH Balanced",
		],
		badge: "Popular",
		badgeColor: "bg-blue-500",
	},
	{
		id: 2,
		size: "1500ml",
		title: "Family Size",
		description: "Ideal for home & office use",
		image: "/images/litter1.51.png",
		price: "280",
		unit: "6 bottles",
		features: ["Family Size", "Easy to Pour", "Premium Quality", "Value Pack"],
		badge: "Best Value",
		badgeColor: "bg-green-500",
	},
	{
		id: 3,
		size: "6L",
		title: "Mega Pack",
		description: "Perfect for gatherings & events",
		image: "/images/litter61.png",
		price: "110",
		unit: "Single",
		features: [
			"Large Capacity",
			"Party Size",
			"Cost Effective",
			"Long Lasting",
		],
		badge: "Economy",
		badgeColor: "bg-purple-500",
	},
];

export default function ProductSection() {
	const router = useRouter();

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
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
					{products.map((product, index) => (
						<div
							key={product.id}
							className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
							style={{
								animationDelay: `${index * 100}ms`,
							}}
						>
							{/* Badge */}
							<div
								className={`absolute top-4 right-4 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg`}
							>
								{product.badge}
							</div>

							{/* Image Container */}
							<div className="relative h-64 sm:h-72 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center overflow-hidden">
								{/* Glow Effect */}
								<div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"></div>

								<div className="relative z-10 w-full h-full flex items-center justify-center p-8">
									<Image
										src={product.image}
										alt={`${product.size} Ozone Mineral Water`}
										width={200}
										height={250}
										className="object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500"
									/>
								</div>

								{/* Decorative Circle */}
								<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
									<div className="w-48 h-48 border-2 border-blue-200 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-700"></div>
								</div>
							</div>

							{/* Content */}
							<div className="p-6 sm:p-8">
								{/* Size & Title */}
								<div className="text-center mb-4">
									<h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
										{product.size}
									</h3>
									<p className="text-blue-600 font-semibold text-lg">
										{product.title}
									</p>
									<p className="text-gray-600 text-sm mt-2">
										{product.description}
									</p>
								</div>

								{/* Price Section */}
								<div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 mb-4 text-center">
									<div className="flex items-baseline justify-center gap-1">
										<span className="text-2xl sm:text-3xl font-bold text-blue-600">
											Rs. {product.price}
										</span>
										<span className="text-gray-600 text-sm">/-</span>
									</div>
									<p className="text-gray-600 text-xs mt-1">
										{product.unit}
									</p>
								</div>

								{/* Features */}
								<div className="space-y-2 mb-6">
									{product.features.map((feature, idx) => (
										<div
											key={idx}
											className="flex items-center text-sm text-gray-700"
										>
											<div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
												<svg
													className="w-3 h-3 text-blue-600"
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

								{/* Hover Info */}
								<div className="pt-4 border-t border-gray-100">
									<div className="flex items-center justify-between text-sm text-gray-600">
										<span className="flex items-center gap-1">
											<svg
												className="w-4 h-4 text-green-600"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
											Pure & Safe
										</span>
										<span className="flex items-center gap-1">
											<svg
												className="w-4 h-4 text-blue-600"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											Premium Quality
										</span>
									</div>
								</div>
							</div>

							{/* Hover Overlay Effect */}
							<div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
						</div>
					))}

					{/* Single Order Button */}
					<div className="text-center">
						<button
							onClick={gotoOrderPage}
							className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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

					{/* Trust Badges */}
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-16 max-w-4xl mx-auto">
						<div className="text-center">
							<div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
								100%
							</div>
							<p className="text-xs sm:text-sm text-gray-600">
								Pure & Natural
							</p>
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
							<p className="text-xs sm:text-sm text-gray-600">
								Fresh Supply
							</p>
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
			</div>
		</section>
	);
}
