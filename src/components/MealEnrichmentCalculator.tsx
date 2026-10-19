import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Plus, Check, Info, ArrowUpRight } from 'lucide-react';
import { CHECKOUT_URL } from './Navbar';

interface Booster {
  id: string;
  name: string;
  amount: string;
  calories: number;
  protein: number;
  benefit: string;
}

const AVAILABLE_BOOSTERS: Booster[] = [
  { id: 'almond', name: 'Weißes Mandelmus', amount: '1 gehäufter EL (20g)', calories: 125, protein: 4.8, benefit: 'Mild im Geschmack, unauffällig & cremig' },
  { id: 'hemp', name: 'Geschälte Hanfsamen', amount: '1 EL (15g)', calories: 88, protein: 4.6, benefit: 'Fein wie Puder, reich an Omega-3' },
  { id: 'oil', name: 'Kaltgepresstes Leinöl / Olivenöl', amount: '1 TL (5ml)', calories: 45, protein: 0, benefit: 'Hochwertige Fettsäuren, sanft für den Magen' },
  { id: 'coconut', name: 'Reine Kokoscreme', amount: '2 EL (30ml)', calories: 75, protein: 0.9, benefit: 'Spendet Energie ohne Kauen' },
];

export const MealEnrichmentCalculator: React.FC = () => {
  const [baseMeal, setBaseMeal] = useState<'porridge' | 'soup' | 'smoothie'>('porridge');
  const [selectedBoosters, setSelectedBoosters] = useState<string[]>(['almond', 'hemp']);

  const baseMeals = {
    porridge: { name: 'Kleine Schale Haferbrei (150ml)', calories: 140, protein: 4.2 },
    soup: { name: 'Feine Gemüsesuppe (150ml)', calories: 85, protein: 2.1 },
    smoothie: { name: 'Milder Bananenbecher (150ml)', calories: 120, protein: 1.8 },
  };

  const currentBase = baseMeals[baseMeal];

  const toggleBooster = (id: string) => {
    setSelectedBoosters((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const boosterCalories = selectedBoosters.reduce((acc, id) => {
    const b = AVAILABLE_BOOSTERS.find((x) => x.id === id);
    return acc + (b ? b.calories : 0);
  }, 0);

  const boosterProtein = selectedBoosters.reduce((acc, id) => {
    const b = AVAILABLE_BOOSTERS.find((x) => x.id === id);
    return acc + (b ? b.protein : 0);
  }, 0);

  const totalCalories = currentBase.calories + boosterCalories;
  const totalProtein = Number((currentBase.protein + boosterProtein).toFixed(1));
  const increasePercentage = Math.round(((totalCalories - currentBase.calories) / currentBase.calories) * 100);

  return (
    <section className="py-16 bg-transparent border-b border-stone-200/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27]">
            Interaktiver Praxiseinblick
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-title">
            Wie Sie Energie verdoppeln – ohne mehr zu kauen
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Probieren Sie es selbst: Wählen Sie eine Basismahlzeit und fügen Sie sanfte Anreicherer hinzu. Die Portionsgröße bleibt fast identisch!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Base Meal Selector */}
            <div>
              <label className="text-xs font-semibold text-stone-700 block mb-2 uppercase tracking-wide">
                1. Wählen Sie Ihre kleine Basisschale:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'porridge', label: 'Haferbrei' },
                  { key: 'soup', label: 'Gemüsesuppe' },
                  { key: 'smoothie', label: 'Smoothie' },
                ].map((meal) => (
                  <button
                    key={meal.key}
                    onClick={() => setBaseMeal(meal.key as any)}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center ${
                      baseMeal === meal.key
                        ? 'bg-[#2D5A27] text-white border-[#2D5A27] shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {meal.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Booster Multi-select */}
            <div>
              <label className="text-xs font-semibold text-stone-700 block mb-2 uppercase tracking-wide">
                2. Sanfte Anreicherer aktivieren (im E-Book detailliert erklärt):
              </label>
              <div className="space-y-2">
                {AVAILABLE_BOOSTERS.map((booster) => {
                  const isSelected = selectedBoosters.includes(booster.id);
                  return (
                    <button
                      key={booster.id}
                      onClick={() => toggleBooster(booster.id)}
                      className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-[#EBF3E8] border-[#2D5A27]/40 shadow-2xs'
                          : 'bg-stone-50/70 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 text-xs ${
                            isSelected
                              ? 'bg-[#2D5A27] text-white'
                              : 'border border-stone-300 bg-white'
                          }`}
                        >
                          {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3 h-3 text-stone-400" />}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-stone-900">
                            {booster.name}
                          </p>
                          <p className="text-[11px] text-stone-500">
                            {booster.amount} · {booster.benefit}
                          </p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 pl-2">
                        <span className="text-xs font-mono font-bold text-[#2D5A27] tabular-nums">
                          +{booster.calories} kcal
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-[#FAF9F5] rounded-xl p-6 border border-stone-200 space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <span className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                Ernährungs-Bilanz
              </span>
              <span className="text-xs font-bold text-[#2D5A27] bg-[#EBF3E8] px-2 py-0.5 rounded-full">
                +{increasePercentage}% Nährstoffdichte
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs text-stone-600">
                <span>Basis-Portion:</span>
                <span className="font-mono tabular-nums">{currentBase.calories} kcal</span>
              </div>
              <div className="flex justify-between items-center text-xs text-stone-600">
                <span>Zusätzliche Sanft-Energie:</span>
                <span className="font-mono tabular-nums text-[#2D5A27]">+{boosterCalories} kcal</span>
              </div>
              <div className="flex justify-between items-center text-xs text-stone-600">
                <span>Gesamtes Protein:</span>
                <span className="font-mono tabular-nums">{totalProtein} g</span>
              </div>

              <div className="pt-3 border-t border-stone-200 flex justify-between items-baseline">
                <span className="text-sm font-bold text-stone-900">
                  Gesamtwert pro Schale:
                </span>
                <span className="text-2xl font-extrabold text-[#2D5A27] font-mono tabular-nums">
                  {totalCalories} kcal
                </span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 flex items-start gap-2">
              <Info className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Gleiche Essmenge, mehr Kraft:</strong> Ihr Magen wird nicht gedehnt, und doch erhält Ihr Körper die lebensnotwendigen Nährstoffe.
              </p>
            </div>

            <a
              href={CHECKOUT_URL}
              className="w-full flex items-center justify-center py-2.5 px-4 text-xs font-bold text-white bg-[#2D5A27] hover:bg-[#23461e] rounded-lg shadow-xs transition-colors"
            >
              <span>Alle Rezepte im Leitfaden freischalten</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
