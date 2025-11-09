import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift } from "lucide-react";

export default function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleDonate = () => {
    const amount = selectedAmount || customAmount;
    // Aquí puedes agregar la lógica para procesar la donación
    console.log("Donación de S/", amount);
  };

  return (
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
              {/* Montos */}
              <div>
                <h3 className="font-bold mb-4 text-xl">Montos sugeridos</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[20, 50, 100, 200].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg ${
                        selectedAmount === amount
                          ? "bg-linear-to-r from-red-800 to-red-700 text-amber-300 scale-105"
                          : "bg-linear-to-r from-red-900 to-red-800 text-amber-300 hover:from-red-800 hover:to-red-700"
                      }`}
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
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="flex-1 border-red-300 focus:border-red-500 bg-white"
                    />
                    <Button 
                      className="bg-red-900 hover:bg-red-800 text-amber-300 font-bold px-8"
                      onClick={handleDonate}
                      disabled={!selectedAmount && !customAmount}
                    >
                      Donar
                    </Button>
                  </div>
                </div>

                <p className="mt-4 text-sm text-red-900/70">
                  💳 Aceptamos Yape, Plin, tarjeta y transferencia bancaria
                </p>
              </div>

              {/* QR de Yape */}
              <div className="bg-white rounded-2xl p-6 border-2 border-amber-200">
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="h-5 w-5 text-red-900" />
                  <h3 className="font-bold text-lg">Dona con Yape 🎁</h3>
                </div>
                <p className="text-sm text-red-900/80 mb-4">
                  Escanea el código QR con Yape para realizar tu donación instantáneamente.
                </p>
                
                {/* QR real de Yape */}
                <div className="aspect-square max-w-[280px] mx-auto rounded-xl bg-linear-to-br from-amber-100 to-yellow-100 border-2 border-amber-300 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/yape.jpeg" 
                    alt="QR de Yape para donaciones"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-red-900/70 text-sm font-medium">
                    Yapea al: <span className="text-red-900 font-bold">951 011 604</span>
                  </p>
                  <p className="text-red-900/60 text-xs mt-1">
                    (Nilton Ramos - Centro Pastoral Universitario UNS)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}