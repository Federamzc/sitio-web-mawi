import { Mail, Phone, MapPin } from "lucide-react";

const links = {
  Producto: ["Funcionalidades", "Precios", "Integraciones", "Actualizaciones", "Seguridad"],
  Recursos: ["Blog", "Webinars", "Calculadora ROI", "Guías", "Soporte"],
  Empresa: ["Sobre nosotros", "Clientes", "Trabaja con nosotros", "Prensa", "Términos y privacidad"],
};

const countries = ["Costa Rica", "Chile", "México", "Colombia", "Perú"];

export default function Footer() {
  return (
    <footer className="bg-[#1D062F] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                ¿Listo para eliminar el sobrecosto?
              </h2>
              <p className="text-white/60 text-lg">
                Únete a más de 20 constructoras que ya controlan sus proyectos con Mawi.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="#demo"
                className="bg-[#FF4E00] hover:bg-[#e04400] text-white font-semibold px-7 py-4 rounded-full transition-colors text-center whitespace-nowrap"
              >
                Agendar demo gratis
              </a>
              <a
                href="#demo"
                className="border border-white/30 hover:border-white/60 text-white font-medium px-7 py-4 rounded-full transition-colors text-center whitespace-nowrap"
              >
                Ver precios
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#FF4E00] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-xl">mawi</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Software de control presupuestal para proyectos de construcción en
              Latinoamérica. Elimina el sobrecosto, recupera el tiempo de tu equipo.
            </p>

            {/* Contact */}
            <div className="space-y-2">
              <a
                href="mailto:soporte@mawi.io"
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
              >
                <Mail size={14} />
                soporte@mawi.io
              </a>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin size={14} />
                <span>{countries.join(" · ")}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-semibold text-sm mb-4 text-white/80">{section}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © 2025 Mawi. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {["Privacidad", "Términos", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/30 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
