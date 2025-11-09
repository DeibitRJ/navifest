import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Gift, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function MessageSection() {
  const impacts = [
    { icon: Users, label: "Familias", value: "500+", color: "text-rose-300" },
    { icon: Gift, label: "Regalos", value: "1,000+", color: "text-amber-300" },
    { icon: Heart, label: "Personas", value: "2,000+", color: "text-red-300" },
    { icon: Sparkles, label: "Recaudación", value: "S/ 50K", color: "text-yellow-300" }
  ];

  const benefits = [
    { emoji: "🍽️", title: "Alimentos nutritivos", desc: "Canastas navideñas completas" },
    { emoji: "🏥", title: "Atención médica", desc: "Medicamentos y consultas" },
    { emoji: "📚", title: "Útiles escolares", desc: "Material educativo de calidad" },
    { emoji: "🎁", title: "Regalos navideños", desc: "Ilusión para los más pequeños" }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-9xl">❄️</div>
        <div className="absolute bottom-20 right-10 text-9xl">🎄</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
            <Heart className="h-4 w-4 text-amber-300" />
            <span className="text-amber-200 text-sm font-medium">Nuestra Misión</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            ¿Por Qué NaviFest?
          </h2>
          
          <p className="text-xl text-amber-200/90 font-medium mb-4">
            Porque la verdadera magia de la Navidad está en compartir
          </p>
        </motion.div>

        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Esta temporada navideña, queremos recordar que el espíritu de estas fechas va más allá 
              de las luces y los regalos. NaviFest nace del corazón de personas como tú, que creen en 
              el poder de la comunidad para generar cambios reales.
            </p>
            
            <div className="bg-amber-400/10 border-l-4 border-amber-400 rounded-r-2xl p-6 mb-6">
              <p className="text-white/95 font-medium leading-relaxed">
                <span className="text-amber-300 font-bold">Nuestra misión es simple pero poderosa:</span> recaudar 
                fondos para brindar apoyo integral a familias de escasos recursos de nuestra comunidad, garantizándoles 
                acceso a servicios esenciales y momentos de alegría en esta Navidad.
              </p>
            </div>

            <p className="text-white/80 leading-relaxed">
              Juntos podemos hacer de esta Navidad un momento de esperanza, dignidad y amor para quienes 
              más lo necesitan. <span className="text-amber-300 font-semibold">Tu presencia, tu voz y tu generosidad 
              son el mejor regalo.</span>
            </p>
          </div>
        </motion.div>

        {/* Beneficios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            ¿A quién ayudaremos?
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full group hover:scale-105 hover:shadow-xl hover:shadow-amber-500/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {benefit.emoji}
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-white/70 text-sm">
                      {benefit.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Estadísticas de impacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-linear-to-r from-amber-600/20 via-red-600/20 to-rose-600/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Nuestro Impacto Este Año
            </h3>
            <p className="text-center text-white/80 mb-10 max-w-2xl mx-auto">
              Con tu ayuda, buscamos alcanzar estas metas para transformar la Navidad de cientos de familias
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {impacts.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, type: "spring", stiffness: 100 }}
                  className="text-center"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <stat.icon className={`h-10 w-10 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-4xl font-extrabold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/70 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/70 text-lg italic">
            "La felicidad no se reduce con compartirla, se multiplica" ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}