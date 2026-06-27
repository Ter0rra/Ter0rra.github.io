'use strict';

/* ============================================================
   1. DONNÉES
   ============================================================ */

const LAYERS = [
  { id: 'sources', label: 'SOURCES', color: '#4ECDC4' },
  { id: 'skills',  label: 'SKILLS',  color: '#00D4FF' },
  { id: 'projets', label: 'PROJETS', color: '#A855F7' },
  { id: 'outputs', label: 'OUTPUTS', color: '#10B981' },
];

const NODES = [

  /* ── SOURCES ───────────────────────────────────────────── */
  {
    id: 'ratp', layer: 0, abbr: 'RT', label: 'RATP', sublabel: 'Manager · 5 ans',
    type: 'source',
    description: "Management opérationnel Ligne 11. Équipe de 20+ agents, environnement 3×8. Construction autodidacte d'un pipeline d'analyse de régularité à la seconde.",
    result: "Pipeline Python remplaçant l'approche par échantillonnage. Deux livrables pour deux décideurs distincts.",
    tags: ['Management', 'Terrain', 'Python', 'Pandas', 'IDFM'],
  },
  {
    id: 'jedha', layer: 0, abbr: 'JE', label: 'Jedha', sublabel: 'Bac+5 IA · RNCP 7',
    type: 'source',
    description: "Architecte en Intelligence Artificielle — RNCP niveau 7 (Bac+5). Formation intensive couvrant le cycle complet ML/MLOps de la donnée au monitoring.",
    result: "Maîtrise du cycle complet : données → modèle → déploiement → monitoring.",
    tags: ['RNCP 7', 'Deep Learning', 'MLOps', 'Data Engineering'],
  },
  {
    id: 'databird', layer: 0, abbr: 'DB', label: 'DataBird', sublabel: 'Cert. Data Analyst',
    type: 'source',
    description: "Certification Data Analyst. Fondamentaux SQL, Python analytique, visualisation de données. Transition structurée vers le ML.",
    result: "Bases analytiques solides ayant permis la montée en compétence ML.",
    tags: ['SQL', 'Python', 'Visualisation', 'Analyse'],
  },

  /* ── SKILLS ─────────────────────────────────────────────── */
  {
    id: 'python', layer: 1, abbr: 'PY', label: 'Python', sublabel: 'Expert',
    type: 'skill', level: 5,
    description: "Langage principal. Utilisé dans l'intégralité des projets, de l'exploration à la production.",
    subskills: ['Pandas', 'NumPy', 'Plotly', 'Boto3', 'SpaCy'],
    tags: ['Expert'],
  },
  {
    id: 'pytorch', layer: 1, abbr: 'PT', label: 'PyTorch', sublabel: 'Avancé',
    type: 'skill', level: 4,
    description: "Deep learning. CNN EfficientNet B4 pour Wakee, boucle d'entraînement custom, transfer learning, augmentation de données.",
    subskills: ['EfficientNet B4', 'Transfer Learning', 'CNN', 'DataLoader'],
    tags: ['Avancé'],
  },
  {
    id: 'spark', layer: 1, abbr: 'SP', label: 'SQL · PySpark', sublabel: 'Avancé',
    type: 'skill', level: 4,
    description: "SQL pour l'analyse, PySpark/Databricks pour le traitement distribué (Steam Marketplace Analysis, pipeline RATP).",
    subskills: ['PySpark', 'Databricks', 'SQL', 'Delta Lake'],
    tags: ['Avancé'],
  },
  {
    id: 'mlflow', layer: 1, abbr: 'MF', label: 'MLflow', sublabel: 'Avancé',
    type: 'skill', level: 4,
    description: "Experiment tracking, model registry, versionning. Intégré dans Wakee Reloaded pour le déclenchement conditionnel du redéploiement.",
    subskills: ['Experiment Tracking', 'Model Registry', 'Artifacts'],
    tags: ['Avancé'],
  },
  {
    id: 'docker', layer: 1, abbr: 'DO', label: 'Docker', sublabel: 'Avancé',
    type: 'skill', level: 4,
    description: "Containerisation des services ML, API et dashboards. Docker Compose pour l'orchestration locale, images sur Docker Hub.",
    subskills: ['Docker Compose', 'Dockerfile', 'Docker Hub'],
    tags: ['Avancé'],
  },
  {
    id: 'airflow', layer: 1, abbr: 'AF', label: 'Airflow', sublabel: 'Avancé',
    type: 'skill', level: 4,
    description: "Orchestration du pipeline de réentraînement continu Wakee Reloaded. DAGs Python, scheduling, triggers conditionnels sur seuils de performance.",
    subskills: ['DAGs', 'Scheduling', 'Sensors', 'XComs'],
    tags: ['Avancé'],
  },
  {
    id: 'aws', layer: 1, abbr: 'AW', label: 'AWS', sublabel: 'Intermédiaire',
    type: 'skill', level: 3,
    description: "Stockage d'artefacts sur S3, entraînement sur EC2, accès programmatique via Boto3.",
    subskills: ['S3', 'EC2', 'Boto3', 'IAM'],
    tags: ['Intermédiaire'],
  },
  {
    id: 'fastapi', layer: 1, abbr: 'FA', label: 'FastAPI', sublabel: 'Avancé',
    type: 'skill', level: 4,
    description: "Exposition de modèles ML sous forme d'API REST. Validation Pydantic, endpoints de prédiction, documentation automatique.",
    subskills: ['REST API', 'Pydantic', 'Uvicorn', 'Endpoints'],
    tags: ['Avancé'],
  },
  {
    id: 'sklearn', layer: 1, abbr: 'SK', label: 'Scikit-learn', sublabel: 'Expert',
    type: 'skill', level: 5,
    description: "ML supervisé classique, pipelines de preprocessing, cross-validation, XGBoost, gestion du déséquilibre de classes.",
    subskills: ['XGBoost', 'Pipeline', 'GridSearchCV', 'SMOTE'],
    tags: ['Expert'],
  },
  {
    id: 'transformers', layer: 1, abbr: 'TR', label: 'Transformers', sublabel: 'Avancé',
    type: 'skill', level: 4,
    description: "Intégration Mistral LLM dans Wakee, HuggingFace Transformers, Langchain pour le chaînage de prompts.",
    subskills: ['Mistral', 'HuggingFace', 'Langchain', 'LLM'],
    tags: ['Avancé'],
  },

  /* ── PROJETS ─────────────────────────────────────────────── */
  {
    id: 'wakee', layer: 2, abbr: 'WK', label: 'Wakee', sublabel: '● LIVE',
    type: 'projet', live: true,
    description: "Détection d'émotions faciales par CNN (EfficientNet B4) + LLM (Mistral) pour aider à maintenir la concentration. Projet d'équipe (4 personnes). Pipeline MLOps complet.",
    result: "Déployé sur HuggingFace Spaces. Accès restreint (conformité AI Act sur la reconnaissance d'émotions).",
    tags: ['PyTorch', 'EfficientNet B4', 'Mistral', 'MLflow', 'Docker', 'HuggingFace'],
    demo: '#', // ← remplacer par l'URL réelle
    code: 'https://github.com/Ter0rra/Wakee',
  },
  {
    id: 'wakee_r', layer: 2, abbr: 'WR', label: 'Wakee Reloaded', sublabel: '● LIVE',
    type: 'projet', live: true,
    description: "Pipeline de réentraînement continu pour Wakee. Airflow scheduling, MLflow tracking, NeonDB pour les labels, Streamlit pour la labellisation, redéploiement conditionnel via GitHub Actions.",
    result: "Réentraînement automatique déclenché par seuil de performance. Zéro intervention manuelle.",
    tags: ['Airflow', 'MLflow', 'NeonDB', 'Streamlit', 'GitHub Actions', 'Docker'],
    demo: '#',
    code: 'https://github.com/Ter0rra/wakee-reloaded',
  },
  {
    id: 'jobtracker', layer: 2, abbr: 'JT', label: 'Job Tracker', sublabel: '● LIVE',
    type: 'projet', live: true,
    description: "Dashboard de suivi de candidatures en temps réel. Statuts, relances, classification par catégorie, détection des candidatures périmées.",
    result: "Déployé sur HuggingFace Spaces via Docker. Monitoring actif de la recherche d'emploi.",
    tags: ['Streamlit', 'Docker', 'Python', 'HuggingFace'],
    demo: '#',
    code: '#',
  },
  {
    id: 'fddetector', layer: 2, abbr: 'FD', label: 'FD Detector', sublabel: '● LIVE',
    type: 'projet', live: true,
    description: "Détection de transactions frauduleuses. XGBoost, gestion du déséquilibre de classes (SMOTE), API FastAPI, interface Streamlit.",
    result: "AUC-ROC 0.94. Pipeline complet preprocessing → modèle → API → UI.",
    tags: ['XGBoost', 'FastAPI', 'Streamlit', 'Scikit-learn', 'SMOTE'],
    demo: '#',
    code: 'https://github.com/Ter0rra/03_Jedha_aia_bloc_3_fraud_detector',
  },
  {
    id: 'rpsls', layer: 2, abbr: 'RL', label: 'RPSLS', sublabel: '● LIVE',
    type: 'projet', live: true,
    description: "Rock Paper Scissors Lizard Spock. Implémentation Python du jeu étendu, déployé sur Render.",
    result: "Déployé et accessible en ligne.",
    tags: ['Python', 'Render'],
    demo: 'https://rpsls-deepqlearn.onrender.com/',
    code: 'https://github.com/Ter0rra/RPSLS_DeepQlearn',
  },
  {
    id: 'ratp_pipeline', layer: 2, abbr: 'RP', label: 'Pipeline RATP', sublabel: 'Interne',
    type: 'projet', live: false,
    description: "Automatisation Python de l'analyse de régularité train à la seconde près pour le reporting IDFM. Construit en autodidacte, remplace une approche par échantillonnage.",
    result: "Deux livrables distincts pour deux décideurs distincts. Précision à la seconde.",
    tags: ['Python', 'Pandas', 'Automatisation', 'IDFM'],
  },

  /* ── OUTPUTS ─────────────────────────────────────────────── */
  {
    id: 'hf_spaces', layer: 3, abbr: 'HF', label: 'HuggingFace', sublabel: 'Spaces',
    type: 'output',
    description: "Déploiement de Wakee, Wakee Reloaded et Job Tracker sur HuggingFace Spaces.",
    url: '#', // ← remplacer
    tags: ['Wakee', 'Wakee Reloaded', 'Job Tracker'],
  },
  {
    id: 'streamlit_cloud', layer: 3, abbr: 'ST', label: 'Streamlit', sublabel: 'Cloud',
    type: 'output',
    description: "Déploiement de FD Detector sur Streamlit Community Cloud.",
    url: '#',
    tags: ['FD Detector'],
  },
  {
    id: 'render_web', layer: 3, abbr: 'RD', label: 'Render', sublabel: 'Web Hosting',
    type: 'output',
    description: "Hébergement de RPSLS sur Render. Déploiement continu depuis GitHub.",
    url: 'https://rpsls-deepqlearn.onrender.com/',
    tags: ['RPSLS'],
  },
  {
    id: 'github_pages', layer: 3, abbr: 'GH', label: 'GitHub', sublabel: 'Portfolio · Code',
    type: 'output',
    description: "Code source de l'ensemble des projets. Ce portfolio sur GitHub Pages.",
    url: 'https://github.com/Ter0rra', 
    tags: ['Tous les projets'],
  },
  {
    id: 'contact', layer: 3, abbr: 'CV', label: 'Contact', sublabel: 'CV · LinkedIn',
    type: 'output',
    description: "Disponible pour un CDI en Data Science, MLOps ou Data Analytics en Île-de-France / Hauts-de-France.",
    email: 'albert.romano.data@gmail.com',
    linkedin: 'https://linkedin.com/in/albert-romano-ter0rra',
    tags: ['CDI', 'IDF', 'Hauts-de-France'],
  },
];

const EDGES = [
  // SOURCES → SKILLS
  ['ratp', 'python'], ['ratp', 'spark'],
  ['jedha', 'python'], ['jedha', 'pytorch'], ['jedha', 'spark'],
  ['jedha', 'mlflow'], ['jedha', 'docker'], ['jedha', 'airflow'],
  ['jedha', 'aws'], ['jedha', 'fastapi'], ['jedha', 'sklearn'],
  ['jedha', 'transformers'],
  ['databird', 'python'], ['databird', 'spark'],

  // SKILLS → PROJETS
  ['python',      'wakee'], ['python', 'wakee_r'], ['python', 'jobtracker'],
  ['python',      'fddetector'], ['python', 'rpsls'], ['python', 'ratp_pipeline'],
  ['pytorch',     'wakee'], ['pytorch', 'wakee_r'],
  ['spark',       'ratp_pipeline'],
  ['mlflow',      'wakee'], ['mlflow', 'wakee_r'],
  ['docker',      'wakee'], ['docker', 'wakee_r'], ['docker', 'jobtracker'], ['docker', 'fddetector'],
  ['airflow',     'wakee_r'],
  ['aws',         'wakee'], ['aws', 'ratp_pipeline'],
  ['fastapi',     'fddetector'],
  ['sklearn',     'fddetector'], ['sklearn', 'wakee'],
  ['transformers','wakee'], ['transformers', 'wakee_r'],

  // PROJETS → OUTPUTS
  ['wakee',         'hf_spaces'], ['wakee', 'github_pages'],
  ['wakee_r',       'hf_spaces'], ['wakee_r', 'github_pages'],
  ['jobtracker',    'hf_spaces'], ['jobtracker', 'github_pages'],
  ['fddetector',    'streamlit_cloud'], ['fddetector', 'github_pages'],
  ['rpsls',         'render_web'], ['rpsls', 'github_pages'],
  ['ratp_pipeline', 'contact'], ['ratp_pipeline', 'github_pages'],
];

/* ============================================================
   2. STATE
   ============================================================ */
let activeId = null;
let positions = {};

/* ============================================================
   3. LAYOUT — calcul des positions
   ============================================================ */
function computePositions() {
  const wrapper = document.getElementById('canvasWrapper');
  const W = wrapper.offsetWidth;
  const H = wrapper.offsetHeight;
  const totalLayers = LAYERS.length;

  const PAD_X = W * 0.10;
  const PAD_Y = H * 0.10;
  const availW = W - 2 * PAD_X;
  const availH = H - 2 * PAD_Y;

  const result = {};

  LAYERS.forEach((_, li) => {
    const nodesInLayer = NODES.filter(n => n.layer === li);
    const count = nodesInLayer.length;
    const x = PAD_X + (li / (totalLayers - 1)) * availW;

    nodesInLayer.forEach((node, ni) => {
      const y = count === 1
        ? H / 2
        : PAD_Y + (ni / (count - 1)) * availH;
      result[node.id] = { x, y };
    });
  });

  return result;
}

/* ============================================================
   4. LAYER LABELS
   ============================================================ */
function renderLayerLabels() {
  const container = document.getElementById('layerLabels');
  container.innerHTML = '';

  LAYERS.forEach((layer, li) => {
    const nodesInLayer = NODES.filter(n => n.layer === li);
    if (!nodesInLayer.length) return;
    const pos = positions[nodesInLayer[0].id];

    const el = document.createElement('div');
    el.className = 'layer-label';
    el.textContent = layer.label;
    el.style.left = pos.x + 'px';
    el.style.color = layer.color;
    container.appendChild(el);
  });
}

/* ============================================================
   5. NŒUDS
   ============================================================ */
function renderNodes() {
  const canvas = document.getElementById('nnCanvas');
  canvas.innerHTML = '';

  NODES.forEach((node, idx) => {
    const pos = positions[node.id];
    const layer = LAYERS[node.layer];

    // Couleurs inline (évite color-mix() pour compatibilité max)
    const hex = layer.color;
    const rgb = hexToRgb(hex);
    const c20 = `rgba(${rgb},0.20)`;
    const c30 = `rgba(${rgb},0.30)`;
    const c50 = `rgba(${rgb},0.50)`;
    const c80 = `rgba(${rgb},0.80)`;

    const el = document.createElement('div');
    el.className = `nn-node${node.live ? ' node-live' : ''}`;
    el.id = `node-${node.id}`;
    el.dataset.id = node.id;
    el.style.cssText = `
      left:${pos.x}px; top:${pos.y}px;
      --nc:${hex}; --nc-20:${c20}; --nc-30:${c30}; --nc-50:${c50}; --nc-80:${c80};
      animation-delay:${idx * 30}ms;
    `;

    el.innerHTML = `
      <div class="node-ring">
        <span class="node-abbr">${node.abbr}</span>
      </div>
      <div class="node-label">${node.label}</div>
      <div class="node-sublabel">${node.sublabel}</div>
    `;

    el.addEventListener('click', () => onNodeClick(node.id));
    canvas.appendChild(el);
  });
}

/* ============================================================
   6. CONNEXIONS SVG
   ============================================================ */
function renderConnections() {
  const svg = document.getElementById('svgConnections');
  svg.innerHTML = '';

  EDGES.forEach(([srcId, tgtId]) => {
    const s = positions[srcId];
    const t = positions[tgtId];
    if (!s || !t) return;

    const dx = (t.x - s.x) * 0.42;
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M${s.x},${s.y} C${s.x+dx},${s.y} ${t.x-dx},${t.y} ${t.x},${t.y}`);
    path.setAttribute('class', 'conn-path');
    path.dataset.src = srcId;
    path.dataset.tgt = tgtId;
    svg.appendChild(path);
  });
}

/* ============================================================
   7. INTERACTION
   ============================================================ */
function getConnected(nodeId) {
  const set = new Set();
  EDGES.forEach(([s, t]) => {
    if (s === nodeId) set.add(t);
    if (t === nodeId) set.add(s);
  });
  return set;
}

function onNodeClick(id) {
  // Toggle : re-cliquer ferme
  if (activeId === id) { resetAll(); return; }
  activeId = id;

  const connected = getConnected(id);
  const node = NODES.find(n => n.id === id);
  const layerColor = LAYERS[node.layer].color;

  // Nœuds
  document.querySelectorAll('.nn-node').forEach(el => {
    const eid = el.dataset.id;
    el.classList.remove('active', 'highlighted', 'dimmed');
    if (eid === id)          el.classList.add('active');
    else if (connected.has(eid)) el.classList.add('highlighted');
    else                      el.classList.add('dimmed');
  });

  // Connexions
  document.querySelectorAll('.conn-path').forEach(p => {
    p.classList.remove('conn-active', 'conn-dimmed');
    const isActive = p.dataset.src === id || p.dataset.tgt === id;
    if (isActive) {
      p.classList.add('conn-active');
      p.style.stroke = layerColor;
    } else {
      p.classList.add('conn-dimmed');
      p.style.stroke = '';
    }
  });

  openPanel(id);
}

function resetAll() {
  activeId = null;
  document.querySelectorAll('.nn-node').forEach(el => {
    el.classList.remove('active', 'highlighted', 'dimmed');
  });
  document.querySelectorAll('.conn-path').forEach(p => {
    p.classList.remove('conn-active', 'conn-dimmed');
    p.style.stroke = '';
  });
  closePanel();
}

/* ============================================================
   8. PANNEAU DE DÉTAIL
   ============================================================ */
function openPanel(nodeId) {
  const node = NODES.find(n => n.id === nodeId);
  const layer = LAYERS[node.layer];
  const color = layer.color;
  const rgb = hexToRgb(color);
  const connected = getConnected(nodeId);
  const connNodes = NODES.filter(n => connected.has(n.id));

  const typeLabel = { source: 'SOURCE', skill: 'SKILL', projet: 'PROJET', output: 'OUTPUT' };
  let main = '';

  // Badge + titre + description
  main += `
    <div class="panel-badge" style="color:${color};border-color:rgba(${rgb},0.35);background:rgba(${rgb},0.08)">
      ${typeLabel[node.type] || node.type}
    </div>
    <div class="panel-title">${node.label}</div>
    <div class="panel-desc">${node.description}</div>
  `;

  // Skill : niveau + sous-compétences
  if (node.type === 'skill') {
    const dots = Array.from({length: 5}, (_, i) =>
      `<div class="lvl-dot" style="${i < node.level ? `background:${color}` : ''}"></div>`
    ).join('');
    main += `<div class="panel-level">${dots}</div>`;
    const subs = (node.subskills || []).map(s =>
      `<span class="p-tag" style="color:${color};border-color:rgba(${rgb},0.3);background:rgba(${rgb},0.07)">${s}</span>`
    ).join('');
    main += `<div class="panel-tags">${subs}</div>`;
  }

  // Projet : résultat + tags + boutons
  if (node.type === 'projet') {
    if (node.result) main += `<div class="panel-result">→ ${node.result}</div>`;
    const tagHtml = (node.tags||[]).map(t =>
      `<span class="p-tag" style="color:${color};border-color:rgba(${rgb},0.3);background:rgba(${rgb},0.07)">${t}</span>`
    ).join('');
    main += `<div class="panel-tags">${tagHtml}</div>`;
    const btns = [];
    if (node.demo && node.demo !== '#')
      btns.push(`<a href="${node.demo}" target="_blank" class="btn-p" style="background:${color};color:#050810">→ Voir la démo</a>`);
    if (node.code && node.code !== '#')
      btns.push(`<a href="${node.code}" target="_blank" class="btn-s">↗ Code source</a>`);
    if (btns.length) main += `<div class="panel-actions">${btns.join('')}</div>`;
  }

  // Source : résultat + tags
  if (node.type === 'source') {
    if (node.result) main += `<div class="panel-result">→ ${node.result}</div>`;
    const tagHtml = (node.tags||[]).map(t =>
      `<span class="p-tag" style="color:${color};border-color:rgba(${rgb},0.3);background:rgba(${rgb},0.07)">${t}</span>`
    ).join('');
    main += `<div class="panel-tags">${tagHtml}</div>`;
  }

  // Output : lien(s)
  if (node.type === 'output') {
    const tagHtml = (node.tags||[]).map(t =>
      `<span class="p-tag" style="color:${color};border-color:rgba(${rgb},0.3);background:rgba(${rgb},0.07)">${t}</span>`
    ).join('');
    main += `<div class="panel-tags">${tagHtml}</div>`;
    const btns = [];
    if (node.email)
      btns.push(`<a href="mailto:${node.email}" class="btn-p" style="background:${color};color:#050810">→ Envoyer un email</a>`);
    if (node.linkedin)
      btns.push(`<a href="${node.linkedin}" target="_blank" class="btn-s">↗ LinkedIn</a>`);
    if (node.url && node.url !== '#')
      btns.push(`<a href="${node.url}" target="_blank" class="btn-s">↗ Ouvrir</a>`);
    if (btns.length) main += `<div class="panel-actions">${btns.join('')}</div>`;
  }

  // Colonne de droite : connexions actives
  const connList = connNodes.map(cn => {
    const cl = LAYERS[cn.layer];
    return `<div class="conn-item">
      <div class="conn-dot" style="background:${cl.color}"></div>
      <span>${cn.label}</span>
    </div>`;
  }).join('');

  const side = `
    <div class="conn-title">Connexions actives (${connNodes.length})</div>
    <div class="conn-list">${connList}</div>
  `;

  const body = document.getElementById('panelBody');
  body.innerHTML = `
    <div class="panel-main">${main}</div>
    <div class="panel-side">${side}</div>
  `;

  document.getElementById('detailPanel').classList.add('open');
}

function closePanel() {
  document.getElementById('detailPanel').classList.remove('open');
}

/* ============================================================
   9. UTILITAIRES
   ============================================================ */
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}

/* ============================================================
   10. INIT & RESIZE
   ============================================================ */
function init() {
  positions = computePositions();
  renderLayerLabels();
  renderNodes();
  renderConnections();
}

// Fermer au clic sur le bouton ou Échap
document.getElementById('panelClose').addEventListener('click', resetAll);
document.addEventListener('keydown', e => { if (e.key === 'Escape') resetAll(); });

// Init au chargement
window.addEventListener('load', init);

// Redimensionnement
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (activeId) resetAll();
    init();
  }, 120);
});
