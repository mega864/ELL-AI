import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import WorkflowSection from "@/components/WorkflowSection";
import IndustriesSection from "@/components/IndustriesSection";
import PilotSection from "@/components/PilotSection";
import FoundersSection from "@/components/FoundersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E1C1C] text-white selection:bg-[#FF4545] selection:text-white relative">
      {/* Persistent Fixed Background Image Across Entire Website */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/hero-bg.png"
          alt="Physical Systems Validation Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top sm:object-center opacity-60 select-none"
        />
        {/* Atmospheric dark wash to maintain contrast across all sections on both mobile and laptop */}
        <div className="absolute inset-0 bg-[#1E1C1C]/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1C1C]/50 via-transparent to-[#1E1C1C]/85" />
      </div>

      <div className="relative z-10">
        {/* Sticky Navigation */}
        <Navbar />

        {/* 1. Hero */}
        <Hero />

        {/* 2. Five Validation Gaps */}
        <ProblemSection />

        {/* 3. How Our AI Works: 10-Step Loop */}
        <WorkflowSection />

        {/* 4. Industries */}
        <IndustriesSection />

        {/* 5. Start Small: Pilot Framework */}
        <PilotSection />

        {/* 6. Founding Team */}
        <FoundersSection />

        {/* 7. Contact */}
        <ContactSection />

        {/* 8. Footer */}
        <Footer />
      </div>
    </main>
  );
}
