import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Technologies from "@/components/sections/Technologies";

export default function Home() {
  return (
     <main className="bg-[#0D1117] min-h-screen">
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
    </main>
  );
}