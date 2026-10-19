import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreProblems } from './components/CoreProblems';
import { BookContents } from './components/BookContents';
import { MealEnrichmentCalculator } from './components/MealEnrichmentCalculator';
import { TargetAudience } from './components/TargetAudience';
import { PricingCard } from './components/PricingCard';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PurchaseNotifications } from './components/PurchaseNotifications';
import { PreviewModal } from './components/PreviewModal';
import { BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="min-h-screen site-bg-ambient text-[#242A24] flex flex-col antialiased selection:bg-[#E2EBDC] selection:text-[#284126] relative overflow-x-hidden">
      
      {/* Dynamic Ambient Background Elements - Strictly Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft glowing organic orbs */}
        <div className="absolute -top-[12%] left-[8%] w-[520px] h-[520px] rounded-full bg-[#CCE3C3]/45 blur-[130px]" />
        <div className="absolute top-[20%] -right-[8%] w-[580px] h-[580px] rounded-full bg-[#EADCC0]/45 blur-[140px]" />
        <div className="absolute top-[48%] -left-[12%] w-[640px] h-[640px] rounded-full bg-[#C8DEC1]/40 blur-[150px]" />
        <div className="absolute top-[72%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#E5D7BE]/45 blur-[140px]" />
        <div className="absolute bottom-[2%] left-[18%] w-[550px] h-[550px] rounded-full bg-[#D1E6CC]/40 blur-[130px]" />
        
        {/* Subtle organic dotted grid pattern to give life and tactile texture */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#2D5A27 1.2px, transparent 1.2px)`,
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      {/* Top Notification Announcement */}
      <div className="bg-[#2D5A27] text-white py-2 px-4 text-center text-xs font-medium tracking-wide flex items-center justify-center gap-2 relative z-30 shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
        <span>
          Digitaler PDF-Ratgeber (30 Seiten) · Sofortiger Download per E-Mail nach Zahlungsbestätigung · <strong>26,41 €</strong>
        </span>
      </div>

      {/* Primary Top Bar Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with 3D Cover */}
        <Hero onOpenPreview={() => setIsPreviewOpen(true)} />

        {/* Quiet 4-column trust strip with smooth scroll entry */}
        <section className="border-y border-stone-200/80 bg-white/70 backdrop-blur-md py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            >
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#2D5A27] font-mono tabular-nums">
                  30 Seiten
                </p>
                <p className="text-xs text-stone-600 mt-0.5 font-medium">
                  Praxis-Leitfaden im PDF-Format
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#2D5A27] font-mono tabular-nums">
                  5 Phasen
                </p>
                <p className="text-xs text-stone-600 mt-0.5 font-medium">
                  Fester Tagesrhythmus ohne Druck
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#2D5A27] font-mono tabular-nums">
                  15 Rezepte
                </p>
                <p className="text-xs text-stone-600 mt-0.5 font-medium">
                  Sanfte & hochkalorische Ideen
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#2D5A27] font-mono tabular-nums">
                  2 Boni
                </p>
                <p className="text-xs text-stone-600 mt-0.5 font-medium">
                  Wochenplaner & Einkaufsliste
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Was löst es? (Core Problems solved) */}
        <CoreProblems />

        {/* Interaktiver Nährstoff-Rechner */}
        <MealEnrichmentCalculator />

        {/* Was ist das & Was steckt drin? (Contents & Modules) */}
        <BookContents onOpenPreview={() => setIsPreviewOpen(true)} />

        {/* Für wen ist es / Nicht für Sie */}
        <TargetAudience />

        {/* Pricing Offer Card (26,41 €) */}
        <PricingCard />

        {/* FAQ Accordion */}
        <FAQ />
      </main>

      {/* Comprehensive Footer with Social Buttons */}
      <Footer />

      {/* Bottom-left live confirmed purchase notification */}
      <PurchaseNotifications />

      {/* Excerpt Preview Reader Modal */}
      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />

    </div>
  );
}
