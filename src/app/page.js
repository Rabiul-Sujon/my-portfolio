import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Qualification from "@/components/sections/Qualification";
import Services from "@/components/sections/Services";
// import Skills from "@/components/sections/Skills";
import Skills from "@/components/sections/Skills";
import Technologies from "@/components/sections/Technologies";

export default function Home() {
  return (
     <main className="min-h-screen px-4 md:px-16 lg:px-24" style={{ background: "#020C1B" }}>
      <Navbar/>
      <div id="home"><Hero/></div>
      <div id="about"><About/></div>
      <div id="technologies"><Technologies/></div>
      <div id="skills"><Skills/></div>
      <div id="services"><Services/></div>
      <div id="qualification"><Qualification/></div>
      <div id="projects"><Projects/></div>
      <div id="contact"><Contact/></div>
      <Footer/>
    </main>
  );
}