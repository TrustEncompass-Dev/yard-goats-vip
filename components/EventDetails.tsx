"use client";

import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";

// Initialize the athletic font
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: true, margin: "-100px" };

const transition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

type EventDetailsProps = {
  onOpenJotForm: () => void;
};

export default function EventDetails({ onOpenJotForm }: EventDetailsProps) {
  return (
    <section className="relative border-t border-slate-800/80 bg-slate-950 px-6 py-24 md:py-32 overflow-hidden z-20">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-900/10 via-slate-950 to-slate-950" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={transition}
        variants={fadeUp}
        className="relative mx-auto max-w-5xl flex flex-col md:flex-row rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        {/* === LEFT SIDE: MAIN TICKET BODY === */}
        <div className="relative flex-1 bg-gradient-to-br from-slate-900 to-slate-800 p-10 md:p-16 border border-slate-700 md:border-r-0 md:rounded-l-xl">
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#1E90FF]/30 rounded-tl-lg" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#1E90FF]/30 rounded-bl-lg" />

          {/* === ATHLETIC FONT APPLIED HERE === */}
          <h2 className={`${bebas.className} mb-4 text-5xl md:text-6xl tracking-wide text-white uppercase`}>
            Secure Your Access
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-slate-400">
            Attendance is strictly limited to ensure a quality networking experience in the private pavilion. Please register via our secure system to lock in your complimentary tickets.
          </p>
          
          {/* Subtle Ticket Metadata */}
          <div className="mt-8 flex gap-6 text-xs text-slate-500 font-mono uppercase tracking-widest">
            <div>
              <span className="block text-slate-600 mb-1">SECTION</span>
              <span className="text-[#1E90FF] font-bold">VIP PVLN</span>
            </div>
            <div>
              <span className="block text-slate-600 mb-1">ROW</span>
              <span className="text-[#1E90FF] font-bold">ALL</span>
            </div>
            <div>
              <span className="block text-slate-600 mb-1">SEAT</span>
              <span className="text-[#00A650] font-bold">RSVP</span>
            </div>
          </div>
        </div>

        {/* === RIGHT SIDE: THE "TEAR-AWAY" STUB === */}
        <div className="relative w-full md:w-80 bg-slate-800 border border-slate-700 md:border-l-0 md:rounded-r-xl p-10 flex flex-col items-center justify-center z-10">
          
          {/* The Dashed Perforation Line */}
          <div className="absolute top-0 left-0 w-[2px] h-full border-l-2 border-dashed border-slate-950/80 -translate-x-1/2" />
          
          {/* Top & Bottom Ticket Notches */}
          <div className="absolute -top-4 left-0 w-8 h-8 bg-slate-950 rounded-full shadow-inner -translate-x-1/2 z-20" />
          <div className="absolute -bottom-4 left-0 w-8 h-8 bg-slate-950 rounded-full shadow-inner -translate-x-1/2 z-20" />

          {/* Aesthetic Barcode Placeholder */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-6 flex gap-1 opacity-20 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`h-full bg-white ${i % 3 === 0 ? 'w-2' : i % 2 === 0 ? 'w-1' : 'w-[2px]'}`} />
            ))}
          </div>

          {/* === ATHLETIC FONT APPLIED HERE === */}
          <span className={`${bebas.className} text-slate-500 text-3xl tracking-[0.2em] mb-6`}>
            ADMIT ONE
          </span>

          <button
            type="button"
            onClick={onOpenJotForm}
            className="animate-pulse-glow group relative w-full overflow-hidden rounded-sm bg-white px-8 py-5 text-sm font-black uppercase tracking-widest text-slate-900 shadow-[0_0_20px_rgba(30,144,255,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(30,144,255,0.8)]"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#1E90FF]/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative">RSVP NOW</span>
          </button>
        </div>

      </motion.div>
    </section>
  );
}