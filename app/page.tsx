import Hero from "@/components/ui/Hero";
import Contact from "./contact/page";
import Services from "./services/page";
import About from "./about/page";


export default function Home() {
  return (
    <main >
      
      <Hero />
      <About />
      <Services />
      <Contact />
      
    </main>
  );
}
