/* ============================================================
   CONTENU DU SITE — Élisa Wagner
   ------------------------------------------------------------
   Toutes les informations proviennent du CV d'Élisa.
   Pour mettre à jour le site, il suffit de modifier ce fichier.
   (Le lien LinkedIn exact reste à confirmer — voir [À confirmer].)
   ============================================================ */

export const profile = {
  firstName: 'Élisa',
  lastName: 'Wagner',
  role: 'Communication interne & marque employeur',
  // Accroche principale du hero
  tagline: 'Je crée des contenus et des campagnes\nqui rapprochent les marques de leurs publics.',
  // Sous-titre du hero
  intro:
    "Diplômée d'un MBA Manager de la communication, je conçois des contenus et des campagnes qui donnent du sens, valorisent la marque employeur et fédèrent les collaborateurs. Créative et curieuse, je mêle stratégie, graphisme et vidéo.",
  photo: 'elisa-wagner.jpg',
  location: 'Strasbourg · France',
  email: 'elisa.wagner49@gmail.com',
  phone: '07 85 10 07 23',
  phoneLink: 'tel:+33785100723',
  linkedin: 'https://www.linkedin.com/in/wagnerelisa',
  available: 'Disponible dès septembre 2026',
}

// Mots-clés du bandeau défilant (marquee)
export const keywords = [
  'Communication interne',
  'Marque employeur',
  'Création de contenus',
  'Graphisme',
  'Vidéo',
  'Événementiel',
  'Réseaux sociaux',
  'Storytelling',
  'Gestion de projet',
]

// Quelques chiffres-clés (compteurs animés)
export const stats = [
  { value: 2, suffix: ' ans', label: "d'alternance chez Octapharma" },
  { value: 4, suffix: '', label: 'expériences professionnelles' },
  { value: 3, suffix: '', label: 'langues (FR · EN · ES)' },
  { value: 1, suffix: '', label: 'MBA en communication' },
]

export const about = {
  title: 'Faire de la communication un lien, pas un canal',
  paragraphs: [
    "À 23 ans, je termine un MBA Manager de la communication à l'ISEG Strasbourg, après deux années d'alternance chez Octapharma. J'y ai mesuré le pouvoir d'une communication interne sincère et d'une marque employeur réellement incarnée.",
    "Polyvalente, je passe volontiers de la stratégie à la création : rédaction, graphisme, vidéo, événementiel. J'aime imaginer des contenus qui donnent envie de lire, de participer et de s'engager. Je suis disponible dès septembre 2026 pour un poste à temps plein.",
  ],
  highlights: [
    'Communication interne',
    'Marque employeur',
    'Création de contenus print & digital',
    'Graphisme & vidéo',
  ],
}

export const skills = [
  {
    icon: '✶',
    title: 'Communication interne',
    text: 'Conception de supports et de dispositifs qui informent, rassemblent et engagent les collaborateurs.',
  },
  {
    icon: '✦',
    title: 'Marque employeur',
    text: 'Participation au pilotage de campagnes média pour valoriser l’entreprise, ses métiers et attirer les talents.',
  },
  {
    icon: '❖',
    title: 'Création de contenus',
    text: 'Contenus print et digitaux : flyers, stickers, posts LinkedIn & Instagram, articles, newsletters.',
  },
  {
    icon: '✸',
    title: 'Création graphique',
    text: 'Supports visuels variés — roll-up, habillage de camions, identités — sur la suite Adobe.',
  },
  {
    icon: '✿',
    title: 'Contenu vidéo',
    text: 'Tournage et montage de vidéos sur Adobe Premiere Pro, du brief à la diffusion.',
  },
  {
    icon: '✺',
    title: 'Gestion de projet & événementiel',
    text: 'Pilotage de projets et organisation d’événements, du concept à la coordination sur le terrain.',
  },
]

export const experiences = [
  {
    period: 'Sept. 2024 — Août 2026',
    role: 'Chargée de communication (alternance)',
    company: 'Octapharma',
    description:
      "Création de contenus print et digitaux, création graphique (roll-up, habillage de camions), participation au pilotage d'une campagne média de marque employeur, rédaction (articles, posts LinkedIn), réalisation de contenus vidéo (tournage et montage sur Premiere Pro), événementiel et gestion de projet.",
    tags: ['Marque employeur', 'Contenus', 'Vidéo', 'Événementiel'],
  },
  {
    period: 'Mai — Juillet 2024',
    role: 'Chargée de communication interne (stage)',
    company: 'Kairos',
    description:
      'Création de supports de communication interne pour informer et fédérer les équipes.',
    tags: ['Communication interne', 'Supports'],
  },
  {
    period: 'Mai — Juillet 2023',
    role: 'Chargée de communication (stage)',
    company: 'Les Bijoux de Marilou',
    description:
      'Création de contenus (posts Instagram), gestion de plannings, assemblage et gravure de bijoux, préparation de commandes.',
    tags: ['Réseaux sociaux', 'Contenus'],
  },
  {
    period: 'Juillet — Août 2022',
    role: 'Assistante gestion locative (stage)',
    company: 'Foncia',
    description:
      'Réalisation de documents administratifs, gestion locative et démarches téléphoniques.',
    tags: ['Administratif', 'Relation client'],
  },
]

export const education = [
  {
    period: '2024 — 2026',
    degree: 'MBA — Manager de la communication',
    school: 'ISEG Strasbourg',
    description:
      'Management de la communication : stratégie, marque, pilotage de projets et création de contenus.',
  },
  {
    period: '2021 — 2024',
    degree: 'Bachelor Communication & Marketing',
    school: 'ISEG Strasbourg',
    description:
      'Fondamentaux de la communication, du marketing et de la création de contenus.',
  },
  {
    period: '2018 — 2021',
    degree: 'Baccalauréat général',
    school: 'Lycée St Joseph — La Pommeraye',
    description: 'Spécialités Histoire et Économie, mention européenne.',
  },
]

export const projects = [
  {
    title: 'Campagne média marque employeur',
    category: 'Marque employeur',
    description:
      "Participation au pilotage d'une campagne média pour valoriser Octapharma, ses métiers et ses équipes.",
    color: 'var(--lavender)',
  },
  {
    title: '« La plus grande tarte flambée du monde »',
    category: 'Gestion de projet',
    description:
      "Cheffe de projet et gestion des réseaux sociaux pour cet événement record organisé avec l'ISEG.",
    color: 'var(--mint)',
  },
  {
    title: 'Contenus vidéo de marque',
    category: 'Vidéo',
    description:
      'Conception, tournage et montage de contenus vidéo sur Adobe Premiere Pro.',
    color: 'var(--peach)',
  },
  {
    title: 'Supports de communication interne',
    category: 'Communication interne',
    description:
      'Création de supports pour informer et fédérer les équipes en interne.',
    color: 'var(--sky)',
  },
]

export const navLinks = [
  { id: 'apropos', label: 'À propos' },
  { id: 'expertises', label: 'Expertises' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'formation', label: 'Formation' },
  { id: 'realisations', label: 'Réalisations' },
  { id: 'contact', label: 'Contact' },
]
