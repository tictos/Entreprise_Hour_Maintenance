import React, { useState } from 'react';
import { SERVICES_LIST, ServiceItem } from '../data/companyData';
import { Flame, Network, Wrench, SunMedium, Building2, GraduationCap, ArrowUpRight, Check, X, Shield, Settings2 } from 'lucide-react';

interface ServicesBentoProps {
  onSelectServiceForQuote: (serviceId: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'production':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'distribution':
        return <Network className="w-5 h-5 text-sky-400" />;
      case 'maintenance':
        return <Wrench className="w-5 h-5 text-emerald-400" />;
      case 'renewable':
        return <SunMedium className="w-5 h-5 text-amber-300" />;
      case 'engineering':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'training':
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      default:
        return <Settings2 className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="expertises" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
              Domaines d'Intervention & Savoir-Faire
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Des solutions d'ingénierie complètes pour l'énergie et l'industrie
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Du dépannage haute urgence aux contrats d'exploitation pluriannuels, nous intervenons avec les plus hauts standards de fiabilité et de sécurité en Guinée.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Centrales de Production (Col Span 2 on Large) */}
          <div 
            onClick={() => setSelectedService(SERVICES_LIST[0])}
            className="lg:col-span-2 group relative rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Background Image with Scrim */}
            <div className="absolute inset-0 z-0">
              <img
                src={SERVICES_LIST[0].image}
                alt="Centrales de production - Turbines à gaz et moteurs diesel"
                className="w-full h-full object-cover object-center brightness-40 group-hover:scale-105 group-hover:brightness-50 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
            </div>

            <div className="relative z-10 p-7 sm:p-9 flex flex-col h-full justify-between min-h-[380px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                    {getServiceIcon(SERVICES_LIST[0].category)}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-mono font-semibold">
                    01. Spécialité Phare
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {SERVICES_LIST[0].title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  {SERVICES_LIST[0].shortDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  {SERVICES_LIST[0].features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Distribution & Transport */}
          <div 
            onClick={() => setSelectedService(SERVICES_LIST[1])}
            className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-sky-500/50 p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer min-h-[340px]"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                {getServiceIcon(SERVICES_LIST[1].category)}
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-sky-400 group-hover:text-slate-950 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-sky-400 font-mono font-semibold block mb-2">
                02. Réseaux HT/MT
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                {SERVICES_LIST[1].title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                {SERVICES_LIST[1].shortDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>Postes & Transformateurs</span>
              <span className="text-slate-500">Détails →</span>
            </div>
          </div>

          {/* Card 3: Maintenance Industrielle */}
          <div 
            onClick={() => setSelectedService(SERVICES_LIST[2])}
            className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-emerald-500/50 p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer min-h-[340px]"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                {getServiceIcon(SERVICES_LIST[2].category)}
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-semibold block mb-2">
                03. Disponibilité Maximale
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {SERVICES_LIST[2].title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                {SERVICES_LIST[2].shortDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>Astreinte 24/7 & PMP</span>
              <span className="text-slate-500">Détails →</span>
            </div>
          </div>

          {/* Card 4: Énergies Renouvelables (Col Span 2 on Large) */}
          <div 
            onClick={() => setSelectedService(SERVICES_LIST[3])}
            className="lg:col-span-2 group relative rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={SERVICES_LIST[3].image}
                alt="Énergies Renouvelables et parcs solaires photovoltaïques en Guinée"
                className="w-full h-full object-cover object-center brightness-40 group-hover:scale-105 group-hover:brightness-50 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
            </div>

            <div className="relative z-10 p-7 sm:p-9 flex flex-col h-full justify-between min-h-[380px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                    {getServiceIcon(SERVICES_LIST[3].category)}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-amber-300 font-mono font-semibold">
                    04. Transition Énergétique
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {SERVICES_LIST[3].title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  {SERVICES_LIST[3].shortDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  {SERVICES_LIST[3].features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Assistance Technique & Supervision */}
          <div 
            onClick={() => setSelectedService(SERVICES_LIST[4])}
            className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-blue-500/50 p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer min-h-[340px]"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                {getServiceIcon(SERVICES_LIST[4].category)}
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-blue-400 group-hover:text-slate-950 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-blue-400 font-mono font-semibold block mb-2">
                05. Ingénierie & AMO
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {SERVICES_LIST[4].title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                {SERVICES_LIST[4].shortDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>Supervision & Commissioning</span>
              <span className="text-slate-500">Détails →</span>
            </div>
          </div>

          {/* Card 6: Formation Continue */}
          <div 
            onClick={() => setSelectedService(SERVICES_LIST[5])}
            className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-indigo-500/50 p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer min-h-[340px]"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                {getServiceIcon(SERVICES_LIST[5].category)}
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-indigo-400 group-hover:text-slate-950 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-indigo-400 font-mono font-semibold block mb-2">
                06. Développement Humain
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {SERVICES_LIST[5].title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                {SERVICES_LIST[5].shortDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>Habilitations & Transfert</span>
              <span className="text-slate-500">Détails →</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0e1628] border border-slate-700/90 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                {getServiceIcon(selectedService.category)}
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-mono font-semibold">
                  Spécialité Groupe Hour
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-6">
              {/* Features */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-400" />
                  Prestations & Interventions Clés
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Équipements & Technologies Couvertes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.equipment.map((eq, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700">
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Livrables & Garanties
                </h4>
                <div className="space-y-1.5">
                  {selectedService.deliverables.map((deliv, idx) => (
                    <div key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons in Modal */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  const serviceId = selectedService.id;
                  setSelectedService(null);
                  onSelectServiceForQuote(serviceId);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20"
              >
                Demander un Devis pour ce Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
