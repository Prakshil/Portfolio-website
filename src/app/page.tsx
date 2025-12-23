import About from "@/components/About";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { AppNavbar } from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-black min-h-screen w-full">
      <AppNavbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Services />
      <Skills />
      <Footer />
    </main>
  );
}
