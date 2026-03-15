import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function StoryCard({ tag, title, children }) {
  return (
    <div className="story-card">
      <div className="story-tag">{tag}</div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default function Storia() {
  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="📖" title="Storia dell'Esperienza" subtitle="Struttura narrativa — Prologo, 3 Atti, Epilogo" />

        <div className="htl">
          {[
            { label: 'Prologo', name: "L'Ingresso", dur: '~1 min' },
            { label: 'Atto 1', name: 'Il Fuoco', dur: '3-5 min' },
            { label: 'Atto 2', name: "L'Acqua", dur: '3-5 min' },
            { label: 'Atto 3', name: "L'Incontro", dur: '5-10 min' },
            { label: 'Epilogo', name: "L'Alba", dur: '3-5 min' },
          ].map(i => (
            <div className="htl-item" key={i.label}>
              <div className="htl-label">{i.label}</div>
              <div className="htl-name">{i.name}</div>
              <div className="htl-dur">{i.dur}</div>
            </div>
          ))}
        </div>

        <StoryCard tag="Prologo" title="L'Ingresso (~1 min)">
          <p><strong>Ambiente:</strong> Buio totale. Mani luminose. Pavimento d'acqua scura.</p>
          <p><strong>Cosa succede:</strong> Tutorial guidato dalla voce narrante. 3 sfere insegnano i gesti base: tap, grab+release, throw.</p>
          <p><strong>Transizione:</strong> Luce arancione in lontananza → dissolvenza.</p>
        </StoryCard>

        <StoryCard tag="Atto 1 — Il Fuoco" title="Affrontare la rabbia (3-5 min)">
          <h3>La Fucina</h3>
          <p><strong>Ambiente:</strong> Caverna con incudine, braci, scintille. Blocco incandescente + martello.</p>
          <p><strong>Cosa succede:</strong> Il giocatore martella il blocco (8-15 colpi). Il blocco si spacca e rivela una chiave.</p>
          <h3>La Porta</h3>
          <p><strong>Ambiente:</strong> Buio. Una porta di pietra con serratura luminosa.</p>
          <p><strong>Cosa succede:</strong> Il giocatore inserisce la chiave e la gira. La porta si apre.</p>
        </StoryCard>

        <StoryCard tag="Atto 2 — L'Acqua" title="Affrontare il senso di colpa (3-5 min)">
          <h3>Il Mare</h3>
          <p><strong>Ambiente:</strong> Scoglio su mare vasto e calmo, notte stellata. 6-10 pietre scure con frasi di colpa fluttuano davanti al petto.</p>
          <p><strong>Cosa succede:</strong> Il giocatore lancia le pietre nel mare, una alla volta. Ad ogni lancio: splash, onda luminosa, acqua più chiara. Una sagoma dorata si avvicina ad ogni lancio.</p>
        </StoryCard>

        <StoryCard tag="Atto 3 — L'Incontro sul Mare" title="Dialogo e connessione (5-10 min)">
          <h3>Il Silenzio Condiviso</h3>
          <p>Mare calmo e luminoso. Sagoma a 2m. Due figure faccia a faccia. 10-15s di silenzio.</p>
          <h3>Le Parole</h3>
          <p>Sfere-parola fluttuano: "Grazie", "Mi manchi", "Ti perdono", "Perdonami", "Vai in pace", "Ti voglio bene". Il giocatore tocca quelle che vuole (o nessuna). Nessun timer.</p>
          <h3>La Scelta di Proseguire</h3>
          <p>Una sfera dorata appare in grembo. Se il giocatore la prende e alza, la sagoma si dissolve — braccia aperte, particelle, riflessi sull'acqua. Resta un punto di luce.</p>
        </StoryCard>

        <StoryCard tag="Epilogo" title="L'Alba sul Mare (3-5 min)">
          <p>L'alba nasce dal punto dove sedeva la figura. Le mani del giocatore brillano della stessa luce. Gesti creativi liberi: palms up → stelle, push → onda di luce, finger wiggle → gabbiani, hands together → luce-cuore.</p>
          <p>Dissolvenza al bianco → titolo → nero.</p>
        </StoryCard>
      </div>
    </Layout>
  );
}
