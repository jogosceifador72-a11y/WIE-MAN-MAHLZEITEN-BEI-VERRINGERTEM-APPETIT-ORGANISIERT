import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Wie erhalte ich das E-Book nach der Bezahlung?",
    answer: "Unmittelbar nach der Zahlungsbestätigung erhalten Sie eine E-Mail mit Ihrem persönlichen Download-Link. Sie können die 30-seitige PDF-Datei sofort auf Ihr Smartphone, Tablet oder Ihren Computer herunterladen und direkt mit dem Lesen beginnen.",
  },
  {
    question: "Auf welchen Geräten kann ich das PDF öffnen?",
    answer: "Das PDF-Dokument ist universell lesbar auf allen Geräten: Apple iPhones & iPads, Android-Smartphones & Tablets, Windows-PCs und Mac-Computern. Sie können den Wochenplaner und die Einkaufsliste auch bequem auf Ihrem Heimdrucker ausdrucken.",
  },
  {
    question: "Sind die Rezepte und Strategien kompliziert umzusetzen?",
    answer: "Nein, ganz im Gegenteil. Das Buch verzichtet bewusst auf komplizierte Kochkunst oder lange Theorien. Die Rezepte sind auf 10 bis 15 Minuten Zubereitungszeit ausgelegt und erfordern lediglich alltägliche, schonende Zutaten und einfache Hilfsmittel wie einen kleinen Pürierstab oder Mixer.",
  },
  {
    question: "Ist das Buch auch für pflegende Angehörige geeignet?",
    answer: "Ja, absolut. Viele Leserinnen und Leser nutzen den Leitfaden, um Eltern, Partner oder Angehörige zu begleiten, denen das Essen schwerfällt. Sie lernen, wie Sie ohne Vorwürfe, Druck oder überladene Teller kleine, nährstoffreiche Schalen zaubern.",
  },
  {
    question: "Gibt es ein Abonnement oder zusätzliche Kosten?",
    answer: "Nein, Sie zahlen einmalig 26,41 €. Es gibt kein verstecktes Abonnement und keine wiederkehrenden Kosten. Sie haben dauerhaften Zugriff auf Ihr PDF inklusive aller Boni.",
  },
  {
    question: "Ersetzt der Ratgeber eine ärztliche Beratung?",
    answer: "Nein. Der Leitfaden versteht sich als alltagspraktische Hilfestellung zur entspannten Gestaltung und sanften Anreicherung Ihrer Mahlzeiten. Er ersetzt keine medizinische oder ernährungstherapeutische Diagnose oder Behandlung.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-transparent border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3 mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-[#2D5A27]">
            Häufige Fragen
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-title">
            Alles, was Sie vor dem Kauf wissen müssen
          </h2>
          <p className="text-sm text-stone-600">
            Haben Sie Fragen zur Lieferung, zum Format oder zur Anwendbarkeit? Hier finden Sie alle Antworten.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/85 backdrop-blur-md rounded-xl border border-stone-200/90 overflow-hidden transition-all duration-200 shadow-2xs hover:shadow-xs"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-4.5 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-stone-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#2D5A27]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4.5 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
