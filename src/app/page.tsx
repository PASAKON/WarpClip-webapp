import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <BeforeAfter />
      <Pricing />
      <Contact />
    </>
  );
}
