import React from 'react';
import { motion } from 'motion/react';
import { Check, X, AlertCircle, HeartHandshake, ShieldAlert } from 'lucide-react';
import { CHECKOUT_URL } from './Navbar';

export const TargetAudience: React.FC = () => {
  return (
    <section id="fuer-wen" className="py-16 sm:py-24 bg-transparent border-b border-stone-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center space-y-3 mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-[#2D5A27]">
            Transparente Orientierung
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-title text-balance">
            Ist dieser Leitfaden das Richtige für Sie?
          </h2>
          <p className="text-sm text-stone-600">
            Wir möchten sicherstellen, dass dieses Buch exakt Ihren Erwartungen entspricht und Ihnen wirklich hilft.
          </p>
        </motion.div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
          
          {/* Card 1: Für wen es ist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-emerald-200/80 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg">
                    Perfekt für Sie, wenn Sie:
                  </h3>
                  <p className="text-xs text-stone-500">
                    Konstruktiv und stressfrei vorankommen wollen
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-stone-700 leading-relaxed">
                    Ihre Ernährung <strong>ohne Kompliziertheit und ohne Druck</strong> nachhaltig verbessern möchten.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-stone-700 leading-relaxed">
                    <strong>Anfänger sind</strong> oder als <strong>Angehörige</strong> einen lieben Menschen unterstützen und klare Orientierung brauchen.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-stone-700 leading-relaxed">
                    Eine <strong>praxisnahe Anleitung</strong> suchen, die Sie sofort ohne Vorbereitung umsetzen können.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-stone-700 leading-relaxed">
                    Sich wünschen, dass Mahlzeiten wieder eine <strong>Quelle der Kraft</strong> statt ein ständiger Kampf werden.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100">
              <a
                href={CHECKOUT_URL}
                className="w-full flex items-center justify-center py-3 px-4 text-xs font-bold text-white bg-[#2D5A27] hover:bg-[#23461e] rounded-xl transition-colors shadow-2xs text-center"
              >
                Ja, ich möchte den Leitfaden (26,41 €)
              </a>
            </div>
          </motion.div>

          {/* Card 2: Nicht für Sie, wenn */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-600 flex items-center justify-center font-bold">
                  <X className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg">
                    Nicht für Sie, wenn Sie:
                  </h3>
                  <p className="text-xs text-stone-500">
                    Klare und ehrliche Abgrenzung
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-stone-700 leading-relaxed">
                    <strong>„Wunderergebnisse“ über Nacht erwarten</strong>, ohne selbst die sanften Schritte auszuprobieren.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-stone-700 leading-relaxed">
                    Lange, <strong>rein theoretische Abhandlungen</strong> einem kompakten, sofort anwendbaren Leitfaden vorziehen.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-stone-700 leading-relaxed">
                    Eine restriktive Crash-Diät oder extreme Ernährungsformen suchen.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-500">
              Dieser Ratgeber setzt auf Sanftheit, Alltagstauglichkeit und kleine, wirksame Anpassungen.
            </div>
          </motion.div>

        </div>

        {/* Wichtiger Medizinischer Hinweis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-4 sm:p-5 bg-amber-50/90 backdrop-blur-xs border border-amber-200/80 rounded-2xl flex items-start gap-3 text-amber-950 shadow-xs"
        >
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed">
            <strong className="font-semibold block mb-0.5">Wichtiger rechtlicher & gesundheitlicher Hinweis:</strong>
            Der Ratgeber dient der praktischen Alltagsorganisation und ersetzt keine ärztliche oder ernährungstherapeutische Beratung, Diagnose oder Behandlung. Bei anhaltender starker Gewichtsabnahme oder akuten Beschwerden konsultieren Sie bitte stets Ihren behandelnden Facharzt.
          </div>
        </motion.div>

      </div>
    </section>
  );
};
