/* ============================================================
   CONTENU DU SITE — Élisa Wagner
   ------------------------------------------------------------
   Réalisations et informations issues du portfolio PDF d'Élisa
   et de son CV. Pour modifier le site, éditez ce fichier.
   ============================================================ */

export const profile = {
  firstName: 'Élisa',
  lastName: 'Wagner',
  role: 'Communication interne & marque employeur',
  // Accroche (affichée sous le nom)
  tagline: 'Je donne de la voix aux entreprises et du sens à leurs collaborateurs.',
  intro:
    "Chargée de communication en alternance chez Octapharma, diplômée d'un MBA Manager de la communication à l'ISEG. De la stratégie à la création — print, vidéo, événementiel, réalité virtuelle — j'imagine des dispositifs qui fédèrent et marquent les esprits.",
  photo: 'elisa-wagner.jpg',
  // Infos clés mises en avant
  facts: ['Strasbourg et environs', '23 ans', 'Permis B', 'Disponible dès septembre 2026'],
  location: 'Strasbourg et environs',
  age: '23 ans',
  license: 'Permis B',
  availability: 'Disponible dès septembre 2026',
  email: 'elisa.wagner49@gmail.com',
  phone: '07 85 10 07 23',
  phoneLink: 'tel:+33785100723',
  linkedin: 'https://www.linkedin.com/in/wagnerelisa',
}

// Mots-clés du bandeau défilant (marquee)
export const keywords = [
  'Communication interne',
  'Marque employeur',
  'Création de contenus',
  'Vidéo & montage',
  'Événementiel',
  'Réalité virtuelle',
  'Graphisme',
  'Gestion de projet',
  'Réseaux sociaux',
]

// Chiffres-clés (compteurs animés)
export const stats = [
  { value: 7, suffix: '', label: 'réalisations phares' },
  { value: 2, suffix: ' ans', label: "d'alternance chez Octapharma" },
  { value: 1, suffix: '', label: 'record du monde battu' },
  { value: 1, suffix: '', label: 'MBA en communication' },
]

export const about = {
  title: 'La communication, du sens à l’impact',
  paragraphs: [
    "À 23 ans, je termine un MBA Manager de la communication à l'ISEG Strasbourg, après deux années d'alternance chez Octapharma, laboratoire pharmaceutique. J'y porte la communication interne et la marque employeur, du concept jusqu'au terrain.",
    "Curieuse et créative, j'aime passer de la stratégie à la réalisation : rédaction, graphisme, vidéo, événementiel, réalité virtuelle. Basée à Strasbourg et environs, permis B, je suis disponible dès septembre 2026 pour un poste à temps plein.",
  ],
  highlights: [
    'Communication interne',
    'Marque employeur',
    'Création de contenus',
    'Vidéo & événementiel',
  ],
}

/* ------------------------------------------------------------
   RÉALISATIONS — le cœur du portfolio
   ------------------------------------------------------------ */
export const realisations = [
  {
    title: 'Visite 360°',
    context: 'Octapharma',
    image: 'realisations/visite-360.jpg',
    objective: 'Rendre notre production accessible en créant une visite en réalité virtuelle.',
    points: ['Script', 'Tournage', 'Montage', 'Événement interne', 'Salons de recrutement'],
  },
  {
    title: 'Campagne marque employeur & média',
    context: 'Octapharma',
    image: 'realisations/campagne-media.jpg',
    objective:
      'Créer de la notoriété afin de préparer une campagne de recrutement, tout en fédérant et fidélisant en interne.',
    points: [
      'Choix des ambassadeurs et ambassadrices',
      'Shooting photo et interviews',
      'Affichage print & digital (DOOH)',
      'Publicités YouTube, LinkedIn & radio',
    ],
  },
  {
    title: 'Événementiel',
    context: 'Octapharma',
    image: 'realisations/evenementiel.jpg',
    objective:
      'Fédérer, sensibiliser et fidéliser les collaborateurs et collaboratrices, en interne comme en externe.',
    points: [
      'Semaines QVCT, santé & sécurité',
      'Don du sang, « Au boulot à vélo »',
      'Soirée annuelle & Course Iris',
      'Sessions de réalité virtuelle',
    ],
  },
  {
    title: 'Création de contenus',
    context: 'Octapharma',
    image: 'realisations/creation-contenus.jpg',
    objective: 'Informer, vulgariser et partager nos activités, en interne comme en externe.',
    points: [
      '« L’apprentissage chez Octapharma » (interviews + photos)',
      '« Tu fais quoi chez Octa ? » (vidéos métiers : tournage & montage)',
      'Newsletters (rédaction, traductions)',
      'Publications LinkedIn & app interne',
    ],
  },
  {
    title: 'Création de supports',
    context: 'Octapharma',
    image: 'realisations/creation-supports.jpg',
    objective:
      'Concevoir des supports de communication clairs et impactants pour faciliter la transmission d’informations.',
    points: [
      'Kakémonos, totems, stands RH',
      'Cartes de visite & carnets d’accueil',
      'Goodies personnalisés (chocolats, tote bags…)',
      'Supports photo pour photobooth',
    ],
  },
  {
    title: 'Cheffe de projet — La plus grande tarte flambée du monde',
    context: 'ISEG',
    image: 'realisations/tarte-flambee.jpg',
    objective: 'Battre le record de la plus grande tarte flambée du monde (2022).',
    points: [
      'Recherche de partenariats (Le Tigre, le Zénith…)',
      'Apprentissage de la technique & recherche de bénévoles',
      'Invitation d’influenceurs dont FastGoodCuisine (8,39 M d’abonnés)',
      'Gestion des réseaux sociaux',
    ],
    result: 'Record battu et belles retombées médiatiques !',
  },
  {
    title: 'Majeure créa',
    context: 'ISEG',
    image: 'realisations/majeure-crea.jpg',
    objective: 'Développer mes compétences en création et en design artistique.',
    points: [
      'Workshop EFS gamifié',
      'Billetterie pour le Festival de Gérardmer',
      'Workshop sociologie : œuvre d’art × marque (IKEA)',
      'Stratégie de com’ Back Market · lancement JBL « System X »',
    ],
  },
]

export const experiences = [
  {
    period: 'Sept. 2024 — Août 2026',
    role: 'Chargée de communication (alternance)',
    company: 'Octapharma',
    description:
      'Communication interne & marque employeur : contenus print et digitaux, graphisme, vidéo (tournage & montage), campagne média, événementiel et gestion de projet.',
  },
  {
    period: 'Mai — Juillet 2024',
    role: 'Chargée de communication interne (stage)',
    company: 'Kairos',
    description: 'Création de supports de communication interne pour informer et fédérer les équipes.',
  },
  {
    period: 'Mai — Juillet 2023',
    role: 'Chargée de communication (stage)',
    company: 'Les Bijoux de Marilou',
    description: 'Création de contenus (posts Instagram), gestion de plannings et de commandes.',
  },
  {
    period: 'Juillet — Août 2022',
    role: 'Assistante gestion locative (stage)',
    company: 'Foncia',
    description: 'Documents administratifs, gestion locative et démarches téléphoniques.',
  },
]

export const education = [
  {
    period: '2024 — 2026',
    degree: 'MBA — Manager de la communication',
    school: 'ISEG Strasbourg',
  },
  {
    period: '2021 — 2024',
    degree: 'Bachelor Communication & Marketing',
    school: 'ISEG Strasbourg',
  },
  {
    period: '2018 — 2021',
    degree: 'Baccalauréat général (Histoire / Économie, mention européenne)',
    school: 'Lycée St Joseph — La Pommeraye',
  },
]

// Compétences / outils
export const skills = [
  'Stratégie de communication',
  'Communication interne',
  'Marque employeur',
  'Rédaction & storytelling',
  'Graphisme (suite Adobe)',
  'Montage vidéo (Premiere Pro)',
  'Événementiel',
  'Réalité virtuelle',
  'Réseaux sociaux',
  'Gestion de projet',
]

export const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'B1' },
  { name: 'Espagnol', level: 'A2' },
]

export const navLinks = [
  { id: 'realisations', label: 'Réalisations' },
  { id: 'apropos', label: 'À propos' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'competences', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
]
