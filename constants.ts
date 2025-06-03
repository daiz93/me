
export const PERSONAL_INFO = {
  name: "Desmond KPOHIZOUN",
  title: "Ingénieur Full Stack & Systèmes d'Information | Expert Bases de Données & GED",
  bioShort: "Avec +8 ans d'expérience, j'allie une expertise Full Stack (.NET, Python, React, Angular) à une maîtrise pointue en administration de BDD (SQL Server, PostgreSQL, MySQL, HFSQL), optimisation de systèmes et Gestion Électronique de Documents (GED).",
  bioLong: `Fort d'une formation en Informatique de Gestion (BAC+4) et de plus de huit ans d'expérience polyvalente, je suis un Ingénieur Full Stack et Systèmes d'Information passionné par la création de solutions numériques performantes et la gestion optimisée des données.
  <br/><br/>
  Mon parcours m'a permis de développer une expertise solide en technologies backend (.NET, PHP, Python) et frontend (React.js, Angular.js), ainsi qu'une maîtrise approfondie des SGBD tels que SQL Server, MySQL, PostgreSQL, et HFSQL. Je suis particulièrement compétent dans l'administration de bases de données, l'optimisation des performances SQL, la mise en place de politiques de sauvegarde robustes et la sécurisation des données. Mon expérience en tant que TechLead et Directeur Technique m'a également conféré de solides compétences en architecture logicielle et en gestion d'équipes techniques.
  <br/><br/>
  Spécialisé également en Gestion Électronique de Documents (GED), j'accompagne les organisations dans la dématérialisation de leurs processus et l'optimisation de leurs flux d'information. Engagé bénévolement au sein de la JCI, j'ai aussi affiné mes compétences en gestion de projet et collaboration interfonctionnelle, visant toujours à apporter une contribution positive et innovante.`,
  email: "desmond.kpo@gmail.com",
  linkedin: "https://www.linkedin.com/in/desmondkpohizoun/",
  github: "https://github.com/desmondkpohizoun", 
  phone: "+229 01 96 11 92 21",
  cvUrl: "./Desmond_KPOHIZOUN_CV.pdf", 
  avatarUrl: "https://avatars.githubusercontent.com/u/33128249?v=4" 
};

export const NAV_LINKS = [
  { id: "home", label: "Accueil", href: "#/" }, // Route vers la page d'accueil
  { id: "about", label: "À Propos", href: "#about" }, // Ancre sur la page d'accueil
  { id: "skills", label: "Compétences", href: "#skills" }, // Ancre sur la page d'accueil
  { id: "projects", label: "Projets", href: "#/projects" }, // Nouvelle page Projets
  { id: "experience", label: "Expérience", href: "#experience" }, // Ancre sur la page d'accueil
  { id: "education", label: "Formation & Certifications", href: "#education" }, // Ancre sur la page d'accueil
  { id: "videos", label: "Mes Vidéos", href: "#/videos"}, // Nouvelle page Vidéos
  { id: "demos", label: "Démos", href: "#/demos" }, // Nouvelle page Démos
  { id: "contact", label: "Contact", href: "#/contact" }, // Nouvelle page Contact
];


export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: "Développement Frontend",
    skills: [
      { name: "JavaScript (ESNext)", level: 95 },
      { name: "React.js", level: 95 },
      { name: "Angular.js", level: 85 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap & JQuery", level: 85 },
      { name: "Razor Pages", level: 80 },
      { name: "Flutter (pour mobile)", level: 75 },
      { name: "Flask (Python Frontend)", level: 70 },
    ],
  },
  {
    name: "Développement Backend",
    skills: [
      { name: ".NET (C#, VB.NET)", level: 95 },
      { name: "ASP.NET Core & MVC", level: 95 },
      { name: "Python (Django/Flask optionnel)", level: 90 },
      { name: "PHP & Laravel", level: 85 },
      { name: "Java & SpringBoot", level: 75 },
      { name: "GraphQL", level: 80 },
      { name: "Développement d'API Robustes", level: 95 },
    ],
  },
  {
    name: "Administration des Bases de Données",
    skills: [
      { name: "Microsoft SQL Server (T-SQL, EF Core)", level: 95 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "HFSQL", level: 75 },
      { name: "Conception de Schémas de Données", level: 90 },
      { name: "Optimisation, Sauvegarde & Sécurité BDD", level: 90 },
    ],
  },
  {
    name: "Architecture & Concepts",
    skills: [
      { name: "Clean Architecture & Microservices", level: 90 },
      { name: "SOLID Principles & Design Patterns", level: 90 },
      { name: "UML & Modélisation", level: 85 },
      { name: "MVC & Repository Pattern", level: 95 },
      { name: "Injection de Dépendances", level: 90 },
    ],
  },
  {
    name: "Gestion Électronique de Documents (GED)",
    skills: [
      { name: "Analyse & Conception de Systèmes GED", level: 95 },
      { name: "Implémentation Docu-Pro Suite", level: 90 },
      { name: "Formation Utilisateurs & Conduite du changement", level: 90 },
      { name: "Dématérialisation & Workflow Processus", level: 85 },
    ],
  },
  {
    name: "Outils & Méthodologies",
    skills: [
      { name: "Git & GitHub/Gitlab", level: 95 },
      { name: "Tests Unitaires & Intégration", level: 85 },
      { name: "Méthodologies Agiles (Scrum/Kanban)", level: 90 },
      { name: "Gestion de Projet & Tech Leading", level: 90 },
      { name: "Swagger UI & Documentation API", level: 80 },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  impact?: string; 
  imageUrl?: string; 
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj1",
    title: "Chatbot Relation Client (Trésor Public Bénin)",
    description: "Développement from scratch d'un chatbot intelligent pour la Direction Générale du Trésor Public du Bénin, visant à améliorer la réactivité et l'accessibilité du service client.",
    impact: "Automatisation des réponses aux requêtes fréquentes et amélioration de l'engagement citoyen.",
    imageUrl: "https://via.placeholder.com/400x250/16a34a/ffffff?text=Chatbot+Trésor",
    technologies: ["Python (Backend)", "React.js (Frontend)", "NLP"],
  },
  {
    id: "proj2",
    title: "TRESORIS - Gestion Financière JCI Bénin",
    description: "Conception et développement d'un système de gestion financière sur mesure pour la Jeune Chambre Internationale Bénin, facilitant le suivi budgétaire et la transparence des opérations.",
    impact: "Optimisation des processus financiers et reporting amélioré pour la JCI Bénin.",
    imageUrl: "https://via.placeholder.com/400x250/0284c7/ffffff?text=TRESORIS+JCI",
    technologies: ["ASP.NET Core", "React.js", "SQL Server"],
  },
  {
    id: "proj3",
    title: "SERFIN-GES - Gestion Commerciale & Monétique",
    description: "Création d'une application web pour la gestion de l'activité commerciale et monétique de SERFIN, intégrant des outils d'analyse et de reporting via Syncfusion.",
    impact: "Centralisation des données commerciales et amélioration du pilotage d'activité.",
    imageUrl: "https://via.placeholder.com/400x250/f97316/ffffff?text=SERFIN-GES",
    technologies: ["ASP.NET MVC", "Syncfusion", "SQL Server"],
  },
  {
    id: "proj4",
    title: "Docu-Pro - Solution GED Avancée",
    description: "Refonte et direction de projet pour Docu-Pro, une solution de Gestion Électronique de Documents, incluant la modernisation de l'architecture et l'implémentation de tests rigoureux.",
    impact: "Amélioration de la performance, de la maintenabilité et de l'expérience utilisateur de la solution GED.",
    imageUrl: "https://via.placeholder.com/400x250/7c3aed/ffffff?text=Docu-Pro+GED",
    technologies: ["ASP.NET Core", "Architecture GED", "Gestion de Projet Agile", "Git"],
  },
   {
    id: "proj5",
    title: "FluidISS - CRM Pharmacie (NPSP-CI)",
    description: "Analyse des besoins, conception et développement d'un CRM sur mesure pour la Nouvelle Pharmacie de la Santé Publique de Côte d'Ivoire, optimisant la gestion de la relation client.",
    impact: "Personnalisation du suivi client et amélioration de l'efficacité pour NPSP-CI.",
    imageUrl: "https://via.placeholder.com/400x250/db2777/ffffff?text=FluidISS+CRM",
    technologies: ["ASP.NET MVC", "SQL Server", "Analyse Fonctionnelle"],
  },
];

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    id: "exp1",
    company: "AFRICA SERVICES INTL",
    role: "Ingénieur Génie informatique – TechLead",
    period: "Février 2022 - Aujourd'hui (+24 mois)",
    description: [
      "Pilotage et développement d'un chatbot (Python/ReactJS) pour le Trésor Public du Bénin.",
      "Mise en œuvre d'une solution de gestion commerciale et comptable pour GROUPE LSD.",
      "Conception d'une solution RH/Paie pour RETEL CONSULTING avec interfaçage aux systèmes existants.",
      "Développement d'une application de gestion des employés et de la paie pour FRIDO TOUT NET.",
      "Conception et développement from scratch de TRESORIS (ASP.NET Core, ReactJS) pour JCI Bénin.",
      "Réalisation d'un système de gestion financière (ASP.NET Core Razor Page) pour Rotary.",
      "Conception et réalisation de SERFIN-GES (ASP.NET MVC, Syncfusion), solution de gestion commerciale.",
      "Consultant technique pour l'intégration de DocuPro.",
    ],
  },
  {
    id: "exp2",
    company: "PERO GROUP",
    role: "Développeur Frontend AngularJS",
    period: "Mai 2022 - Juillet 2022 (3 mois)",
    description: [
      "Participation active à la conception de SINEB (interfaces et consommation d'APIs Backend).",
      "Utilisation de Gitlab pour le versionnage et la collaboration.",
      "Refonte technique et graphique du site web de PERO GROUP.",
      "Refonte de PAX FREE (assistance réclamations vols), développement d'un calculateur d'indemnité et de dashboards.",
    ],
  },
  {
    id: "exp3",
    company: "ALLIANCE COMPUTER CONSULTANTS",
    role: "Directeur technique",
    period: "Avril 2021 — Janvier 2022 (9 mois)",
    description: [
      "Encadrement technique : gestion de versionnage Git, tests unitaires, correction de bugs (ASP.NET Core).",
      "Direction de la refonte de Docu-Pro (GED en ASP.NET Core) : architecture, suivi de projet, tests.",
      "Force de proposition pour le développement de fonctionnalités innovantes.",
      "Gestion des portefeuilles grands comptes et consolidation des relations partenaires.",
      "Leadership et animation des équipes techniques multidisciplinaires.",
      "Expertise en conception de BDD, optimisation d'index, sauvegarde SQL Server, configuration serveurs liés.",
    ],
  },
  {
    id: "exp4",
    company: "ALLIANCE COMPUTER CONSULTANTS",
    role: "Développeur .NET, Chef de projet GED",
    period: "Janvier 2019 - Mars 2021 (27 mois)",
    description: [
      "Analyse, conception et développement de FluidISS (CRM en ASP.NET MVC, SQL Server) pour NPSP-CI.",
      "Pilotage de projet en mode agile pour la mise en place du CRM NPSP-CI.",
      "Maintenance évolutive et support du système GED pour le PORT AUTONOME DE COTONOU.",
      "Assistance à Maîtrise d'Ouvrage pour Coqivoire (intégration JDE).",
      "Développement d'interfaçages entre bases de données hétérogènes.",
    ],
  },
  {
    id: "exp5",
    company: "ALLIANCE COMPUTER CONSULTANTS",
    role: "Développeur WEB",
    period: "Janvier 2018 - Décembre 2018 (12 mois)",
    description: [
        "Assistance MOA pour Coqivoire pour l'intégration de JDE.",
        "Gestion de projet agile pour l'implémentation de la GED (Docu-Pro Suite) au PORT AUTONOME DE COTONOU.",
        "Développement d'un Workflow et formation des utilisateurs NPSP (interfaçage SAGE Ligne 1000).",
        "Contribution à la dématérialisation des processus métiers (Sourcing, Approvisionnement, Facturation).",
        "Déploiement de Docu-Pro Suite (Module Archives) et formation chez TRANSIT INTER, Expert-Comptable-Associé, ACONDA-VS.",
        "Refonte technique et graphique du site web d'ALLIANCE COMPUTER CONSULTANTS.",
        "Conception et développement du site web de la Société Africaine Francophone d'Ophtalmologie.",
    ],
  },
  {
    id: "exp6",
    company: "ASM BÉNIN",
    role: "Assistant HelpDesk",
    period: "Avril 2016 - Septembre 2017 (17 mois)",
    description: [
      "Suivi et clôture de projets de surveillance et sécurité des installations.",
      "Création et maintenance de bases de données pour analyses statistiques et décisionnelles.",
      "Surveillance et dépannage d'installations techniques (géolocalisation, caméra, télé sécurité, radio).",
      "Assistance aux clients en cas de détresse et support au service technique (configuration balises, radios, caméras).",
      "Gestion et maintenance du parc informatique et électronique.",
    ],
  },
   {
    id: "exp7",
    company: "IT CONSULTING",
    role: "Développeur WINDEV / Junior",
    period: "Juin 2013 - Décembre 2014 (18 mois)",
    description: [
      "Conception et développement de logiciels de Gestion (stocks, SAV, écoles, immobilier) avec WINDEV.",
      "Suivi et développement des bases de données des systèmes applicatifs.",
      "Formation des utilisateurs à l'utilisation des systèmes d'information développés.",
      "Conception et Administration de bases de données relationnelles SQL Server et HFSQL.",
      "Mise en place de procédures de sauvegarde automatisée sous SQL Server.",
    ],
  },
  {
    id: "exp8",
    company: "INSTITUT NATIONAL DE LA STATISTIQUE ET DE L'ANALYSE ECONOMIQUE",
    role: "Analyste Programmeur Junior",
    period: "Août 2012 - Novembre 2012 (3 mois)",
    description: [
      "Analyse des besoins et développement d'un système de collecte et traitement de données pour l'annuaire statistique du BÉNIN (Application WPF en VB.net et SQL Server).",
    ],
  },
];

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string[];
}

export const EDUCATION_DATA: EducationEntry[] = [
    {
        id: "edu1",
        degree: "Master 1 (BAC +4) en Génie Informatique et Réseaux",
        institution: "UNIVERSITE PIGIER",
        period: "2024 - 2025 (En cours)",
    },
    {
        id: "edu2",
        degree: "Licence professionnelle en Informatique de Gestion",
        institution: "ÉCOLE NATIONALE D'ECONOMIE APPLIQUEE ET DE MANAGEMENT",
        period: "2013 - 2014",
    },
    {
        id: "edu3",
        degree: "Brevet de Technicien Supérieur en Informatique de Gestion",
        institution: "ÉCOLE NATIONALE D'ECONOMIE APPLIQUEE ET DE MANAGEMENT",
        period: "2010 - 2012",
    },
     {
        id: "edu4",
        degree: "BAC Série C (Scientifique)",
        institution: "COLLEGE CATHOLIQUE PERE AUPIAIS",
        period: "2003 - 2010",
    },
];

export interface CertificationEntry {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url?: string; 
}

export const CERTIFICATIONS_DATA: CertificationEntry[] = [
  { id: "cert1", name: "Les tendances tech pour les développeurs/développeuses", issuer: "LinkedIn", year: "2023" },
  { id: "cert2", name: "Booster sa productivité en tant que développeur / développeuse", issuer: "LinkedIn", year: "2023" },
  { id: "cert3", name: "Communiquer avec empathie", issuer: "LinkedIn", year: "2022" },
  { id: "cert4", name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", year: "2018" },
  { id: "cert5", name: "Certified Secure Computer User (CSCU)", issuer: "EC-Council", year: "2018" },
  { id: "cert6", name: "Concevez votre site web avec PHP et MySQL", issuer: "OpenClassrooms", year: "2018" },
  { id: "cert7", name: "Comprendre le Web", issuer: "OpenClassrooms", year: "2018" },
  { id: "cert8", name: "Apprenez à créer votre site web avec HTML5 et CSS3", issuer: "OpenClassrooms", year: "2018" },
];

export interface VideoData {
  id: string;
  title: string;
  youtubeVideoId: string;
  thumbnailUrl: string;
  description?: string; // Optionnel
}

export const VIDEOS_DATA: VideoData[] = Array.from({ length: 20 }, (_, i) => ({
  id: `vid${i + 1}`,
  title: `Vidéo de Démonstration Super Cool ${i + 1}: Exploration de React et Animations Avancées`,
  youtubeVideoId: 'dQw4w9WgXcQ', // Placeholder ID (Rick Astley) - À remplacer par de vrais IDs
  thumbnailUrl: `https://picsum.photos/seed/vid${i + 1}/400/225`, // Miniatures aléatoires uniques
  description: `Ceci est une description exemple pour la vidéo ${i + 1}. Elle couvre des sujets passionnants et des démonstrations techniques.`
}));
