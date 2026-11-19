import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import VisionSection from "@/components/VisionSection";
import PlatformShowcase from "@/components/PlatformShowcase";
import WorkflowSection from "@/components/WorkflowSection";
import BoundarySection from "@/components/BoundarySection";
import ExecutionSection from "@/components/ExecutionSection";
import FailureIntelligence from "@/components/FailureIntelligence";
import TechnologySection from "@/components/TechnologySection";
import IndustriesSection from "@/components/IndustriesSection";
import FoundersSection from "@/components/FoundersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090B] text-[#F5F6F2] selection:bg-[#2455E8] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Problem Section */}
      <ProblemSection />

      {/* 3. Our Vision & Solution */}
      <VisionSection />

      {/* 4. Platform Showcase (Interactive Engineering Workspace Demo) */}
      <PlatformShowcase />

      {/* 5. How ELL-AI Works (10-Step Connected Workflow) */}
      <WorkflowSection />

      {/* 6. Boundary Intelligence (எல்லை Exploration) */}
      <BoundarySection />

      {/* 7. Hardware & Simulation (Execution Environments) */}
      <ExecutionSection />

      {/* 8. Failure Intelligence (Deep Diagnostic & Root-Cause Synthesis) */}
      <FailureIntelligence />

      {/* 9. Technology Architecture (4 Conceptual Layers) */}
      <TechnologySection />

      {/* 10. Industry Applications */}
      <IndustriesSection />

      {/* 11. Founding Team */}
      <FoundersSection />

      {/* 12. Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
