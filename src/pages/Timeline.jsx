import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const phases = [
  {
    title: 'Pre-Produzione — Settimane 1-6',
    cards: [
      { week: '1-2', title: 'Ricerca e Framework Teorico', desc: "Studio approfondito della Grief and Growth Therapy. Analisi del libro di De Luca. Identificazione dei pilastri GGT (DPM, CB, PTG, Meaning-Making) e mappatura sul progetto VR." },
      { week: '3', title: 'Consulenza Psicologo', desc: "Sessione con professionista per validare l'approccio psico-educativo. Verifica dell'aderenza al framework GGT. Definizione dei limiti etici dell'esperienza." },
      { week: '4', title: 'Game Design Document', desc: "Scrittura del GDD completo: struttura degli atti, meccaniche di interazione, principi di design, specifiche tecniche. Definizione della comfort zone del hand tracking." },
      { week: '5', title: 'Storyboard e Moodboard', desc: "Creazione dei 20 frame dello storyboard. Definizione delle palette cromatiche per ogni atto. Reference visivi (Journey, Gris, Abzu). Script della voce narrante." },
      { week: '6', title: 'Concept Art e Audio', desc: "Generazione concept art con AI (Meshy AI). Creazione voce narrante con ElevenLabs. Selezione/creazione musica e SFX. Definizione audio spaziale." },
    ],
  },
  {
    title: 'Produzione — Settimane 7-10',
    cards: [
      { week: '7', title: 'Setup Progetto Unity', desc: "Configurazione Unity + Meta XR All-In-One SDK. Setup hand tracking. Implementazione sistema di interazione base (tap, grab, throw). Prologo funzionante." },
      { week: '8', title: "Atto 1 — Il Fuoco + Atto 2 — L'Acqua", desc: "Ambiente fucina con incudine e braci. Meccanica martello. Ambiente mare con pietre. Meccanica lancio. Transizioni tra fasi. Audio spaziale integrato." },
      { week: '9', title: "Atto 3 — L'Incontro sul Mare", desc: "Sistema sfere-parola. Sagoma dorata e animazioni. Silenzio condiviso. Meccanica della scelta (sfera dorata). Dissoluzione e particelle." },
      { week: '10', title: 'Epilogo + Integrazione', desc: "Sequenza alba. Gesti creativi liberi. Integrazione voce narrante completa. Transizioni fluide tra tutti gli atti. Polish generale." },
    ],
  },
  {
    title: 'Post-Produzione — Settimane 11-12',
    cards: [
      { week: '11', title: 'Testing e Iterazione', desc: "Test su Meta Quest. Verifica comfort zone, tempistiche, audio. Feedback da tester. Correzione bug. Ottimizzazione performance." },
      { week: '12', title: 'Build Finale e Documentazione', desc: "Build finale per Meta Quest. Screenshot e video per la tesi. Completamento documentazione. Preparazione per la discussione." },
    ],
  },
];

export default function Timeline() {
  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="📅" title="Timeline" subtitle="Pianificazione del progetto — 12 settimane" />

        {phases.map(phase => (
          <div className="tl-phase" key={phase.title}>
            <div className="tl-phase-header">{phase.title}</div>
            {phase.cards.map(c => (
              <div className="tl-card" key={c.week}>
                <div className="tl-week">Sett.<span>{c.week}</span></div>
                <div className="tl-body">
                  <div className="tl-title">{c.title}</div>
                  <div className="tl-desc">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
}
