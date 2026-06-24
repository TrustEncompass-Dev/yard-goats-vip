"use client";

interface FinalCtaProps {
  onRsvpClick: () => void;
}

export default function FinalCta({ onRsvpClick }: FinalCtaProps) {
  return (
    <section className="relative py-24 px-6 bg-slate-900 border-t border-slate-800 flex flex-col items-center text-center overflow-hidden z-20">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          Reserve Your Seats
        </h2>
        <p className="text-base md:text-lg text-slate-300 mb-10 leading-relaxed">
          Attendance is limited to ensure a quality experience for all guests. Please complete the form below to reserve your spot.
        </p>
        
        <button 
          onClick={onRsvpClick}
          className="group relative inline-flex px-10 py-5 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black uppercase tracking-widest text-sm md:text-base rounded-md overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
        >
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          [ RESERVE MY SEAT ]
        </button>
      </div>
    </section>
  );
}