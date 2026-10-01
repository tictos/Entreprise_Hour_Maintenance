import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Flame, Cpu, Gauge, Clock, Phone, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { getCompanyCurrentStatus, StatusInfo } from '../utils/scheduleHelper';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onExploreServices }) => {
  const [status, setStatus] = useState<StatusInfo>(getCompanyCurrentStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getCompanyCurrentStatus());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#070b14]">
      {/* Background Image Layer with Heavy Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_power_plant_1790778978530.jpg"
          alt="Centrale thermique et turbines de production d'énergie - Groupe Hour Maintenance"
          className="w-full h-full object-cover object-center brightness-60 scale-105 transform animate-fade-in"
          referrerPolicy="no-referrer"
        />
        {/* Measured gradient scrims for pristine legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/75 to-[#070b14]/50" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#070b14]/40 to-[#070b14]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Editorial Eyebrow with Real-time Status */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/85 backdrop-blur-md border border-slate-700/70 text-xs font-medium text-slate-300 shadow-sm">
            <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
            <span className="font-semibold text-white">{status.statusText}</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-300 font-mono">{status.currentTimeString}</span>
            <span className="text-slate-500">·</span>
            <span className="text-amber-400/90">{status.nextEventText}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400">
            <span className="text-amber-400 font-semibold">30+ Ans d'Expérience</span>
            <span>·</span>
            <span>Conakry, Guinée</span>
          </div>
        </div>

        {/* Main Hero Headline */}
        <div className="max-w-4xl">
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6 text-balance">
            L'excellence en ingénierie énergétique & <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-sky-300">maintenance industrielle</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mb-8">
            Réunissant des ingénieurs et experts chevronnés avec plus de 30 ans d'expérience dans les <strong className="text-white font-medium">centrales de production électrique</strong> (turbines à gaz, moteurs diesels, turboalternateurs), la <strong className="text-white font-medium">distribution haute tension</strong> et les <strong className="text-white font-medium">énergies renouvelables</strong> en Guinée et en Afrique de l'Ouest.
          </p>

          {/* Primary Action Zone */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Demander une Intervention ou un Devis</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#expertises"
              onClick={(e) => {
                e.preventDefault();
                onExploreServices();
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 transition-all backdrop-blur-sm cursor-pointer whitespace-nowrap"
            >
              <span>Explorer nos Expertises</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="tel:+224623709838"
              className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl text-xs sm:text-sm font-medium text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Astreinte : (+224) 623 70 98 38</span>
            </a>
          </div>
        </div>

        {/* Quantitative Proof Grid Adjacent to Hero Claims */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-800/80">
          <div className="p-4 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums mb-1">
              30+ Ans
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-200">D'Expérience Cumulée</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Ingénieurs et experts d'énergie</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-sky-400 tabular-nums mb-1">
              100%
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-200">Centrales & Turbines</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Gaz, Diesel lourd & Turboalternateurs</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-emerald-400 tabular-nums mb-1">
              MT / HT
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-200">Distribution & Transport</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Sous-stations & réseaux électriques</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-purple-400 tabular-nums mb-1">
              Solaire & Rurale
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-200">Énergies Renouvelables</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Centrales solaires et mini-grids</div>
          </div>
        </div>
      </div>
    </section>
  );
};
