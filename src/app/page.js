import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Technologies from "@/components/sections/Technologies";

export default function Home() {
  return (
     <main className="min-h-screen px-4 md:px-16 lg:px-24" style={{ background: "#020C1B" }}>
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Footer/>
    </main>
  );
}