import React, { useState, useEffect } from 'react';
import { OPENING_HOURS, COMPANY_INFO } from '../data/companyData';
import { getCompanyCurrentStatus, StatusInfo } from '../utils/scheduleHelper';
import { Clock, MapPin, Phone, Mail, ExternalLink, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const ScheduleAndLocation: React.FC = () => {
  const [status, setStatus] = useState<StatusInfo>(getCompanyCurrentStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getCompanyCurrentStatus());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="horaires" className="py-16 sm:py-24 bg-[#070b14] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Disponibilité & Localisation
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Nos horaires d'ouverture & coordonnées à Conakry
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Retrouvez nos bureaux techniques à Conakry pour vos études de projets énergétiques, révisions d'équipements et demandes d'assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Schedule Table (6 cols) */}
          <div className="lg:col-span-6 bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className={`w-3 h-3 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                <h3 className="font-heading text-lg font-bold text-white">
                  {status.statusText}
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-850 px-2.5 py-1 rounded-md border border-slate-750">
                {status.currentTimeString}
              </span>
            </div>

            <div className="text-xs text-amber-300/90 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
              {status.nextEventText} (Heure de Conakry / GMT)
            </div>

            {/* Structured Table */}
            <div className="divide-y divide-slate-800/80 font-mono text-xs sm:text-sm">
              {OPENING_HOURS.map((item, idx) => {
                const isToday = status.currentDayName === item.day;
                return (
                  <div
                    key={idx}
                    className={`py-3 flex items-center justify-between transition-colors ${
                      isToday ? 'bg-slate-800/60 px-3 rounded-lg font-bold text-white' : 'text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isToday && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                      <span className="font-sans font-medium">{item.day}</span>
                      {isToday && <span className="text-[10px] uppercase font-sans text-amber-400">(Aujourd'hui)</span>}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={item.isOpen ? 'text-slate-200' : 'text-slate-500'}>
                        {item.hours}
                      </span>
                      <span className={`text-[10px] font-sans px-2 py-0.5 rounded ${
                        item.isOpen ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-500'
                      }`}>
                        {item.isOpen ? 'Ouvert' : 'Fermé'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Emergency 24/7 Notice */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white block mb-0.5">Astreinte & Dépannage d'Urgence 24h/24 & 7j/7</span>
                Pour les avaries critiques sur centrales et réseaux, notre équipe d'astreinte reste joignable même en dehors des horaires d'ouverture des bureaux.
              </div>
            </div>
          </div>

          {/* Location & Verification Card (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
                Siège & Coordonnées
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Adresse & Ville</span>
                    <span>{COMPANY_INFO.address}</span>
                    <span className="text-slate-500 block text-xs mt-0.5">Intervention possible sur toute la Guinée et dans la sous-région</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Téléphone & Astreinte</span>
                    <a href="tel:+224623709838" className="text-amber-400 hover:underline font-mono text-sm">
                      {COMPANY_INFO.phonePrimary}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Courriel Officiel</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-200 hover:text-white hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* GoAfricaOnline Verification Badge */}
              <div className="pt-4 border-t border-slate-800">
                <div className="p-4 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs">
                      GAO
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        Fiche Entreprise GoAfricaOnline
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Hour Dépannage & Industrielle Maintenance Conakry
                      </span>
                    </div>
                  </div>

                  <a
                    href={COMPANY_INFO.goAfricaOnlineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-medium text-slate-200 transition-colors whitespace-nowrap"
                  >
                    <span>Consulter l'annuaire</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
