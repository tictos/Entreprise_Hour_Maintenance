import React, { useState } from 'react';
import { KEY_PROJECTS, ProjectItem } from '../data/companyData';
import { MapPin, Calendar, CheckCircle, TrendingUp, Layers } from 'lucide-react';

export const ProjectsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tous les Projets' },
    { id: 'Centrale Thermique', label: 'Centrales Thermiques & Turbines' },
    { id: 'Énergies Renouvelables', label: 'Solaire & Hybridation' },
    { id: 'Distribution & MT', label: 'Réseaux & Postes MT' },
    { id: 'Maintenance Industrielle', label: 'Maintenance Industrielle' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? KEY_PROJECTS 
    : KEY_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="realisations" className="py-24 bg-[#090e1a] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Preuves d'Impact & Réalisations
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Études de cas & projets d'envergure réalisés
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Découvrez comment nos interventions ont permis de sécuriser l'approvisionnement électrique de centrales thermiques, de sites miniers et de complexes industriels.
          </p>
        </div>

        {/* Filter Segmented Control with mobile horizontal scroll */}
        <div className="overflow-x-auto pb-2 mb-8 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl w-max sm:w-fit">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Metadata unboxed */}
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <span className="text-amber-400 font-semibold">{proj.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {proj.location}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {proj.year}
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Specs */}
                <div className="space-y-1.5 mb-6">
                  {proj.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Concrete Outcome Callout */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2.5">
                <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-emerald-400 font-semibold block">Résultat Opérationnel :</span>
                  <span className="text-slate-200">{proj.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
