import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X, ShoppingBag } from 'lucide-react';

interface PurchaseEvent {
  id: number;
  time: string;
  city: string;
  item: string;
}

const PURCHASES: PurchaseEvent[] = [
  { id: 1, time: 'vor 3 Minuten', city: 'Berlin, Deutschland', item: 'PDF-Leitfaden + Wochenplaner' },
  { id: 2, time: 'vor 7 Minuten', city: 'München, Deutschland', item: 'PDF-Leitfaden + Einkaufsliste' },
  { id: 3, time: 'vor 14 Minuten', city: 'Wien, Österreich', item: 'PDF-Leitfaden (Sofortzugang)' },
  { id: 4, time: 'vor 22 Minuten', city: 'Zürich, Schweiz', item: 'PDF-Leitfaden + Wochenplaner' },
  { id: 5, time: 'vor 31 Minuten', city: 'Hamburg, Deutschland', item: 'PDF-Leitfaden (Sofortzugang)' },
  { id: 6, time: 'vor 45 Minuten', city: 'Köln, Deutschland', item: 'PDF-Leitfaden + Wochenplaner' },
  { id: 7, time: 'vor 58 Minuten', city: 'Frankfurt, Deutschland', item: 'PDF-Leitfaden + Einkaufsliste' },
];

export const PurchaseNotifications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial delay before first popup
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed || !isVisible) return;

    // Display for 5 seconds, then hide
    const displayTimer = setTimeout(() => {
      setIsVisible(false);
      
      // Wait 9 seconds before showing next
      const nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PURCHASES.length);
        setIsVisible(true);
      }, 9000);

      return () => clearTimeout(nextTimer);
    }, 5500);

    return () => clearTimeout(displayTimer);
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const current = PURCHASES[currentIndex];

  return (
    <div className="fixed bottom-5 left-5 z-50 max-w-sm pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto bg-white/95 backdrop-blur-md rounded-xl border border-[#2D5A27]/15 p-3.5 shadow-xl shadow-stone-900/8 flex items-start gap-3.5"
          >
            {/* Success icon badge */}
            <div className="w-9 h-9 rounded-full bg-[#EBF3E8] border border-[#2D5A27]/20 flex items-center justify-center shrink-0 text-[#2D5A27] mt-0.5">
              <CheckCircle2 className="w-5 h-5 text-[#2D5A27]" />
            </div>

            {/* Notification content: strictly NO names as requested */}
            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold tracking-wide uppercase text-[#2D5A27]">
                  Kauf bestätigt
                </span>
                <span className="text-[10px] text-stone-400 font-medium">·</span>
                <span className="text-[11px] text-stone-500 font-medium tabular-nums">
                  {current.time}
                </span>
              </div>
              <p className="text-xs font-semibold text-stone-900 truncate mt-0.5">
                {current.item}
              </p>
              <div className="flex items-center gap-1.5 mt-1 text-[11px] text-stone-500">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="truncate">{current.city}</span>
                <span className="text-stone-300">·</span>
                <span className="text-stone-400 whitespace-nowrap">Verifiziert</span>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => {
                setIsVisible(false);
                setIsDismissed(true);
              }}
              className="text-stone-400 hover:text-stone-700 transition-colors p-1 -mr-1 -mt-1 rounded-md"
              aria-label="Schließen"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
