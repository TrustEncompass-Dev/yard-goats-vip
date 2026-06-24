"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JotFormModal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }} // Ultra-fast appearance
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 md:p-6"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl h-[90vh] bg-slate-900 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border border-slate-700 flex items-center justify-center"
          >
            {/* Loading Indicator behind the iframe */}
            <div className="absolute z-0 flex flex-col items-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-2" />
              <p className="text-slate-400 text-sm font-medium animate-pulse">Loading Secure Form...</p>
            </div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-slate-800 hover:bg-red-500 text-slate-300 hover:text-white rounded-full flex items-center justify-center transition-colors shadow-lg border border-slate-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <iframe
              id="JotFormIFrame-261675774035060"
              title="Registration Form"
              allowTransparency={true}
              allowFullScreen={true}
              allow="geolocation; microphone; camera"
              src="https://hipaa.jotform.com/261675774035060"
              frameBorder="0"
              className="w-full h-full border-none relative z-10"
              scrolling="yes"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}