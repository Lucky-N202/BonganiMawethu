import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/Services";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-slate-300 to-stone-200  justify-between p-4">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
