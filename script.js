'use strict';

/* ============================================================
   DONNÉES
   ============================================================ */
const LAYERS = [
  { id:'sources', label:'SOURCES', color:'#4ECDC4' },
  { id:'skills',  label:'SKILLS',  color:'#00D4FF' },
  { id:'projets', label:'PROJETS', color:'#A855F7' },
  { id:'outputs', label:'OUTPUTS', color:'#10B981' },
];

const NODES = [
  // ── SOURCES ──────────────────────────────────────────────
  { id:'ratp',     layer:0, abbr:'RT', label:'RATP',     sublabel:'Manager · 5 ans',
    type:'source',
    description:"Management opérationnel Ligne 11. Équipe de 20+ agents, 3×8. Construction autodidacte d'un pipeline d'analyse de régularité à la seconde.",
    result:"Pipeline Python remplaçant l'approche par échantillonnage. Deux livrables pour deux décideurs distincts.",
    tags:['Management','Terrain','Python','Pandas','IDFM'] },
  { id:'jedha',    layer:0, abbr:'JE', label:'Jedha',    sublabel:'Bac+5 IA · RNCP 7',
    type:'source',
    description:"Architecte en Intelligence Artificielle — RNCP niveau 7. Formation intensive couvrant le cycle complet ML/MLOps.",
    result:"Maîtrise du cycle complet : données → modèle → déploiement → monitoring.",
    tags:['RNCP 7','Deep Learning','MLOps','Data Engineering'] },
  { id:'databird', layer:0, abbr:'DB', label:'DataBird', sublabel:'Cert. Data Analyst',
    type:'source',
    description:"Certification Data Analyst. Fondamentaux SQL, Python analytique, visualisation de données.",
    result:"Bases analytiques solides. Transition structurée vers le ML.",
    tags:['SQL','Python','Visualisation','Analyse'] },

  // ── SKILLS ───────────────────────────────────────────────
  { id:'python',      layer:1, abbr:'PY', label:'Python',       sublabel:'Expert',        type:'skill', level:5,
    description:"Langage principal. Utilisé dans l'intégralité des projets, de l'exploration à la production.",
    subskills:['Pandas','NumPy','Plotly','Boto3','SpaCy'], tags:['Expert'] },
  { id:'pytorch',     layer:1, abbr:'PT', label:'PyTorch',      sublabel:'Avancé',        type:'skill', level:4,
    description:"Deep learning. CNN EfficientNet B4 pour Wakee, boucle d'entraînement custom, transfer learning.",
    subskills:['EfficientNet B4','Transfer Learning','CNN','DataLoader'], tags:['Avancé'] },
  { id:'spark',       layer:1, abbr:'SP', label:'SQL · PySpark', sublabel:'Avancé',       type:'skill', level:4,
    description:"SQL pour l'analyse, PySpark/Databricks pour le traitement distribué (Steam Marketplace, pipeline RATP).",
    subskills:['PySpark','Databricks','SQL','Delta Lake'], tags:['Avancé'] },
  { id:'mlflow',      layer:1, abbr:'MF', label:'MLflow',       sublabel:'Avancé',        type:'skill', level:4,
    description:"Experiment tracking, model registry, versionning. Déclenchement conditionnel du redéploiement dans Wakee Reloaded.",
    subskills:['Experiment Tracking','Model Registry','Artifacts'], tags:['Avancé'] },
  { id:'docker',      layer:1, abbr:'DO', label:'Docker',       sublabel:'Avancé',        type:'skill', level:4,
    description:"Containerisation des services ML, API et dashboards. Docker Compose pour l'orchestration locale.",
    subskills:['Docker Compose','Dockerfile','Docker Hub'], tags:['Avancé'] },
  { id:'airflow',     layer:1, abbr:'AF', label:'Airflow',      sublabel:'Avancé',        type:'skill', level:4,
    description:"Orchestration du pipeline de réentraînement continu Wakee Reloaded. DAGs Python, scheduling, triggers conditionnels.",
    subskills:['DAGs','Scheduling','Sensors','XComs'], tags:['Avancé'] },
  { id:'aws',         layer:1, abbr:'AW', label:'AWS',          sublabel:'Intermédiaire', type:'skill', level:3,
    description:"Stockage d'artefacts sur S3, entraînement sur EC2, accès programmatique via Boto3.",
    subskills:['S3','EC2','Boto3','IAM'], tags:['Intermédiaire'] },
  { id:'fastapi',     layer:1, abbr:'FA', label:'FastAPI',      sublabel:'Avancé',        type:'skill', level:4,
    description:"Exposition de modèles ML sous forme d'API REST. Validation Pydantic, endpoints de prédiction.",
    subskills:['REST API','Pydantic','Uvicorn','Endpoints'], tags:['Avancé'] },
  { id:'sklearn',     layer:1, abbr:'SK', label:'Scikit-learn', sublabel:'Expert',        type:'skill', level:5,
    description:"ML supervisé classique, pipelines de preprocessing, cross-validation, XGBoost, gestion du déséquilibre de classes.",
    subskills:['XGBoost','Pipeline','GridSearchCV','SMOTE'], tags:['Expert'] },
  { id:'transformers',layer:1, abbr:'TR', label:'Transformers', sublabel:'Avancé',        type:'skill', level:4,
    description:"Intégration Mistral LLM dans Wakee, HuggingFace Transformers, Langchain pour le chaînage de prompts.",
    subskills:['Mistral','HuggingFace','Langchain','LLM'], tags:['Avancé'] },

  // ── PROJETS ──────────────────────────────────────────────
  { id:'wakee',        layer:2, abbr:'WK', label:'Wakee',            sublabel:'● LIVE', type:'projet', live:true,
    description:"Détection d'émotions faciales par CNN (EfficientNet B4) + LLM (Mistral) pour maintenir la concentration. Projet d'équipe (4 personnes). Pipeline MLOps complet.",
    result:"Déployé sur HuggingFace Spaces. Accès restreint — conformité AI Act.",
    tags:['PyTorch','EfficientNet B4','Mistral','MLflow','Docker','HuggingFace'], demo:'#', code:'#' },
  { id:'wakee_r',      layer:2, abbr:'WR', label:'Wakee Reloaded',   sublabel:'● LIVE', type:'projet', live:true,
    description:"Pipeline de réentraînement continu pour Wakee. Airflow scheduling, MLflow tracking, NeonDB pour les labels, Streamlit pour la labellisation, redéploiement conditionnel via GitHub Actions.",
    result:"Réentraînement automatique déclenché par seuil de performance. Zéro intervention manuelle.",
    tags:['Airflow','MLflow','NeonDB','Streamlit','GitHub Actions','Docker'], demo:'#', code:'#' },
  { id:'jobtracker',   layer:2, abbr:'JT', label:'Job Tracker',      sublabel:'● LIVE', type:'projet', live:true,
    description:"Dashboard de suivi de candidatures en temps réel. Statuts, relances, classification par catégorie, détection des candidatures périmées.",
    result:"Déployé sur HuggingFace Spaces via Docker. Monitoring actif.",
    tags:['Streamlit','Docker','Python','HuggingFace'], demo:'#', code:'#' },
  { id:'fddetector',   layer:2, abbr:'FD', label:'FD Detector',      sublabel:'● LIVE', type:'projet', live:true,
    description:"Détection de transactions frauduleuses. XGBoost, gestion du déséquilibre de classes (SMOTE), API FastAPI, interface Streamlit.",
    result:"AUC-ROC 0.94. Pipeline complet preprocessing → modèle → API → UI.",
    tags:['XGBoost','FastAPI','Streamlit','Scikit-learn','SMOTE'], demo:'#', code:'#' },
  { id:'rpsls',        layer:2, abbr:'RL', label:'RPSLS',            sublabel:'● LIVE', type:'projet', live:true,
    description:"Rock Paper Scissors Lizard Spock. Implémentation Python du jeu étendu, déployé sur Render.",
    result:"Déployé et accessible en ligne.",
    tags:['Python','Render'], demo:'#', code:'#' },
  { id:'ratp_pl',      layer:2, abbr:'RP', label:'Pipeline RATP',    sublabel:'Interne', type:'projet', live:false,
    description:"Automatisation Python de l'analyse de régularité train à la seconde près pour le reporting IDFM. Construit en autodidacte.",
    result:"Deux livrables distincts pour deux décideurs distincts. Précision à la seconde.",
    tags:['Python','Pandas','Automatisation','IDFM'], code:'#' },

  // ── OUTPUTS ──────────────────────────────────────────────
  { id:'hf_sp',     layer:3, abbr:'HF', label:'HuggingFace', sublabel:'Spaces',      type:'output',
    description:"Déploiement de Wakee, Wakee Reloaded et Job Tracker sur HuggingFace Spaces.",
    url:'#', tags:['Wakee','Wakee Reloaded','Job Tracker'] },
  { id:'stl_cl',    layer:3, abbr:'ST', label:'Streamlit',   sublabel:'Cloud',       type:'output',
    description:"Déploiement de FD Detector sur Streamlit Community Cloud.",
    url:'#', tags:['FD Detector'] },
  { id:'render',    layer:3, abbr:'RD', label:'Render',      sublabel:'Web Hosting', type:'output',
    description:"Hébergement de RPSLS sur Render. Déploiement continu depuis GitHub.",
    url:'#', tags:['RPSLS'] },
  { id:'github',    layer:3, abbr:'GH', label:'GitHub',      sublabel:'Code source', type:'output',
    description:"Code source de l'ensemble des projets. Ce portfolio sur GitHub Pages.",
    url:'https://github.com/Ter0rra', tags:['Tous les projets'] },
  { id:'cv',        layer:3, abbr:'CV', label:'Mon CV',      sublabel:'Télécharger', type:'output',
    description:"CV complet — Data Scientist, MLOps Engineer, Data Analyst. Disponible pour un CDI en Île-de-France / Hauts-de-France.",
    url:'#', tags:['CDI','IDF','Hauts-de-France'] },
  { id:'linkedin',  layer:3, abbr:'LI', label:'LinkedIn',    sublabel:'Profil',      type:'output',
    description:"Profil LinkedIn avec recommandations, détail des expériences et des projets.",
    url:'https://linkedin.com/in/albert-romano-ter0rra', tags:['Réseau','Recommandations'] },
  { id:'linktree',  layer:3, abbr:'LT', label:'Linktree',    sublabel:'Hub de liens',type:'output',
    description:"Aggregateur de tous mes liens : portfolio, GitHub, HuggingFace Spaces, LinkedIn, CV.",
    url:'https://linktr.ee/albert.romano', tags:['Portfolio','GitHub','LinkedIn','CV'] },
  { id:'video',     layer:3, abbr:'VP', label:'Vidéo Pitch', sublabel:'En production',type:'output',
    description:"Vidéo de personal branding en cours de production (DaVinci Resolve 21). Raconte le fil RATP → IA → MLOps en 2 minutes.",
    url:'#', tags:['Personal Branding','DaVinci Resolve','En cours'] },
];

const EDGES = [
  // SOURCES → SKILLS
  ['ratp','python'],['ratp','spark'],
  ['jedha','python'],['jedha','pytorch'],['jedha','spark'],['jedha','mlflow'],
  ['jedha','docker'],['jedha','airflow'],['jedha','aws'],['jedha','fastapi'],
  ['jedha','sklearn'],['jedha','transformers'],
  ['databird','python'],['databird','spark'],

  // SKILLS → PROJETS
  ['python','wakee'],['python','wakee_r'],['python','jobtracker'],
  ['python','fddetector'],['python','rpsls'],['python','ratp_pl'],
  ['pytorch','wakee'],['pytorch','wakee_r'],
  ['spark','ratp_pl'],
  ['mlflow','wakee'],['mlflow','wakee_r'],
  ['docker','wakee'],['docker','wakee_r'],['docker','jobtracker'],['docker','fddetector'],
  ['airflow','wakee_r'],
  ['aws','wakee'],['aws','ratp_pl'],
  ['fastapi','fddetector'],
  ['sklearn','fddetector'],['sklearn','wakee'],
  ['transformers','wakee'],['transformers','wakee_r'],

  // SKILLS → OUTPUTS (cross-layer : connexions directes visibles)
  ['python','hf_sp'],['python','stl_cl'],['python','github'],['python','linktree'],
  ['docker','hf_sp'],['docker','stl_cl'],
  ['transformers','hf_sp'],
  ['sklearn','stl_cl'],
  ['fastapi','stl_cl'],
  ['pytorch','hf_sp'],

  // PROJETS → OUTPUTS
  ['wakee','hf_sp'],['wakee','github'],['wakee','linkedin'],['wakee','linktree'],['wakee','cv'],
  ['wakee_r','hf_sp'],['wakee_r','github'],['wakee_r','linkedin'],
  ['jobtracker','hf_sp'],['jobtracker','github'],['jobtracker','linkedin'],['jobtracker','linktree'],
  ['fddetector','stl_cl'],['fddetector','github'],['fddetector','linkedin'],['fddetector','cv'],
  ['rpsls','render'],['rpsls','github'],['rpsls','linktree'],
  ['ratp_pl','github'],['ratp_pl','cv'],['ratp_pl','linkedin'],

  // SOURCES → OUTPUTS
  ['ratp','cv'],['ratp','linkedin'],['ratp','video'],
  ['jedha','cv'],['jedha','linkedin'],['jedha','video'],
  ['databird','cv'],
];

/* ============================================================
   STATE
   ============================================================ */
let positions = {};
let activeId  = null;
let scale     = 1;
let panX      = 0;
let panY      = 0;
let particles = [];
let rafId     = null;

/* ============================================================
   LAYOUT — positions des nœuds
   ============================================================ */
function computePositions() {
  const wrapper = document.getElementById('canvasWrapper');
  const W = wrapper.offsetWidth;
  const H = wrapper.offsetHeight;
  const PAD_X = W * 0.09;
  const PAD_Y = H * 0.08;
  const availW = W - 2 * PAD_X;
  const availH = H - 2 * PAD_Y;
  const result = {};

  LAYERS.forEach((_, li) => {
    const layerNodes = NODES.filter(n => n.layer === li);
    const count = layerNodes.length;
    const x = PAD_X + (li / (LAYERS.length - 1)) * availW;

    layerNodes.forEach((node, ni) => {
      let y;
      if (li === 0) {
        // SOURCES : compressées sur 28% de la hauteur, centrées
        const rng = availH * 0.28;
        const start = (H - rng) / 2;
        y = count === 1 ? H / 2 : start + (ni / (count - 1)) * rng;
      } else {
        y = count === 1 ? H / 2 : PAD_Y + (ni / (count - 1)) * availH;
      }
      result[node.id] = { x, y };
    });
  });
  return result;
}

/* ============================================================
   LAYER LABELS
   ============================================================ */
function renderLayerLabels() {
  const container = document.getElementById('layerLabels');
  container.innerHTML = '';
  LAYERS.forEach((layer, li) => {
    const layerNodes = NODES.filter(n => n.layer === li);
    if (!layerNodes.length) return;
    const pos = positions[layerNodes[0].id];
    const el = document.createElement('div');
    el.className = 'layer-label';
    el.textContent = layer.label;
    el.style.left = pos.x + 'px';
    el.style.color = layer.color;
    container.appendChild(el);
  });
}

/* ============================================================
   NŒUDS
   ============================================================ */
function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1,3),16),
    parseInt(hex.slice(3,5),16),
    parseInt(hex.slice(5,7),16)
  ].join(',');
}

function renderNodes() {
  const canvas = document.getElementById('nnCanvas');
  canvas.innerHTML = '';
  NODES.forEach((node, idx) => {
    const pos = positions[node.id];
    const layer = LAYERS[node.layer];
    const rgb = hexToRgb(layer.color);
    const el = document.createElement('div');
    el.className = `nn-node${node.live ? ' node-live' : ''}`;
    el.id = `node-${node.id}`;
    el.dataset.id = node.id;
    el.style.cssText = `
      left:${pos.x}px; top:${pos.y}px;
      --nc:${layer.color};
      --nc-20:rgba(${rgb},.20);
      --nc-30:rgba(${rgb},.30);
      --nc-50:rgba(${rgb},.50);
      --nc-80:rgba(${rgb},.80);
      animation-delay:${idx * 25}ms;
    `;
    el.innerHTML = `
      <div class="node-ring">
        <span class="node-abbr">${node.abbr}</span>
      </div>
      <div class="node-label">${node.label}</div>
      <div class="node-sublabel">${node.sublabel}</div>
    `;
    el.addEventListener('click', (e) => { e.stopPropagation(); onNodeClick(node.id); });
    canvas.appendChild(el);
  });
}

/* ============================================================
   SVG : CONNEXIONS (toutes visibles par défaut)
   ============================================================ */
function renderConnections() {
  const svg = document.getElementById('svgLayer');
  // On garde les particules, on supprime uniquement les paths
  svg.querySelectorAll('.conn-path').forEach(p => p.remove());

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
    // Insérer avant les particules
    svg.insertBefore(path, svg.firstChild);
  });
}

/* ============================================================
   PARTICULES — animation continue de gauche à droite
   ============================================================ */
function bezierPoint(t, sx, sy, ex, ey) {
  const dx = (ex - sx) * 0.42;
  const cx1 = sx + dx, cy1 = sy;
  const cx2 = ex - dx, cy2 = ey;
  const mt = 1 - t;
  return {
    x: mt*mt*mt*sx + 3*mt*mt*t*cx1 + 3*mt*t*t*cx2 + t*t*t*ex,
    y: mt*mt*mt*sy + 3*mt*mt*t*cy1 + 3*mt*t*t*cy2 + t*t*t*ey,
  };
}

function initParticles() {
  const svg = document.getElementById('svgLayer');
  svg.querySelectorAll('.particle').forEach(p => p.remove());
  particles = [];

  EDGES.forEach(([srcId, tgtId]) => {
    const s = positions[srcId];
    const e = positions[tgtId];
    if (!s || !e) return;

    // 1 particule par edge, stagger aléatoire
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('r', '2.2');
    circle.setAttribute('class', 'particle');
    svg.appendChild(circle);

    const srcNode = NODES.find(n => n.id === srcId);
    const color = LAYERS[srcNode ? srcNode.layer : 0].color;

    particles.push({
      srcId, tgtId, color,
      t: Math.random(),
      speed: 0.0012 + Math.random() * 0.0008,
      baseSpeed: 0.0012 + Math.random() * 0.0008,
      el: circle,
      active: false,
    });
  });
}

function animateParticles() {
  particles.forEach(p => {
    p.t += p.active ? p.speed * 2.5 : p.speed;
    if (p.t > 1) p.t -= 1;

    const s = positions[p.srcId];
    const e = positions[p.tgtId];
    if (!s || !e) return;

    const pos = bezierPoint(p.t, s.x, s.y, e.x, e.y);
    p.el.setAttribute('cx', pos.x);
    p.el.setAttribute('cy', pos.y);

    // Fade aux extrémités
    const fade = p.t < 0.08 ? p.t / 0.08 : p.t > 0.92 ? (1 - p.t) / 0.08 : 1;
    const opacity = p.active ? 0.95 * fade : 0.18 * fade;
    const fillColor = p.active ? p.color : 'rgba(255,255,255,0.6)';
    const radius = p.active ? '2.8' : '1.8';

    p.el.setAttribute('opacity', opacity);
    p.el.setAttribute('fill', fillColor);
    p.el.setAttribute('r', radius);

    // Glow sur particule active
    p.el.style.filter = p.active ? `drop-shadow(0 0 4px ${p.color})` : 'none';
  });

  rafId = requestAnimationFrame(animateParticles);
}

/* ============================================================
   INTERACTION
   ============================================================ */
function getConnectedSet(nodeId) {
  const set = new Set();
  EDGES.forEach(([s,t]) => {
    if (s === nodeId) set.add(t);
    if (t === nodeId) set.add(s);
  });
  return set;
}

function onNodeClick(id) {
  if (activeId === id) { resetAll(); return; }
  activeId = id;

  const connected = getConnectedSet(id);
  const node = NODES.find(n => n.id === id);
  const color = LAYERS[node.layer].color;

  // Nœuds : actif → highlighted → dimmed
  document.querySelectorAll('.nn-node').forEach(el => {
    const eid = el.dataset.id;
    el.classList.remove('active','highlighted','dimmed');
    if (eid === id)            el.classList.add('active');
    else if (connected.has(eid)) el.classList.add('highlighted');
    else                        el.classList.add('dimmed');
  });

  // Connexions : actives en couleur, non-connectées grisées
  document.querySelectorAll('.conn-path').forEach(p => {
    const isActive = p.dataset.src === id || p.dataset.tgt === id;
    p.classList.remove('conn-active','conn-dimmed');
    if (isActive) {
      p.classList.add('conn-active');
      p.style.stroke = color;
      p.style.filter = `drop-shadow(0 0 3px ${color}80)`;
    } else {
      p.classList.add('conn-dimmed');
      p.style.stroke = '';
      p.style.filter = '';
    }
  });

  // Particules : actives sur les connexions liées
  const edgeSet = new Set(
    EDGES.filter(([s,t]) => s === id || t === id)
         .map(([s,t]) => `${s}|${t}`)
  );
  particles.forEach(p => {
    p.active = edgeSet.has(`${p.srcId}|${p.tgtId}`);
  });

  openPanel(id);
}

function resetAll() {
  activeId = null;
  document.querySelectorAll('.nn-node').forEach(el =>
    el.classList.remove('active','highlighted','dimmed'));
  document.querySelectorAll('.conn-path').forEach(p => {
    p.classList.remove('conn-active','conn-dimmed');
    p.style.stroke = '';
    p.style.filter = '';
  });
  particles.forEach(p => { p.active = false; });
  closePanel();
}

/* ============================================================
   PANNEAU D'INFO
   ============================================================ */
function openPanel(nodeId) {
  const node  = NODES.find(n => n.id === nodeId);
  const layer = LAYERS[node.layer];
  const color = layer.color;
  const rgb   = hexToRgb(color);
  const connected = getConnectedSet(nodeId);
  const connNodes = NODES.filter(n => connected.has(n.id));
  const typeLabel = { source:'SOURCE', skill:'SKILL', projet:'PROJET', output:'OUTPUT' };

  let html = '';

  // Badge + titre + description
  html += `
    <div class="p-badge" style="color:${color};border-color:rgba(${rgb},.35);background:rgba(${rgb},.08)">
      ${typeLabel[node.type] || node.type}
    </div>
    <div class="p-title">${node.label}</div>
    <div class="p-desc">${node.description}</div>
  `;

  // Skill : niveau + sous-compétences
  if (node.type === 'skill') {
    const dots = Array.from({length:5}, (_,i) =>
      `<div class="lvl-dot" style="${i < node.level ? `background:${color}` : ''}"></div>`
    ).join('');
    html += `<div class="p-level">${dots}</div>`;
    const subs = (node.subskills||[]).map(s =>
      `<span class="p-tag" style="color:${color};border-color:rgba(${rgb},.3);background:rgba(${rgb},.07)">${s}</span>`
    ).join('');
    html += `<div class="p-tags">${subs}</div>`;
  }

  // Résultat (projet / source)
  if (node.result) html += `<div class="p-result">${node.result}</div>`;

  // Tags
  if ((node.type === 'projet' || node.type === 'source' || node.type === 'output') && node.tags) {
    html += `<div class="p-tags">${(node.tags||[]).map(t =>
      `<span class="p-tag" style="color:${color};border-color:rgba(${rgb},.3);background:rgba(${rgb},.07)">${t}</span>`
    ).join('')}</div>`;
  }

  // Boutons projet
  if (node.type === 'projet') {
    const btns = [];
    if (node.demo && node.demo !== '#') btns.push(`<a href="${node.demo}" target="_blank" class="btn-p" style="background:${color};color:#050810">→ Voir la démo</a>`);
    if (node.code && node.code !== '#') btns.push(`<a href="${node.code}" target="_blank" class="btn-s">↗ Code source</a>`);
    if (btns.length) html += `<div class="p-actions">${btns.join('')}</div>`;
  }

  // Boutons output
  if (node.type === 'output') {
    const btns = [];
    if (node.email) btns.push(`<a href="mailto:${node.email}" class="btn-p" style="background:${color};color:#050810">→ Envoyer un email</a>`);
    if (node.url && node.url !== '#') btns.push(`<a href="${node.url}" target="_blank" class="btn-p" style="background:${color};color:#050810">→ Ouvrir</a>`);
    if (btns.length) html += `<div class="p-actions">${btns.join('')}</div>`;
  }

  // Connexions actives
  if (connNodes.length) {
    html += `<div class="p-divider"></div>`;
    html += `<div class="p-conn-title">Connexions actives (${connNodes.length})</div>`;
    html += `<div class="p-conn-list">`;
    connNodes.forEach(cn => {
      const cl = LAYERS[cn.layer];
      html += `<div class="p-conn-item">
        <div class="p-conn-dot" style="background:${cl.color}"></div>
        <span>${cn.label}</span>
      </div>`;
    });
    html += `</div>`;
  }

  document.getElementById('panelScroll').innerHTML = html;
  document.getElementById('infoPanel').classList.add('open');
}

function closePanel() {
  document.getElementById('infoPanel').classList.remove('open');
}

/* ============================================================
   ZOOM & PAN
   ============================================================ */
const canvasWrapper = document.getElementById('canvasWrapper');
const zoomContainer = document.getElementById('zoomContainer');

function applyTransform() {
  zoomContainer.style.transform = `translate(${panX}px,${panY}px) scale(${scale})`;
}

// Zoom à la molette (centré sur la souris)
canvasWrapper.addEventListener('wheel', e => {
  e.preventDefault();
  const rect = canvasWrapper.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  const oldScale = scale;
  scale = Math.max(0.25, Math.min(5, scale * (e.deltaY < 0 ? 1.1 : 0.9)));
  // Garder le point sous la souris stable
  panX = mx - (mx - panX) * (scale / oldScale);
  panY = my - (my - panY) * (scale / oldScale);
  applyTransform();
}, { passive: false });

// Pan à la souris (drag)
let isPanning = false, panStart = {x:0, y:0};

canvasWrapper.addEventListener('mousedown', e => {
  if (e.target.closest('.nn-node')) return;
  isPanning = true;
  panStart = { x: e.clientX - panX, y: e.clientY - panY };
});
window.addEventListener('mousemove', e => {
  if (!isPanning) return;
  panX = e.clientX - panStart.x;
  panY = e.clientY - panStart.y;
  applyTransform();
});
window.addEventListener('mouseup', () => { isPanning = false; });

// Click fond : désélectionner
canvasWrapper.addEventListener('click', e => {
  if (!e.target.closest('.nn-node')) resetAll();
});

// Double-clic : reset zoom
canvasWrapper.addEventListener('dblclick', e => {
  if (!e.target.closest('.nn-node')) {
    scale = 1; panX = 0; panY = 0; applyTransform();
  }
});

// Touch pan (mobile)
let touchStart = null;
canvasWrapper.addEventListener('touchstart', e => {
  if (e.touches.length === 1 && !e.target.closest('.nn-node')) {
    touchStart = { x: e.touches[0].clientX - panX, y: e.touches[0].clientY - panY };
  }
}, { passive:true });
canvasWrapper.addEventListener('touchmove', e => {
  if (e.touches.length === 1 && touchStart) {
    panX = e.touches[0].clientX - touchStart.x;
    panY = e.touches[0].clientY - touchStart.y;
    applyTransform();
  }
}, { passive:true });
canvasWrapper.addEventListener('touchend', () => { touchStart = null; });

/* ============================================================
   ESC / FERMER
   ============================================================ */
document.getElementById('panelClose').addEventListener('click', resetAll);
document.addEventListener('keydown', e => { if (e.key === 'Escape') resetAll(); });

/* ============================================================
   INIT & RESIZE
   ============================================================ */
function init() {
  if (rafId) cancelAnimationFrame(rafId);
  positions = computePositions();
  renderLayerLabels();
  renderNodes();
  renderConnections();
  initParticles();
  animateParticles();
}

window.addEventListener('load', init);

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => { resetAll(); scale=1; panX=0; panY=0; init(); }, 120);
});
