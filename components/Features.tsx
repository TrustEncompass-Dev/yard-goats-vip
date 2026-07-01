"use client";

import { motion } from "framer-motion";

export default function Features() {
  const whyAttend = [
    "Meet other business owners",
    "Exchange ideas and best practices",
    "Build strategic relationships",
    "Connect with trusted professionals and peers",
    "Simply enjoy a night out with your spouse, partner, or colleague"
  ];

  const included = [
    "Private Pavilion Access",
    "Hartford Yard Goats Ticket",
    "Food & Non-Alcoholic Beverages",
    "Opportunity to Connect with 50+ Business Owners",
    "Business Owners Directory",
    "Door Prize Drawings (Optional)"
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden z-20 border-t border-slate-900">
      
      {/* 🌟 Ambient Background Glows - Now using Yard Goats Colors */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#1E90FF]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-[#00A650]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* WHY ATTEND SECTION */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why Attend?
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Business ownership can be rewarding, but it can also be isolating. This event was created to bring together successful business owners from various industries in an environment where conversations happen naturally and relationships can develop organically.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyAttend.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-lg p-4 hover:bg-slate-800/50 transition-colors"
              >
                {/* ⚾️ THE DIAMOND ICON UPDATE w/ Team Blue */}
                <div className="flex-shrink-0 w-6 h-6 rotate-45 rounded-[4px] bg-[#1E90FF]/20 flex items-center justify-center border border-[#1E90FF]/40 ml-1 shadow-[0_0_10px_rgba(30,144,255,0.2)]">
                  <svg className="w-4 h-4 text-[#1E90FF] -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-200 text-sm md:text-base font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-slate-500 italic text-sm border-l-2 border-slate-800 pl-4"
          >
            This event was designed with you in mind.
          </motion.p>
        </div>

        {/* INCLUDED SECTION */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Included With Your Registration
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {included.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-lg p-5 text-center flex items-center justify-center hover:border-[#1E90FF]/30 hover:bg-slate-800/60 transition-all shadow-lg"
              >
                <span className="text-slate-200 text-sm font-semibold tracking-wide">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}