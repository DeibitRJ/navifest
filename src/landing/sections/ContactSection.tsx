import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "donor",
    message: ""
  });

  const handleSubmit = () => {
    // Validaciones básicas
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor completa los campos obligatorios");
      return;
    }
    
    // Aquí iría la lógica de envío
    console.log("Form submitted:", formData);
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    setFormData({ name: "", email: "", phone: "", type: "donor", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contacto@navifest.org",
      link: "mailto:contacto@navifest.org"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(+51) 999-999-999",
      link: "https://wa.me/51999999999"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Chimbote, Ancash, Perú",
      link: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", link: "https://instagram.com/navifest", handle: "@navifest" },
    { icon: Facebook, label: "Facebook", link: "https://facebook.com/navifest", handle: "NaviFest Oficial" },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/company/navifest", handle: "NaviFest" }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 text-9xl">📧</div>
        <div className="absolute bottom-40 right-20 text-9xl">💬</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/10 border border-green-400/20 mb-6">
            <Send className="h-4 w-4 text-green-300" />
            <span className="text-green-200 text-sm font-medium">Hablemos</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Conversemos:
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-yellow-300">
              Tu Voz Importa
            </span>
          </h2>

          <p className="text-lg text-white/80 leading-relaxed">
            Ya sea que quieras conocer más sobre la causa, convertirte en voluntario, proponer una alianza 
            o simplemente compartir tus ideas, <span className="text-amber-300 font-semibold">estamos aquí para escucharte</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-white/80 font-medium">
                        Nombre completo *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Juan Pérez"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-white/80 font-medium">
                        Correo electrónico *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@email.com"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-white/80 font-medium">
                        Teléfono (opcional)
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+51 999 999 999"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-white/80 font-medium">
                        ¿Cómo quieres apoyar? *
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                      >
                        <option value="donor" className="bg-red-950">Donante</option>
                        <option value="volunteer" className="bg-red-950">Voluntario</option>
                        <option value="sponsor" className="bg-red-950">Patrocinador</option>
                        <option value="press" className="bg-red-950">Prensa</option>
                        <option value="other" className="bg-red-950">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white/80 font-medium">
                      Cuéntanos más *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Comparte tus ideas, preguntas o propuestas..."
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400/50 resize-none"
                    />
                  </div>

                  <Button 
                    onClick={handleSubmit}
                    size="lg"
                    className="w-full bg-linear-to-r from-amber-400 to-amber-500 text-red-950 hover:from-amber-500 hover:to-amber-600 font-bold shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensaje
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Info de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Información directa */}
            <Card className="bg-linear-to-br from-amber-500/20 to-red-500/20 border-amber-400/30 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-lg text-white">Contacto Directo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-amber-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-white/70">{item.label}</div>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-white font-medium hover:text-amber-300 transition-colors wrap-break-word"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium wrap-break-word">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Horario */}
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white mb-2">Horario de atención</h3>
                <p className="text-white/75 text-sm">
                  Lunes a viernes<br />
                  9:00 AM - 6:00 PM
                </p>
              </CardContent>
            </Card>

            {/* Redes sociales */}
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-white">Síguenos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <social.icon className="h-5 w-5 text-white/70 group-hover:text-amber-300 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-white/90 font-medium group-hover:text-amber-300 transition-colors">
                        {social.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Mensaje motivacional */}
            <Card className="bg-linear-to-br from-purple-500/20 to-blue-500/20 border-purple-400/30">
              <CardContent className="p-6 text-center">
                <p className="text-white/90 text-sm leading-relaxed italic">
                  "Cada mensaje que recibimos nos inspira a seguir trabajando por una Navidad más justa y solidaria."
                </p>
                <p className="text-amber-300 font-semibold mt-3">
                  ¡Esperamos saber de ti pronto! 💛
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}