'use strict';

/* ============================================================
   DONNÉES — 5 couches
   ============================================================ */
const LAYERS = [
  { id:'sources', label:'SOURCES', color:'#4ECDC4' },
  { id:'skills',  label:'SKILLS',  color:'#00D4FF' },
  { id:'projets', label:'PROJETS', color:'#A855F7' },
  { id:'deploy',  label:'DEPLOY',  color:'#F59E0B' },  // ← nouvelle couche
  { id:'ship',    label:'SHIP',    color:'#10B981' },
];

const NODES = [
  /* ── SOURCES (3) ─────────────────────────────── */
  { id:'ratp',    layer:0, abbr:'RT', label:'RATP',     sublabel:'Manager · 5 ans',    type:'source',
    description:"Management opérationnel Ligne 11, équipe de 20+ agents, 3×8. Pipeline Python d'analyse de régularité construit en autodidacte.",
    result:"Deux livrables pour deux décideurs distincts. Précision à la seconde. Remplacement de l'approche par échantillonnage.",
    tags:['Management','Terrain','Python','Pandas','IDFM'] },
  { id:'jedha',   layer:0, abbr:'JE', label:'Jedha',    sublabel:'Bac+5 IA · RNCP 7', type:'source',
    description:"Architecte en Intelligence Artificielle — RNCP niveau 7. Formation intensive : ML, deep learning, MLOps, de la donnée au monitoring.",
    result:"Cycle complet maîtrisé : données → modèle → API → déploiement → monitoring.",
    tags:['RNCP 7','Deep Learning','MLOps','Data Engineering'] },
  { id:'databird',layer:0, abbr:'DB', label:'DataBird', sublabel:'Cert. Data Analyst', type:'source',
    description:"Certification Data Analyst. SQL, Python analytique, visualisation de données. Socle structuré avant la montée en compétence ML.",
    result:"Bases analytiques solides. Transition vers ML.",
    tags:['SQL','Python','Visualisation','Analyse'] },

  /* ── SKILLS (7 groupes : fondations → production) ── */
  { id:'s_py',  layer:1, abbr:'PY',  label:'Python',           sublabel:'Expert',   type:'skill', level:5,
    description:"Langage socle de l\'intégralité des projets, de l\'exploration à la production.",
    subskills:['Pandas','NumPy','Plotly','SpaCy','Boto3'], tags:['Expert'] },
  { id:'s_de',  layer:1, abbr:'DE',  label:'Data Engineering', sublabel:'Avancé',   type:'skill', level:4,
    description:"Structurer et traiter la donnée à grande échelle avant toute modélisation.",
    subskills:['SQL','PySpark','Databricks','Delta Lake'], tags:['Avancé'] },
  { id:'s_ml',  layer:1, abbr:'ML',  label:'ML Classique',     sublabel:'Expert',   type:'skill', level:5,
    description:"Fondamentaux statistiques du machine learning supervisé et non supervisé.",
    subskills:['Scikit-learn','XGBoost','SMOTE','Pipeline','GridSearchCV'], tags:['Expert'] },
  { id:'s_dl',  layer:1, abbr:'DL',  label:'Deep Learning',    sublabel:'Avancé',   type:'skill', level:4,
    description:"Réseaux de neurones profonds, transfer learning, vision par ordinateur.",
    subskills:['PyTorch','EfficientNet B4','CNN','Transfer Learning','FastAPI'], tags:['Avancé'] },
  { id:'s_llm', layer:1, abbr:'LLM', label:'LLM & NLP',        sublabel:'Avancé',   type:'skill', level:4,
    description:"Grands modèles de langage, chaînage de prompts, NLP appliqué.",
    subskills:['Transformers','Mistral','Langchain','HuggingFace'], tags:['Avancé'] },
  { id:'s_ops', layer:1, abbr:'OPS', label:'MLOps',            sublabel:'Avancé',   type:'skill', level:4,
    description:"Opérationnalisation ML : orchestration, tracking, CI/CD, monitoring.",
    subskills:['MLflow','Airflow','GitHub Actions','NeonDB'], tags:['Avancé'] },
  { id:'s_inf', layer:1, abbr:'IF',  label:'Infrastructure',   sublabel:'Avancé',   type:'skill', level:4,
    description:"Socle de déploiement : containerisation, cloud, accès programmatique.",
    subskills:['Docker','AWS S3','EC2','Boto3','Docker Compose'], tags:['Avancé'] },

  /* ── PROJETS (6) ─────────────────────────────── */
  { id:'wakee',   layer:2, abbr:'WK', label:'Wakee',          sublabel:'in local', type:'projet', live:false,
    description:"CNN EfficientNet B4 + LLM Mistral pour la détection d'émotions faciales. Aide à maintenir la concentration. Projet d'équipe (4 personnes).",
    result:"Déployé HuggingFace Spaces. Accès restreint — conformité AI Act.",
    tags:['PyTorch','EfficientNet B4','Mistral','MLflow','Docker'], demo:'#', code:'https://github.com/Ter0rra/Wakee' },
  { id:'wakee_r', layer:2, abbr:'WR', label:'Wakee Reloaded', sublabel:'● LIVE', type:'projet', live:true,
    description:"Pipeline de réentraînement continu : Airflow scheduling, MLflow tracking, NeonDB, Streamlit labellisation, redéploiement conditionnel GitHub Actions.",
    result:"Réentraînement automatique déclenché par seuil de performance. Zéro intervention manuelle.",
    tags:['Airflow','MLflow','NeonDB','Streamlit','GitHub Actions','Docker'], demo:'#', code:'https://github.com/Ter0rra/wakee-reloaded' },
  { id:'jobtrk',  layer:2, abbr:'JT', label:'Job Tracker',    sublabel:'Private', type:'projet', live:false,
    description:"Dashboard de suivi de candidatures en temps réel. Statuts, relances, classification par catégorie, détection des candidatures périmées.",
    result:"Déployé HuggingFace Spaces via Docker.",
    tags:['Streamlit','Docker','Python'], demo:'#', code:'#' },
  { id:'fddet',   layer:2, abbr:'FD', label:'FD Detector',    sublabel:'● LIVE', type:'projet', live:true,
    description:"Détection de transactions frauduleuses. XGBoost, SMOTE, API FastAPI, interface Streamlit.",
    result:"AUC-ROC 0.94. Pipeline complet preprocessing → modèle → API → UI.",
    tags:['XGBoost','FastAPI','Streamlit','Scikit-learn','SMOTE'], demo:'#', code:'https://github.com/Ter0rra/03_Jedha_aia_bloc_3_fraud_detector' },
  { id:'rpsls',   layer:2, abbr:'RL', label:'RPSLS',          sublabel:'● LIVE', type:'projet', live:true,
    description:"Rock Paper Scissors Lizard Spock en Python, déployé sur Render.",
    result:"Déployé et accessible en ligne.",
    tags:['Python','Render'], demo:'#', code:'https://github.com/Ter0rra/RPSLS_DeepQlearn' },
  { id:'ratp_pl', layer:2, abbr:'RP', label:'Pipeline RATP',  sublabel:'Interne', type:'projet', live:false,
    description:"Automatisation Python de l'analyse de régularité train à la seconde. Construit en autodidacte pour le reporting RATP ligne 11.",
    result:"Deux livrables distincts pour deux décideurs. Précision à la seconde.",
    tags:['Python','Pandas','Automatisation','IDFM'], code:'#' },

  /* ── DEPLOY (4) ── nouvelle couche ───────────── */
  { id:'hf',    layer:3, abbr:'HF', label:'HuggingFace', sublabel:'Spaces',      type:'deploy',
    description:"Déploiement de Wakee, Wakee Reloaded et Job Tracker sur HuggingFace Spaces. Intégration GitHub Actions pour le redéploiement conditionnel.",
    tags:['Wakee','Wakee Reloaded','Job Tracker'], url:'#' },
  { id:'stl',   layer:3, abbr:'ST', label:'Streamlit',   sublabel:'Cloud',       type:'deploy',
    description:"Déploiement de FD Detector sur Streamlit Community Cloud. Lié au repo GitHub, mise à jour automatique.",
    tags:['FD Detector'], url:'#' },
  { id:'rend',  layer:3, abbr:'RD', label:'Render',      sublabel:'Web Hosting', type:'deploy',
    description:"Hébergement de RPSLS sur Render. Déploiement continu depuis GitHub.",
    tags:['RPSLS'], url:'#' },
  { id:'ghub',  layer:3, abbr:'GH', label:'GitHub',      sublabel:'Code · Pages',type:'deploy',
    description:"Code source de tous les projets. Ce portfolio sur GitHub Pages. Keep-alive workflow GitHub Actions.",
    tags:['Tous les projets'], url:'https://github.com/Ter0rra' },

  /* ── SHIP (5) ─────────────────────────────────── */
  { id:'cv',       layer:4, abbr:'CV', label:'Mon CV',      sublabel:'Télécharger',  type:'ship',
    description:"CV complet — Data Scientist, MLOps Engineer, Data Analyst. Disponible pour CDI en Île-de-France / Hauts-de-France.",
    tags:['CDI','IDF','Hauts-de-France'], url:'#' },
  { id:'linkedin', layer:4, abbr:'LI', label:'LinkedIn',    sublabel:'Profil',       type:'ship',
    description:"Profil LinkedIn avec recommandations, détail des expériences et des projets.",
    tags:['Réseau','Recommandations'], url:'https://linkedin.com/in/albert-romano-ter0rra' },
  { id:'linktree', layer:4, abbr:'LT', label:'Linktree',    sublabel:'Hub de liens', type:'ship',
    description:"Aggregateur de liens : GitHub, HuggingFace Spaces, LinkedIn, CV, vidéo pitch.",
    tags:['GitHub','LinkedIn','CV','Vidéo'], url:'#' },
  { id:'video',    layer:4, abbr:'VP', label:'Vidéo Pitch', sublabel:'En production',type:'ship',
    description:"Vidéo de personal branding en cours de production (DaVinci Resolve 21). Raconte le fil RATP → IA → MLOps en 2 minutes.",
    tags:['Personal Branding','DaVinci Resolve','En cours'], url:'#' },
  { id:'contact',  layer:4, abbr:'@',  label:'Contact',     sublabel:'Email direct', type:'ship',
    description:"Disponible pour un CDI en Data Science, MLOps ou Data Analytics. Île-de-France / Hauts-de-France. Open à CDD stratégique.",
    tags:['CDI','IDF','Hauts-de-France'], email:'albert.romano.data@gmail.com' },
];

const EDGES = [
  // SOURCES → SKILLS
  ['ratp',    's_py'], ['ratp',    's_de'], ['ratp',    's_ops'],
  ['jedha',   's_py'], ['jedha',   's_de'], ['jedha',   's_ml'],
  ['jedha',   's_dl'], ['jedha',   's_llm'],['jedha',   's_ops'],['jedha','s_inf'],
  ['databird','s_py'], ['databird','s_de'],

  // SKILLS → PROJETS
  ['s_py', 'wakee'], ['s_py', 'wakee_r'], ['s_py', 'jobtrk'],
  ['s_py', 'fddet'], ['s_py', 'rpsls'],   ['s_py', 'ratp_pl'],
  ['s_de', 'ratp_pl'],
  ['s_ml', 'fddet'], ['s_ml', 'wakee'],
  ['s_dl', 'wakee'], ['s_dl', 'wakee_r'],
  ['s_llm','wakee'], ['s_llm','wakee_r'],
  ['s_ops','wakee_r'],
  ['s_inf','wakee'], ['s_inf','wakee_r'], ['s_inf','jobtrk'], ['s_inf','fddet'],

  // PROJETS → DEPLOY
  ['wakee',   'hf'],   ['wakee_r','hf'],  ['jobtrk','hf'],
  ['fddet',   'stl'],
  ['rpsls',   'rend'],
  ['wakee',   'ghub'], ['wakee_r','ghub'],['jobtrk','ghub'],
  ['fddet',   'ghub'], ['rpsls',  'ghub'],['ratp_pl','ghub'],

  // SKILLS → DEPLOY (cross-layer)
  ['s_py', 'hf'],['s_py', 'stl'],['s_py', 'ghub'],
  ['s_inf','hf'],['s_inf','stl'],
  ['s_dl', 'hf'],
  ['s_llm','hf'],
  ['s_ops','ghub'],
  ['s_ml', 'stl'],

  // DEPLOY → SHIP
  ['hf',  'linktree'],['hf',  'linkedin'],['hf',  'cv'],
  ['stl', 'linktree'],['stl', 'linkedin'],
  ['rend','linktree'],
  ['ghub','linktree'],['ghub','cv'],

  // SOURCES → SHIP
  ['ratp',    'cv'],['ratp',    'linkedin'],['ratp',   'video'],
  ['jedha',   'cv'],['jedha',   'linkedin'],['jedha',  'video'],
  ['databird','cv'],

  // PROJETS → SHIP
  ['wakee',  'linkedin'],['wakee_r','linkedin'],
  ['fddet',  'linkedin'],['jobtrk', 'linkedin'],
  ['ratp_pl','cv'],
  ['wakee',  'linktree'],['jobtrk', 'linktree'],
  ['cv',     'linktree'],['linkedin','linktree'],['video','linktree'],
];

/* ============================================================
   STATE
   ============================================================ */
let positions = {};
let activeId  = null;
let particles = [];
let rafId     = null;
let scale = 1, panX = 0, panY = 0;
const PANEL_H_PX = 210; // correspond à --panel-h

/* ============================================================
   POSITIONS
   ============================================================ */
function computePositions() {
  const w = document.getElementById('canvasWrapper');
  const W = w.offsetWidth;
  const H = w.offsetHeight;
  const PAD_X = W * 0.04;
  const PAD_Y = H * 0.09;
  const availW = W - 2 * PAD_X;
  const availH = H - 2 * PAD_Y;
  const res = {};

  LAYERS.forEach((_, li) => {
    const layerNodes = NODES.filter(n => n.layer === li);
    const count = layerNodes.length;
    const x = PAD_X + (li / (LAYERS.length - 1)) * availW;

    layerNodes.forEach((node, ni) => {
      let y;
      if (li === 0) {
        // SOURCES : compressées sur 30% de la hauteur, centrées
        const rng = availH * 0.30;
        const start = (H - rng) / 2;
        y = count === 1 ? H / 2 : start + (ni / (count - 1)) * rng;
      } else {
        y = count === 1 ? H / 2 : PAD_Y + (ni / (count - 1)) * availH;
      }
      res[node.id] = { x, y };
    });
  });
  return res;
}

/* ============================================================
   LAYER LABELS
   ============================================================ */
function renderLayerLabels() {
  const c = document.getElementById('layerLabels');
  c.innerHTML = '';
  LAYERS.forEach((layer, li) => {
    const layerNodes = NODES.filter(n => n.layer === li);
    if (!layerNodes.length) return;
    const pos = positions[layerNodes[0].id];
    const el = document.createElement('div');
    el.className = 'layer-label';
    el.textContent = layer.label;
    el.style.left  = pos.x + 'px';
    el.style.color = layer.color;
    c.appendChild(el);
  });
}

/* ============================================================
   NŒUDS
   ============================================================ */
function hexRgb(h) {
  return [parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)].join(',');
}

function renderNodes() {
  const canvas = document.getElementById('nnCanvas');
  canvas.innerHTML = '';
  NODES.forEach((node, idx) => {
    const pos   = positions[node.id];
    const layer = LAYERS[node.layer];
    const rgb   = hexRgb(layer.color);
    const el    = document.createElement('div');
    el.className = `nn-node${node.live ? ' node-live' : ''}`;
    el.id = `node-${node.id}`;
    el.dataset.id = node.id;
    el.style.cssText = `
      left:${pos.x}px; top:${pos.y}px;
      --nc:${layer.color};
      --nc-20:rgba(${rgb},.20); --nc-30:rgba(${rgb},.30);
      --nc-50:rgba(${rgb},.50); --nc-80:rgba(${rgb},.80);
      animation-delay:${idx*22}ms;
    `;
    el.innerHTML = `
      <div class="node-ring"><span class="node-abbr">${node.abbr}</span></div>
      <div class="node-label">${node.label}</div>
      <div class="node-sublabel">${node.sublabel}</div>
    `;
    el.addEventListener('click', e => { e.stopPropagation(); onNodeClick(node.id); });
    canvas.appendChild(el);
  });
}

/* ============================================================
   SVG — CONNEXIONS (dimensions explicites = fix du bug principal)
   ============================================================ */
function renderConnections() {
  const svg = document.getElementById('svgLayer');
  const wrapper = document.getElementById('canvasWrapper');
  const W = wrapper.offsetWidth;
  const H = wrapper.offsetHeight;

  // ← FIX CRITIQUE : dimensions explicites sur le SVG
  svg.setAttribute('width', W);
  svg.setAttribute('height', H);
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

  svg.querySelectorAll('.conn-path').forEach(p => p.remove());

  EDGES.forEach(([sid, tid]) => {
    const s = positions[sid];
    const t = positions[tid];
    if (!s || !t) return;
    const dx = (t.x - s.x) * 0.42;
    const path = document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d', `M${s.x},${s.y} C${s.x+dx},${s.y} ${t.x-dx},${t.y} ${t.x},${t.y}`);
    path.setAttribute('class','conn-path');
    path.dataset.src = sid;
    path.dataset.tgt = tid;
    svg.appendChild(path);
  });
}

/* ============================================================
   PARTICULES
   ============================================================ */
function bezPt(t, sx,sy,ex,ey) {
  const dx=(ex-sx)*.42, cx1=sx+dx, cx2=ex-dx, m=1-t;
  return { x:m*m*m*sx+3*m*m*t*cx1+3*m*t*t*cx2+t*t*t*ex,
           y:m*m*m*sy+3*m*m*t*cy1+3*m*t*t*cy2+t*t*t*ey };
  // bug guard: redefine properly
}
function bezierPoint(t, sx,sy,ex,ey) {
  const dx=(ex-sx)*.42;
  const cx1=sx+dx, cy1=sy, cx2=ex-dx, cy2=ey, m=1-t;
  return {
    x: m*m*m*sx + 3*m*m*t*cx1 + 3*m*t*t*cx2 + t*t*t*ex,
    y: m*m*m*sy + 3*m*m*t*cy1 + 3*m*t*t*cy2 + t*t*t*ey,
  };
}

function initParticles() {
  const svg = document.getElementById('svgLayer');
  svg.querySelectorAll('.particle').forEach(p => p.remove());
  particles = [];

  EDGES.forEach(([sid,tid]) => {
    const s = positions[sid];
    const e = positions[tid];
    if (!s || !e) return;
    const srcNode = NODES.find(n => n.id === sid);
    const color   = LAYERS[srcNode ? srcNode.layer : 0].color;

    const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    circle.setAttribute('class','particle');
    circle.setAttribute('r','2');
    svg.appendChild(circle);

    particles.push({
      sid, tid, color,
      t: Math.random(),
      speed: .0013 + Math.random() * .0008,
      el: circle, active: false,
    });
  });
}

function animateParticles() {
  particles.forEach(p => {
    p.t += p.active ? p.speed * 2.8 : p.speed;
    if (p.t > 1) p.t -= 1;

    const s = positions[p.sid], e = positions[p.tid];
    if (!s || !e) return;

    const pt = bezierPoint(p.t, s.x,s.y, e.x,e.y);
    const fade = p.t < .08 ? p.t/.08 : p.t > .92 ? (1-p.t)/.08 : 1;
    const opacity = p.active ? .95*fade : .15*fade;

    p.el.setAttribute('cx', pt.x);
    p.el.setAttribute('cy', pt.y);
    p.el.setAttribute('r',  p.active ? '2.8' : '1.6');
    p.el.setAttribute('fill', p.active ? p.color : 'rgba(255,255,255,.7)');
    p.el.setAttribute('opacity', opacity);
    p.el.style.filter = p.active ? `drop-shadow(0 0 4px ${p.color})` : 'none';
  });
  rafId = requestAnimationFrame(animateParticles);
}

/* ============================================================
   INTERACTION
   ============================================================ */
/* Connexions directes (pour le panneau) */
function getConnected(id) {
  const s = new Set();
  EDGES.forEach(([a,b]) => { if(a===id)s.add(b); if(b===id)s.add(a); });
  return s;
}

/* Propagation transitive : remonte vers SOURCES et descend vers SHIP */
function getFullPath(id) {
  const path = new Set([id]);

  function forward(nid) {           // SOURCES → SHIP
    EDGES.forEach(([a,b]) => {
      if (a === nid && !path.has(b)) { path.add(b); forward(b); }
    });
  }
  function backward(nid) {          // SHIP → SOURCES
    EDGES.forEach(([a,b]) => {
      if (b === nid && !path.has(a)) { path.add(a); backward(a); }
    });
  }

  forward(id);
  backward(id);
  return path;
}

function onNodeClick(id) {
  if (activeId === id) { resetAll(); return; }
  activeId = id;

  // Chemin complet : toutes les couches traversées
  const path = getFullPath(id);

  // Nœuds
  document.querySelectorAll('.nn-node').forEach(el => {
    const eid = el.dataset.id;
    el.classList.remove('active','highlighted','dimmed');
    if (eid === id)        el.classList.add('active');
    else if (path.has(eid)) el.classList.add('highlighted');
    else                    el.classList.add('dimmed');
  });

  // Connexions : active si les DEUX extrémités sont dans le chemin
  // Couleur = couleur de la couche SOURCE de l'edge (gradient naturel)
  document.querySelectorAll('.conn-path').forEach(p => {
    const inPath = path.has(p.dataset.src) && path.has(p.dataset.tgt);
    p.classList.remove('conn-active','conn-dimmed');
    if (inPath) {
      p.classList.add('conn-active');
      const srcNode = NODES.find(n => n.id === p.dataset.src);
      const edgeColor = LAYERS[srcNode ? srcNode.layer : 0].color;
      p.style.stroke = edgeColor;
      p.style.filter = `drop-shadow(0 0 3px ${edgeColor}70)`;
    } else {
      p.classList.add('conn-dimmed');
      p.style.stroke = '';
      p.style.filter = '';
    }
  });

  // Particules : actives sur tous les edges du chemin
  const activeEdgeSet = new Set(
    EDGES.filter(([a,b]) => path.has(a) && path.has(b)).map(([a,b]) => `${a}|${b}`)
  );
  particles.forEach(p => { p.active = activeEdgeSet.has(`${p.sid}|${p.tid}`); });

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
   PANNEAU BAS
   ============================================================ */
function openPanel(nodeId) {
  const node  = NODES.find(n => n.id === nodeId);
  const layer = LAYERS[node.layer];
  const color = layer.color;
  const rgb   = hexRgb(color);
  const connected = getConnected(nodeId);
  const connNodes = NODES.filter(n => connected.has(n.id));

  const typeLabel = {source:'SOURCE',skill:'SKILL',projet:'PROJET',deploy:'DEPLOY',ship:'SHIP'};

  let main = `
    <div class="p-badge" style="color:${color};border-color:rgba(${rgb},.35);background:rgba(${rgb},.08)">
      ${typeLabel[node.type]||node.type.toUpperCase()}
    </div>
    <div class="p-title">${node.label}</div>
    <div class="p-desc">${node.description}</div>
  `;

  if (node.type === 'skill') {
    const dots = Array.from({length:5},(_,i)=>
      `<div class="lvl-dot" style="${i<node.level?`background:${color}`:''}"></div>`
    ).join('');
    main += `<div class="p-level">${dots}</div>`;
    main += `<div class="p-tags">${(node.subskills||[]).map(s=>
      `<span class="p-tag" style="color:${color};border-color:rgba(${rgb},.3);background:rgba(${rgb},.07)">${s}</span>`
    ).join('')}</div>`;
  }

  if (node.result) main += `<div class="p-result">${node.result}</div>`;

  if (node.tags && node.type !== 'skill') {
    main += `<div class="p-tags">${node.tags.map(t=>
      `<span class="p-tag" style="color:${color};border-color:rgba(${rgb},.3);background:rgba(${rgb},.07)">${t}</span>`
    ).join('')}</div>`;
  }

  const btns = [];
  if (node.demo  && node.demo !== '#')  btns.push(`<a href="${node.demo}"  target="_blank" class="btn-p" style="background:${color};color:#050810">→ Voir la démo</a>`);
  if (node.code  && node.code !== '#')  btns.push(`<a href="${node.code}"  target="_blank" class="btn-s">↗ Code source</a>`);
  if (node.url   && node.url  !== '#')  btns.push(`<a href="${node.url}"   target="_blank" class="btn-p" style="background:${color};color:#050810">→ Ouvrir</a>`);
  if (node.email)                        btns.push(`<a href="mailto:${node.email}" class="btn-p" style="background:${color};color:#050810">→ Envoyer un email</a>`);
  if (btns.length) main += `<div class="p-actions">${btns.join('')}</div>`;

  const sideItems = connNodes.map(cn => {
    const cl = LAYERS[cn.layer];
    return `<div class="conn-item">
      <div class="conn-dot" style="background:${cl.color}"></div>
      <span>${cn.label}</span>
    </div>`;
  }).join('');

  document.getElementById('panelBody').innerHTML = `
    <div class="pb-main">${main}</div>
    <div class="pb-side">
      <div class="conn-title">Connexions (${connNodes.length})</div>
      <div class="conn-list">${sideItems}</div>
    </div>
  `;
  document.getElementById('infoPanel').classList.add('open');
}

function closePanel() {
  document.getElementById('infoPanel').classList.remove('open');
}

/* ============================================================
   ZOOM & PAN — molette + drag
   ============================================================ */
const wrapper = document.getElementById('canvasWrapper');
const zoomEl  = document.getElementById('zoomContainer');

function applyTransform() {
  zoomEl.style.transform = `translate(${panX}px,${panY}px) scale(${scale})`;
}

// Zoom molette
wrapper.addEventListener('wheel', e => {
  e.preventDefault();
  const rect = wrapper.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  const old = scale;
  scale = Math.max(.25, Math.min(5, scale * (e.deltaY < 0 ? 1.1 : 0.9)));
  panX = mx - (mx - panX) * (scale / old);
  panY = my - (my - panY) * (scale / old);
  applyTransform();
}, { passive: false });

// Drag pan
let dragging = false, dragStart = { x:0, y:0 };

wrapper.addEventListener('mousedown', e => {
  if (e.target.closest('.nn-node')) return;
  dragging = true;
  dragStart = { x: e.clientX - panX, y: e.clientY - panY };
  wrapper.classList.add('panning');
});
window.addEventListener('mousemove', e => {
  if (!dragging) return;
  panX = e.clientX - dragStart.x;
  panY = e.clientY - dragStart.y;
  applyTransform();
});
window.addEventListener('mouseup', () => {
  dragging = false;
  wrapper.classList.remove('panning');
});

// Double-clic → reset
wrapper.addEventListener('dblclick', e => {
  if (e.target.closest('.nn-node')) return;
  scale=1; panX=0; panY=0; applyTransform();
});

// Click fond → désélectionner
wrapper.addEventListener('click', e => {
  if (!e.target.closest('.nn-node')) resetAll();
});

// Touch pan
let tp = null;
wrapper.addEventListener('touchstart', e => {
  if (e.touches.length===1 && !e.target.closest('.nn-node'))
    tp = { x: e.touches[0].clientX - panX, y: e.touches[0].clientY - panY };
}, { passive:true });
wrapper.addEventListener('touchmove', e => {
  if (e.touches.length===1 && tp) {
    panX = e.touches[0].clientX - tp.x;
    panY = e.touches[0].clientY - tp.y;
    applyTransform();
  }
}, { passive:true });
wrapper.addEventListener('touchend', () => { tp = null; });

/* ============================================================
   FERMER
   ============================================================ */
document.getElementById('panelClose').addEventListener('click', resetAll);
document.addEventListener('keydown', e => { if(e.key==='Escape') resetAll(); });

/* ============================================================
   INIT
   ============================================================ */
function init() {
  if (rafId) cancelAnimationFrame(rafId);
  positions = computePositions();
  renderLayerLabels();
  renderNodes();
  renderConnections(); // ← SVG dimensions fixées ici
  initParticles();
  animateParticles();
}

// setTimeout pour laisser le navigateur calculer les dimensions CSS
window.addEventListener('load', () => setTimeout(init, 80));

let rt;
window.addEventListener('resize', () => {
  clearTimeout(rt);
  rt = setTimeout(() => { resetAll(); scale=1; panX=0; panY=0; init(); }, 150);
});
