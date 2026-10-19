import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Check, BookOpen, Clock, Heart, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URL } from './Navbar';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, onClose }) => {
  const [activePage, setActivePage] = useState(0);

  const pages = [
    {
      title: "Kapitel 1: Der sanfte Tagesrhythmus",
      subtitle: "Feste Zeitfenster statt Druck durch Hungergefühl",
      tag: "Strategie & Struktur",
      content: (
        <div className="space-y-4 text-stone-700 text-sm">
          <p className="leading-relaxed">
            Wenn das natürliche Hungergefühl ausbleibt, führt das Warten auf Appetit oft dazu, dass stundenlang gar nichts gegessen wird. Der Körper gerät in ein Energiedefizit, und am Abend entsteht Erschöpfung.
          </p>
          <div className="bg-[#FAF9F5] p-4 rounded-xl border border-stone-200">
            <h4 className="font-semibold text-stone-900 mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#2D5A27]" />
              Die 5-Phasen-Taktung (3-Stunden-Rhythmus):
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#2D5A27] min-w-[70px]">08:30 Uhr:</span>
                <span>Phase 1 · Sanfter Start (warmer Porridge oder milder Fruchtquark)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#2D5A27] min-w-[70px]">11:30 Uhr:</span>
                <span>Phase 2 · Kleiner Nährstoff-Kick (Avocado-Happen oder Bananen-Smoothie)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#2D5A27] min-w-[70px]">14:30 Uhr:</span>
                <span>Phase 3 · Nährende Wärme (feine Kürbis- oder Kartoffel-Cremesuppe)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#2D5A27] min-w-[70px]">17:30 Uhr:</span>
                <span>Phase 4 · Milder Nachmittag (Apfelmark mit Nussbutter)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#2D5A27] min-w-[70px]">20:00 Uhr:</span>
                <span>Phase 5 · Ruhiger Ausklang (weiches Rührei oder Grießbrei)</span>
              </li>
            </ul>
          </div>
          <p className="text-xs text-stone-500 italic">
            „Nicht die Menge zählt, sondern die Beständigkeit. Schon 4 bis 5 Bissen alle 3 Stunden entlasten Ihren Stoffwechsel.“
          </p>
        </div>
      ),
    },
    {
      title: "Kapitel 2: Nährstoffdichte unauffällig verdoppeln",
      subtitle: "Mehr Energie bei kleinen Schalen ohne Völlegefühl",
      tag: "Praxis-Tipp",
      content: (
        <div className="space-y-4 text-stone-700 text-sm">
          <p className="leading-relaxed">
            Übervolle Teller lösen bei verringertem Appetit sofortige Abwehr aus. Das Geheimnis liegt darin, dieselbe kleine Schale mit energiereichen, leicht verdaulichen Zutaten anzureichern.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-red-50/70 border border-red-100 rounded-lg">
              <p className="text-xs font-semibold text-red-800 mb-1">Standard Porridge (200ml)</p>
              <p className="text-xl font-bold text-red-900 font-mono tabular-nums">~180 kcal</p>
              <p className="text-[11px] text-red-700 mt-1">Haferflocken & Wasser/Milch</p>
            </div>
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
              <p className="text-xs font-semibold text-emerald-800 mb-1">Sanft angereichert</p>
              <p className="text-xl font-bold text-[#2D5A27] font-mono tabular-nums">~420 kcal</p>
              <p className="text-[11px] text-emerald-700 mt-1">+ Mandelmus, Hanfsamen, Kokosöl</p>
            </div>
          </div>
          <div className="bg-[#FAF9F5] p-3 rounded-lg border border-stone-200 text-xs text-stone-600">
            <p className="font-semibold text-stone-800 mb-1">Die 4 besten sanften Anreicherer:</p>
            <p>1. Neutrales Mandel- oder Cashewmus (1 Esslöffel = ~95 kcal, mild und unaufdringlich)</p>
            <p>2. Geschälte Hanfsamen (fein wie Puderzucker, 1 EL = ~55 kcal & wertvolle Proteine)</p>
            <p>3. Kaltgepresstes Leinöl (geschmacksneutral eingerührt kurz vor dem Servieren)</p>
            <p>4. Magerquark mit Sahne oder Kokosmilch verfeinert</p>
          </div>
        </div>
      ),
    },
    {
      title: "Rezept-Beispiel: Sanfte Seiden-Kürbissuppe",
      subtitle: "Mit Mandelcreme & gerösteten Kürbiskernen",
      tag: "Sanfte Rezepte",
      content: (
        <div className="space-y-3.5 text-stone-700 text-sm">
          <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-200 pb-2">
            <span>Zubereitung: 15 Minuten</span>
            <span>Portionen: 2 kleine Schalen</span>
            <span className="text-[#2D5A27] font-semibold">Leicht bekömmlich</span>
          </div>
          <p className="text-xs leading-relaxed">
            Fein pürierte Suppen umgehen das Kauen, wenn die Kraft fehlt. Die samtige Textur beruhigt den Magen und wärmt angenehm.
          </p>
          <div className="text-xs space-y-1.5 bg-[#FAF9F5] p-3 rounded-lg border border-stone-200">
            <p className="font-semibold text-stone-800">Zutaten im Überblick:</p>
            <p>• 250g Hokkaido-Kürbis (weich gedämpft)</p>
            <p>• 150ml milde Gemüsebrühe</p>
            <p>• 2 EL weiße Mandelcreme (für seidige Sämigkeit und Kaloriendichte)</p>
            <p>• 1 Prise Ingwerpulver (natürlicher Appetitanreger)</p>
            <p>• 1 TL feines Kürbiskernöl zum Beträufeln</p>
          </div>
          <p className="text-xs text-stone-500">
            Im Leitfaden finden Sie 14 weitere Rezepte: Frühstücks-Elixiere, nährende Breie, feine Suppen und kleine Kraft-Happen.
          </p>
        </div>
      ),
    },
    {
      title: "Bonus: Der druckbare Wochenplaner",
      subtitle: "Stressfreie Vorbereitung mit strukturierter Einkaufsliste",
      tag: "Praxis-Werkzeug",
      content: (
        <div className="space-y-4 text-stone-700 text-sm">
          <p className="leading-relaxed">
            Keine Überforderung mehr beim Blick in den leeren Kühlschrank. Der im E-Book enthaltene Wochenplaner hilft Ihnen oder Ihren Angehörigen, die Mahlzeiten mit Leichtigkeit zu visualisieren.
          </p>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs space-y-2">
            <div className="flex justify-between items-center font-semibold text-stone-800 border-b border-stone-200 pb-1">
              <span>Wochenübersicht</span>
              <span className="text-[#2D5A27]">Druckfertiges A4-Format</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[11px] text-stone-600">
              <div className="p-1.5 bg-white rounded border border-stone-200">
                <span className="font-bold text-stone-900 block">Vormittag</span>
                Kleine Portion 1 & 2
              </div>
              <div className="p-1.5 bg-white rounded border border-stone-200">
                <span className="font-bold text-stone-900 block">Nachmittag</span>
                Warme Schale & Tee
              </div>
              <div className="p-1.5 bg-white rounded border border-stone-200">
                <span className="font-bold text-stone-900 block">Abend</span>
                Sanfter Ausklang
              </div>
            </div>
          </div>
          <p className="text-xs text-stone-600">
            Einfach ausdrucken oder digital auf Tablet / Smartphone ausfüllen. Inklusive vorausgefüllter Zutatenliste für den Wocheneinkauf.
          </p>
        </div>
      ),
    },
  ];

  if (!isOpen) return null;

  const current = pages[activePage];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl max-w-xl w-full border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF9F5]">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#2D5A27]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Exklusiver Leseproben-Einblick (Seite {activePage + 1} von {pages.length})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-200/50 transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal body */}
          <div className="p-6 overflow-y-auto space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-[#2D5A27] bg-[#EBF3E8] px-2.5 py-0.5 rounded-md">
                {current.tag}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-stone-900 font-serif-title">
                {current.title}
              </h3>
              <p className="text-xs text-stone-500 mt-1">{current.subtitle}</p>
            </div>
            <div className="pt-2">{current.content}</div>
          </div>

          {/* Modal footer navigation & CTA */}
          <div className="px-6 py-4 border-t border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                disabled={activePage === 0}
                onClick={() => setActivePage((prev) => Math.max(0, prev - 1))}
                className="p-2 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Vorherige Seite"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-stone-500 font-medium">
                {activePage + 1} / {pages.length}
              </span>
              <button
                disabled={activePage === pages.length - 1}
                onClick={() => setActivePage((prev) => Math.min(pages.length - 1, prev + 1))}
                className="p-2 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Nächste Seite"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={CHECKOUT_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#2D5A27] rounded-lg hover:bg-[#23461e] transition-colors shadow-xs"
              >
                Vollständigen Leitfaden kaufen (26,41 €)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
