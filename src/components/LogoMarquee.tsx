import { Marquee } from "@/components/ui/marquee";

const logos = [
  "Emesol Chile", "AUREA", "CORE Build", "Constructora CR",
  "Grupo López", "BuildCo", "ArquiSur", "ProObra",
  "Megacorp", "InfraTech", "Grupo Andino", "Construmax",
];

export default function LogoMarquee() {
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <p className="text-center text-slate-400 text-xs font-semibold uppercase tracking-widest mb-8">
        Más de 20 empresas constructoras en LATAM confían en Mawi
      </p>
      <Marquee pauseOnHover className="[--duration:30s]" repeat={3}>
        {logos.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center mx-6 px-8 py-3 rounded-full border border-slate-200 bg-slate-50 hover:border-[#FF4E00]/40 hover:bg-orange-50/50 transition-colors duration-200"
          >
            <span className="text-slate-400 font-bold text-sm tracking-wide whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
