import React from 'react';
import { TESTIMONIALS } from '../data/companyData';
import { Quote, Star, Building2, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
            Témoignages & Confiance Partenaires
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Ce que disent nos clients industriels & miniers
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            La reconnaissance d'opérateurs énergétiques et directeurs techniques qui nous confient la continuité de leurs opérations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-400/40 mb-4" />
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="font-heading font-bold text-sm text-white">
                  {test.author}
                </div>
                <div className="text-xs text-amber-400 font-medium">
                  {test.role}
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                  <Building2 className="w-3 h-3 text-slate-500" />
                  <span>{test.company}</span>
                  <span>·</span>
                  <span>{test.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
