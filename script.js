const profile = {
  about:
    "Récemment diplômé en Bachelor en Ingénierie Minière et Géologique à l'École Supérieure de Technologie de Fquih Ben Salah (Maroc), il a construit un profil terrain, méthodique et polyvalent. Son parcours met l'accent sur la géotechnique, la stabilité minière et les sujets techniques liés à l'extraction, au prétraitement, à la géologie appliquée et à la valorisation minière.",
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
      body: "Diplôme obtenu cette année avec une spécialisation en sciences minières, géologie appliquée et méthodes d'exploration."
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
      title: "Stage de fin d'étude à l'OCP de Khouribga",
      meta: '01/04/2025 - 30/05/2025',
      body: 'Étude critique du deschlammage et des attritionnaires dans la cellule de flottation.'
    },
    {
      title: "Stage technique d'initiation à l'OCP de Sidi Chennane",
      meta: '01/07/2025 - 28/07/2025',
      body: "Découverte des étapes d'extraction du phosphate et du prétraitement du phosphate."
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
      "Projet de fin d'études (PFE) centré sur l'analyse géomécanique de galeries souterraines, la qualification du massif rocheux et la proposition de soutènements adaptés. Les recommandations privilégient le boulonnage avec treillis soudé, complété par du béton projeté et des cintres métalliques dans les zones critiques."
  },
  pfe2: {
    title: 'Modélisation Géologique & Hydrogéologique 3D du Bassin d\'Oued Laou (Rif, Maroc)',
    meta: 'Projet Majeur · Logiciels : Leapfrog Geo, Surfer, Global Mapper',
    objective: "Intégrer des données multidisciplinaires de sous-sol pour cartographier l'architecture structurale et les réservoirs aquifères d'un bassin sédimentaire complexe de 930 km².",
    skills: [
      "Modélisation implicite 3D : Utilisation avancée du logiciel professionnel Leapfrog Geo (fonctions de base radiales - RBF) pour la génération des volumes des horizons géologiques profonds.",
      "Interprétation de données de sous-sol : Analyse, corrélation et intégration de profils de Tomographie de Résistivité Électrique (TRE) 2D avec les diagraphies de 26 sondages carottés atteignant jusqu'à 550 m de profondeur.",
      "Traitement de données spatiales : Manipulation et correction de Modèles Numériques de Terrain (MNT) sous Global Mapper et analyses topographiques de surface sous Surfer."
    ],
    results: [
      "Mise en évidence d'un accident structural majeur : Identification et modélisation en 3D d'une faille tectonique inédite (direction NW-SE, rejet vertical de ~220 m) agissant comme une barrière hydrogéologique et contrôlant le piégeage d'un important réservoir aquifère conducteur.",
      "Contrôle Qualité & Analyse de Précision (QA/QC) : Évaluation statistique rigoureuse des algorithmes d'interpolation par le calcul de l'erreur quadratique moyenne. L'approche implicite sous Leapfrog Geo a optimisé la précision géométrique des couches profondes avec une erreur minimale (RMSE ~2,9 m) comparée aux méthodes d'interpolation classiques IDW (4,8 m) et TIN (3,5 m)."
    ]
  },
  projects: [
    {
      title: 'Stabilité des galeries minières à SMI (Imiter I)',
      eyebrow: "Projet de fin d'études (PFE)",
      description: 'Analyse géomécanique, mesures terrain et recommandations de soutènement adaptées aux zones critiques.',
      href: '#thesis'
    },
    {
      title: 'Modélisation Géologique & Hydrogéologique 3D du Bassin d\'Oued Laou',
      eyebrow: 'Projet Majeur (PFE)',
      description: "Modélisation 3D d'un bassin sédimentaire de 930 km² avec Leapfrog Geo, identification d'une faille tectonique inédite et analyse de précision QA/QC.",
      href: '#pfe2'
    },
    {
      title: "Deschlammage et attritionnaires à l'OCP de Khouribga",
      eyebrow: 'Stage OCP',
      description: 'Étude critique du comportement de la cellule de flottation et des paramètres de traitement.',
      href: '#experience'
    },
    {
      title: 'Extraction et prétraitement du phosphate à Sidi Chennane',
      eyebrow: "Stage d'initiation",
      description: 'Observation des opérations minières et des étapes de prétraitement du phosphate sur site.',
      href: '#experience'
    }
  ],
  knowledge: [
    'Stabilité des infrastructures minières',
    'Topographie souterraine',
    'Mécanique des roches avancées',
    'Hydraulique souterraine',
    "Foration et Abattage à l'explosif",
    'Télédétection et SIG'
  ],
  tools: [
    'Microsoft Office',
    'Excel',
    'Photoshop',
    'Envi',
    'Leapfrog Geo',
    'Surfer',
    'Global Mapper',
    'Canvas',
    'ArcGIS'
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

  // Render PFE 1 (thesis)
  const thesis = document.getElementById('thesis');
  thesis.innerHTML = `
    <h3 class="thesis__title">${profile.thesis.title}</h3>
    <p class="thesis__meta">${profile.thesis.meta}</p>
    <p class="thesis__body">${profile.thesis.body}</p>
  `;

  // Render PFE 2 (Bassin d'Oued Laou)
  const pfe2 = document.getElementById('pfe2');
  if (pfe2) {
    pfe2.innerHTML = `
      <h3 class="thesis__title">${profile.pfe2.title}</h3>
      <p class="thesis__meta">${profile.pfe2.meta}</p>
      <div class="pfe2-content">
        <div class="pfe2-objective">
          <h4>🎯 Objectif du projet</h4>
          <p>${profile.pfe2.objective}</p>
        </div>
        <div class="pfe2-gallery">
          <h4>🖼️ Résultats Visuels</h4>
          <div class="pfe2-gallery__grid">
            <figure class="pfe2-gallery__item">
              <img src="modele_3d.jpeg" alt="Modèle géologique 3D du Bassin d'Oued Laou dans Leapfrog Geo" loading="lazy" />
              <figcaption>Modèle géologique 3D complet du bassin avec légende lithologique</figcaption>
            </figure>
            <figure class="pfe2-gallery__item">
              <img src="sondages_3d.jpeg" alt="Modélisation 3D des axes des 26 sondages carottés" loading="lazy" />
              <figcaption>Modélisation 3D des axes des 26 sondages carottés dans l'espace du bassin</figcaption>
            </figure>
            <figure class="pfe2-gallery__item pfe2-gallery__item--wide">
              <img src="rmse_graph.jpeg" alt="Graphique des écarts quadratiques - Comparaison RMSE entre Surfer, Global Mapper et Leapfrog" loading="lazy" />
              <figcaption>Écarts quadratiques entre modèles et mesures réelles (RMSE : Surfer, Global Mapper, Leapfrog)</figcaption>
            </figure>
          </div>
        </div>
        <div class="pfe2-skills">
          <h4>🛠️ Compétences Techniques Déployées</h4>
          <ul>
            ${profile.pfe2.skills.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
        <div class="pfe2-results">
          <h4>📊 Résultats Clés & Impact Scientifique</h4>
          <ul>
            ${profile.pfe2.results.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // Render projects
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
