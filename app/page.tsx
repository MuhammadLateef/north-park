import Destination from "@/components/destinations/destination";
import HeroSection from "@/components/hero-section/HeroSection";
import { WhyChooseUs } from "@/components/why-choose-us";
import AboutSection from "@/components/aboutus/about";
import ClientReviews from "@/components/client-review";
import Footer from "@/components/Footer/footer";
export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <Destination />
      <WhyChooseUs />
      <AboutSection />
      <ClientReviews />
      <Footer />
    </div>
  );
}
