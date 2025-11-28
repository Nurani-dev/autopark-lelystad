import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { FeaturedCars } from "@/components/FeaturedCars";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <FeaturedCars />
    </main>
  );
}
