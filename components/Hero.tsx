"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface HeroProps {
  onRsvpClick: () => void;
}

export default function Hero({ onRsvpClick }: HeroProps) {
  const leftLogoControls = useAnimation();
  const rightLogoControls = useAnimation();
  const textControls = useAnimation();
  const flashControls = useAnimation();

  useEffect(() => {
    const runCinematicSequence = async () => {
      await Promise.all([
        leftLogoControls.start({ x: -10, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 0.8 } }),
        rightLogoControls.start({ x: 10, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 0.8 } }),
      ]);

      for (let i = 0; i < 3; i++) {
        await Promise.all([
          leftLogoControls.start({ x: -60, transition: { duration: 0.12, ease: "easeOut" } }),
          rightLogoControls.start({ x: 60, transition: { duration: 0.12, ease: "easeOut" } }),
        ]);
        
        flashControls.start({
          scale: [0.2, 3],
          opacity: [0.8, 0],
          transition: { duration: 0.4, ease: "easeOut", delay: 0.05 }
        });

        await Promise.all([
          leftLogoControls.start({ x: 0, transition: { type: "spring", bounce: 0.5, duration: 0.25 } }),
          rightLogoControls.start({ x: 0, transition: { type: "spring", bounce: 0.5, duration: 0.25 } }),
        ]);
      }

      await new Promise((resolve) => setTimeout(resolve, 200));

      const isMobile = window.innerWidth < 768;
      await Promise.all([
        leftLogoControls.start({ 
          x: isMobile ? "-38vw" : "-42vw", y: isMobile ? "-42vh" : "-40vh", scale: isMobile ? 0.35 : 0.5, 
          transition: { type: "spring", bounce: 0, duration: 1.2 } 
        }),
        rightLogoControls.start({ 
          x: isMobile ? "38vw" : "42vw", y: isMobile ? "-42vh" : "-40vh", scale: isMobile ? 0.35 : 0.5, 
          transition: { type: "spring", bounce: 0, duration: 1.2 } 
        }),
      ]);

      await textControls.start({ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } });
    };

    runCinematicSequence();
  }, [leftLogoControls, rightLogoControls, textControls, flashControls]);

  return (
    <section className="relative w-full min-h-screen md:h-screen overflow-hidden bg-slate-950 flex items-center justify-center py-16 md:py-0">
      
      {/* 1. The Video with CSS Color Grading (Desaturated, High Contrast) */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 filter contrast-125 saturate-[0.6] brightness-75"
      >
        <source src="/stadium-bg.mp4" type="video/mp4" />
      </video>

      {/* 2. The Cinematic Vignette (Dark edges, clear center) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#020617_100%)] z-10 opacity-90 pointer-events-none" />
      
      {/* 3. The Base Slate Overlay for Text Readability */}
      <div className="absolute inset-0 bg-slate-950/60 z-10 backdrop-blur-[1px]" />

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        {/* Shockwave Effect */}
        <motion.div animate={flashControls} initial={{ opacity: 0, scale: 0 }} className="absolute z-10 w-32 h-32 bg-white rounded-full blur-xl mix-blend-overlay" />

        <motion.div initial={{ x: "-50vw", opacity: 0 }} animate={leftLogoControls} className="absolute z-20">
          <div className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center">
            <img src="/fisher-cats.png" alt="Fisher Cats" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        <motion.div initial={{ x: "50vw", opacity: 0 }} animate={rightLogoControls} className="absolute z-20">
          <div className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center">
            <img src="/yard-goats.png" alt="Yard Goats" className="w-full h-full object-contain" />
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ y: -20, opacity: 0 }} animate={textControls} className="relative z-30 flex flex-col items-center text-center px-4 max-w-4xl mt-12 md:mt-0">
        <h2 className="text-blue-400 font-bold tracking-widest uppercase mb-2 text-xs md:text-sm">Encompass Group Presents</h2>
        <h1 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight px-2">
          Business Owners Night at the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Hartford Yard Goats</span>
        </h1>
        <p className="text-emerald-400 font-semibold text-sm md:text-xl tracking-wide mb-3">Build Relationships. Share Ideas. Enjoy the Game.</p>
        <p className="text-slate-300 text-xs md:text-base max-w-2xl mb-6 leading-relaxed px-4">
          Join a select group of business owners and trusted advisors for an evening of networking, conversation, and baseball in a private pavilion at Dunkin' Park.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 border-y border-slate-800/60 py-3 w-full max-w-3xl mb-8 text-center text-xs md:text-sm text-slate-200 bg-slate-900/40 backdrop-blur-sm rounded-lg px-2">
          <div><span className="text-blue-400 font-bold block md:inline">DATE:</span> Tuesday, July 28th</div>
          <div className="border-y md:border-y-0 md:border-x border-slate-800/60 py-1 md:py-0"><span className="text-blue-400 font-bold block md:inline">LOCATION:</span> Private Pavilion at Dunkin' Park</div>
          <div><span className="text-emerald-400 font-bold block md:inline">ADMISSION:</span> Complimentary for You & Guest</div>
        </div>

        <button onClick={onRsvpClick} className="group relative px-8 py-4 bg-white text-slate-950 font-black uppercase tracking-wider text-xs md:text-sm rounded-sm overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-blue-100/40 to-transparent" />
          [ RSVP NOW ]
        </button>
      </motion.div>
    </section>
  );
}