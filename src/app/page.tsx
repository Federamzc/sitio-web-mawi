import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import RoleFeatures from "@/components/RoleFeatures";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Problem />
        <RoleFeatures />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
