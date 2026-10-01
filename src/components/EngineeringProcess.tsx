import React from 'react';
import { Search, Compass, Cog, CheckCircle2, Shield } from 'lucide-react';

export const EngineeringProcess: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Audit & Diagnostic Instrumenté",
      desc: "Analyse approfondie des paramètres opératoires, mesures vibratoires, endoscopie et bilan d'échauffement sur les turbines, moteurs et réseaux.",
      icon: <Search className="w-5 h-5 text-amber-400" />
    },
    {
      number: "02",
      title: "Ingénierie & Plan HSE",
      desc: "Élaboration du protocole d'intervention technique, validation des tolérances d'alignement, analyse des risques HSE et calage des approvisionnements.",
      icon: <Compass className="w-5 h-5 text-sky-400" />
    },
    {
      number: "03",
      title: "Exécution de Précision",
      desc: "Déploiement de nos ingénieurs et techniciens spécialisés avec un outillage calibré : lignage laser, révision des rotors, réfection des circuits.",
      icon: <Cog className="w-5 h-5 text-emerald-400" />
    },
    {
      number: "04",
      title: "Essais en Charge & Suivi",
      desc: "Tests de synchronisation, montée en puissance par paliers, remise du rapport d'intervention technique certifié et accompagnement des exploitants.",
      icon: <CheckCircle2 className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section className="py-20 bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Rigueur & Standards Industriels
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Notre protocole d'ingénierie en 4 étapes clés
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Chaque intervention sur centrale ou installation industrielle suit une méthode éprouvée pour garantir une sécurité absolue et maximiser la durée de vie des équipements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group relative flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xl font-bold text-slate-500 group-hover:text-amber-400 transition-colors">
                    {step.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700/80">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Phase {step.number} / 04</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
