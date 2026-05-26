"use client";

import React, { useState } from "react";
import { AnnouncementBar } from "@/components/ui/AnnouncementBar";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { VideoSection } from "@/components/sections/VideoSection";
import { Features } from "@/components/sections/Features";
import { Benefits } from "@/components/sections/Benefits";
import { ReportsShowcase } from "@/components/sections/ReportsShowcase";
import { CustomerMgmt } from "@/components/sections/CustomerMgmt";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { DemoModal } from "@/components/ui/DemoModal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <>
      {/* Sticky Top Announcement */}
      <AnnouncementBar />

      {/* Floating Scroll-aware Navigation */}
      <Navbar onOpenDemo={openDemoModal} />

      <main>
        {/* Full-viewport Interactive Hero */}
        <Hero onOpenDemo={openDemoModal} />

        {/* CRM management panels & live counters */}
        <CustomerMgmt />

        {/* Lazy Demo Video player */}
        <VideoSection />

        {/* Grid featuring 6 product aspects */}
        <Features />

        {/* Staggered Checklist & Invoicing Mobile Preview */}
        <Benefits />

        {/* Pill-controlled Analytics Reports dashboard */}
        <ReportsShowcase onOpenDemo={openDemoModal} />



        {/* Currency toggling plans */}
        <Pricing onOpenDemo={openDemoModal} />

        {/* Accordions */}
        <FAQ />

        {/* Full-width Newsletter with Confetti triggers */}
        <CTASection />
      </main>

      {/* Chennai Contact, Badges, Links */}
      <Footer />

      {/* Accessible shift-tab focus trapped booking modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </>
  );
}
