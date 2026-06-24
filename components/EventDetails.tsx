"use client";

import { motion } from "framer-motion";

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
    <section className="relative border-t border-slate-800/80 bg-slate-950 px-6 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/30 via-emerald-950/10 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={transition}
        variants={fadeUp}
        className="relative mx-auto max-w-4xl rounded-2xl border border-slate-800/80 bg-slate-900/60 px-8 py-14 text-center backdrop-blur-sm md:px-16 md:py-20"
      >
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
          Reserve Your Seats
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
          Attendance is limited to ensure a quality experience for all guests.
          Please register via our secure system to lock in your tickets.
        </p>
        <button
          type="button"
          onClick={onOpenJotForm}
          className="animate-pulse-glow group relative overflow-hidden rounded-sm bg-white px-12 py-5 text-sm font-bold uppercase tracking-wider text-slate-900 shadow-[0_0_24px_rgba(59,130,246,0.7)] transition-all hover:scale-105 hover:animate-none hover:shadow-[0_0_36px_rgba(59,130,246,0.9)]"
        >
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-100/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          <span className="relative">[ RESERVE MY SEAT ]</span>
        </button>
      </motion.div>
    </section>
  );
}
