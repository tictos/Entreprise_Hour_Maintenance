import React from 'react';
import { COMPANY_INFO, OPENING_HOURS } from '../data/companyData';
import { Zap, MapPin, Phone, Mail, ExternalLink, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050810] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <span className="font-heading text-lg font-bold text-white tracking-tight">
                GROUPE HOUR <span className="text-amber-400">MAINTENANCE</span>
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {COMPANY_INFO.legalName} — Entité réunissant des ingénieurs et experts d'énergie avec plus de 30 ans d'expérience dans les centrales thermiques, turbines à gaz, turboalternateurs, réseaux et énergies renouvelables en République de Guinée.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Conformité & Sécurité Industrielle HSE</span>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#expertises" className="hover:text-amber-400 transition-colors">
                  Expertises & Services
                </a>
              </li>
              <li>
                <a href="#centrales" className="hover:text-amber-400 transition-colors">
                  Centrales de Production
                </a>
              </li>
              <li>
                <a href="#simulateur" className="hover:text-amber-400 transition-colors">
                  Simulateur d'Audit
                </a>
              </li>
              <li>
                <a href="#realisations" className="hover:text-amber-400 transition-colors">
                  Réalisations & Projets
                </a>
              </li>
              <li>
                <a href="#horaires" className="hover:text-amber-400 transition-colors">
                  Horaires d'Ouverture
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Demande de Devis
                </a>
              </li>
            </ul>
          </div>

          {/* Horaires d'Ouverture Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-semibold text-white uppercase tracking-wider">
              Horaires d'Ouverture
            </h4>
            <div className="space-y-1 text-xs text-slate-300 font-mono">
              <div className="flex justify-between py-1 border-b border-slate-850">
                <span className="font-sans">Lundi — Vendredi</span>
                <span className="text-white">08H00 — 17H00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-850">
                <span className="font-sans">Samedi</span>
                <span className="text-slate-500">Fermé</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-sans">Dimanche</span>
                <span className="text-slate-500">Fermé</span>
              </div>
            </div>
            <p className="text-[11px] text-amber-400/90 pt-1">
              * Astreinte & dépannage d'urgence actifs 24/7 sur demande
            </p>
          </div>

          {/* Contact & Annuaire (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-semibold text-white uppercase tracking-wider">
              Coordonnées
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <a href="tel:+224623709838" className="hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.goAfricaOnlineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium"
              >
                <span>Voir fiche GoAfricaOnline Guinée</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Groupe Hour Maintenance ({COMPANY_INFO.legalName}) · Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <a href="#horaires" className="hover:text-slate-400 transition-colors">
              Conakry, Guinée
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-amber-400 transition-colors cursor-pointer"
              aria-label="Retour en haut"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
