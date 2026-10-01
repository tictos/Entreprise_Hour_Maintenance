import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Award, Users, BookOpen, Globe2, CheckCircle2 } from 'lucide-react';

export const CompanyProfile: React.FC = () => {
  return (
    <section id="centrales" className="py-16 sm:py-20 bg-[#090e1a] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
            Notre Identité & Vision Stratégique
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Un partenaire de confiance fondé sur plus de 30 ans d'expertise énergétique
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Le Groupe Hour Maintenance (Hour Dépannage & Maintenance Industrielle) s'est imposé comme une référence en République de Guinée pour la fiabilité de ses interventions sur les infrastructures critiques.
          </p>
        </div>

        {/* Narrative & Core Pillars Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Prose Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-inner">
              <p className="font-medium text-white mb-4">
                {COMPANY_INFO.missionParagraphs[0]}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {COMPANY_INFO.missionParagraphs[1]}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {COMPANY_INFO.missionParagraphs[2]}
              </p>
            </div>

            {/* Commitments checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-200">
                  <span className="font-semibold text-white block">Centrales Électriques</span>
                  Turbines à gaz, groupes diesels et turboalternateurs
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-200">
                  <span className="font-semibold text-white block">Réseaux MT & HT</span>
                  Distribution, transport et gestion des sous-stations
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-200">
                  <span className="font-semibold text-white block">Énergies Renouvelables</span>
                  Parcs solaires photovoltaïques & électrification rurale
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-200">
                  <span className="font-semibold text-white block">Assistance & Formation</span>
                  Supervision de chantiers et montée en compétences
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars Bento (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all group">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-white text-base">
                  Savoir-Faire Éprouvé
                </h3>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Plus de 30 années d'expérience pratique sur des chantiers thermiques et électromécaniques hautement exigeants en Guinée et en Afrique de l'Ouest.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-sky-500/40 transition-all group">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-white text-base">
                  Collaboration & Partenariat
                </h3>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Une relation de proximité avec chaque client, partenaire institutionnel et minier pour concevoir des solutions pérennes sur mesure.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-all group">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-white text-base">
                  Formation Continue
                </h3>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Développement continu des compétences techniques et habilitations de nos équipes pour rester à la pointe des normes technologiques mondiales.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all group">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-white text-base">
                  Impact Économique & Social
                </h3>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Contribution active à l'électrification rurale, à la continuité de la production nationale et au développement durable des communautés locales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
