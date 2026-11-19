import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import WorkflowSection from "@/components/WorkflowSection";
import DemonstratorSection from "@/components/DemonstratorSection";
import IndustriesSection from "@/components/IndustriesSection";
import PilotSection from "@/components/PilotSection";
import FoundersSection from "@/components/FoundersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E1C1C] text-white selection:bg-[#FF4545] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* 1. Hero: Physical AI Validation Platform */}
      <Hero />

      {/* 2. Five Gaps that Make Validation Difficult */}
      <ProblemSection />

      {/* 3. How Our AI Works: 10-Step Loop */}
      <WorkflowSection />

      {/* 4. AEB Demonstrator: From Setup to Tests */}
      <DemonstratorSection />

      {/* 5. One Platform. Broader Industry Opportunity */}
      <IndustriesSection />

      {/* 6. Start Small. Prove the Value (Pilot Framework) */}
      <PilotSection />

      {/* 7. Founding Team */}
      <FoundersSection />

      {/* 8. Contact & OEM Discussion */}
      <ContactSection />

      {/* 9. Minimal Footer */}
      <Footer />
    </main>
  );
}
