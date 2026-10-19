import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, BookOpen } from 'lucide-react';

export const CHECKOUT_URL = 'https://pay.hotmart.com/Q108024196G';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md border-b border-stone-200/80 shadow-xs'
          : 'bg-[#FAF9F5] border-b border-stone-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-slate-900 whitespace-nowrap shrink-0 group focus-visible:outline-hidden"
          >
            <div className="w-8 h-8 rounded-lg bg-[#2D5A27] text-white flex items-center justify-center font-bold text-base transition-transform group-hover:scale-105">
              KZ
            </div>
            <span className="font-semibold text-lg tracking-tight text-stone-900">
              Karin Zeit
            </span>
          </a>

          {/* Zone 2: 4-5 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            <a
              href="#ueberblick"
              className="hover:text-[#2D5A27] transition-colors whitespace-nowrap shrink-0"
            >
              Überblick
            </a>
            <a
              href="#probleme-loesung"
              className="hover:text-[#2D5A27] transition-colors whitespace-nowrap shrink-0"
            >
              Was es löst
            </a>
            <a
              href="#buchinhalt"
              className="hover:text-[#2D5A27] transition-colors whitespace-nowrap shrink-0"
            >
              Buchinhalte
            </a>
            <a
              href="#fuer-wen"
              className="hover:text-[#2D5A27] transition-colors whitespace-nowrap shrink-0"
            >
              Für wen geeignet
            </a>
            <a
              href="#faq"
              className="hover:text-[#2D5A27] transition-colors whitespace-nowrap shrink-0"
            >
              Häufige Fragen
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={CHECKOUT_URL}
              className="inline-flex items-center justify-center px-4.5 py-2 text-xs font-semibold text-white bg-[#2D5A27] rounded-lg hover:bg-[#23461e] transition-colors shadow-xs hover:shadow-sm whitespace-nowrap shrink-0 group"
            >
              <span>Jetzt sichern · 26,41 €</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
            aria-label="Navigation öffnen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-stone-200 px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-stone-700">
            <a
              href="#ueberblick"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100"
            >
              Überblick
            </a>
            <a
              href="#probleme-loesung"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100"
            >
              Was es löst
            </a>
            <a
              href="#buchinhalt"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100"
            >
              Buchinhalte
            </a>
            <a
              href="#fuer-wen"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100"
            >
              Für wen geeignet
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100"
            >
              Häufige Fragen
            </a>
          </nav>
          <div className="pt-2 border-t border-stone-200">
            <a
              href={CHECKOUT_URL}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-2.5 px-4 text-xs font-semibold text-white bg-[#2D5A27] rounded-lg shadow-sm text-center"
            >
              E-Book sofort sichern (26,41 €)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
