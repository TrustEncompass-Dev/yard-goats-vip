"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhoShouldAttend from "@/components/WhoShouldAttend";
import PartnersAndHost from "@/components/PartnersAndHost";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import JotFormModal from "@/components/JotFormModal";

export default function Home() {
  const [isJotFormOpen, setIsJotFormOpen] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setShowFloatingBtn(true);
      } else {
        setShowFloatingBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = () => setIsJotFormOpen(true);
  const closeModal = () => setIsJotFormOpen(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white relative">
      <Hero onRsvpClick={openModal} />
      <Features />
      <WhoShouldAttend />
      <PartnersAndHost />
      
      {/* Restored Final CTA Section */}
      <FinalCta onRsvpClick={openModal} />
      
      <Footer onRsvpClick={openModal} />

      <JotFormModal isOpen={isJotFormOpen} onClose={closeModal} />

      <AnimatePresence>
        {showFloatingBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#1E90FF] to-[#00A650] hover:from-[#1E90FF]/90 hover:to-[#00A650]/90 text-white font-black uppercase tracking-widest text-xs px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(30,144,255,0.4)] border border-white/10"
          >
            RSVP NOW
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}