"use client";

import { motion } from "framer-motion";

const partners = [
  {
    company: "Paychex",
    contact: "Jamie Scherban",
    specialty: "Payroll Services",
    logo: "/paychex.png",
  },
  {
    company: "Action Coaching",
    contact: "Dave Olchowski",
    specialty: "Business Coaching",
    logo: "/action-coach.png",
  },
  {
    company: "Gillis Insurance",
    contact: "Event Partner",
    specialty: "Property & Casualty",
    logo: "/gillis.png",
  },
  {
    company: "Appleseed Insurance",
    contact: "Event Partner",
    specialty: "Property & Casualty",
    logo: "/appleseed.webp",
  }
];

export default function PartnersAndHost() {
  return (
    <section className="py-24 bg-slate-950 relative border-t border-slate-900 z-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* EVENT PARTNERS SECTION */}
        <div className="mb-24">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Our Trusted Event Partners
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed">
              This event is proudly co-hosted by a select group of trusted professionals. Each partner was selected because of their commitment to helping business owners succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:bg-slate-800/50 hover:border-slate-600 transition-all group flex flex-col items-center text-center"
              >
                {/* Logo Area */}
                <div className="w-full h-24 mb-6 flex items-center justify-center bg-slate-950/50 rounded-lg p-4 border border-slate-800/50">
                  <img 
                    src={partner.logo} 
                    alt={partner.company} 
                    className="max-h-full max-w-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>

                {/* Text Area */}
                <h3 className="text-white font-bold text-lg mb-1">{partner.company}</h3>
                <p className="text-emerald-400 font-medium text-xs uppercase tracking-wider mb-2">
                  {partner.specialty}
                </p>
                <p className="text-slate-400 text-sm">{partner.contact}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* THE HOST SECTION (ENCOMPASS GROUP) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-6">Meet The Host</p>
              
              {/* Added Real Consult Logo and Text */}
              <div className="mb-6 flex items-center gap-3">
                <img 
                  src="/consult.png" 
                  alt="Consult Encompass Icon" 
                  className="h-12 object-contain"
                />
                <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Consult Encompass
                </span>
              </div>

              <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed">
                Encompass Group helps business owners and high-net-worth individuals improve business efficiency, increase enterprise value, protect wealth, and prepare for eventual retirement, succession, or exit.
              </p>
              <p className="text-emerald-400 font-semibold text-lg border-l-2 border-emerald-500 pl-4">
                "Our mission is simple: Help business owners build stronger businesses today while preparing for tomorrow."
              </p>
            </div>

            <div className="bg-slate-950/50 rounded-xl p-6 md:p-8 border border-slate-800">
              <h3 className="text-white font-semibold mb-4 border-b border-slate-800 pb-3 text-sm uppercase tracking-wider">
                Topics Often Discussed Include:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> Business Succession
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> Exit Planning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> Wealth Preservation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> Tax-Efficient Strategies
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> Key Person Planning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> Business Continuity
                </li>
              </ul>
            </div>
          </div>

          <div className="relative z-10 mt-12 text-center border-t border-slate-800 pt-8">
            <p className="text-slate-300 text-lg md:text-xl font-medium italic tracking-wide">
              No presentations. No pressure. Just conversations.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}