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

function MoodCard({ title, description, palette }) {
  return (
    <div className="mood-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {palette && <Palette colors={palette} />}
    </div>
  );
}

export default function Moodboard() {
  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="🎨" title="Moodboard" subtitle="Stile visivo, palette colori e reference per atto" />

        <h2 className="section-header">Stile Visivo</h2>
        <div className="mood-grid">
          <MoodCard title="Direzione Artistica" description="Stilizzato-cinematografico. Non fotorealistico, ma evocativo. Forme essenziali, luce protagonista. Ispirazione: Journey (thatgamecompany), Gris, Abzu." />
          <MoodCard title="Materiali e Texture" description="Superfici lisce e riflettenti (acqua). Materiali caldi e grezzi (fucina). Particelle volumetriche. Effetti glow e bloom controllati." />
          <MoodCard title="Illuminazione" description="Luce come elemento narrativo. Buio → luce tenue → luce calda → alba piena. Le mani del giocatore sono sempre fonte di luce." />
          <MoodCard title="Particelle" description="Scintille (fucina), gocce luminose (splash), particelle dorate (sagoma), stelle (epilogo), lucciole (transizioni)." />
        </div>

        <h2 className="section-header">Palette Colori per Atto</h2>
        <div className="mood-grid">
          <MoodCard title="Prologo — L'Ingresso" description="Buio quasi totale. Luce dorata tenue dalle mani. Acqua nera." palette={[
            { color: '#0a0a0f', label: 'Buio' }, { color: '#1a1a2e', label: 'Notte' },
            { color: '#d4a857', label: 'Oro tenue' }, { color: '#f5e6c8', label: 'Luce mani' },
          ]} />
          <MoodCard title="Atto 1 — Il Fuoco" description="Calore della fucina. Rosso-arancio incandescente. Scintille dorate." palette={[
            { color: '#8b2500', label: 'Brace' }, { color: '#d4500a', label: 'Fuoco' },
            { color: '#f5a623', label: 'Scintille' }, { color: '#1a0f0a', label: 'Caverna' },
          ]} />
          <MoodCard title="Atto 2 — L'Acqua" description="Mare notturno. Blu profondo. Pietre scure. Splash luminosi." palette={[
            { color: '#0d1b2a', label: 'Mare notte' }, { color: '#1a3a5c', label: 'Acqua profonda' },
            { color: '#7ec8e3', label: 'Splash' }, { color: '#2a2a3e', label: 'Pietre' },
          ]} />
          <MoodCard title="Atto 3 — L'Incontro sul Mare" description="Mare calmo e luminoso. Sagoma dorata. Sfere cristalline. Intimità stellata." palette={[
            { color: '#1b2838', label: 'Cielo notte' }, { color: '#3a6b8c', label: 'Mare calmo' },
            { color: '#d4a857', label: 'Sagoma' }, { color: '#f0e4d0', label: 'Sfere luce' },
          ]} />
          <MoodCard title="Epilogo — L'Alba sul Mare" description="Alba dal mare. Viola, rosa, oro pieno. Gabbiani. Luce che invade tutto." palette={[
            { color: '#4a2060', label: 'Viola alba' }, { color: '#e8788a', label: 'Rosa' },
            { color: '#f5a623', label: 'Arancione' }, { color: '#ffd700', label: 'Oro pieno' },
          ]} />
        </div>

        <h2 className="section-header">Ambienti</h2>
        <SectionCard>
          <table>
            <thead>
              <tr><th>Ambiente</th><th>Seduto su...</th><th>Oggetti zona mani</th></tr>
            </thead>
            <tbody>
              <tr><td>Prologo</td><td>Vuoto (sedia reale)</td><td>3 sfere tutorial</td></tr>
              <tr><td>Fucina</td><td>Roccia bassa</td><td>Incudine, martello, blocco</td></tr>
              <tr><td>Porta</td><td>Buio</td><td>Chiave, porta</td></tr>
              <tr><td>Mare — Pietre</td><td>Scoglio</td><td>Pietre fluttuanti</td></tr>
              <tr><td>Mare — Incontro</td><td>Scoglio</td><td>Sfere-parola + sfera dorata</td></tr>
              <tr><td>Alba</td><td>Scoglio</td><td>Nulla (mani = strumento)</td></tr>
            </tbody>
          </table>
        </SectionCard>

        <h2 className="section-header">Reference Visivi</h2>
        <div className="mood-placeholder">
          Sezione in costruzione — Qui verranno inserite immagini di riferimento, screenshot di giochi ispiratori (Journey, Gris, Abzu, Sea of Solitude), concept art aggiuntivi e moodboard visivi per ogni atto dell'esperienza.
        </div>
      </div>
    </Layout>
  );
}
