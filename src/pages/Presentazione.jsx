import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 'cover',
    type: 'cover',
    label: 'Titolo',
    title: 'Il Viaggio',
    subtitle: 'Lutto nell\'era digitale',
    meta: 'La realtà virtuale come strumento di supporto nell\'elaborazione della perdita',
    footer: 'Gennaro Giordano — Tesi Magistrale Multimedia — A.A. 2025/2026 — Relatore: Prof. Corrado Piscitelli',
  },
  {
    id: 'candidato',
    type: 'split',
    label: 'Chi sono',
    title: 'Il candidato',
    left: [
      { label: 'Nome', value: 'Gennaro Giordano' },
      { label: 'Corso', value: 'Multimedia — Design della Comunicazione' },
      { label: 'Anno Accademico', value: '2025/2026' },
      { label: 'Relatore', value: 'Prof. Corrado Piscitelli' },
      { label: 'Consulente', value: 'Dott.ssa Myriam Giordano' },
      { label: 'Framework teorico', value: 'Grief and Growth Therapy (GGT)' },
    ],
    right: {
      icon: '🎓',
      text: 'Candidato al corso di laurea magistrale in Multimedia, con specializzazione nel design della comunicazione e nelle esperienze interattive.',
    },
  },
  {
    id: 'domanda',
    type: 'focus',
    label: 'Domanda di ricerca',
    title: 'Domanda di Ricerca',
    quote: 'È possibile realizzare un progetto in realtà virtuale che possa supportare l\'elaborazione di un lutto, con valenza psico-educativa, utilizzando la Grief and Growth Therapy come framework teorico?',
    items: [
      { icon: '💡', text: 'Gap nella ricerca: la VR è stata poco impiegata per la Death Education primaria' },
      { icon: '❤️', text: 'Motivazione personale: esperienze di lutto vissute in prima persona' },
      { icon: '🎯', text: 'Obiettivo: rendere accessibile un tema intimo tramite un\'esperienza immersiva' },
    ],
  },
  {
    id: 'ggt',
    type: 'framework',
    label: 'Framework',
    title: 'Grief and Growth Therapy',
    source: 'Fonte principale: De Luca M.L. — "Psicoterapia per il lutto. La Grief and Growth Therapy"',
    description: 'La GGT integra il modello classico di Kübler-Ross con la teoria della crescita post-traumatica, proponendo il lutto non come processo lineare di "superamento", ma come percorso di trasformazione e crescita personale.',
    pillars: [
      { icon: '🔥', label: 'Rabbia', desc: 'Elaborare l\'energia della perdita' },
      { icon: '💧', label: 'Dolore', desc: 'Accogliere il peso del lutto' },
      { icon: '🤝', label: 'Connessione', desc: 'Riallacciare il legame simbolico' },
      { icon: '🌅', label: 'Rinascita', desc: 'Crescita e nuova identità' },
    ],
  },
  {
    id: 'progetto',
    type: 'project',
    label: 'Il progetto',
    title: '"Il Viaggio" — Progetto VR',
    description: 'Un\'esperienza in realtà virtuale psico-educativa sull\'elaborazione del lutto. Immersiva, interattiva, da seduti, senza controller.',
    specs: [
      { icon: '🕹️', label: 'Piattaforma', value: 'Meta Quest (standalone)' },
      { icon: '✋', label: 'Input', value: 'Hand tracking — nessun controller' },
      { icon: '⏱️', label: 'Durata', value: '15–25 minuti' },
      { icon: '🪑', label: 'Postura', value: 'Da seduti — comfort zone 60×60 cm' },
      { icon: '🎙️', label: 'Voce narrante', value: 'ElevenLabs TTS — tono calmo e intimo' },
      { icon: '🛡️', label: 'Filosofia', value: 'No-fail — nessun timer, retry infiniti' },
    ],
  },
  {
    id: 'storia',
    type: 'story',
    label: 'Struttura narrativa',
    title: 'La struttura narrativa',
    acts: [
      { phase: 'Prologo', title: 'L\'Ingresso', time: '~1 min', color: '#8d99ae', arc: 'Disorientamento → Accettazione' },
      { phase: 'Atto 1', title: 'La Fucina', time: '3–5 min', color: '#c9184a', arc: 'Rabbia → Trasformazione' },
      { phase: 'Atto 2', title: 'L\'Acqua', time: '3–5 min', color: '#3a86ff', arc: 'Senso di colpa → Perdono' },
      { phase: 'Atto 3', title: 'L\'Incontro sul Mare', time: '5–10 min', color: '#2ec4b6', arc: 'Connessione → Dialogo → Accettazione' },
      { phase: 'Epilogo', title: 'L\'Alba', time: '3–5 min', color: '#f4a261', arc: 'Rinascita → Crescita' },
    ],
    message: '"Più lasci andare il peso, più puoi avvicinarti a chi hai perso."',
  },
  {
    id: 'gameplay',
    type: 'gameplay',
    label: 'Gameplay',
    title: 'Meccaniche e interazioni',
    principle: 'Ogni meccanica è metafora emotiva: le mani dell\'utente sono lo strumento della trasformazione interiore.',
    gestures: [
      { gesture: 'Grab & Release', metaphor: 'Lasciare andare', icon: '✋' },
      { gesture: 'Throw', metaphor: 'Liberare la rabbia', icon: '🤜' },
      { gesture: 'Palms Up', metaphor: 'Accogliere', icon: '🙌' },
      { gesture: 'Hands Together', metaphor: 'Connessione / preghiera', icon: '🤲' },
      { gesture: 'Push', metaphor: 'Respingere il dolore', icon: '🖐️' },
      { gesture: 'Finger Wiggle', metaphor: 'Comunicare', icon: '👋' },
    ],
  },
  {
    id: 'visivo',
    type: 'visual',
    label: 'Identità visiva',
    title: 'Identità visiva',
    style: '3D Low Poly — stilizzato, non fotorealistico',
    references: ['Journey (thatgamecompany)', 'Gris', 'Abzû', 'Monument Valley'],
    palette: [
      { color: '#8d99ae', label: 'Prologo', desc: 'Grigio neutro' },
      { color: '#c9184a', label: 'Atto 1', desc: 'Rosso fuoco' },
      { color: '#3a86ff', label: 'Atto 2', desc: 'Blu profondo' },
      { color: '#2ec4b6', label: 'Atto 3', desc: 'Verde acqua' },
      { color: '#f4a261', label: 'Epilogo', desc: 'Arancio alba' },
    ],
  },
  {
    id: 'tech',
    type: 'tech',
    label: 'Tecnologia',
    title: 'Stack tecnologico',
    stack: [
      { icon: '🎮', name: 'Unity', desc: 'Engine principale per lo sviluppo VR' },
      { icon: '📦', name: 'Meta XR All-In-One SDK', desc: 'SDK ufficiale per Meta Quest e hand tracking' },
      { icon: '🎙️', name: 'ElevenLabs', desc: 'Text-to-Speech per la voce narrante' },
      { icon: '🎵', name: 'Librerie royalty-free', desc: 'Epidemic Sound / Freesound per musica e SFX' },
      { icon: '🤖', name: 'AI Tools', desc: 'Generazione concept art e supporto scrittura' },
    ],
    target: 'Meta Quest 2 / 3 — distribuzione standalone, no PC required',
  },
  {
    id: 'timeline',
    type: 'timeline',
    label: 'Pianificazione',
    title: 'Pianificazione — 12 settimane',
    phases: [
      {
        name: 'Pre-produzione',
        weeks: 'Sett. 1–6',
        color: '#3a86ff',
        steps: ['Ricerca teorica e framework GGT', 'Consulenza psicologica', 'Game Design Document', 'Storyboard e concept art'],
      },
      {
        name: 'Produzione',
        weeks: 'Sett. 7–10',
        color: '#c9184a',
        steps: ['Sviluppo Unity — ambienti e asset', 'Implementazione hand tracking', 'Voce narrante e audio', 'Meccaniche di gioco'],
      },
      {
        name: 'Post-produzione',
        weeks: 'Sett. 11–12',
        color: '#f4a261',
        steps: ['Testing e playtesting', 'Build finale Meta Quest', 'Documentazione e tesi', 'Presentazione'],
      },
    ],
  },
  {
    id: 'team',
    type: 'team',
    label: 'Team',
    title: 'Il team',
    members: [
      { name: 'Gennaro Giordano', role: 'Candidato & Designer', icon: '🎓', desc: 'Design della comunicazione, sviluppo VR, ricerca teorica e scrittura della tesi.' },
      { name: 'Prof. Corrado Piscitelli', role: 'Relatore', icon: '🏫', desc: 'Supervisione accademica, guida metodologica e orientamento nella ricerca.' },
      { name: 'Dott.ssa Myriam Giordano', role: 'Consulente Psicologica', icon: '🧠', desc: 'Validazione clinica del framework GGT e delle metafore emotive del design.' },
    ],
  },
  {
    id: 'fine',
    type: 'end',
    label: 'Fine',
    title: 'Grazie',
    quote: '"Più lasci andare il peso, più puoi avvicinarti a chi hai perso."',
    links: [
      { to: '/tesi', label: 'Tesi', icon: '📚' },
      { to: '/progetto', label: 'Progetto VR', icon: '🎮' },
      { to: '/timeline', label: 'Timeline', icon: '📅' },
    ],
    footer: 'Gennaro Giordano — Tesi Magistrale Multimedia — A.A. 2025/2026',
  },
];

function SlideRenderer({ slide }) {
  switch (slide.type) {
    case 'cover':
      return (
        <div className="pres-cover">
          <div className="pres-cover-icon">🌅</div>
          <h1 className="pres-cover-title">{slide.title}</h1>
          <h2 className="pres-cover-subtitle">{slide.subtitle}</h2>
          <p className="pres-cover-meta">{slide.meta}</p>
          <div className="pres-cover-footer">{slide.footer}</div>
        </div>
      );

    case 'split':
      return (
        <div className="pres-split">
          <h2 className="pres-slide-title">{slide.title}</h2>
          <div className="pres-split-body">
            <div className="pres-split-left">
              {slide.left.map(({ label, value }) => (
                <div className="pres-meta-row" key={label}>
                  <span className="pres-meta-label">{label}</span>
                  <span className="pres-meta-value">{value}</span>
                </div>
              ))}
            </div>
            <div className="pres-split-right">
              <div className="pres-big-icon">{slide.right.icon}</div>
              <p className="pres-right-text">{slide.right.text}</p>
            </div>
          </div>
        </div>
      );

    case 'focus':
      return (
        <div className="pres-focus">
          <h2 className="pres-slide-title">{slide.title}</h2>
          <blockquote className="pres-blockquote">{slide.quote}</blockquote>
          <div className="pres-items">
            {slide.items.map(({ icon, text }) => (
              <div className="pres-item" key={text}>
                <span className="pres-item-icon">{icon}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'framework':
      return (
        <div className="pres-framework">
          <h2 className="pres-slide-title">{slide.title}</h2>
          <p className="pres-source">{slide.source}</p>
          <p className="pres-desc">{slide.description}</p>
          <div className="pres-pillars">
            {slide.pillars.map(({ icon, label, desc }) => (
              <div className="pres-pillar" key={label}>
                <span className="pres-pillar-icon">{icon}</span>
                <strong>{label}</strong>
                <span>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'project':
      return (
        <div className="pres-project">
          <h2 className="pres-slide-title">{slide.title}</h2>
          <p className="pres-desc">{slide.description}</p>
          <div className="pres-specs">
            {slide.specs.map(({ icon, label, value }) => (
              <div className="pres-spec" key={label}>
                <span className="pres-spec-icon">{icon}</span>
                <div>
                  <div className="pres-spec-label">{label}</div>
                  <div className="pres-spec-value">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'story':
      return (
        <div className="pres-story">
          <h2 className="pres-slide-title">{slide.title}</h2>
          <div className="pres-acts">
            {slide.acts.map(({ phase, title, time, color, arc }) => (
              <div className="pres-act" key={phase} style={{ borderTopColor: color }}>
                <div className="pres-act-phase" style={{ color }}>{phase}</div>
                <div className="pres-act-title">{title}</div>
                <div className="pres-act-time">{time}</div>
                <div className="pres-act-arc">{arc}</div>
              </div>
            ))}
          </div>
          <blockquote className="pres-message">{slide.message}</blockquote>
        </div>
      );

    case 'gameplay':
      return (
        <div className="pres-gameplay">
          <h2 className="pres-slide-title">{slide.title}</h2>
          <p className="pres-principle">{slide.principle}</p>
          <div className="pres-gestures">
            {slide.gestures.map(({ gesture, metaphor, icon }) => (
              <div className="pres-gesture" key={gesture}>
                <span className="pres-gesture-icon">{icon}</span>
                <div>
                  <div className="pres-gesture-name">{gesture}</div>
                  <div className="pres-gesture-meta">{metaphor}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'visual':
      return (
        <div className="pres-visual">
          <h2 className="pres-slide-title">{slide.title}</h2>
          <div className="pres-style-badge">{slide.style}</div>
          <div className="pres-palette">
            {slide.palette.map(({ color, label, desc }) => (
              <div className="pres-swatch" key={label}>
                <div className="pres-swatch-color" style={{ background: color }} />
                <div className="pres-swatch-label">{label}</div>
                <div className="pres-swatch-desc">{desc}</div>
              </div>
            ))}
          </div>
          <div className="pres-refs">
            <span className="pres-refs-label">Riferimenti visivi:</span>
            {slide.references.map(r => <span className="pres-ref-tag" key={r}>{r}</span>)}
          </div>
        </div>
      );

    case 'tech':
      return (
        <div className="pres-tech">
          <h2 className="pres-slide-title">{slide.title}</h2>
          <div className="pres-stack">
            {slide.stack.map(({ icon, name, desc }) => (
              <div className="pres-stack-item" key={name}>
                <span className="pres-stack-icon">{icon}</span>
                <div>
                  <div className="pres-stack-name">{name}</div>
                  <div className="pres-stack-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="pres-target">{slide.target}</div>
        </div>
      );

    case 'timeline':
      return (
        <div className="pres-tl">
          <h2 className="pres-slide-title">{slide.title}</h2>
          <div className="pres-phases">
            {slide.phases.map(({ name, weeks, color, steps }) => (
              <div className="pres-phase" key={name}>
                <div className="pres-phase-header" style={{ borderLeftColor: color }}>
                  <strong style={{ color }}>{name}</strong>
                  <span className="pres-phase-weeks">{weeks}</span>
                </div>
                <ul className="pres-phase-steps">
                  {steps.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );

    case 'team':
      return (
        <div className="pres-team">
          <h2 className="pres-slide-title">{slide.title}</h2>
          <div className="pres-members">
            {slide.members.map(({ name, role, icon, desc }) => (
              <div className="pres-member" key={name}>
                <div className="pres-member-icon">{icon}</div>
                <div className="pres-member-name">{name}</div>
                <div className="pres-member-role">{role}</div>
                <p className="pres-member-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'end':
      return (
        <div className="pres-end">
          <div className="pres-end-icon">🌅</div>
          <h1 className="pres-end-title">{slide.title}</h1>
          <blockquote className="pres-end-quote">{slide.quote}</blockquote>
          <div className="pres-end-links">
            {slide.links.map(({ to, label, icon }) => (
              <Link key={to} to={to} className="pres-end-link">
                <span>{icon}</span> {label}
              </Link>
            ))}
          </div>
          <div className="pres-end-footer">{slide.footer}</div>
        </div>
      );

    default:
      return null;
  }
}

export default function Presentazione() {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState('');
  const total = slides.length;

  const goTo = useCallback((index) => {
    if (index < 0 || index >= total) return;
    setAnimDir(index > current ? 'next' : 'prev');
    setCurrent(index);
  }, [current, total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <div className="pres-root">
      {/* Header */}
      <div className="pres-header">
        <Link to="/" className="pres-exit">← Esci</Link>
        <div className="pres-breadcrumb">{slide.label}</div>
        <div className="pres-counter">{current + 1} / {total}</div>
      </div>

      {/* Slide area */}
      <div className="pres-stage" key={current}>
        <SlideRenderer slide={slide} />
      </div>

      {/* Dot nav */}
      <div className="pres-dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`pres-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            title={s.label}
          />
        ))}
      </div>

      {/* Arrows */}
      <button className="pres-arrow pres-arrow-left" onClick={prev} disabled={current === 0}>‹</button>
      <button className="pres-arrow pres-arrow-right" onClick={next} disabled={current === total - 1}>›</button>
    </div>
  );
}
