import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function StoryCard({ tag, title, emotion, children }) {
  return (
    <div className="story-card">
      <div className="story-tag">{tag}</div>
      {emotion && <div className="story-emotion">{emotion}</div>}
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default function Storia() {
  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="📖" title="Storia dell'Esperienza" subtitle="Un viaggio attraverso le fasi del lutto — 15-25 minuti" />

        <div className="story-timeline">
          <div className="timeline-header">
            <h3>Struttura Narrativa</h3>
            <p>Un percorso emotivo guidato, basato sul modello Grief and Growth Therapy</p>
          </div>
          
          <div className="timeline-flow">
            {[
              { 
                phase: 'Prologo', 
                title: "L'Ingresso", 
                time: '~1 min',
                emotion: 'Disorientamento',
                color: '#1a1a2e',
                description: 'Accettazione dell\'esperienza'
              },
              { 
                phase: 'Atto 1', 
                title: 'Il Fuoco', 
                time: '3-5 min',
                emotion: 'Rabbia',
                color: '#d4500a',
                description: 'Elaborazione della rabbia'
              },
              { 
                phase: 'Atto 2', 
                title: "L'Acqua", 
                time: '3-5 min',
                emotion: 'Senso di colpa',
                color: '#1a3a5c',
                description: 'Rilascio del senso di colpa'
              },
              { 
                phase: 'Atto 3', 
                title: "L'Incontro", 
                time: '5-10 min',
                emotion: 'Connessione',
                color: '#3a6b8c',
                description: 'Dialogo e accettazione'
              },
              { 
                phase: 'Epilogo', 
                title: "L'Alba", 
                time: '3-5 min',
                emotion: 'Rinascita',
                color: '#4a2060',
                description: 'Post-traumatic growth'
              },
            ].map((item, index) => (
              <div className="timeline-item" key={item.phase}>
                <div className="timeline-marker" style={{ backgroundColor: item.color }}>
                  <span className="timeline-phase">{item.phase}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-time">{item.time}</div>
                  <div className="timeline-emotion">{item.emotion}</div>
                  <div className="timeline-desc">{item.description}</div>
                </div>
                {index < 4 && <div className="timeline-connector" />}
              </div>
            ))}
          </div>
        </div>

        <div className="story-sections">
          <StoryCard tag="Prologo" title="L'Ingresso" emotion="Disorientamento → Accettazione">
            <div className="story-details">
              <div className="story-environment">
                <h4>🌑 Ambiente</h4>
                <p>Buio totale. Mani luminose. Pavimento d'acqua scura riflettente.</p>
              </div>
              <div className="story-actions">
                <h4>🎮 Interazioni</h4>
                <p>Tutorial guidato dalla voce narrante. 3 sfere insegnano i gesti base: tap, grab+release, throw.</p>
              </div>
              <div className="story-transition">
                <h4>✨ Transizione</h4>
                <p>Luce arancione in lontananza → dissolvenza verso la fucina.</p>
              </div>
            </div>
          </StoryCard>

          <StoryCard tag="Atto 1" title="Il Fuoco" emotion="Rabbia → Trasformazione">
            <div className="story-details">
              <div className="story-environment">
                <h4>🔥 La Fucina</h4>
                <p>Caverna con incudine, braci, scintille. Blocco incandescente + martello.</p>
              </div>
              <div className="story-actions">
                <h4>⚒️ Azione</h4>
                <p>Martellare il blocco (8-15 colpi). Il blocco si spacca e rivela una chiave.</p>
              </div>
              <div className="story-environment">
                <h4>🚪 La Porta</h4>
                <p>Buio. Una porta di pietra con serratura luminosa.</p>
              </div>
              <div className="story-actions">
                <h4>🔑 Risoluzione</h4>
                <p>Inserire la chiave e girarla. La porta si apre sul mare.</p>
              </div>
            </div>
          </StoryCard>

          <StoryCard tag="Atto 2" title="L'Acqua" emotion="Senso di colpa → Perdono">
            <div className="story-details">
              <div className="story-environment">
                <h4>🌊 Il Mare Notturno</h4>
                <p>Scoglio su mare vasto e calmo, notte stellata. 6-10 pietre scure con frasi di colpa fluttuano.</p>
              </div>
              <div className="story-actions">
                <h4>💪 Rituale</h4>
                <p>Lanciare le pietre nel mare, una alla volta. Ad ogni lancio: splash, onda luminosa, acqua più chiara.</p>
              </div>
              <div className="story-transition">
                <h4>👤 Avvicinamento</h4>
                <p>Una sagoma dorata si avvicina ad ogni pietre lanciata, simbolo di connessione.</p>
              </div>
            </div>
          </StoryCard>

          <StoryCard tag="Atto 3" title="L'Incontro sul Mare" emotion="Connessione → Dialogo">
            <div className="story-details">
              <div className="story-environment">
                <h4>🤝 Il Silenzio Condiviso</h4>
                <p>Mare calmo e luminoso. Sagoma a 2m. Due figure faccia a faccia. 10-15s di silenzio profondo.</p>
              </div>
              <div className="story-actions">
                <h4>💬 Le Parole</h4>
                <p>Sfere-parola fluttuano: "Grazie", "Mi manchi", "Ti perdono", "Perdonami", "Vai in pace", "Ti voglio bene". Il giocatore tocca quelle che vuole (o nessuna). Nessun timer.</p>
              </div>
              <div className="story-actions">
                <h4>⭐ La Scelta</h4>
                <p>Una sfera dorata appare in grembo. Se il giocatore la prende e alza, la sagoma si dissolve — braccia aperte, particelle, riflessi sull'acqua. Resta un punto di luce.</p>
              </div>
            </div>
          </StoryCard>

          <StoryCard tag="Epilogo" title="L'Alba sul Mare" emotion="Rinascita → Crescita">
            <div className="story-details">
              <div className="story-environment">
                <h4>🌅 L'Alba</h4>
                <p>L'alba nasce dal punto dove sedeva la figura. Le mani del giocatore brillano della stessa luce.</p>
              </div>
              <div className="story-actions">
                <h4>🎨 Espressione Creativa</h4>
                <p>Gesti creativi liberi: palms up → stelle, push → onda di luce, finger wiggle → gabbiani, hands together → luce-cuore.</p>
              </div>
              <div className="story-transition">
                <h4>🎬 Finale</h4>
                <p>Dissolvenza al bianco → titolo → nero. Un nuovo inizio.</p>
              </div>
            </div>
          </StoryCard>
        </div>
      </div>
    </Layout>
  );
}
