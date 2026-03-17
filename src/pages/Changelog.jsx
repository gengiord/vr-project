import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

const changelog = [
  {
    version: 'v1.7',
    date: '17 marzo 2026',
    type: 'feature',
    items: [
      'Aggiunta pagina Da Implementare — feedback del relatore con modifiche e migliorie da apportare',
      'Svuotata pagina Domande per il Relatore — domande risolte dopo il colloquio',
      'Changelog, Domande, Da Implementare spostati nella sezione Risorse della Home',
      'Rimossi Documenti e Team dal menu principale — accessibili solo dalla Home',
    ],
  },
  {
    version: 'v1.6',
    date: '16 marzo 2026',
    type: 'feature',
    items: [
      'Aggiunta pagina Domande per il Relatore — scope, sviluppo vs prototipazione, comunicazione, companion app, timeline',
      'Fix deploy GitHub Pages: migrazione da BrowserRouter a HashRouter per compatibilità routing',
      'Fix CSS pagina Domande: colori adattati al light theme del sito',
    ],
  },
  {
    version: 'v1.5',
    date: '16 marzo 2026',
    type: 'feature',
    items: [
      'Aggiunta pagina Presentazione — slideshow web per la discussione con il relatore',
      'Aggiunta pagina 404 per rotte inesistenti',
      'Sezione "Varie" rinominata in "Risorse" nella Home',
      'Corretto link Storyboard nella Home (puntava a rotta inesistente)',
    ],
  },
  {
    version: 'v1.4',
    date: 'marzo 2026',
    type: 'content',
    items: [
      'Aggiunta pagina Timeline con pianificazione su 12 settimane (4 fasi)',
      'Aggiornata pagina Gameplay con tab: Panoramica, Meccaniche per Fase, Gesture, Feedback & Design',
      'Aggiunta sezione Audio con descrizioni voce narrante, musica e SFX',
    ],
  },
  {
    version: 'v1.3',
    date: 'febbraio 2026',
    type: 'content',
    items: [
      'Aggiunta pagina Moodboard con identità visiva, palette per atto e style specs',
      'Aggiunta pagina Reference con progetti VR ispiratori',
      'Aggiunta pagina Team con foto e ruoli',
      'Aggiornata pagina Specifiche Tecniche: Unity, Meta XR SDK, hand tracking',
    ],
  },
  {
    version: 'v1.2',
    date: 'gennaio 2026',
    type: 'content',
    items: [
      'Aggiunta pagina Storia con narrativa completa: Prologo, 3 Atti, Epilogo',
      'Aggiunto Storyboard con 20 frame, testo voce e concept art',
      'Aggiunta pagina Indice con struttura completa della tesi (80-98 pagine)',
      'Aggiunta pagina Bibliografia con 30+ voci',
    ],
  },
  {
    version: 'v1.1',
    date: 'dicembre 2025',
    type: 'feature',
    items: [
      'Aggiunta navigazione a due livelli (main nav + sub nav contestuale)',
      'Aggiunta sezione Progetto VR con Game Design Document iniziale',
      'Aggiunte pagine Tesi, Indice, Documenti',
    ],
  },
  {
    version: 'v1.0',
    date: 'dicembre 2025',
    type: 'feature',
    items: [
      'Prima versione del sito — setup React + Vite + React Router',
      'Home con dashboard di navigazione',
      'Deploy su GitHub Pages',
    ],
  },
];

function ChangeEntry({ version, date, type, items }) {
  const typeLabel = {
    feature: { label: 'Nuovo', className: 'change-badge feature' },
    update: { label: 'Aggiornamento', className: 'change-badge update' },
    fix: { label: 'Fix', className: 'change-badge fix' },
    content: { label: 'Contenuto', className: 'change-badge content' },
  };

  const badge = typeLabel[type] || { label: type, className: 'change-badge' };

  return (
    <div className="change-entry">
      <div className="change-header">
        <div className="change-meta">
          <span className="change-version">{version}</span>
          <span className="change-date">{date}</span>
        </div>
        <span className={badge.className}>{badge.label}</span>
      </div>
      <ul className="change-list">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}

export default function Changelog() {
  return (
    <Layout section={null}>
      <div className="page">
        <PageHeader icon="📝" title="Changelog" subtitle="Storico delle modifiche e degli aggiornamenti del progetto" />

        {changelog.length === 0 ? (
          <SectionCard>
            <div className="changelog-empty">
              <p>Nessun aggiornamento ancora registrato. Le modifiche verranno inserite qui man mano che il progetto evolve.</p>
            </div>
          </SectionCard>
        ) : (
          <SectionCard>
            <div className="changelog-timeline">
              {changelog.map((entry, i) => (
                <ChangeEntry key={i} {...entry} />
              ))}
            </div>
          </SectionCard>
        )}
      </div>
    </Layout>
  );
}
