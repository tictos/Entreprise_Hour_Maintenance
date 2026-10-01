import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Zap } from 'lucide-react';
import { SERVICES_LIST } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceId?: string;
  defaultMessage?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultServiceId,
  defaultMessage
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceId: defaultServiceId || 'centrales-production',
    message: defaultMessage || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  useEffect(() => {
    if (defaultServiceId) {
      setFormData(prev => ({ ...prev, serviceId: defaultServiceId }));
    }
    if (defaultMessage) {
      setFormData(prev => ({ ...prev, message: defaultMessage }));
    }
  }, [defaultServiceId, defaultMessage]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setRefId(`HM-DEV-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0e1628] border border-slate-750 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-white">
              Demande Envoyée !
            </h3>
            <p className="text-slate-300 text-sm max-w-sm mx-auto">
              Votre demande a bien été reçue sous la référence <strong className="text-amber-400 font-mono">{refId}</strong>. Nos ingénieurs vous recontacteront rapidement.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm"
            >
              Fermer la fenêtre
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Demande de Devis ou d'Intervention
                </h3>
                <p className="text-xs text-slate-400">
                  Groupe Hour Maintenance · Conakry, Guinée
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1">
                  Nom et Prénom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex. Ousmane Diallo"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-950/70 border border-slate-750 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1">
                    Email Professionnel *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nom@entreprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950/70 border border-slate-750 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1">
                    Téléphone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+224 6XX XX XX XX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950/70 border border-slate-750 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1">
                  Type de Prestation Souhaitée
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full bg-slate-950/70 border border-slate-750 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  {SERVICES_LIST.map((s) => (
                    <option key={s.id} value={s.id} className="bg-slate-900 text-white">
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1">
                  Description succincte de l'installation / Besoin
                </label>
                <textarea
                  rows={3}
                  placeholder="Puissance, équipement, localisation de l'intervention..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950/70 border border-slate-750 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  {isSubmitting ? "Transmission..." : "Envoyer la Demande de Devis"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
