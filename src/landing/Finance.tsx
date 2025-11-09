import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, BarChart, TrendingUp, Users, Gift, Truck } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/core/Footer";

export default function Finance() {
  
  const distribucionFondos = [
    { categoria: "Alimentos", porcentaje: 45, color: "bg-amber-500", monto: "S/ 0" },
    { categoria: "Juguetes y Regalos", porcentaje: 25, color: "bg-red-500", monto: "S/ 0" },
    { categoria: "Logística del Evento", porcentaje: 15, color: "bg-green-500", monto: "S/ 0" },
    { categoria: "Materiales y Publicidad", porcentaje: 10, color: "bg-blue-500", monto: "S/ 0" },
    { categoria: "Gastos Operativos", porcentaje: 5, color: "bg-purple-500", monto: "S/ 0" }
  ];

  const metricas = [
    {
      icon: TrendingUp,
      title: "Total Recaudado",
      value: "S/ 0",
      description: "Meta: S/ 200",
      progress: 0
    },
    {
      icon: Users,
      title: "Familias Beneficiadas",
      value: "0",
      description: "Meta: 20 familias",
      progress: 0
    },
    {
      icon: Gift,
      title: "Donaciones en Especie",
      value: "0",
      description: "Juguetes y alimentos",
      progress: 0
    },
    {
      icon: Truck,
      title: "Voluntarios Activos",
      value: "35",
      description: "Comunidad UNS",
      progress: 100
    }
  ];

  const hitos = [
    {
      fecha: "Nov 2024",
      evento: "Inicio de campaña de recaudación",
      status: "en-proceso"
    },
    {
      fecha: "Dic 2024",
      evento: "Compra de alimentos no perecibles",
      status: "pendiente"
    },
    {
      fecha: "15 Dic 2024",
      evento: "Adquisición de juguetes educativos",
      status: "pendiente"
    },
    {
      fecha: "Próximamente",
      evento: "Entrega en evento NaviFest",
      status: "pendiente"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-red-950 via-red-900 to-amber-900 text-white">
      {/* Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 text-9xl">📈</div>
          <div className="absolute bottom-20 left-20 text-9xl">🎯</div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mb-6">
              <PieChart className="h-4 w-4 text-blue-300" />
              <span className="text-blue-200 text-sm font-medium">Transparencia en Acción</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Informe de Uso de
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-yellow-300">
                Fondos
              </span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Consulta en tiempo real cómo estamos utilizando cada sol donado para maximizar 
              el impacto en nuestra comunidad esta Navidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Métricas Principales */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Métricas del Proyecto
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Seguimiento en tiempo real de nuestro progreso hacia los objetivos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricas.map((metrica, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-500/20 to-red-500/20 flex items-center justify-center mx-auto mb-4">
                      <metrica.icon className="h-6 w-6 text-amber-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {metrica.value}
                    </h3>
                    <p className="text-white/90 font-medium mb-2">
                      {metrica.title}
                    </p>
                    <p className="text-white/70 text-sm mb-3">
                      {metrica.description}
                    </p>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-linear-to-r from-amber-400 to-amber-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${metrica.progress}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribución de Fondos */}
      <section className="py-20 bg-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Distribución de Fondos
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Así estamos asignando los recursos para maximizar el impacto social.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Gráfico de distribución */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-linear-to-br from-amber-500/10 to-red-500/10 border-amber-400/20">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-amber-300" />
                    Distribución Porcentual
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {distribucionFondos.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded ${item.color}`} />
                          <span className="text-white/90 text-sm">
                            {item.categoria}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-white font-medium">
                            {item.porcentaje}%
                          </span>
                          <span className="text-white/70 text-sm w-20 text-right">
                            {item.monto}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cronograma de hitos */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-amber-300" />
                    Cronograma de Ejecución
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {hitos.map((hito, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`w-3 h-3 rounded-full mt-1.5 ${
                          hito.status === 'completado' ? 'bg-green-500' :
                          hito.status === 'en-proceso' ? 'bg-amber-500' : 'bg-white/30'
                        }`} />
                        <div className="flex-1">
                          <div className="text-white font-medium">
                            {hito.evento}
                          </div>
                          <div className="text-white/60 text-sm">
                            {hito.fecha}
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs font-medium ${
                          hito.status === 'completado' ? 'bg-green-500/20 text-green-300' :
                          hito.status === 'en-proceso' ? 'bg-amber-500/20 text-amber-300' : 
                          'bg-white/10 text-white/60'
                        }`}>
                          {hito.status === 'completado' ? 'Completado' :
                           hito.status === 'en-proceso' ? 'En Proceso' : 'Pendiente'}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Información Adicional */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded-3xl p-8 md:p-12 border border-purple-400/30 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              ¿Tienes preguntas sobre el uso de fondos?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Estamos comprometidos con la transparencia total. Si tienes alguna duda específica 
              sobre cómo se están utilizando los recursos, no dudes en contactarnos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/#contact"
                className="px-6 py-3 bg-linear-to-r from-amber-400 to-amber-500 text-red-950 font-bold rounded-xl hover:from-amber-500 hover:to-amber-600 transition-all duration-300"
              >
                Contactar al Equipo
              </a>
              <a 
                href="/politica-donaciones"
                className="px-6 py-3 border-2 border-white/30 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Ver Política Completa
              </a>
            </div>
          </motion.div>

          <div className="text-center mt-12">
            <p className="text-white/60 text-sm">
              Informe actualizado al {new Date().toLocaleDateString('es-PE', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}