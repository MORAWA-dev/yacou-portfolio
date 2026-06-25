const profile = {
  about:
    "Récemment diplômé en Bachelor en Ingénierie Minière et Géologique à l’École Supérieure de Technologie de Fquih Ben Salah (Maroc), il a construit un profil terrain, méthodique et polyvalent. Son parcours met l’accent sur la géotechnique, la stabilité minière et les sujets techniques liés à l’extraction, au prétraitement, à la géologie appliquée et à la valorisation minière.",
  contact: [
    { label: 'Téléphone', value: '0635 45 73 39' },
    { label: 'Email', value: 'Ouedraogoyacou303@gmail.com', href: 'mailto:Ouedraogoyacou303@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/yacou', href: 'https://www.linkedin.com/in/yacou' },
    { label: 'Localisation', value: 'Fquih Ben Salah, Maroc' }
  ],
  skills: [
    'Leadership',
    'Gestion de projet',
    'Communication',
    "Esprit d'équipe",
    'Travail sous pression',
    'Autonomie',
    'Confiance',
    'Adaptabilité'
  ],
  education: [
    {
      title: 'Bachelor en Ingénierie Minière et Géologique',
      meta: '2025-2026 · École Supérieure de Technologie, Fquih Ben Salah',
      body: 'Diplôme obtenu cette année avec une spécialisation en sciences minières, géologie appliquée et méthodes d’exploration.'
    },
    {
      title: 'Diplôme universitaire de Technologie',
      meta: '2023-2025 · École Supérieure de Technologie, Fquih Ben Salah',
      body: 'Base académique solide qui a préparé la spécialisation en ingénierie minière et géologique.'
    },
    {
      title: 'Baccalauréat Professionnel en Structure Métallique',
      meta: '2019-2023 · Lycée Professionnel Régional Naaba Kango, Burkina Faso',
      body: 'Parcours technique initial qui a renforcé la rigueur et le sens pratique.'
    }
  ],
  experience: [
    {
      title: 'Stage de fin d’étude à l’OCP de Khouribga',
      meta: '01/04/2025 - 30/05/2025',
      body: 'Étude critique du deschlammage et des attritionnaires dans la cellule de flottation.'
    },
    {
      title: 'Stage technique d’initiation à l’OCP de Sidi Chennane',
      meta: '01/07/2025 - 28/07/2025',
      body: 'Découverte des étapes d’extraction du phosphate et du prétraitement du phosphate.'
    },
    {
      title: 'Stage à AMS/WK à Ouahigouya',
      meta: '01/12/2022 - 30/01/2023',
      body: 'Confection de portes, portails, fenêtres et tables dans un environnement artisanal et technique.'
    }
  ],
  thesis: {
    title:
      'Analyse de la stabilité des galeries minières du site SMI (Imiter I) basée sur les classifications géomécaniques (RMR, Q-system, Protodyakonov) et corrélation avec les observations terrain',
    meta: 'Soutenue le 23/06/2026 · EST-FBS · Mine SMI (Managem)',
    body:
      'Travail de fin d’études centré sur l’analyse géomécanique de galeries souterraines, la qualification du massif rocheux et la proposition de soutènements adaptés. Les recommandations privilégient le boulonnage avec treillis soudé, complété par du béton projeté et des cintres métalliques dans les zones critiques.'
  },
  projects: [
    {
      title: 'Stabilité des galeries minières à SMI (Imiter I)',
      eyebrow: 'Mémoire de fin d’études',
      description: 'Analyse géomécanique, mesures terrain et recommandations de soutènement adaptées aux zones critiques.',
      href: '#thesis'
    },
    {
      title: 'Deschlammage et attritionnaires à l’OCP de Khouribga',
      eyebrow: 'Stage OCP',
      description: 'Étude critique du comportement de la cellule de flottation et des paramètres de traitement.',
      href: '#experience'
    },
    {
      title: 'Extraction et prétraitement du phosphate à Sidi Chennane',
      eyebrow: 'Stage d’initiation',
      description: 'Observation des opérations minières et des étapes de prétraitement du phosphate sur site.',
      href: '#experience'
    }
  ],
  knowledge: [
    'Calculs géotechniques',
    'Topographie souterraine',
    'Hydrogéologie minière',
    'Géophysique',
    'Rejet minier et valorisation',
    'Télédétection / SIG',
    'Minéralogie',
    'Technique d’exploration',
    'Technique d’exploitation',
    'Géologie appliquée',
    'Hydrométallurgie'
  ],
  tools: [
    'Microsoft Office',
    'Excel',
    'Photoshop',
    'Envi',
    'Leapfrog Geo',
    'Canvas',
    'ArcGIS',
    'Forage à explosif'
  ],
  interests: ['Culture et arts', 'Environnement', 'Sport', 'Développement personnel'],
  languages: ['Mooré : maîtrise parfaite', 'Français : courant', 'Anglais : intermédiaire']
};

const renderChips = (target, items) => {
  target.innerHTML = items.map((item) => `<span class="chip">${item}</span>`).join('');
};

const renderTimeline = (target, items) => {
  target.innerHTML = items
    .map(
      (item) => `
        <article class="timeline-item">
          <h3>${item.title}</h3>
          <p class="timeline-item__meta">${item.meta}</p>
          <p class="timeline-item__body">${item.body}</p>
        </article>
      `,
    )
    .join('');
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('about-text').textContent = profile.about;
  document.getElementById('languages').textContent = profile.languages.join(' · ');

  const thesis = document.getElementById('thesis');
  thesis.innerHTML = `
    <h3 class="thesis__title">${profile.thesis.title}</h3>
    <p class="thesis__meta">${profile.thesis.meta}</p>
    <p class="thesis__body">${profile.thesis.body}</p>
  `;

  const projects = document.getElementById('projects-grid');
  if (projects) {
    projects.innerHTML = profile.projects
      .map(
        (project, index) => `
          <a class="project-card${index === 0 ? ' project-card--featured' : ''}" href="${project.href}">
            <span class="project-card__eyebrow">${project.eyebrow}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <span class="project-card__action">Voir le détail →</span>
          </a>
        `,
      )
      .join('');
  }

  const contactList = document.getElementById('contact-list');
  contactList.innerHTML = profile.contact
    .map((item) => {
      const value = item.href ? `<a href="${item.href}" target="_blank" rel="noreferrer">${item.value}</a>` : `<p>${item.value}</p>`;
      return `
        <li>
          <p class="profile-meta__label">${item.label}</p>
          ${value}
        </li>
      `;
    })
    .join('');

  renderChips(document.getElementById('skills'), profile.skills);
  renderChips(document.getElementById('knowledge'), profile.knowledge);
  renderChips(document.getElementById('tools'), profile.tools);
  renderChips(document.getElementById('interests'), profile.interests);
  renderTimeline(document.getElementById('education'), profile.education);
  renderTimeline(document.getElementById('experience-list'), profile.experience);
});
