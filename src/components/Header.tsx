import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Zap, Clock, ChevronRight, MapPin, ShieldCheck } from 'lucide-react';
import { getCompanyCurrentStatus } from '../utils/scheduleHelper';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  href: string;
  description: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [status, setStatus] = useState(getCompanyCurrentStatus());

  const navItems: NavItem[] = [
    { id: 'expertises', label: 'Expertises', href: '#expertises', description: 'Centrales, réseaux MT/HT & énergies renouvelables' },
    { id: 'centrales', label: 'Centrales', href: '#centrales', description: 'Turbines à gaz, moteurs diesels et turboalternateurs' },
    { id: 'simulateur', label: 'Simulateur', href: '#simulateur', description: 'Cadrage et estimation de mobilisation technique' },
    { id: 'realisations', label: 'Réalisations', href: '#realisations', description: 'Études de cas et projets industriels en Guinée' },
    { id: 'horaires', label: 'Contact', href: '#horaires', description: 'Bureaux à Conakry, astreinte 24/7 et devis' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['expertises', 'centrales', 'simulateur', 'realisations', 'horaires'];
      const scrollPosition = window.scrollY + 250;

      let currentFound = '';
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentFound = sectionId;
            break;
          }
        }
      }

      if (window.scrollY < 180) {
        setActiveSection('');
      } else if (currentFound) {
        setActiveSection(currentFound);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const timer = setInterval(() => {
      setStatus(getCompanyCurrentStatus());
    }, 30000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string, href: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);

    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0f1d]/95 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-black/30 py-3 sm:py-3.5' 
          : 'bg-gradient-to-b from-[#0a0f1d]/95 via-[#0a0f1d]/85 to-transparent py-3.5 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Single element brand wordmark */}
            <a 
              href="#" 
              onClick={() => setActiveSection('')}
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0 whitespace-nowrap"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-sky-400 p-0.5 shadow-md shadow-amber-500/10 group-hover:scale-105 transition-transform shrink-0">
                <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  HOUR <span className="text-amber-400">MAINTENANCE</span>
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-medium hidden sm:block">
                  Énergie & Centrales Industrielles
                </span>
              </div>
            </a>

            {/* Zone 2: Single-line clean text navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium whitespace-nowrap shrink-0">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id, item.href);
                    }}
                    className={`relative px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap select-none ${
                      isActive 
                        ? 'text-amber-400 font-bold bg-amber-400/10 shadow-sm' 
                        : 'text-slate-300 hover:text-amber-300 hover:bg-slate-800/50'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-amber-400 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.9)] animate-in fade-in duration-150" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
              <a
                href="tel:+224623709838"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all hover:border-slate-600 whitespace-nowrap"
                title="Astreinte & Support Conakry"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono text-xs">(+224) 623 70 98 38</span>
              </a>

              <button
                onClick={() => onOpenQuoteModal()}
                className="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-lg shadow-sm shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer shrink-0"
              >
                <span className="hidden sm:inline">Demander un Devis</span>
                <span className="sm:hidden font-bold">Devis</span>
              </button>

              {/* Mobile menu toggle (Hamburger) */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-slate-200 bg-slate-900/90 border border-slate-750 hover:text-amber-400 hover:border-amber-400/50 transition-all focus:outline-none"
                aria-label="Ouvrir le menu de navigation"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacious Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#060a14]/95 backdrop-blur-2xl animate-in fade-in duration-200 flex flex-col justify-between overflow-y-auto">
          {/* Drawer Top Bar */}
          <div className="p-4 sm:p-5 border-b border-slate-800/80 flex items-center justify-between bg-[#080d1a]">
            <a 
              href="#" 
              onClick={() => {
                setActiveSection('');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5">
                <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-base font-bold text-white tracking-tight">
                  HOUR <span className="text-amber-400">MAINTENANCE</span>
                </span>
                <span className="text-[10px] uppercase text-slate-400 font-medium">
                  Guinée · Conakry
                </span>
              </div>
            </a>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6 text-amber-400" />
            </button>
          </div>

          {/* Drawer Nav Links Body */}
          <div className="flex-1 px-5 py-6 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1 mb-2">
              <span className="uppercase tracking-wider font-semibold text-amber-400">Navigation Principale</span>
              <span className="font-mono text-slate-500">{COMPANY_INFO.experienceYears} d'expérience</span>
            </div>

            <div className="space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id, item.href);
                    }}
                    className={`flex items-center justify-between p-4 rounded-2xl transition-all border ${
                      isActive
                        ? 'bg-amber-400/15 border-amber-400/80 text-amber-300 shadow-md shadow-amber-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-200 hover:bg-slate-850 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <span className="font-heading text-lg font-bold block">
                        {item.label}
                      </span>
                      <span className="text-xs text-slate-400 block mt-0.5">
                        {item.description}
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Live Opening Status Box */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <span className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                  <span>{status.statusText}</span>
                </div>
                <span className="font-mono text-amber-400">{status.currentTimeString}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                {status.nextEventText} (Heures de bureau : Lundi-Vendredi 08h-17h)
              </p>
            </div>
          </div>

          {/* Drawer Bottom Actions & Direct Phone */}
          <div className="p-5 border-t border-slate-800/80 bg-[#080d1a] space-y-3">
            <a
              href="tel:+224623709838"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-slate-900 border border-amber-500/30 text-base font-bold text-amber-300 hover:bg-slate-850 active:scale-[0.99] transition-all shadow-lg"
            >
              <PhoneCall className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="font-mono">(+224) 623 70 98 38</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-slate-950 font-extrabold text-base text-center shadow-xl shadow-amber-500/25 active:scale-[0.99] transition-all cursor-pointer"
            >
              Demander une Intervention / Devis
            </button>
          </div>
        </div>
      )}
    </>
  );
};
