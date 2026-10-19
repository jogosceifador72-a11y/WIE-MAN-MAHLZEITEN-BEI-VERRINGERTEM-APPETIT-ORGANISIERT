import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, ShoppingCart, Utensils, Sparkles, Check, FileText } from 'lucide-react';
import { CHECKOUT_URL } from './Navbar';

const MEALS_IMAGE_PATH = '/src/assets/images/gentle_nutrient_meals_1792240681439.jpg';

interface BookContentsProps {
  onOpenPreview: () => void;
}

export const BookContents: React.FC<BookContentsProps> = ({ onOpenPreview }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const modules = [
    {
      title: "1. Struktur & Feste Zeitfenster",
      pages: "Seite 4–10",
      description: "Warum das Warten auf Hunger bei Appetitlosigkeit in eine Abwärtsspirale führt – und wie Ihnen ein verlässlicher 3-Stunden-Rhythmus sofort Sicherheit und Routine schenkt.",
      points: [
        "Der biologische Tagesrhythmus: Warum kleine Intervalle den Magen entlasten",
        "Feste Essenszeiten etablieren, ohne Wecker-Stress zu erzeugen",
        "Umgang mit Schwankungen an guten und schlechten Tagen",
      ],
    },
    {
      title: "2. Nährstoffanreicherung ohne Völlegefühl",
      pages: "Seite 11–18",
      description: "Das Geheimnis hoher Energiedichte: Wie Sie jede kleine Mahlzeit unauffällig verdoppeln, ohne den Magen zu überfordern oder das Geschmackserlebnis zu zerstören.",
      points: [
        "Die Top 10 schonenden Energieträger (gesunde Fette & pflanzliche Proteine)",
        "Wie man Mahlzeiten unbemerkt anreichert (für sich selbst oder Angehörige)",
        "Kalorien-Checkliste für den schnellen Überblick",
      ],
    },
    {
      title: "3. Sanfte Rezepte & Textur-Geheimnisse",
      pages: "Seite 19–25",
      description: "Erprobte, samtige Rezepte, die leicht gleiten und minimale Kauanstrengung erfordern. Von wärmenden Morgenbreien bis zu nährenden Abendsuppen.",
      points: [
        "15 sanfte Rezepte: Cremige Suppen, Seiden-Porridges, Kraft-Puddings & Drinks",
        "Die optimale Serviertemperatur: Warum lauwarm oft besser toleriert wird als heiß",
        "Natürliche Appetitanreger: Kräuter, Zitrone und feine Gewürze gezielt einsetzen",
      ],
    },
    {
      title: "4. Wochenplaner & Einkaufsliste (Bonus)",
      pages: "Seite 26–30",
      description: "Die praktischen Werkzeuge für Ihren Alltag. Sparen Sie Nerven und Zeit bei der Vorbereitung und dem Einkauf.",
      points: [
        "Druckfertiger Wochenplaner zur einfachen Übersicht",
        "Vorsortierte Einkaufsliste nach Supermarkt-Kategorien",
        "Notfall-Vorrat: Was Sie für schwierige Tage immer im Schrank haben sollten",
      ],
    },
  ];

  return (
    <section id="buchinhalt" className="py-16 sm:py-24 bg-white/70 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-[#2D5A27]">
            Inhaltsübersicht
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-title text-balance">
            Was steckt im 30-Seiten-PDF-Leitfaden?
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Ein fokussierter, praxisnaher Ratgeber ohne überflüssige Theorie. Jede Seite ist darauf ausgelegt, Ihnen sofort spürbare Erleichterung zu bringen.
          </p>
        </motion.div>

        {/* Visual & Modules Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left: Interactive Tab Modules */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            {modules.map((m, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isActive
                      ? 'bg-[#FAF9F5] border-[#2D5A27]/40 shadow-xs'
                      : 'bg-white border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <button
                    onClick={() => setActiveTab(idx)}
                    className="w-full p-4.5 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          isActive
                            ? 'bg-[#2D5A27] text-white'
                            : 'bg-stone-100 text-stone-600'
                        }`}
                      >
                        0{idx + 1}
                      </div>
                      <span className="font-bold text-stone-900 text-sm sm:text-base">
                        {m.title}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-stone-500 tabular-nums shrink-0">
                      {m.pages}
                    </span>
                  </button>

                  {isActive && (
                    <div className="px-5 pb-5 pt-1 space-y-3 border-t border-stone-200/60">
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {m.description}
                      </p>
                      <ul className="space-y-1.5 pt-1">
                        {m.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-stone-700">
                            <Check className="w-3.5 h-3.5 text-[#2D5A27] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenPreview}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#2D5A27]" />
                <span>Leseprobe im Browser durchblättern</span>
              </button>
            </div>
          </motion.div>

          {/* Right: Meal Gallery Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="rounded-2xl border border-stone-200 overflow-hidden shadow-xs bg-white">
              <div className="aspect-[16/10] relative">
                <img
                  src={MEALS_IMAGE_PATH}
                  alt="Vielfältige sanfte Mahlzeiten: Haferbrei mit Beeren, Suppe und Smoothie"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-stone-800 border border-white/60">
                  Rezepte & Texturen
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-bold text-stone-900 text-base font-serif-title">
                  Sanfte Rezepte für den ganzen Tag
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Von feinem Mandelbrei über wärmende Gemüsesuppen bis hin zu erfrischenden Elixieren: Alle Rezepte sind speziell darauf abgestimmt, ohne schwere Verdauung maximale Nährstoffe zu schenken.
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-stone-500 border-t border-stone-100">
                  <span>Einfache Zubereitung (10-15 Min)</span>
                  <span className="font-medium text-[#2D5A27]">100% alltagstauglich</span>
                </div>
              </div>
            </div>

            {/* Quick delivery format card */}
            <div className="p-4 bg-[#FAF9F5] rounded-xl border border-stone-200 text-xs space-y-2">
              <div className="flex items-center gap-2 font-semibold text-stone-800">
                <FileText className="w-4 h-4 text-[#2D5A27]" />
                <span>Format & Lieferung:</span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                PDF-Datei mit 30 Seiten. Funktioniert auf allen Smartphones, Tablets (iPad/Android) sowie Windows & Mac Computern. Auch ideal zum Ausdrucken.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
