import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const PHASES = [
  {
    id: 'pre',
    label: 'Pre-Produzione',
    color: '#7c6af7',
    weeks: '1–6',
    dateRange: '3 Mar – 13 Apr 2026',
    steps: [
      {
        week: '1–2',
        dates: '3 Mar – 16 Mar 2026',
        title: 'Ricerca e Framework Teorico',
        status: 'done',
        desc: 'Studio approfondito della Grief and Growth Therapy. Analisi del testo di De Luca (2024). Identificazione e mappatura dei quattro pilastri GGT sul progetto VR.',
        tasks: [
          'Lettura completa "Grief and Growth Therapy" (De Luca, 2024)',
          'Schematizzazione dei modelli classici del lutto (Kübler-Ross, Worden, Bonanno)',
          'Ricerca sullo stato dell\'arte VR & lutto (Road to Acceptance, Meeting You)',
          'Definizione della domanda di ricerca',
          'Prima bozza dell\'Introduzione',
        ],
      },
      {
        week: '3',
        dates: '17 Mar – 23 Mar 2026',
        title: 'Consulenza con lo Psicologo',
        status: 'active',
        desc: 'Sessione con professionista per validare l\'approccio psico-educativo, verificare l\'aderenza al framework GGT e definire i limiti etici dell\'esperienza.',
        tasks: [
          'Preparazione domande e materiale per la sessione',
          'Sessione di consulenza (in presenza o remota)',
          'Verifica mappatura tecniche GGT → meccaniche VR',
          'Definizione confini etici: cosa il gioco è e non è',
          'Trascrizione e integrazione feedback nel GDD',
        ],
      },
      {
        week: '4',
        dates: '24 Mar – 30 Mar 2026',
        title: 'Game Design Document',
        status: 'upcoming',
        desc: 'Redazione del GDD completo: struttura degli atti, meccaniche di interazione hand tracking, principi di design emotivo, specifiche tecniche per Meta Quest. Include le nuove sezioni emerse dal colloquio con il relatore.',
        tasks: [
          'Scrittura struttura narrativa: Prologo, Atti 1-3, Epilogo',
          'Mappatura dettagliata GGT → gameplay mechanics',
          'Specifiche hand tracking (tap, grab, throw, pinch)',
          'Definizione comfort zone e anti-motion-sickness',
          'Scrittura script voce narrante per ogni sezione',
          'Definizione delle 2 modalità di guida (psicologo / voce narrante)',
          'Sezione Esperienza a Distanza: requisiti tecnici e flusso remoto',
          'Definizione livelli di ambizione deliverable (minimo / target / top)',
        ],
      },
      {
        week: '5',
        dates: '31 Mar – 6 Apr 2026',
        title: 'Storyboard con Animella Stilizzata',
        status: 'upcoming',
        desc: 'Creazione dei 20 frame dello storyboard con il nuovo stile dell\'animella stilizzata (sostituzione della figura realistica sulla sedia). Palette cromatiche per ogni atto.',
        tasks: [
          '20 frame storyboard rigenerati con Gemini AI — stile animella',
          'Prompt aggiornati: figura geometrica astratta, coerente tra tutti i frame',
          'Palette per Atto 1 (fuoco/arancio), Atto 2 (acqua/blu), Atto 3 (oro/bianco)',
          'Moodboard visivo per ogni ambiente (100+ reference)',
          'Script definitivo della voce narrante',
          'Definizione stile UI diegetica (no HUD)',
        ],
      },
      {
        week: '6',
        dates: '7 Apr – 13 Apr 2026',
        title: 'Concept Art, Audio, Branding e Companion App Design',
        status: 'upcoming',
        desc: 'Concept art ambienti e animella con Meshy AI e Gemini. Voce narrante ElevenLabs. Progettazione identità visiva del progetto (logo, colori, font) e mockup Companion App su Figma.',
        tasks: [
          'Concept art ambienti: fucina, mare, alba',
          'Concept art animella stilizzata (forma definitiva)',
          'Generazione voce narrante (ElevenLabs) — italiano',
          'Composizione o licenza musica per ogni atto',
          'SFX: braci, acqua, vento, pietre sull\'acqua',
          'Logo e identità visiva: nome, palette, font',
          'Mockup Companion App — almeno 1 schermata rappresentativa (Figma)',
          'Lista completa asset 3D da creare/acquistare',
        ],
      },
    ],
  },
  {
    id: 'prod',
    label: 'Produzione',
    color: '#e8915a',
    weeks: '7–10',
    dateRange: '14 Apr – 11 Mag 2026',
    steps: [
      {
        week: '7',
        dates: '14 Apr – 20 Apr 2026',
        title: 'Setup Progetto Unity + Prologo',
        status: 'upcoming',
        desc: 'Configurazione Unity con Meta XR All-In-One SDK. Setup hand tracking completo. Implementazione sistema di interazione base. Prologo funzionante end-to-end.',
        tasks: [
          'Setup Unity 2022 LTS + Meta XR SDK',
          'Configurazione hand tracking (Meta OVR Hand)',
          'Implementazione InteractionSDK: poke, grab, throw',
          'Ambiente prologo: campo aperto, cielo al tramonto',
          'Integrazione audio spaziale (Meta Audio SDK)',
          'Voce narrante sincronizzata',
        ],
      },
      {
        week: '8',
        dates: '21 Apr – 27 Apr 2026',
        title: 'Atto 1 — Il Fuoco + Atto 2 — L\'Acqua',
        status: 'upcoming',
        desc: 'Realizzazione completa dei primi due atti. Ambiente fucina con incudine e braci per l\'Atto 1; ambiente mare con scogliera per l\'Atto 2.',
        tasks: [
          'Atto 1: modellazione fucina, incudine, martello',
          'Meccanica forgiatura (grab + martello)',
          'Particelle fuoco e bagliore volumetrico',
          'Atto 2: ambiente mare, spiaggia, orizzionte',
          'Meccanica lancio pietre sull\'acqua (throw gesture)',
          'Transizione fluida Atto 1 → Atto 2',
        ],
      },
      {
        week: '9',
        dates: '28 Apr – 4 Mag 2026',
        title: 'Atto 3 — L\'Incontro sul Mare',
        status: 'upcoming',
        desc: 'Implementazione del cuore emotivo dell\'esperienza: il sistema sfere-parola, la sagoma dorata, il silenzio condiviso e la meccanica della scelta finale.',
        tasks: [
          'Sistema sfere-parola: spawn, grab, dissoluzione',
          'Sagoma dorata: animazioni idle, risposta al giocatore',
          'Meccanica della scelta: sfera dorata finale',
          'Shader dissoluzione e particelle dorate',
          'Audio: silenzio + musica adattiva al momento chiave',
          'Transizione fluida Atto 2 → Atto 3',
        ],
      },
      {
        week: '10',
        dates: '5 Mag – 11 Mag 2026',
        title: 'Epilogo + Integrazione Completa',
        status: 'upcoming',
        desc: 'Sequenza dell\'alba: gesti creativi liberi, integrazione voce narrante end-to-end su tutti gli atti, transizioni fluide, prima versione giocabile completa.',
        tasks: [
          'Ambiente alba: luce volumetrica, colori pastello',
          'Gesti creativi liberi (disegno in aria con particelle)',
          'Integrazione voce narrante su tutti gli atti',
          'Sistema di progressione e trigger narrativi globali',
          'Prima build su Meta Quest per test interno',
          'Polish generale: UI, timing, transizioni',
        ],
      },
    ],
  },
  {
    id: 'post',
    label: 'Post-Produzione',
    color: '#5aaa8c',
    weeks: '11–12',
    dateRange: '12 Mag – 25 Mag 2026',
    steps: [
      {
        week: '11',
        dates: '12 Mag – 18 Mag 2026',
        title: 'Testing, Feedback e Iterazione',
        status: 'upcoming',
        desc: 'Sessioni di playtest su Meta Quest con tester reali. Raccolta feedback su comfort, tempistiche e impatto emotivo. Bug fix e iterazioni mirate.',
        tasks: [
          'Sessioni playtest con 3-5 tester (familiari, colleghi)',
          'Checklist comfort: motion sickness, affaticamento',
          'Raccolta feedback emotivo (questionario post-sessione)',
          'Bug fix prioritizzati da report tester',
          'Ottimizzazione performance: draw call, texture, poligoni',
          'Verifica build su Meta Quest 2 e 3',
        ],
      },
      {
        week: '12',
        dates: '19 Mag – 25 Mag 2026',
        title: 'Build Finale e Documentazione Tesi',
        status: 'upcoming',
        desc: 'Build definitiva per Meta Quest. Registrazione materiali per la tesi: screenshot, video gameplay, screen recording. Completamento e revisione finale della tesi.',
        tasks: [
          'Build APK finale per Meta Quest',
          'Registrazione video gameplay completo',
          'Screenshot per appendice e capitoli',
          'Revisione finale tesi: intro, cap. 1, cap. 2, cap. 3, conclusioni',
          'Formattazione e impaginazione documento',
          'Preparazione presentazione per discussione',
        ],
      },
    ],
  },
];

const STATUS_CONFIG = {
  done:     { label: 'Completato', color: '#5aaa8c', icon: '✓' },
  active:   { label: 'In corso',   color: '#e8915a', icon: '→' },
  upcoming: { label: 'Prossimo',   color: '#888',    icon: '○' },
};

function PhaseBar({ phase }) {
  const cfg = STATUS_CONFIG;
  const total = phase.steps.length;
  const done = phase.steps.filter(s => s.status === 'done').length;
  const active = phase.steps.filter(s => s.status === 'active').length;
  const pct = Math.round(((done + active * 0.5) / total) * 100);

  return (
    <div className="tl2-phase" style={{ '--phase-color': phase.color }}>
      <div className="tl2-phase-header">
        <div className="tl2-phase-dot" />
        <div className="tl2-phase-info">
          <span className="tl2-phase-label">{phase.label}</span>
          <span className="tl2-phase-weeks">Sett. {phase.weeks} · {phase.dateRange}</span>
        </div>
        <div className="tl2-phase-progress">
          <div className="tl2-progress-bar">
            <div className="tl2-progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="tl2-progress-pct">{pct}%</span>
        </div>
      </div>

      <div className="tl2-steps">
        {phase.steps.map((step, i) => {
          const sc = STATUS_CONFIG[step.status];
          const isLast = i === phase.steps.length - 1;
          return (
            <div className={`tl2-step tl2-step--${step.status}`} key={step.week}>
              <div className="tl2-step-line-col">
                <div className="tl2-step-node">{sc.icon}</div>
                {!isLast && <div className="tl2-step-connector" />}
              </div>
              <div className="tl2-step-card">
                <div className="tl2-step-top">
                  <div className="tl2-step-meta">
                    <span className="tl2-step-week">Sett. {step.week}</span>
                    <span className="tl2-step-dates">{step.dates}</span>
                  </div>
                  <span className="tl2-step-badge" style={{ background: sc.color + '22', color: sc.color, borderColor: sc.color + '44' }}>
                    {sc.icon} {sc.label}
                  </span>
                </div>
                <div className="tl2-step-title">{step.title}</div>
                <div className="tl2-step-desc">{step.desc}</div>
                <ul className="tl2-step-tasks">
                  {step.tasks.map(t => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Timeline() {
  const totalSteps = PHASES.reduce((acc, p) => acc + p.steps.length, 0);
  const doneSteps  = PHASES.reduce((acc, p) => acc + p.steps.filter(s => s.status === 'done').length, 0);

  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="📅" title="Timeline" subtitle="Pianificazione del progetto — 12 settimane · 3 Mar – 25 Mag 2026" />

        <div className="tl2-overview">
          <div className="tl2-ov-item">
            <span className="tl2-ov-num">12</span>
            <span className="tl2-ov-lbl">Settimane totali</span>
          </div>
          <div className="tl2-ov-item">
            <span className="tl2-ov-num">3</span>
            <span className="tl2-ov-lbl">Fasi</span>
          </div>
          <div className="tl2-ov-item">
            <span className="tl2-ov-num">{totalSteps}</span>
            <span className="tl2-ov-lbl">Milestone</span>
          </div>
          <div className="tl2-ov-item">
            <span className="tl2-ov-num" style={{ color: '#5aaa8c' }}>{doneSteps}/{totalSteps}</span>
            <span className="tl2-ov-lbl">Completate</span>
          </div>
        </div>

        <div className="tl2-root">
          {PHASES.map(phase => (
            <PhaseBar key={phase.id} phase={phase} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
