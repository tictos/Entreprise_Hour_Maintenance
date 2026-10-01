export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'production' | 'distribution' | 'maintenance' | 'renewable' | 'engineering' | 'training';
  image?: string;
  features: string[];
  equipment: string[];
  deliverables: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  clientType: string;
  location: string;
  category: 'Centrale Thermique' | 'Distribution & MT' | 'Énergies Renouvelables' | 'Maintenance Industrielle';
  year: string;
  description: string;
  specs: string[];
  result: string;
}

export interface ScheduleDay {
  day: string;
  hours: string;
  isOpen: boolean;
}

export const COMPANY_INFO = {
  name: "Groupe Hour Maintenance",
  legalName: "Hour Dépannage & Maintenance Industrielle",
  experienceYears: "30+",
  headquarters: "Conakry, République de Guinée",
  address: "Conakry, République de Guinée",
  phonePrimary: "(+224) 623 70 98 38",
  phoneHotline: "(+224) 623 70 98 38",
  email: "contact@hourmaintenance-guinee.com",
  emailQuotes: "devis@hourmaintenance-guinee.com",
  goAfricaOnlineUrl: "https://www.goafricaonline.com/gn/855408-hour-depannage--industrielle-maintenance-conakry-guinee",
  tagline: "Ingénierie énergétique, centrales de production & maintenance industrielle de haute précision",
  vision: "Mettre à la disposition de nos partenaires et clients notre savoir-faire éprouvé et nos compétences pointues pour les accompagner dans tous leurs défis énergétiques.",
  missionParagraphs: [
    "Le Groupe Hour Maintenance est une entité établie pendant des années, réunissant principalement des ingénieurs et experts dans le domaine d'énergie qui ont plus de 30 ans d'expérience. Notre équipe bénéficie d'une vaste expérience dans divers domaines liés à la production, la distribution et la maintenance de l'électricité, avec un accent particulier sur les centrales de production électrique, notamment les turbines à gaz, les moteurs diesel et les turboalternateurs. De plus, nous avons une expertise reconnue dans les domaines de la distribution d'énergie et des énergies renouvelables.",
    "Notre vision est de mettre à la disposition de nos partenaires et clients notre savoir-faire éprouvé et nos compétences pointues, sous forme de prestations de services ou de contrats, afin de les accompagner dans divers aspects de leurs projets électriques. Que ce soit pour l'assistance technique sur des projets de construction de centrales électriques, la maintenance préventive et corrective des équipements, la gestion efficace de la distribution et du transport de l'électricité, ou encore la mise en œuvre de solutions d'électrification rurale et le développement des énergies renouvelables, nous nous engageons à offrir des services de qualité supérieure et adaptés aux besoins spécifiques de chaque client.",
    "En tant que Groupe Hour Maintenance, nous croyons fermement en l'importance de la collaboration et de la formation continue. C'est pourquoi nous sommes déterminés à travailler en étroite collaboration avec nos clients, partenaires et communautés locales pour assurer le succès à long terme de leurs projets électriques. De plus, nous accordons une grande importance à la formation et au développement des compétences de nos équipes, afin de garantir qu'elles restent à la pointe des avancées technologiques et des meilleures pratiques de l'industrie."
  ],
  summary: "Le Groupe Hour Maintenance s'engage à être un partenaire de confiance et un acteur clé dans le secteur de l'électricité, en fournissant des solutions innovantes, durables et adaptées aux besoins spécifiques de nos clients, tout en contribuant au développement économique et social des régions où nous opérons."
};

export const OPENING_HOURS: ScheduleDay[] = [
  { day: "Lundi", hours: "08H00 — 17H00", isOpen: true },
  { day: "Mardi", hours: "08H00 — 17H00", isOpen: true },
  { day: "Mercredi", hours: "08H00 — 17H00", isOpen: true },
  { day: "Jeudi", hours: "08H00 — 17H00", isOpen: true },
  { day: "Vendredi", hours: "08H00 — 17H00", isOpen: true },
  { day: "Samedi", hours: "Fermé", isOpen: false },
  { day: "Dimanche", hours: "Fermé", isOpen: false },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "centrales-production",
    title: "Centrales de Production Électrique",
    shortDesc: "Expertise de pointe sur les turbines à gaz, moteurs diesel lourds et turboalternateurs industriels.",
    fullDesc: "Notre cœur de métier repose sur plus de 30 années d'intervention directe sur les centrales thermiques et installations de production d'énergie continue. Nous maîtrisons l'ensemble du cycle de vie des équipements majeurs de production.",
    category: "production",
    image: "/src/assets/images/service_turbines_1790779119246.jpg",
    features: [
      "Révision majeure & reconditionnement de turbines à gaz",
      "Maintenance et calage de turboalternateurs de forte puissance",
      "Entretien lourd et révision de groupes moteurs diesel industriels (HFO / Diesel)",
      "Équilibrage dynamique et diagnostic thermo-vibratoire sur site"
    ],
    equipment: ["Turbines à gaz (GE, Siemens, Solar)", "Turboalternateurs", "Moteurs diesel lourds (Wärtsilä, Caterpillar, MTU, Deutz)", "Systèmes auxiliaires BOP"],
    deliverables: ["Rapport de diagnostic instrumenté", "Protocole d'alignement au centième", "Certificat d'essais en charge", "Garantie de performance opérationnelle"]
  },
  {
    id: "distribution-transport",
    title: "Distribution & Transport d'Électricité",
    shortDesc: "Gestion, modernisation et sécurisation des réseaux haute, moyenne et basse tension.",
    fullDesc: "Nous concevons, réhabilitons et exploitons les infrastructures de transport et de distribution électrique pour les réseaux nationaux, les sites miniers et les zones industrielles.",
    category: "distribution",
    features: [
      "Études, installation et réhabilitation de postes de transformation HT/MT",
      "Entretien des disjoncteurs, transformateurs de puissance et cellules MT",
      "Équilibrage de charges et analyse de la qualité de l'onde électrique",
      "Systèmes d'automatismes, téléconduite et protections numériques de réseau"
    ],
    equipment: ["Transformateurs de puissance HT/MT", "Cellules MT blindées", "Disjoncteurs SF6", "Armoires de compensation d'énergie réactive"],
    deliverables: ["Schémas unifilaires certifiés", "Plans de sélectivité des protections", "Rapports thermographiques infrarouges"]
  },
  {
    id: "maintenance-industrielle",
    title: "Maintenance Préventive & Corrective",
    shortDesc: "Contrats de maintenance sur mesure, interventions d'urgence 24/7 et dépannage industriel complet.",
    fullDesc: "Pour maximiser la disponibilité opérationnelle de vos installations électromécaniques, nous proposons des contrats de maintenance préventive rigoureux ainsi qu'une force d'intervention rapide pour le dépannage d'urgence.",
    category: "maintenance",
    image: "/src/assets/images/engineers_maintenance_1790779146205.jpg",
    features: [
      "Programmes de maintenance préventive programmée (PMP)",
      "Intervention d'urgence & dépannage électromécanique 24/7",
      "Analyse d'huile diélectrique et lubrifiants",
      "Gestion optimisée des stocks de pièces critiques de rechange"
    ],
    equipment: ["Armoires électriques industrielles", "Variateurs de fréquence", "Moteurs électriques asynchrones", "Groupes électrogènes de secours"],
    deliverables: ["Journal de bord numérique", "Analyse de criticité des pannes", "Plan de continuité de service"]
  },
  {
    id: "energies-renouvelables",
    title: "Énergies Renouvelables & Électrification Rurale",
    shortDesc: "Parcs solaires photovoltaïques, systèmes hybrides diesel-solaire et micro-réseaux isolés.",
    fullDesc: "Acteur engagé dans la transition énergétique et le développement communautaire, nous déployons des solutions solaires robustes adaptées aux conditions climatiques ouest-africaines et aux zones rurales hors réseau.",
    category: "renewable",
    image: "/src/assets/images/service_renewables_1790779133350.jpg",
    features: [
      "Études de gisement solaire et dimensionnement d'installations photovoltaïques",
      "Hybridation de centrales thermiques existantes (Fuel Saver Solutions)",
      "Micro-réseaux et mini-grids solaires pour l'électrification rurale",
      "Systèmes de stockage d'énergie par batteries (BESS) industriels"
    ],
    equipment: ["Onduleurs centraux & strings", "Champs photovoltaïques", "Systèmes BESS lithium/LiFePO4", "Contrôleurs hybrides EMS"],
    deliverables: ["Modélisation de production PVsyst", "Bilan d'économie de carburant", "Plan de maintenance des parcs solaires"]
  },
  {
    id: "assistance-technique",
    title: "Assistance Technique & Supervision de Projets",
    shortDesc: "Accompagnement d'ingénieurs experts de la conception à la mise en service de vos centrales.",
    fullDesc: "Nos 30+ ans d'expérience nous permettent d'offrir une assistance technique d'excellence aux maîtres d'ouvrages, investisseurs et industriels durant toutes les phases de leurs chantiers électriques.",
    category: "engineering",
    features: [
      "Assistance à maîtrise d'ouvrage (AMO) sur projets de centrales électriques",
      "Supervision du montage électromécanique et contrôle qualité HSE",
      "Essais à blanc, essais en charge et mise en service (Commissioning)",
      "Audit de conformité et diagnostics de performance énergétique"
    ],
    equipment: ["Chantiers de centrales thermiques", "Sous-stations de transport", "Infrastructures industrielles & minières"],
    deliverables: ["Dossier des Ouvrages Exécutés (DOE)", "Protocoles de réception provisoire et définitive", "Audit de conformité internationale"]
  },
  {
    id: "formation-competences",
    title: "Formation Continue & Transfert de Compétences",
    shortDesc: "Renforcement des capacités techniques locales et habilitation électrique des opérateurs.",
    fullDesc: "Convaincus que l'énergie est un levier de développement humain, nous formons les équipes de nos clients et les techniciens locaux aux meilleures pratiques et technologies de pointe du secteur.",
    category: "training",
    features: [
      "Formation pratique à l'exploitation et conduite de centrales électriques",
      "Modules spécialisés en maintenance mécanique et électrique des turbines et diesels",
      "Formations aux règles de sécurité et habilitations électriques (BT/HT)",
      "Transfert de savoir-faire pour l'autonomie des équipes locales"
    ],
    equipment: ["Bancs d'essais pédagogiques", "Simulateurs de conduite", "Outillage de diagnostic de précision"],
    deliverables: ["Attestations de compétences", "Supports de formation sur mesure", "Évaluations pratiques post-formation"]
  }
];

export const STATS_LIST = [
  { label: "Années d'Expertise Réunies", value: "30+", context: "Ingénieurs & experts seniors" },
  { label: "Disponibilité d'Intervention", value: "24/7", context: "Support dépannage d'urgence" },
  { label: "Types de Centrales", value: "100%", context: "Gaz, Diesel, Turboalternateurs, Solaire" },
  { label: "Engagement Qualité & HSE", value: "0", context: "Tolérance zéro sur la sécurité" }
];

export const KEY_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Révision Majeure & Diagnostic Turboalternateur 45 MW",
    clientType: "Centrale Thermique Côtière",
    location: "Conakry, Guinée",
    category: "Centrale Thermique",
    year: "2024",
    description: "Inspection approfondie du rotor, lignage laser de précision et réfection complète du système de régulation électrique avec remise en service en un temps record.",
    specs: ["Turbine à gaz 45 MW", "Alignement laser < 0.03mm", "Diagnostic thermo-vibratoire complet"],
    result: "+18% de rendement thermique et zéro arrêt non planifié"
  },
  {
    id: "proj-2",
    title: "Centrale Hybride Solaire & Groupes Diesels pour Site Industriel",
    clientType: "Complexe Minier & Industriel",
    location: "Région de Boké, Guinée",
    category: "Énergies Renouvelables",
    year: "2023 - 2024",
    description: "Intégration d'un champ photovoltaïque de 3.2 MWc couplé à une centrale diesel existante avec système de pilotage intelligent Fuel-Saver.",
    specs: ["3.2 MWc Solaire PV", "4 x Groupes Diesels 1.8 MW", "Contrôleur de synchronisation intelligent"],
    result: "Économie de plus de 950 000 litres de carburant par an"
  },
  {
    id: "proj-3",
    title: "Modernisation & Rétrofit de Sous-Station MT/BT 30 kV",
    clientType: "Zone Logistique & Portuaire",
    location: "Conakry, Guinée",
    category: "Distribution & MT",
    year: "2023",
    description: "Remplacement complet des cellules disjoncteurs MT, mise aux normes des protections numériques et refonte du système d'alimentation sans coupure.",
    specs: ["Poste de transformation 30 kV / 400 V", "Cellules blindées SF6", "Télémesure en temps réel"],
    result: "Disponibilité électrique portée à 99.98%"
  },
  {
    id: "proj-4",
    title: "Contrat de Maintenance Préventive sur Flotte de 8 Groupes Diesels Lourds",
    clientType: "Société de Transformation Agro-industrielle",
    location: "Guinée Maritime",
    category: "Maintenance Industrielle",
    year: "En cours",
    description: "Programme complet de maintenance prédictive, analyse vibratoire mensuelle, gestion de stock de pièces de rechange d'origine et astreinte technique 24/7.",
    specs: ["8 x Groupes Caterpillar & MTU (12 MW total)", "Astreinte 24/7", "Audits thermographiques réguliers"],
    result: "Réduction de 65% des coûts d'arrêt imprévu"
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    author: "M. Camara I.",
    role: "Directeur des Opérations Techniques",
    company: "Opérateur Énergétique Industriel",
    location: "Conakry",
    quote: "La réactivité et la précision technique du Groupe Hour Maintenance lors de l'avarie sur notre turboalternateur ont été déterminantes. Leur équipe d'ingénieurs a diagnostiqué et corrigé le problème en moins de 48 heures."
  },
  {
    id: "test-2",
    author: "Dr. Diallo A.",
    role: "Responsable Infrastructure & Énergie",
    company: "Projet Minier & Métallurgique",
    location: "Haute-Guinée",
    quote: "Plus de 30 ans d'expérience, cela se ressent immédiatement dans la rigueur des protocoles de sécurité et la qualité des révisions. C'est le partenaire de maintenance le plus fiable de la sous-région."
  },
  {
    id: "test-3",
    author: "Ing. Soumah S.",
    role: "Chef de Projet Électrification Rurale",
    company: "Programme Énergétique Régional",
    location: "Guinée Forestière",
    quote: "L'accompagnement du Groupe Hour sur l'installation de nos micro-réseaux hybrides solaires a permis d'assurer une formation solide à nos agents locaux. Un transfert de compétences réel et durable."
  }
];
