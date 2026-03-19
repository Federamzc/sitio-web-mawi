"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Grupo Argos", abbr: "GA" },
  { name: "Cemex", abbr: "CX" },
  { name: "Constructora Bolívar", abbr: "CB" },
  { name: "Vinte", abbr: "VN" },
  { name: "Ara", abbr: "AR" },
  { name: "GEO Corp", abbr: "GC" },
  { name: "Homex", abbr: "HX" },
  { name: "Urbi", abbr: "UB" },
  { name: "Coper", abbr: "CP" },
  { name: "ICA", abbr: "IC" },
  { name: "AMVI", abbr: "AM" },
  { name: "ProObra", abbr: "PO" },
];

function LogoItem({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex items-center gap-2.5 mx-8 opacity-35 hover:opacity-60 transition-opacity duration-300 flex-shrink-0">
      <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center">
        <span className="text-white font-bold text-[10px] tracking-wider">{abbr}</span>
      </div>
      <span className="text-white/80 font-medium text-sm whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="relative py-10 border-y border-white/6 bg-[#0D0A1A] overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D0A1A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D0A1A] to-transparent z-10 pointer-events-none" />

      <p className="text-center text-white/25 text-xs uppercase tracking-[0.15em] font-medium mb-6">
        Usado por las mejores constructoras de LATAM
      </p>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <LogoItem key={`${logo.abbr}-${i}`} name={logo.name} abbr={logo.abbr} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
