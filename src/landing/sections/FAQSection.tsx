import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cómo se utilizarán los fondos recaudados?",
      answer: "El 100% de las donaciones y el excedente de la venta de entradas se destinarán a alimentación, salud y educación para familias vulnerables. Publicaremos un informe detallado de uso de fondos a los 7 días posteriores al evento, con transparencia total sobre beneficiarios, montos y acciones realizadas."
    },
    {
      question: "¿Puedo donar sin asistir al evento?",
      answer: "¡Por supuesto! Puedes realizar tu donación directamente desde esta web usando Yape, Plin, transferencia bancaria o tarjeta de crédito/débito. Cada aporte, sin importar el monto, suma y transforma vidas."
    },
    {
      question: "¿El evento es familiar?",
      answer: "Sí, NaviFest es un evento 100% familiar. Contamos con zona infantil exclusiva, seguridad permanente y actividades para todas las edades. Los niños menores de 5 años ingresan gratis."
    },
    {
      question: "¿Cómo compro mi entrada?",
      answer: "Las entradas están disponibles en plataformas autorizadas o directamente en este sitio web. Recibirás tu entrada digital vía correo electrónico. Recuerda que tu entrada también es un acto de solidaridad."
    },
    {
      question: "¿Qué debo llevar el día del evento?",
      answer: "Necesitas tu entrada digital (en celular o impresa), documento de identidad, ropa cómoda acorde al clima y muchas ganas de disfrutar y compartir. No olvides traer efectivo para las compras en la feria solidaria."
    },
    {
      question: "¿Aceptan donaciones de empresas?",
      answer: "Sí, recibimos donaciones corporativas y ofrecemos certificados tributarios. Para coordinar aportes empresariales o donaciones en especie, escríbenos a contacto@navifest.org o completa el formulario de contacto."
    },
    {
      question: "¿Habrá estacionamiento disponible?",
      answer: "Sí, el recinto cuenta con estacionamiento limitado. También recomendamos el uso de transporte público o compartir vehículos. Contaremos con señalización y personal de apoyo para guiarte."
    },
    {
      question: "¿Puedo llevar alimentos o bebidas?",
      answer: "Por políticas del recinto, no se permite el ingreso de alimentos ni bebidas del exterior. Dentro del evento habrá variedad de opciones gastronómicas a precios accesibles, y parte de las ventas apoyan la causa."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 text-9xl">❓</div>
        <div className="absolute bottom-20 left-10 text-9xl">💡</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-400/10 border border-indigo-400/20 mb-6">
            <HelpCircle className="h-4 w-4 text-indigo-300" />
            <span className="text-indigo-200 text-sm font-medium">Preguntas Frecuentes</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            ¿Tienes dudas?
          </h2>
          <p className="text-lg text-white/80">
            Aquí encontrarás las respuestas a las preguntas más comunes
          </p>
        </motion.div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              <Card 
                className={`cursor-pointer transition-all duration-300 ${
                  openIndex === idx 
                    ? 'bg-white/10 border-amber-400/40 shadow-lg shadow-amber-500/10' 
                    : 'bg-white/5 border-white/10 hover:bg-white/8'
                }`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-white font-semibold text-lg flex-1 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ChevronDown className={`h-5 w-5 ${openIndex === idx ? 'text-amber-300' : 'text-white/50'}`} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-white/10">
                          <p className="text-white/75 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="bg-linear-to-br from-blue-500/10 to-purple-500/10 border-blue-400/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-white mb-3">
                ¿No encontraste tu respuesta?
              </h3>
              <p className="text-white/75 mb-6">
                Nuestro equipo está listo para ayudarte. Escríbenos y te responderemos lo antes posible.
              </p>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 hover:scale-105 font-medium"
              >
                Contactar al Equipo
              </button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}