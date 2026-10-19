import React from 'react';
import { motion } from 'motion/react';
import { CalendarClock, Zap, Smile, CheckCircle2, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from './Navbar';

const DINING_IMAGE_PATH = '/src/assets/images/peaceful_dining_table_1792240682327.jpg';

export const CoreProblems: React.FC = () => {
  const problems = [
    {
      icon: CalendarClock,
      problemTitle: "Kein Hunger, kein Plan",
      problemDesc: "Man wartet vergeblich auf Appetit, schiebt Mahlzeiten stundenlang auf und weiß am Ende nicht mehr, was und wann man überhaupt essen soll.",
      solutionTitle: "Feste Zeitfenster & Wochenstruktur",
      solutionDesc: "Klare, sanfte Zeitfenster alle 3 Stunden entlasten Ihren Kopf von der Frage 'Habe ich jetzt Hunger?'. Der Wochenplaner bringt verlässliche Ruhe in den Tag.",
    },
    {
      icon: Zap,
      problemTitle: "Zu wenig Energie bei kleinen Portionen",
      problemDesc: "Nur wenige Bissen geschafft – und das schlechte Gewissen wächst, weil die Kraft fehlt und das Gewicht sinkt.",
      solutionTitle: "Unauffällige Nährstoffanreicherung",
      solutionDesc: "Sie lernen praxiserprobte Methoden, wie eine einzige kleine Schale mit gesunden Fetten und schonenden Proteinen unbemerkt die doppelte bis dreifache Energie liefert.",
    },
    {
      icon: Smile,
      problemTitle: "Essen als tägliche Belastung & Zwang",
      problemDesc: "Überfüllte Teller erzeugen Frust, Blockaden und Druck – sei es für Sie selbst oder durch besorgte Angehörige am Familientisch.",
      solutionTitle: "Sanfte Texturen & Appetitanreger",
      solutionDesc: "Kleine Schalen, passende Temperaturen, cremige Konsistenzen und natürliche Sinnesanreize machen das Essen wieder zu einem angenehmen, druckfreien Erlebnis.",
    },
  ];

  return (
    <section id="probleme-loesung" className="py-16 sm:py-24 bg-white/70 backdrop-blur-md border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-[#2D5A27]">
            Die Transformation
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-title text-balance">
            Was dieses Buch für Ihren Alltag löst
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Schluss mit dem täglichen Kampf vor dem vollen Teller. Der Leitfaden nimmt Ihnen die größten Hürden und ersetzt Unsicherheit durch einen sanften, erprobten Fahrplan.
          </p>
        </motion.div>

        {/* 3 Core Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#FAF9F5]/90 backdrop-blur-xs rounded-2xl p-6 border border-stone-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#2D5A27] shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Problem state */}
                  <div className="pb-3 border-b border-stone-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                      Vorherige Hürde
                    </span>
                    <h3 className="text-base font-bold text-stone-900 mt-0.5">
                      {item.problemTitle}
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {item.problemDesc}
                    </p>
                  </div>

                  {/* Solution state */}
                  <div className="pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D5A27]">
                      Lösung im Leitfaden
                    </span>
                    <h4 className="text-sm font-semibold text-stone-900 mt-0.5">
                      {item.solutionTitle}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {item.solutionDesc}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#2D5A27]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Schritt für Schritt im Buch erklärt</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Split Banner with Generated Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF9F5]/95 backdrop-blur-xs rounded-2xl border border-stone-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center shadow-sm"
        >
          
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27]">
              Das spürbare Ergebnis
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 font-serif-title leading-snug">
              „Sie wissen nach der Lektüre genau, wie Sie Ihre Ernährung auch bei wenig Appetit entspannt und nährstoffreich organisieren.“
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Kein Rätselraten mehr. Sie gewinnen die Kontrolle und Sicherheit zurück – ohne Zwang, ohne Streit am Esstisch und ohne komplizierte Diätregeln.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-[#2D5A27] hover:bg-[#23461e] rounded-xl shadow-xs hover:shadow-md transition-all"
              >
                <span>Jetzt für 26,41 € bestellen</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
              <span className="inline-flex items-center text-xs text-stone-500 py-2">
                Sofortiger E-Mail-Download als PDF
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[280px]">
            <img
              src={DINING_IMAGE_PATH}
              alt="Entspanntes und nährstoffreiches Essen ohne Druck"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-stone-900/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-lg border border-white/60 text-[11px] text-stone-800 font-medium">
              Sanfte Wärme, harmonische Düfte und kleine Portionen machen den Unterschied.
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
