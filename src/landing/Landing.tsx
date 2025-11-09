import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HeartHandshake, Gift, ChevronUp } from "lucide-react";
import HeroSection from "@/landing/sections/HeroSection";
import MessageSection from "@/landing/sections/MessageSection";
import ProposalSection from "@/landing/sections/ProposalSection";
import PartnerSection from "@/landing/sections/PartnerSection";
import FAQSection from "@/landing/sections/FAQSection";
import ContactSection from "@/landing/sections/ContactSection";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Landing() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-red-950 via-red-900 to-amber-900 text-white">
      <Navbar scrollToTop={scrollToTop} />

      <div id="hero">
        <HeroSection />
      </div>

      <div id="about">
        <MessageSection />
      </div>

      <section id="donate" className="py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <Card className="bg-linear-to-br from-amber-50 to-yellow-50 text-red-950 border-amber-200 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-200/30 rounded-full blur-3xl" />
            
            <CardContent className="p-8 md:p-12 relative">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Dona y cambia una Navidad
                </h2>
                <p className="text-red-900/80 max-w-2xl mx-auto">
                  Tu contribución llega directo a la causa. Elige un monto o ingresa uno personalizado.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold mb-4 text-xl">Montos sugeridos</h3>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[20, 50, 100, 200].map((amount) => (
                      <button
                        key={amount}
                        className="px-6 py-4 rounded-xl bg-linear-to-r from-red-900 to-red-800 text-amber-300 hover:from-red-800 hover:to-red-700 font-bold transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        S/ {amount}
                      </button>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Otro monto</h4>
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        placeholder="Ingresa monto"
                        className="flex-1 border-red-300 focus:border-red-500 bg-white"
                      />
                      <Button className="bg-red-900 hover:bg-red-800 text-amber-300 font-bold px-8">
                        Donar
                      </Button>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-red-900/70">
                    💳 Aceptamos Yape, Plin, tarjeta y transferencia bancaria
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-amber-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Gift className="h-5 w-5 text-red-900" />
                    <h3 className="font-bold text-lg">Rifa solidaria 🎁</h3>
                  </div>
                  <p className="text-sm text-red-900/80 mb-4">
                    Tus entradas y donaciones participan en sorteos de canastas navideñas y merchandising exclusivo.
                  </p>
                  
                  <div className="aspect-square max-w-[280px] mx-auto rounded-xl bg-linear-to-br from-amber-100 to-yellow-100 border-2 border-amber-300 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-6xl mb-3">📱</div>
                      <div className="text-amber-700 font-medium">Coloca aquí tu QR de Yape/Plin</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div id="schedule">
        <ProposalSection />
      </div>

      <div id="partners">
        <PartnerSection />
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-linear-to-r from-amber-400 to-amber-500 text-red-950 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}