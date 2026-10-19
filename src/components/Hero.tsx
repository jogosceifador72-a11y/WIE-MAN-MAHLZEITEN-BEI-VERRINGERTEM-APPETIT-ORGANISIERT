import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen, Download, ShieldCheck, Check, Sparkles, FileText, Smartphone } from 'lucide-react';
import { CHECKOUT_URL } from './Navbar';

const COVER_IMAGE_PATH = '/src/assets/images/ebook_cover_mockup_1792240680717.jpg';

interface HeroProps {
  onOpenPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPreview }) => {
  return (
    <section id="ueberblick" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Subtle organic background glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#EBF3E8] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 -z-10 w-80 h-80 bg-[#F4EFE6] rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Editorial kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBF3E8] border border-[#2D5A27]/20 rounded-full text-xs font-semibold text-[#2D5A27]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Praktischer 30-Seiten PDF-Leitfaden · Sofortzugang</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-serif-title leading-[1.18] text-balance">
              Wie man Mahlzeiten bei verringertem Appetit organisiert
            </h1>

            {/* Subtitle / Core Promise */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Entspannt und nährstoffreich essen, auch wenn der Hunger fehlt: mit festen Zeiten, kleinen Portionen und sanften Rezepten.
            </p>

            {/* Key benefits list */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-2.5 text-sm text-stone-700">
                <div className="w-5 h-5 rounded-full bg-[#EBF3E8] text-[#2D5A27] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong>Ohne lange Theorie:</strong> Schritt für Schritt im eigenen Tempo umsetzen.
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-700">
                <div className="w-5 h-5 rounded-full bg-[#EBF3E8] text-[#2D5A27] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong>Energie unauffällig verdoppeln:</strong> Kleine Schalen mit gesunden Fetten und Proteinen anreichern.
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-700">
                <div className="w-5 h-5 rounded-full bg-[#EBF3E8] text-[#2D5A27] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong>Inklusive Bonus:</strong> Druckbarer Wochenplaner & organisierte Einkaufsliste.
                </span>
              </div>
            </div>

            {/* Price & Primary CTA Decision Box */}
            <div className="pt-4 border-t border-stone-200/80">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#2D5A27] font-mono tabular-nums tracking-tight">
                      26,41 €
                    </span>
                    <span className="text-sm text-stone-400 line-through tabular-nums">
                      49,00 €
                    </span>
                  </div>
                  <span className="text-[11px] text-stone-500 font-medium block">
                    Einmalige Zahlung · Kein Abo · Sofortiger Download
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={CHECKOUT_URL}
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-[#2D5A27] hover:bg-[#23461e] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group text-center"
                  >
                    <span>Jetzt E-Book sichern</span>
                    <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <button
                    onClick={onOpenPreview}
                    className="inline-flex items-center justify-center px-4 py-3.5 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl transition-colors shadow-2xs"
                  >
                    <BookOpen className="w-4 h-4 mr-1.5 text-[#2D5A27]" />
                    <span>Leseprobe ansehen</span>
                  </button>
                </div>
              </div>

              {/* Delivery info & Trust badges */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 mt-4 text-xs text-stone-500">
                <span className="flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-[#2D5A27]" />
                  <span>Direkte Zustellung per E-Mail nach Kauf</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-[#2D5A27]" />
                  <span>PDF für Smartphone, Tablet & PC</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A27]" />
                  <span>Sichere Bezahlung via Hotmart</span>
                </span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 3D Book & Tablet Visual Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative soft border */}
              <div className="relative p-3 bg-white rounded-2xl shadow-xl shadow-stone-900/10 border border-stone-200/80 group">
                
                {/* Book cover image */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-stone-100">
                  <img
                    src={COVER_IMAGE_PATH}
                    alt="Wie man Mahlzeiten bei verringertem Appetit organisiert - E-Book Cover und Tablet Ansicht"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  
                  {/* Subtle overlay reflection */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none" />

                  {/* Corner quick badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-stone-800 shadow-xs border border-white/60">
                    PDF · 30 Seiten
                  </div>

                  {/* Bottom banner over cover */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-lg border border-stone-200/80 shadow-xs flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-stone-900">
                        Vollständiger Leitfaden
                      </p>
                      <p className="text-[11px] text-stone-500">
                        Inkl. Rezepte & Wochenplaner
                      </p>
                    </div>
                    <button
                      onClick={onOpenPreview}
                      className="px-2.5 py-1 bg-[#EBF3E8] hover:bg-[#dbe9d6] text-[#2D5A27] text-xs font-medium rounded-md transition-colors"
                    >
                      Einblick öffnen
                    </button>
                  </div>
                </div>

              </div>

              {/* Floating review card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white p-3.5 rounded-xl border border-stone-200 shadow-lg items-center gap-3 max-w-[260px]">
                <div className="w-8 h-8 rounded-full bg-[#EBF3E8] text-[#2D5A27] flex items-center justify-center shrink-0 font-bold text-xs">
                  30 S.
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-800">
                    Kompakt & umsetzbar
                  </p>
                  <p className="text-[11px] text-stone-500">
                    Keine endlose Theorie, sofort loslegen
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
