import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, Building, User, FileText, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';

interface ContactSectionProps {
  initialServiceId?: string;
  prefilledMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServiceId, prefilledMessage }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceId: initialServiceId || 'centrales-production',
    urgency: 'normal',
    message: prefilledMessage || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMsg('Veuillez renseigner tous les champs obligatoires (*).');
      return;
    }

    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `HM-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Nous Contacter & Demande de Prestation
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Initiez votre projet avec nos ingénieurs experts
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Que vous ayez besoin d'une assistance technique d'urgence, d'un audit de centrale ou d'un contrat de maintenance industrielle, notre équipe vous répond sous 24h ouvrées.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  Demande Transmise avec Succès !
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Votre dossier a été enregistré sous la référence <strong className="text-amber-400 font-mono">{referenceId}</strong>. Notre direction technique basée à Conakry prendra contact avec vous dans les plus brefs délais.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        email: '',
                        phone: '',
                        serviceId: 'centrales-production',
                        urgency: 'normal',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1.5">
                      Nom complet & Titre *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="ex. Diallo Mamadou, Dir. Usine"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-950/70 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1.5">
                      Entreprise / Structure
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        placeholder="ex. Société Minière / Usine"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-slate-950/70 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1.5">
                      Adresse Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="contact@entreprise.gn"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950/70 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1.5">
                      Numéro Téléphone / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+224 6XX XX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950/70 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1.5">
                      Domaine d'Intervention
                    </label>
                    <select
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className="w-full bg-slate-950/70 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.id} value={srv.id} className="bg-slate-900 text-white">
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1.5">
                      Niveau d'Urgence
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full bg-slate-950/70 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="normal" className="bg-slate-900 text-white">Étude de projet & Devis standard</option>
                      <option value="planned" className="bg-slate-900 text-white">Maintenance programmée (sous 1 à 4 semaines)</option>
                      <option value="urgent" className="bg-slate-900 text-white">Urgent (Arrêt imminent / Sous 48h)</option>
                      <option value="critical" className="bg-slate-900 text-amber-400 font-bold">Avarie Critique 24/7 (Mobilisation immédiate)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1.5">
                    Détails de votre installation ou équipement
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Précisez la puissance, la marque de l'équipement (ex. Turbine GE, Groupe Caterpillar), la localisation et la problématique constatée..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950/70 border border-slate-700/80 rounded-xl p-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Traitement en cours...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmettre la Demande à nos Ingénieurs</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Side Info & Direct Hotlines (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 space-y-4">
              <h3 className="font-heading text-lg font-bold text-white">
                Pourquoi choisir le Groupe Hour ?
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>30+ ans d'expérience</strong> directe sur turbines à gaz et groupes diesels lourds en Afrique de l'Ouest.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Mobilisation rapide</strong> sur Conakry et sur les zones minières régionales.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Outillage de précision</strong> certifié pour le diagnostic vibratoire et le lignage laser.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Transfert de compétences</strong> et formation des équipes locales.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30">
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 block mb-1">
                Ligne Directe Ingénieurs
              </span>
              <p className="text-xs text-slate-300 mb-3">
                Pour toute demande urgente de dépannage ou intervention sur site industriel :
              </p>
              <a
                href="tel:+224623709838"
                className="inline-flex items-center gap-2 text-lg sm:text-xl font-mono font-bold text-amber-300 hover:text-amber-200"
              >
                <Phone className="w-5 h-5" />
                (+224) 623 70 98 38
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
