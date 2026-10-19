import React from 'react';
import { InstagramIcon, FacebookIcon, YouTubeIcon, TikTokIcon, ThreadsIcon, KwaiIcon } from './SocialIcons';
import { ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { CHECKOUT_URL } from './Navbar';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@karinzeit',
      url: 'https://www.instagram.com/karinzeit?stkn=NmZiY2VzaW1leXlo',
      icon: InstagramIcon,
      hoverClass: 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white',
    },
    {
      name: 'Facebook Profil',
      handle: 'Karin Zeit',
      url: 'https://www.facebook.com/share/1c8J76URqe/',
      icon: FacebookIcon,
      hoverClass: 'hover:bg-[#1877F2] hover:text-white',
    },
    {
      name: 'Facebook Seite',
      handle: 'Offizielle Seite',
      url: 'https://www.facebook.com/share/1DzZyfFWRL/',
      icon: FacebookIcon,
      hoverClass: 'hover:bg-[#1877F2] hover:text-white',
    },
    {
      name: 'TikTok',
      handle: '@karinzeit',
      url: 'https://tiktok.com/@karinzeit',
      icon: TikTokIcon,
      hoverClass: 'hover:bg-stone-900 hover:text-white',
    },
    {
      name: 'YouTube',
      handle: '@karinzeit',
      url: 'https://youtube.com/@karinzeit?si=prrRmxwtRBUQ0sit',
      icon: YouTubeIcon,
      hoverClass: 'hover:bg-[#FF0000] hover:text-white',
    },
    {
      name: 'Threads',
      handle: '@karinzeit',
      url: 'https://www.threads.com/@karinzeit',
      icon: ThreadsIcon,
      hoverClass: 'hover:bg-stone-900 hover:text-white',
    },
    {
      name: 'Kwai',
      handle: '@kariningrid673',
      url: 'https://k.kwai.com/u/@kariningrid673/NxhDbbCg',
      icon: KwaiIcon,
      hoverClass: 'hover:bg-[#FF5000] hover:text-white',
    },
  ];

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row: Author & Social contacts as requested */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800 items-start">
          
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#2D5A27] text-white flex items-center justify-center font-bold text-base">
                KZ
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight block">
                  Karin Zeit
                </span>
                <span className="text-xs text-stone-400">
                  Praktische Leitfäden für sanfte & achtsame Ernährung
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              „Wie man Mahlzeiten bei verringertem Appetit organisiert“ ist ein praxisnaher Ratgeber für mehr Leichtigkeit, Freude und Nährstoffdichte bei jedem Bissen.
            </p>

            <div className="pt-2">
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A27] hover:bg-[#23461e] text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
              >
                <span>E-Book jetzt bestellen (26,41 €)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Links Formatted as Buttons */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Verbinden & Kontaktieren
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                Folgen Sie Karin Zeit auf den sozialen Netzwerken für tägliche Inspirationen, Rezepte und Austausch:
              </p>
            </div>

            {/* Social contact buttons grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-2.5 rounded-xl bg-stone-800/90 border border-stone-700/80 text-stone-200 text-xs font-medium transition-all duration-200 group ${item.hoverClass}`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-1 rounded-md bg-stone-700/50 group-hover:bg-white/20 transition-colors">
                        <Icon className="w-4 h-4 shrink-0" />
                      </div>
                      <div className="truncate">
                        <span className="block font-semibold truncate leading-tight">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-stone-400 group-hover:text-stone-200 block truncate">
                          {item.handle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom footer: Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} Karin Zeit. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>Sicherer Checkout via Hotmart</span>
            <span>·</span>
            <span>PDF-Sofortversand per E-Mail</span>
            <span>·</span>
            <span className="text-stone-300">26,41 € Festpreis</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
