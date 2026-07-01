"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FooterProps {
  onRsvpClick: () => void;
}

export default function Footer({ onRsvpClick }: FooterProps) {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | "use" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Legal Content Data
  const legalContent = {
    privacy: {
      title: "Privacy Policy",
      text: "Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you register for this event. We do not sell your personal data to third parties. Information collected is used strictly for event coordination and relevant follow-up by Encompass Group and designated event partners."
    },
    terms: {
      title: "Terms & Conditions",
      text: "By registering for this event, you agree to these terms. This event is strictly for educational, networking, and relationship-building purposes. Attendance is limited and subject to approval by the host. The host reserves the right to cancel or modify the event at any time to ensure a quality experience for all guests."
    },
    use: {
      title: "Terms of Use",
      text: "The content on this landing page is provided for general informational purposes. No specific financial, legal, tax, or investment advisory directives are executed or implied during this event or on this website. Please consult your own professionals regarding your specific situation."
    }
  };

  return (
    <>
      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-6 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          
          {/* Logo & Info */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <img src="/consult.png" alt="Consult Encompass Icon" className="h-10 object-contain" />
              <a href="https://consultencompass.com/" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white tracking-tight hover:text-blue-400 transition-colors">
                Consult Encompass, LLC
              </a>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Helping business owners build stronger enterprises today while preparing for an intentional tomorrow.
            </p>
          </div>

          {/* Contact Update */}
          <div className="text-left md:text-center">
            <p className="text-slate-400 text-sm mb-1">Questions or registration adjustments?</p>
            <a href="mailto:info@trustencompass.com" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
              info@trustencompass.com
            </a>
          </div>

          {/* Floating Legal Triggers */}
          <div className="flex flex-col items-start md:items-end gap-4 text-sm text-slate-400">
            <div className="flex flex-wrap gap-4 md:gap-6">
              <button onClick={() => setActiveModal("privacy")} className="hover:text-white transition-colors">Privacy Policy</button>
              <button onClick={() => setActiveModal("terms")} className="hover:text-white transition-colors">Terms & Conditions</button>
              <button onClick={() => setActiveModal("use")} className="hover:text-white transition-colors">Terms of Use</button>
            </div>
            <button onClick={scrollToTop} className="text-slate-500 hover:text-white transition-colors flex items-center gap-1 text-xs uppercase tracking-widest mt-2">
              Back to Top ↑
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-slate-900 pt-8 text-center text-xs text-slate-500 leading-relaxed">
          <p className="mb-2">
            Disclaimer: This event is hosted by Consult Encompass, LLC and its designated event partners strictly for educational, networking, and relationship-building purposes. No specific financial, legal, tax, or investment advisory directives are executed or implied during this event.
          </p>
          <p>© {new Date().getFullYear()} Consult Encompass, LLC. All rights reserved.</p>
        </div>
      </footer>

      {/* The Floating Legal Modal System */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 rounded-xl shadow-2xl border border-slate-700 p-8"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {legalContent[activeModal].title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {legalContent[activeModal].text}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}