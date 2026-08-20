import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Requirements from "@/components/Requirements";
import Platforms from "@/components/Platforms";
import Comparison from "@/components/Comparison";
import Tutorials from "@/components/Tutorials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Requirements />
        <Platforms />
        <Comparison />
        <Tutorials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
