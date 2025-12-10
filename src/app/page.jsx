"use client";
import { usePathname } from "next/navigation";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import FeatureSection from "../components/FeatureSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  const pathname = usePathname();

  // Routes that should not show header/footer
  const noLayoutRoutes = ["orderDashboard", "/auth", "/userSignup"];
  const shouldShowLayout = !noLayoutRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <div className="bg-white">
      {shouldShowLayout && <Header />}
      <main>
        <Hero />
        <ProductSection />
        <FeatureSection />
        <ContactSection />
      </main>
      {shouldShowLayout && <Footer />}
    </div>
  );
}
