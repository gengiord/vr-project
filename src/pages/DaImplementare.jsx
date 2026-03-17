import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

const sections = [
  {
    icon: '🎬',
    title: 'Storyboard',
    items: [
      'Sostituire la figura realistica sulla sedia con un personaggio stilizzato (animella)',
      'Usare uno stile semplice e astratto, coerente tra tutte le scene',
    ],
  },
  {
    icon: '📱',
    title: 'Companion App',
    items: [
      'Progettare (non sviluppare) un\'applicazione companion che affianchi l\'esperienza VR',
      'Sufficiente anche una sola schermata rappresentativa',
      'Supporto prima, durante o dopo la sessione (es. esercizi, journaling, follow-up)',
    ],
  },
  {
    icon: '🌐',
    title: 'Esperienza a Distanza',
    items: [
      'Prevedere la possibilità di vivere l\'esperienza da remoto',
      'Senza necessità di essere fisicamente presenti in uno spazio dedicato',
    ],
  },
  {
    icon: '🧭',
    title: 'Modalità di Guida — 2 Opzioni',
    items: [
      'Guidata da uno Psicologo in tempo reale: accompagnamento professionale e personalizzato',
      'Guidata da una Voce Narrante preregistrata: esperienza autonoma e scalabile',
    ],
  },
  {
    icon: '📣',
    title: 'Progetto come Prodotto',
    items: [
      'Logo: progettare un\'identità visiva coerente (nome, colori, font)',
      'Target: definire il pubblico di riferimento (es. adulti in lutto, professionisti della salute mentale, etc.)',
      'Distribuzione: stabilire su quali piattaforme verrà distribuito (App Store, web, istituzioni, cliniche)',
      'Pubblicazione: pianificare una strategia di lancio (social, comunicato, presentazione pubblica)',
      'Posizionamento: definire cosa rende unico il progetto rispetto ad alternative esistenti',
    ],
  },
  {
    icon: '📅',
    title: 'Timeline',
    items: [
      'Aggiornare la timeline in base alle nuove priorità emerse dal colloquio con il relatore',
    ],
  },
  {
    icon: '🎯',
    title: 'Deliverable — Livelli di Ambizione',
    items: [
      'Minimo — Presentazione con clip video che mostri il concept',
      'Target — Trailer completo e curato del progetto',
      'Top — Sviluppo effettivo del videogioco (versione giocabile)',
    ],
  },
];

export default function DaImplementare() {
  return (
    <Layout section={null}>
      <div className="page">
        <PageHeader
          icon="🛠️"
          title="Da Implementare"
          subtitle="Modifiche e migliorie da apportare al progetto — feedback del relatore"
        />

        {sections.map((s) => (
          <SectionCard key={s.title}>
            <h2 className="section-title">
              <span style={{ marginRight: '0.5rem' }}>{s.icon}</span>
              {s.title}
            </h2>
            <ul className="change-list">
              {s.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </SectionCard>
        ))}
      </div>
    </Layout>
  );
}
