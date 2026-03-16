import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const questions = [
  {
    id: 1,
    icon: '🔨',
    tag: 'Priorità Alta',
    tagColor: '#d4500a',
    title: 'Quanto devo sviluppare realmente?',
    body: `Il progetto è un'esperienza VR in 5 atti (Prologo + 3 Atti + Epilogo), 15-25 minuti, con hand tracking, audio generativo e ambienti 3D distinti.

Qual è il livello di sviluppo atteso per una tesi magistrale in Design della Comunicazione?

• Quante scene funzionanti in Unity sono necessarie?
• C'è un confine definito tra progettazione documentata e sviluppo effettivo?
• La documentazione di design (GDD, storyboard, concept art) è considerata output sufficiente, o è complementare a un prototipo funzionante?`,
  },
  {
    id: 4,
    icon: '🎨',
    tag: 'Espansione di Scope',
    tagColor: '#3a6b8c',
    title: 'Ha senso includere la parte di comunicazione?',
    body: `Il corso è Design della Comunicazione. Il progetto attualmente è centrato sull'esperienza VR.

Potrebbe avere senso affiancare anche una parte di comunicazione del progetto?

• Identità visiva: logo, palette, tipografia, brand identity de "Il Viaggio"
• Sito web pubblico di presentazione al pubblico (non questa documentazione)
• Materiali: poster, booklet, pitch deck`,
  },
  {
    id: 5,
    icon: '🩺',
    tag: 'Espansione di Scope',
    tagColor: '#3a6b8c',
    title: 'Ha senso progettare una Companion App per psicologi?',
    body: `Una companion app per terapeuti/psicologi potrebbe affiancare l'esperienza VR con:

• Dashboard per monitorare il percorso del paziente
• Personalizzazione dell'esperienza (quale atto affrontare, intensità della sessione)
• Note post-sessione e feedback strutturato
• Integrazione con il percorso terapeutico tradizionale

Ha senso includerla nella tesi come progettazione concettuale (wireframe, flussi UX)?`,
  },
  {
    id: 2,
    icon: '📅',
    tag: 'Organizzazione',
    tagColor: '#4a2060',
    title: 'La timeline di 12 settimane è realistica?',
    body: `La pianificazione attuale prevede:

• Settimane 1-6 (Pre-produzione): ricerca teorica, consulenza psicologo, GDD, storyboard, concept art
• Settimane 7-10 (Produzione): sviluppo Unity, ambienti 3D, meccaniche hand tracking, audio
• Settimane 11-12 (Post-produzione): testing, refinement, build finale, documentazione

Questa distribuzione le sembra equilibrata? Ci sono fasi che suggerisce di ridurre o espandere?`,
  },
];

export default function Domande() {
  return (
    <Layout>
      <div className="page">
        <PageHeader
          icon="❓"
          title="Domande per il Relatore"
          subtitle="Chiarimenti su scope, sviluppo e direzione della tesi — Prof. Corrado Piscitelli"
        />

        <div className="questions-list">
          {questions.map((q) => (
            <div className="question-card" key={q.id}>
              <div className="question-header">
                <span className="question-icon">{q.icon}</span>
                <div className="question-meta">
                  <span className="question-tag" style={{ backgroundColor: q.tagColor }}>
                    {q.tag}
                  </span>
                  <h2 className="question-title">
                    <span className="question-number">Q{q.id}.</span> {q.title}
                  </h2>
                </div>
              </div>
              <div className="question-body">
                {q.body.split('\n').map((line, i) =>
                  line.trim() === '' ? null : (
                    <p key={i} style={line.startsWith('•') ? { paddingLeft: '1rem', marginBottom: '0.25rem' } : {}}>
                      {line}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
