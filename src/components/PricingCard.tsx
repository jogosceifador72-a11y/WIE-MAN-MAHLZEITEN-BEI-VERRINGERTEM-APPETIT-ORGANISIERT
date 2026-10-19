import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Download, Smartphone, Clock, ArrowRight, Sparkles, CreditCard, Lock } from 'lucide-react';
import { CHECKOUT_URL } from './Navbar';

const COVER_IMAGE_PATH = '/src/assets/images/ebook_cover_mockup_1792240680717.jpg';

export const PricingCard: React.FC = () => {
  return (
    <section id="jetzt-kaufen" className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-[#EBF3E8]/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3 mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27]">
            Transparenter Festpreis · Sofortzugang
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-title">
            Starten Sie noch heute mit mehr Leichtigkeit
          </h2>
          <p className="text-sm text-stone-600 max-w-xl mx-auto">
            Sichern Sie sich den kompletten 30-Seiten-Leitfaden inklusive aller Rezepte, Wochenplaner und Einkaufsliste zum fairen Einführungspreis.
          </p>
        </motion.div>

        {/* The Pricing Box */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF9F5]/90 backdrop-blur-md rounded-3xl border-2 border-[#2D5A27]/30 p-6 sm:p-10 shadow-xl shadow-stone-900/5 relative"
        >
          
          {/* Top badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2D5A27] text-white text-xs font-bold px-4 py-1 rounded-full shadow-xs uppercase tracking-wide">
            Komplett-Paket inklusive Boni
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: What's included checklist */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <h3 className="text-xl font-bold text-stone-900 font-serif-title">
                  Wie man Mahlzeiten bei verringertem Appetit organisiert
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Der praxiserprobte PDF-Leitfaden für ein entspanntes Essverhalten
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#EBF3E8] text-[#2D5A27] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong>Vollständiger 30-Seiten PDF-Leitfaden:</strong> Schritt-für-Schritt Strategien ohne trockene Theorie.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#EBF3E8] text-[#2D5A27] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong>Sanfte Rezepte:</strong> Cremige Porridges, feine Suppen, Breie & nährstoffreiche Shakes.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#EBF3E8] text-[#2D5A27] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong>Bonus #1:</strong> Druckfertiger Wochenplaner (A4 & digital nutzbar).
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#EBF3E8] text-[#2D5A27] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong>Bonus #2:</strong> Strukturierte Einkaufsliste für stressfreies Einkaufen.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#EBF3E8] text-[#2D5A27] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong>Sofortige Bereitstellung:</strong> Direkter PDF-Downloadlink per E-Mail nach Kauf.
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Price & CTA Action */}
            <div className="md:col-span-5 bg-white rounded-2xl p-6 border border-stone-200 text-center space-y-4 shadow-xs">
              
              <div className="space-y-1">
                <span className="text-xs text-stone-400 font-medium block">
                  Regulärer Preis: <span className="line-through tabular-nums">49,00 €</span>
                </span>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#2D5A27] font-mono tracking-tight tabular-nums">
                    26,41 €
                  </span>
                </div>
                <span className="text-[11px] text-stone-500 font-medium block">
                  Einmaliger Betrag · Keine Folgekosten
                </span>
              </div>

              {/* Primary Hotmart Checkout Button */}
              <a
                href={CHECKOUT_URL}
                className="w-full flex items-center justify-center py-4 px-5 text-sm font-bold text-white bg-[#2D5A27] hover:bg-[#23461e] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group text-center"
              >
                <span>Jetzt für 26,41 € kaufen</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Hotmart Security details */}
              <div className="space-y-2 pt-2 border-t border-stone-100 text-[11px] text-stone-500">
                <div className="flex items-center justify-center gap-1.5 text-stone-600 font-medium">
                  <Lock className="w-3.5 h-3.5 text-[#2D5A27]" />
                  <span>Sichere 256-Bit SSL-Verschlüsselung</span>
                </div>
                <p className="text-[10px] text-stone-400 leading-tight">
                  Zahlungsabwicklung via Hotmart. Akzeptiert PayPal, Kreditkarte, Klarna / Sofortüberweisung uvm.
                </p>
              </div>

            </div>

          </div>

          {/* Delivery & format guarantee strip */}
          <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-[#2D5A27] shrink-0" />
              <span><strong>Sofortzugang:</strong> Direkt per E-Mail nach Zahlung</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#2D5A27] shrink-0" />
              <span><strong>Überall lesbar:</strong> Handy, Tablet, PC & Ausdruck</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2D5A27] shrink-0" />
              <span><strong>Verifizierter Kauf:</strong> Sicherer Checkout via Hotmart</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
