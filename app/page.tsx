import Nav from "@/components/Nav";
import HubActivitiesBanner from "@/components/HubActivitiesBanner";
import Hero from "@/components/Hero";
import Requirements from "@/components/Requirements";
import Guidelines from "@/components/Guidelines";
import Platforms from "@/components/Platforms";
import VideoGuide from "@/components/VideoGuide";
import Comparison from "@/components/Comparison";
import Tutorials from "@/components/Tutorials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Topo fixo / sticky com Navbar + Banner de atividades da Hub.xyz */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-cyber-950/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-cyber-700/80 transition-colors shadow-sm">
        <Nav />
        <HubActivitiesBanner />
      </div>

      <main>
        <Hero />
        <Requirements />
        <Guidelines />
        <Platforms />
        <VideoGuide />
        <Comparison />
        <Tutorials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}


