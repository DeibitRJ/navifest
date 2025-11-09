import React from "react";
import { Gift } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-red-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Gift className="h-5 w-5 text-red-950" />
              </div>
              <span className="font-bold text-xl">NaviFest</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Un evento benéfico organizado con amor por voluntarios comprometidos con transformar vidas esta Navidad.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contacto</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>📧 contacto@navifest.org</li>
              <li>📱 (+51) 999-999-999</li>
              <li>📍 Chimbote, Ancash, Perú</li>
              <li>📷 Instagram: @navifest</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Transparencia</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-amber-300 transition-colors">
                  Política de donaciones
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-amber-300 transition-colors">
                  Informe de uso de fondos
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-amber-300 transition-colors">
                  Certificados y auditorías
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} NaviFest — Hecho con ❤️ por voluntarios que creen en el cambio
          </p>
        </div>
      </div>
    </footer>
  );
}