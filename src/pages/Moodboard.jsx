import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

function Palette({ colors }) {
  return (
    <div className="palette">
      {colors.map(({ color, label }) => (
        <div key={label}>
          <div className="palette-swatch" style={{ background: color }}></div>
          <div className="palette-label">{label}</div>
        </div>
      ))}
    </div>
  );
}

function MoodCard({ title, description, palette, tags }) {
  return (
    <div className="mood-card">
      <h3>{title}</h3>
      {tags && (
        <div className="mood-tags">
          {tags.map(tag => <span key={tag} className="mood-tag">{tag}</span>)}
        </div>
      )}
      <p>{description}</p>
      {palette && <Palette colors={palette} />}
    </div>
  );
}

function StyleSpec({ label, value }) {
  return (
    <div className="style-spec">
      <span className="style-spec-label">{label}</span>
      <span className="style-spec-value">{value}</span>
    </div>
  );
}

export default function Moodboard() {
  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="🎨" title="Moodboard" subtitle="Stile visivo, palette colori e reference per atto" />

        <h2 className="section-header">Identità Visiva</h2>
        <SectionCard>
          <div className="style-identity">
            <div className="style-badges">
              <span className="style-badge primary">3D Game</span>
              <span className="style-badge primary">Low Poly Art</span>
              <span className="style-badge secondary">Stilizzato</span>
              <span className="style-badge secondary">Non Fotorealistico</span>
            </div>
            <p className="style-tagline">
              Un'estetica <strong>low poly stilizzata</strong> — forme geometriche essenziali, superfici piatte o con shading minimale, luce come elemento narrativo. Non si cerca il realismo: si cerca l'<em>emozione</em>.
            </p>
            <div className="style-specs-grid">
              <StyleSpec label="Genere visivo" value="3D Low Poly Art — Stilizzato" />
              <StyleSpec label="Approccio" value="Non fotorealistico (NPR)" />
              <StyleSpec label="Poligoni" value="Bassa/media densità — forme geometriche pulite" />
              <StyleSpec label="Shading" value="Flat shading + toon shading selettivo" />
              <StyleSpec label="Proporzioni" value="Leggermente stilizzate, non realistiche" />
              <StyleSpec label="Target piattaforma" value="Meta Quest — ottimizzato per mobile VR" />
            </div>
          </div>
        </SectionCard>

        <h2 className="section-header">Riferimenti Stilistici</h2>
        <div className="mood-grid">
          <MoodCard
            title="Journey"
            tags={['Low Poly', 'Atmosfera', 'Emozione']}
            description="thatgamecompany (2012). Minimalismo visivo estremo, luce come protagonista assoluta. Nessuna UI, nessuna parola — solo l'ambiente che racconta. Riferimento principale per il tono emotivo e la direzione artistica."
          />
          <MoodCard
            title="Gris"
            tags={['Stilizzato', 'Acquerello', 'Simbolismo']}
            description="Nomada Studio (2018). Stile pittorico, colori simbolici legati allo stato emotivo. Ogni ambiente è una metafora visiva. Riferimento per l'uso del colore come linguaggio emotivo."
          />
          <MoodCard
            title="Abzû"
            tags={['Low Poly', 'Underwater', 'Shader']}
            description="Giant Squid (2016). Low poly con shader volumetrici, acqua stilizzata e luminosa. Riferimento diretto per l'Atto 2 (mare) e i sistemi particellari acquatici."
          />
          <MoodCard
            title="Monument Valley"
            tags={['Low Poly', 'Geometrico', 'Puzzle']}
            description="ustwo games (2014). Architettura impossibile stilizzata, palette controllata, estetica pulitissima. Riferimento per la chiarezza visiva e il design degli spazi interagibili."
          />
        </div>

        <h2 className="section-header">Stile Visivo — Dettaglio</h2>
        <div className="mood-grid">
          <MoodCard
            title="Geometria Low Poly"
            tags={['Forma', 'Struttura']}
            description="Mesh a bassa densità poligonale. Superfici piane con variazioni di tono minime. Silhouette nette e riconoscibili. Nessun dettaglio superfluo — ogni forma ha un significato narrativo."
          />
          <MoodCard
            title="Materiali e Texture"
            tags={['Shader', 'NPR']}
            description="Flat color + gradient sottili. Acqua: shader toon con riflessioni semplificate. Fucina: materiali warm con glow emissivo. Nessuna texture fotografica — tutto procedurale o dipinto."
          />
          <MoodCard
            title="Illuminazione"
            tags={['Luce', 'Narrativa']}
            description="Luce come elemento narrativo. Buio → luce tenue → luce calda → alba piena. Le mani del giocatore sono sempre fonte di luce. Nessuna luce ambient neutra — tutto ha una temperatura emotiva."
          />
          <MoodCard
            title="Particelle"
            tags={['VFX', 'Atmosfera']}
            description="Scintille (fucina), gocce luminose (splash), particelle dorate (sagoma), stelle (epilogo), lucciole (transizioni). Sistema particellare low poly coerente con l'estetica generale."
          />
        </div>

        <h2 className="section-header">Palette Colori per Atto</h2>
        <div className="mood-grid">
          <MoodCard title="Prologo — L'Ingresso" description="Buio quasi totale. Luce dorata tenue dalle mani. Acqua nera stilizzata." palette={[
            { color: '#0a0a0f', label: 'Buio' }, { color: '#1a1a2e', label: 'Notte' },
            { color: '#d4a857', label: 'Oro tenue' }, { color: '#f5e6c8', label: 'Luce mani' },
          ]} />
          <MoodCard title="Atto 1 — Il Fuoco" description="Calore della fucina. Rosso-arancio incandescente. Scintille dorate. Ambiente low poly caldo e roccioso." palette={[
            { color: '#8b2500', label: 'Brace' }, { color: '#d4500a', label: 'Fuoco' },
            { color: '#f5a623', label: 'Scintille' }, { color: '#1a0f0a', label: 'Caverna' },
          ]} />
          <MoodCard title="Atto 2 — L'Acqua" description="Mare notturno low poly. Blu profondo. Pietre geometriche scure. Splash luminosi stilizzati." palette={[
            { color: '#0d1b2a', label: 'Mare notte' }, { color: '#1a3a5c', label: 'Acqua profonda' },
            { color: '#7ec8e3', label: 'Splash' }, { color: '#2a2a3e', label: 'Pietre' },
          ]} />
          <MoodCard title="Atto 3 — L'Incontro sul Mare" description="Mare calmo e luminoso. Sagoma dorata low poly. Sfere cristalline geometriche. Intimità stellata." palette={[
            { color: '#1b2838', label: 'Cielo notte' }, { color: '#3a6b8c', label: 'Mare calmo' },
            { color: '#d4a857', label: 'Sagoma' }, { color: '#f0e4d0', label: 'Sfere luce' },
          ]} />
          <MoodCard title="Epilogo — L'Alba sul Mare" description="Alba dal mare. Viola, rosa, oro pieno. Gabbiani stilizzati. Luce che invade tutto il campo visivo." palette={[
            { color: '#4a2060', label: 'Viola alba' }, { color: '#e8788a', label: 'Rosa' },
            { color: '#f5a623', label: 'Arancione' }, { color: '#ffd700', label: 'Oro pieno' },
          ]} />
        </div>

        <h2 className="section-header">Ambienti</h2>
        <SectionCard>
          <table>
            <thead>
              <tr><th>Ambiente</th><th>Stile geometrico</th><th>Seduto su...</th><th>Oggetti zona mani</th></tr>
            </thead>
            <tbody>
              <tr><td>Prologo</td><td>Minimal — vuoto</td><td>Vuoto (sedia reale)</td><td>3 sfere tutorial</td></tr>
              <tr><td>Fucina</td><td>Rocce angolari, low poly</td><td>Roccia bassa</td><td>Incudine, martello, blocco</td></tr>
              <tr><td>Porta</td><td>Geometrico — buio</td><td>Buio</td><td>Chiave, porta</td></tr>
              <tr><td>Mare — Pietre</td><td>Scogliera low poly</td><td>Scoglio</td><td>Pietre fluttuanti</td></tr>
              <tr><td>Mare — Incontro</td><td>Piattaforma sul mare</td><td>Scoglio</td><td>Sfere-parola + sfera dorata</td></tr>
              <tr><td>Alba</td><td>Orizzonte aperto</td><td>Scoglio</td><td>Nulla (mani = strumento)</td></tr>
            </tbody>
          </table>
        </SectionCard>
      </div>
    </Layout>
  );
}
