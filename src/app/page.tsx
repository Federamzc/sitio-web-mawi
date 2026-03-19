import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Problem from "@/components/Problem";
import ProductSuite from "@/components/ProductSuite";
import Features from "@/components/Features";
import Timeline from "@/components/Timeline";
import RoleFeatures from "@/components/RoleFeatures";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <LogoMarquee />
        <Problem />
        <ProductSuite />
        <Features />
        <Timeline />
        <RoleFeatures />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
