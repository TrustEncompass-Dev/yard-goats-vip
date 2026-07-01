"use client";

import { motion } from "framer-motion";

export default function WhoShouldAttend() {
  const audiences = [
    { 
      title: "Business Owners", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    },
    { 
      title: "Practice Owners", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> // Reusing building structure for practice
    },
    { 
      title: "Entrepreneurs", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    },
    { 
      title: "Professional Service Firms", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    },
    { 
      title: "Family Business Owners", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    },
    { 
      title: "Executives Considering Business Ownership", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden z-20 border-t border-slate-900">
      
      {/* 🌟 Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-[#1E90FF]/10 rounded-[100%] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Who Should Attend?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-xl p-6 flex items-center gap-5 hover:bg-slate-800/80 hover:border-[#1E90FF]/30 transition-all duration-300 shadow-lg cursor-default"
            >
              {/* ⚾️ THE DIAMOND ICON UPDATE */}
              <div className="flex-shrink-0 w-11 h-11 rotate-45 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:bg-[#1E90FF]/20 group-hover:border-[#1E90FF]/40 transition-all duration-300 ml-2 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(30,144,255,0.3)]">
                <svg className="w-6 h-6 text-[#1E90FF] -rotate-45 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  {item.icon}
                </svg>
              </div>
              <span className="text-slate-200 text-sm md:text-base font-semibold leading-snug">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}