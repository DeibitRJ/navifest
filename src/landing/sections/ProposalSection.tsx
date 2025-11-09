import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, ShoppingBag, Baby, UtensilsCrossed, Gift, Camera, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ProposalSection() {
  const activities = [
    {
      icon: Music,
      title: "Conciertos en Vivo",
      description: "Artistas locales, bandas emergentes y talentos reconocidos darán lo mejor de sí en el escenario. Desde villancicos renovados hasta rock, pop y folclore, habrá música para todos los gustos y edades.",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-300",
      badge: "Escenario Principal"
    },
    {
      icon: ShoppingBag,
      title: "Feria Solidaria",
      description: "Emprendedores locales, artesanos y pequeños negocios ofrecerán productos únicos. Cada compra apoya tanto al vendedor como a la causa principal del evento.",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-300",
      badge: "Apoya Local"
    },
    {
      icon: Baby,
      title: "Zona Infantil y Familiar",
      description: "Actividades recreativas, pintura de rostros, cuentacuentos navideños y la visita sorpresa de Papá Noel. Un espacio seguro para que los más pequeños vivan la magia de la Navidad.",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-300",
      badge: "100% Familiar"
    },
    {
      icon: UtensilsCrossed,
      title: "Gastronomía Local",
      description: "Sabores tradicionales y platos navideños preparados por cocineros de la comunidad. Food trucks con opciones para todos los gustos. Parte de las ganancias se destinan a la causa.",
      color: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-orange-300",
      badge: "Delicioso"
    },
    {
      icon: Gift,
      title: "Rifa Solidaria",
      description: "Con tu entrada o donación participas automáticamente en sorteos de canastas navideñas, merchandising exclusivo del evento y premios especiales de nuestros patrocinadores.",
      color: "from-red-500/20 to-rose-500/20",
      iconColor: "text-red-300",
      badge: "Participa y Gana"
    },
    {
      icon: Camera,
      title: "Experiencias Compartidas",
      description: "Photobooth navideño, mural colaborativo de deseos y espacios instagrameables para que captures y compartas la alegría del momento.",
      color: "from-yellow-500/20 to-amber-500/20",
      iconColor: "text-yellow-300",
      badge: "#NaviFest2025"
    }
  ];

  return (
    <section id="schedule" className="py-20 md:py-28 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 text-9xl rotate-12">🎵</div>
        <div className="absolute bottom-40 left-20 text-9xl -rotate-12">🎪</div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-400/10 border border-purple-400/20 mb-6">
            <Sparkles className="h-4 w-4 text-purple-300" />
            <span className="text-purple-200 text-sm font-medium">Programa Completo</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Una Noche Llena de Magia,
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-yellow-300">
              Música y Propósito
            </span>
          </h2>

          <p className="text-lg text-white/80 leading-relaxed">
            NaviFest no es solo un concierto, es una <span className="text-amber-300 font-semibold">experiencia completa</span> donde 
            cada actividad está diseñada para unir a la comunidad y celebrar el verdadero sentido de la Navidad.
          </p>
        </motion.div>

        {/* Actividades Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full group hover:scale-105 hover:shadow-xl hover:shadow-white/5">
                <CardHeader>
                  <div className={`w-full h-32 rounded-2xl bg-linear-to-br ${activity.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                    <activity.icon className={`h-16 w-16 ${activity.iconColor}`} strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-xl text-white">{activity.title}</CardTitle>
                    <span className="text-xs px-2 py-1 rounded-full bg-amber-400/20 text-amber-200 whitespace-nowrap">
                      {activity.badge}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/75 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Horario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Cronograma del Evento
          </h3>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { time: "18:00", title: "Apertura & Bienvenida", desc: "Palabras de la organización y presentación de la causa", highlight: true },
              { time: "18:30", title: "Banda 1: Inicio Musical", desc: "Rock y pop navideño con los mejores éxitos de la temporada" },
              { time: "19:15", title: "Show Infantil", desc: "Villancicos, dinámicas y diversión para toda la familia" },
              { time: "20:00", title: "Banda 2: Invitado Especial", desc: "Artista sorpresa que hará vibrar el escenario" },
              { time: "21:00", title: "Feria Solidaria Abierta", desc: "Recorre los stands de emprendedores con causa" },
              { time: "21:30", title: "Gran Rifa Solidaria", desc: "Sorteo de premios especiales y canastas navideñas" },
              { time: "22:00", title: "Cierre y Agradecimientos", desc: "Reporte preliminar de recaudación y palabras finales" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className={`${item.highlight ? 'bg-linear-to-r from-amber-500/20 to-red-500/20 border-amber-400/30' : 'bg-white/5 border-white/10'} hover:bg-white/10 transition-all duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center gap-3 md:min-w-[120px]">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${item.highlight ? 'bg-amber-400/30' : 'bg-white/10'}`}>
                          <Calendar className={`h-5 w-5 ${item.highlight ? 'text-amber-300' : 'text-white/70'}`} />
                        </div>
                        <span className={`text-2xl font-bold ${item.highlight ? 'text-amber-300' : 'text-white'}`}>
                          {item.time}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-white/70 text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-br from-amber-500/20 via-red-500/20 to-rose-500/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Vive una noche inolvidable
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Sabiendo que cada sonrisa, cada canción y cada momento compartido está construyendo 
            un futuro mejor para nuestra comunidad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-linear-to-r from-amber-400 to-amber-500 text-red-950 hover:from-amber-500 hover:to-amber-600 font-bold shadow-lg"
              onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
            >
              Compra tu Entrada Solidaria
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm"
            >
              Descargar Programa PDF
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}