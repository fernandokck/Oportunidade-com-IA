import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Requirements from "@/components/Requirements";
import Guidelines from "@/components/Guidelines";
import Platforms from "@/components/Platforms";
import VideoGuide from "@/components/VideoGuide";
import FeaturedJobs from "@/components/FeaturedJobs";
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
        <Guidelines />
        <Platforms />
        <VideoGuide />
        <FeaturedJobs />
        <Comparison />
        <Tutorials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
