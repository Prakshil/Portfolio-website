import { Hero } from "@/components/Hero";
import { AppNavbar } from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="bg-black min-h-screen w-full">
      <AppNavbar />
      <Hero />
    </main>
  );
}
