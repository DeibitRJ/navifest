import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Building2, TrendingUp, Award, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnerSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Exposición de marca",
      desc: "Miles de asistentes y alcance en redes sociales"
    },
    {
      icon: Heart,
      title: "Impacto social",
      desc: "Asociación con una causa de alto impacto"
    },
    {
      icon: Award,
      title: "Certificados",
      desc: "Reportes de transparencia y documentación"
    },
    {
      icon: Users,
      title: "Activación",
      desc: "Espacios de marca durante el evento"
    }
  ];

  const sponsorTiers = [
    { name: "Patrocinador Oro", logos: 3 },
    { name: "Patrocinador Plata", logos: 4 },
    { name: "Aliado", logos: 6 }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-8xl">🤝</div>
        <div className="absolute bottom-20 right-10 text-8xl">⭐</div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mb-6">
            <Handshake className="h-4 w-4 text-blue-300" />
            <span className="text-blue-200 text-sm font-medium">Nuestros Aliados</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Gracias a Quienes Hacen
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-yellow-300">
              Posible el Milagro
            </span>
          </h2>

          <p className="text-lg text-white/80 leading-relaxed">
            NaviFest es realidad gracias al compromiso de empresas, marcas y personas con corazón solidario 
            que comparten nuestra visión: una comunidad más justa, unida y llena de esperanza.
          </p>
        </motion.div>

        {/* Mensaje de agradecimiento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-linear-to-br from-blue-500/10 to-purple-500/10 border-blue-400/20 backdrop-blur-md">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  A todos nuestros <span className="text-amber-300 font-semibold">patrocinadores</span>, <span className="text-amber-300 font-semibold">colaboradores</span>, 
                  medios de comunicación y <span className="text-amber-300 font-semibold">voluntarios</span>:
                </p>
                <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-yellow-300 to-amber-400 mb-6">
                  ¡GRACIAS!
                </div>
                <p className="text-white/75 leading-relaxed">
                  Su confianza y generosidad permiten que cada sol recaudado llegue directamente a quienes 
                  más lo necesitan, con <span className="text-emerald-300 font-medium">transparencia total</span> y un 
                  compromiso inquebrantable con el impacto social.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Logos de patrocinadores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Patrocinadores y Aliados 2025
          </h3>

          <div className="space-y-8">
            {sponsorTiers.map((tier, tierIdx) => (
              <div key={tierIdx}>
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium">
                    {tier.name}
                  </span>
                </div>
                <div className={`grid ${tier.logos === 3 ? 'grid-cols-3' : tier.logos === 4 ? 'grid-cols-4' : 'grid-cols-6'} gap-4`}>
                  {Array.from({ length: tier.logos }).map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="aspect-video rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 flex items-center justify-center group cursor-pointer hover:scale-105"
                    >
                      <div className="text-center">
                        <Building2 className="h-8 w-8 text-white/40 mx-auto mb-2 group-hover:text-white/60 transition-colors" />
                        <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                          Logo #{idx + 1}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Llamado a nuevos aliados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <Card className="bg-linear-to-br from-amber-500/20 via-orange-500/20 to-red-500/20 border-amber-400/30 backdrop-blur-md overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    ¿Tu empresa quiere ser parte del cambio?
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Únete como patrocinador de NaviFest y proyecta los valores de tu marca en un evento 
                    que inspira, emociona y transforma vidas. Ofrecemos diferentes niveles de patrocinio 
                    con beneficios de visibilidad, branding y participación activa.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      size="lg"
                      className="bg-white text-red-950 hover:bg-white/90 font-bold shadow-lg"
                    >
                      Quiero Ser Aliado
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-white/40 bg-white/5 hover:bg-white/10 text-white"
                    >
                      Ver Planes
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
                    >
                      <benefit.icon className="h-8 w-8 text-amber-300 mb-3" />
                      <h4 className="font-semibold text-white text-sm mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-white/70">
                        {benefit.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Voluntarios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-purple-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                ¿Quieres ayudar con tu tiempo y talento?
              </h3>
              <p className="text-white/75 max-w-2xl mx-auto mb-6">
                También necesitamos voluntarios para logística, comunicación, atención al público y producción. 
                Si quieres ser parte del equipo que hace posible la magia, contáctanos.
              </p>
              <Button 
                variant="outline"
                className="border-2 border-purple-400/40 bg-purple-500/10 hover:bg-purple-500/20 text-purple-200"
              >
                Únete como Voluntario
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}