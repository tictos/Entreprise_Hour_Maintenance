import React, { useState } from 'react';
import { Gauge, Zap, Flame, Sun, Activity, Clock, ShieldCheck, ArrowRight, CheckCircle, Calculator } from 'lucide-react';

interface SimulatorProps {
  onQuoteWithConfig: (configSummary: string) => void;
}

export const InteractiveAuditSimulator: React.FC<SimulatorProps> = ({ onQuoteWithConfig }) => {
  const [equipmentType, setEquipmentType] = useState<'turbine' | 'diesel' | 'substation' | 'solar' | 'alternator'>('turbine');
  const [powerScale, setPowerScale] = useState<string>('medium');
  const [interventionGoal, setInterventionGoal] = useState<'emergency' | 'preventive' | 'overhaul' | 'audit'>('preventive');
  const [locationZone, setLocationZone] = useState<'conakry' | 'kindia_boke' | 'kankan_nzerekore' | 'mining_site'>('conakry');

  const getMobilizationEstimation = () => {
    let team = "1 Ingénieur Énergéticien Senior + 2 Techniciens Électromécaniciens Spécialisés";
    let tools = "Diagnostic vibratoire instrumenté, Lignage laser de précision, Valise d'injection HT/MT";
    let leadTime = "Moins de 4 heures (Conakry et Grand Conakry)";
    let safetyStandard = "Protocole HSE niveau 3 - Équipements certifiés ATEX / Haute Tension";

    if (interventionGoal === 'emergency') {
      leadTime = locationZone === 'conakry' ? "Urgence immédiate (< 2 heures)" : "Mobilisation express (< 12 heures sur site)";
    } else if (interventionGoal === 'overhaul') {
      team = "Chef de Projet Centrales + 2 Ingénieurs Mécanique/Électricité + 4 Techniciens de Révision";
      tools = "Outillage lourd de levage, Équilibreuse dynamique, Endoscope industriel HD, Caméra thermique";
    }

    if (equipmentType === 'solar') {
      tools = "Analyseur de courbes I-V, Caméra thermographique aérienne/manuelle, Testeur d'isolement 1500V DC";
    } else if (equipmentType === 'substation') {
      tools = "Micro-ohmmètre, Banc de test de disjoncteurs SF6, Réflectomètre diélectrique";
    }

    if (locationZone === 'mining_site' || locationZone === 'kankan_nzerekore') {
      leadTime = interventionGoal === 'emergency' ? "Astreinte minière 24h / Déploiement aérien ou 4x4 équipé" : "Planning sous 48h selon protocole de site";
    }

    return { team, tools, leadTime, safetyStandard };
  };

  const estimate = getMobilizationEstimation();

  const handleGenerateQuote = () => {
    const equipLabels: Record<string, string> = {
      turbine: "Turbine à Gaz / Vapeur",
      diesel: "Moteur Diesel Lourd / Groupe Électrogène",
      substation: "Sous-Station & Réseau MT/BT",
      solar: "Centrale Solaire PV & Système Hybride",
      alternator: "Turboalternateur & Ligne d'Arbre"
    };

    const goalLabels: Record<string, string> = {
      emergency: "Dépannage d'Urgence 24/7",
      preventive: "Maintenance Préventive Programmée",
      overhaul: "Révision Majeure / Overhaul",
      audit: "Audit Thermique, Vibratoire & Performance"
    };

    const zoneLabels: Record<string, string> = {
      conakry: "Conakry & Banlieue",
      kindia_boke: "Kindia / Boké / Basse Guinée",
      kankan_nzerekore: "Kankan / N'Zérékoré / Haute Guinée",
      mining_site: "Site Minier Industriel Isolé"
    };

    const summary = `Demande issue du simulateur : ${equipLabels[equipmentType]} (${powerScale}) - Objectif : ${goalLabels[interventionGoal]} - Localisation : ${zoneLabels[locationZone]}`;
    onQuoteWithConfig(summary);
  };

  return (
    <section id="simulateur" className="py-24 bg-[#090e1a] border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2 flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Outil d'Ingénierie & Planification
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Simulateur de mobilisation & cadrage d'intervention
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Configurez les paramètres de vos installations énergétiques pour obtenir instantanément une estimation du dispositif technique mobilisé par le Groupe Hour Maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Configurator Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            {/* Step 1: Equipment Type */}
            <div>
              <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-3">
                1. Type d'Équipement ou d'Installation
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setEquipmentType('turbine')}
                  className={`p-3 rounded-xl border text-left transition-all text-xs sm:text-sm font-medium flex flex-col gap-2 ${
                    equipmentType === 'turbine'
                      ? 'bg-amber-400/10 border-amber-400 text-white shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <Flame className={`w-4 h-4 ${equipmentType === 'turbine' ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span>Turbine à Gaz / Vapeur</span>
                </button>

                <button
                  type="button"
                  onClick={() => setEquipmentType('diesel')}
                  className={`p-3 rounded-xl border text-left transition-all text-xs sm:text-sm font-medium flex flex-col gap-2 ${
                    equipmentType === 'diesel'
                      ? 'bg-amber-400/10 border-amber-400 text-white shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <Activity className={`w-4 h-4 ${equipmentType === 'diesel' ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span>Moteur Diesel Lourd / GE</span>
                </button>

                <button
                  type="button"
                  onClick={() => setEquipmentType('alternator')}
                  className={`p-3 rounded-xl border text-left transition-all text-xs sm:text-sm font-medium flex flex-col gap-2 ${
                    equipmentType === 'alternator'
                      ? 'bg-amber-400/10 border-amber-400 text-white shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <Gauge className={`w-4 h-4 ${equipmentType === 'alternator' ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span>Turboalternateur</span>
                </button>

                <button
                  type="button"
                  onClick={() => setEquipmentType('substation')}
                  className={`p-3 rounded-xl border text-left transition-all text-xs sm:text-sm font-medium flex flex-col gap-2 ${
                    equipmentType === 'substation'
                      ? 'bg-amber-400/10 border-amber-400 text-white shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <Zap className={`w-4 h-4 ${equipmentType === 'substation' ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span>Sous-Station MT/HT</span>
                </button>

                <button
                  type="button"
                  onClick={() => setEquipmentType('solar')}
                  className={`p-3 rounded-xl border text-left transition-all text-xs sm:text-sm font-medium flex flex-col gap-2 col-span-2 sm:col-span-2 ${
                    equipmentType === 'solar'
                      ? 'bg-amber-400/10 border-amber-400 text-white shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <Sun className={`w-4 h-4 ${equipmentType === 'solar' ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span>Centrale Solaire PV & Système Hybride</span>
                </button>
              </div>
            </div>

            {/* Step 2: Intervention Objective */}
            <div>
              <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-3">
                2. Nature & Objectif de l'Intervention
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'preventive', label: 'Maintenance Préventive Programmée', sub: 'Visite périodique, vidanges, contrôles d\'usure' },
                  { id: 'emergency', label: 'Dépannage d\'Urgence 24/7', sub: 'Arrêt impromptu, avarie mécanique ou électrique' },
                  { id: 'overhaul', label: 'Révision Majeure / Overhaul', sub: 'Démontage complet, lignage laser, réfection' },
                  { id: 'audit', label: 'Audit & Diagnostic Instrumenté', sub: 'Thermo-vibratoire, qualité réseau, bilan rendement' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setInterventionGoal(item.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      interventionGoal === item.id
                        ? 'bg-slate-800/90 border-amber-400 text-white'
                        : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-semibold text-white">{item.label}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Location */}
            <div>
              <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-3">
                3. Zone Géographique d'Intervention
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'conakry', label: 'Conakry & Environs' },
                  { id: 'kindia_boke', label: 'Boké / Kindia' },
                  { id: 'kankan_nzerekore', label: 'Kankan / N\'Zérékoré' },
                  { id: 'mining_site', label: 'Site Minier Isolé' },
                ].map((zone) => (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setLocationZone(zone.id as any)}
                    className={`py-2 px-3 rounded-lg border text-xs font-medium text-center transition-all ${
                      locationZone === zone.id
                        ? 'bg-amber-400 text-slate-950 font-bold border-amber-400 shadow-sm'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {zone.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Technical Result Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#0c1322] border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Cadrage Technique Prévisionnel
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                <CheckCircle className="w-3 h-3" /> Équipe Certifiée
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                  Équipe Déployée Recommandée
                </span>
                <p className="text-sm font-semibold text-white bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                  {estimate.team}
                </p>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                  Délai de Mobilisation Estimé
                </span>
                <p className="text-sm font-medium text-amber-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  {estimate.leadTime}
                </p>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                  Instruments & Bancs de Diagnostic
                </span>
                <p className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60 leading-relaxed">
                  {estimate.tools}
                </p>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                  Sécurité & Standards Industriels
                </span>
                <p className="text-xs text-slate-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                  {estimate.safetyStandard}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={handleGenerateQuote}
                className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <span>Demander l'Intervention avec cette Configuration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-slate-500 mt-2">
                Réponse technique par nos ingénieurs sous 24h ouvrées
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
