import About from "@/components/About";
import { Hero } from "@/components/Hero";
import { AppNavbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-black min-h-screen w-full">
      <AppNavbar />
      <Hero />
      <About />
    </main>
  );
}
