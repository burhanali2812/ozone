"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import{useRouter} from 'next/navigation';
import axios from "axios";

export default function UserSignup() {
  const [formData, setFormData] = useState({
    name: "",
    role: "customer",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router=useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user2");
    if (user) {
      router.push("/");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }
   try {
  const res = await axios.post("/api/user", {
    name: formData.name,
    role: formData.role,
    phone: formData.phone,
    password: formData.password,
  });

  if (res.data.success) {
    alert("Signup successful! You can now log in.");
    setFormData({
      name: "",
      role: "customer",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  } else {
    alert(res.data.message || "Signup failed");
  }
} catch (error) {
  console.error("Error during signup:", error);
  alert("Signup failed. Please try again.");
}

  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">O</span>
            </div>
            <span className="text-3xl font-bold text-gray-900">OZONE</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">Join OZONE Mineral Water</p>
        </div>

        {/* Signup Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            {/* Role Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Role *
              </label>
              <select
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors"
              >
                <option value="customer">Admin</option>
                <option value="retailer">Worker</option>
              </select>
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{11}"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors"
                placeholder="11 digit mobile number"
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter 11 digit mobile number
              </p>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password *
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Re-enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>

        {/* Terms & Privacy */}
        <p className="text-center text-sm text-gray-500 mt-6">
          By signing up, you agree to our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </section>
  );
}
