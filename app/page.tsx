import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import HubSpotlight from "@/components/HubSpotlight";
import EarningsCalculator from "@/components/EarningsCalculator";
import Community from "@/components/Community";
import Results from "@/components/Results";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <HubSpotlight />
        <EarningsCalculator />
        <Community />
        <Results />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
