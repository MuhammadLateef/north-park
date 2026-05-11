import Destination from "@/components/destinations/destination";
import Navbar from "@/components/Header/Navbar";
import HeroSection from "@/components/hero-section/HeroSection";
import Image from "next/image";
import { WhyChooseUs } from "@/components/why-choose-us";
export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <Destination />
      <WhyChooseUs />
    </div>
  );
}
