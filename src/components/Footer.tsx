import { Mail, MapPin } from "lucide-react";

const links = {
  Producto: ["Funcionalidades", "Precios", "Integraciones", "Actualizaciones", "Seguridad"],
  Recursos: ["Blog", "Webinars", "Calculadora ROI", "Guías", "Soporte"],
  Empresa: ["Sobre nosotros", "Clientes", "Carreras", "Prensa", "Contacto"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0D0618] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF4E00] to-[#911ECC] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-xl">mawi</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Software de control presupuestal para proyectos de construcción en Latinoamérica.
              Elimina el sobrecosto, recupera tu margen.
            </p>
            <div className="space-y-2">
              <a href="mailto:soporte@mawi.io" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
                <Mail size={13} />soporte@mawi.io
              </a>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin size={13} />
                <span>Costa Rica · Chile · México · Colombia · Perú</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white/60 font-semibold text-xs uppercase tracking-wider mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">© 2025 Mawi. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            {["Privacidad", "Términos", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-white/20 hover:text-white/60 text-xs transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
