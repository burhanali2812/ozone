import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import FeatureSection from "../components/FeatureSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white">

      <main>
        <Hero />
        <ProductSection />
        <FeatureSection />
        <ContactSection />
      </main>
 
    </div>
  );
}
