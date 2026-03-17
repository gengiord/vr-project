import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import DashCard from '../components/DashCard';

export default function Home() {
  return (
    <Layout>
      <div className="dashboard">
        <PageHeader icon="🏠" title="Lutto nell'era digitale" subtitle="Documentazione tesi e progetto" />

        <Link to="/da-implementare" className="featured-card">
          <span className="featured-icon">🛠️</span>
          <div className="featured-text">
            <h3>Da Implementare</h3>
            <p>Modifiche e migliorie da apportare al progetto — feedback del relatore.</p>
          </div>
          <span className="featured-arrow">→</span>
        </Link>

        <h2 className="section-header">Tesi</h2>
        <div className="dashboard-grid">
          <DashCard to="/tesi" icon="📚" title="Info Generali" description="Domanda di ricerca, motivazione, obiettivi, metodologia e le 6W del progetto." />
          <DashCard to="/indice" icon="📋" title="Indice" description="Struttura completa della tesi: 3 capitoli, introduzione e conclusioni." />
          <DashCard to="/bibliografia" icon="📖" title="Bibliografia" description="Fonte principale e fonti secondarie per il framework teorico." />
        </div>

        <h2 className="section-header">Progetto VR</h2>
        <div className="dashboard-grid">
          <DashCard to="/progetto" icon="🎮" title="Game Design" description="Info generali, principi di design e navigazione del progetto." />
          <DashCard to="/moodboard" icon="🎨" title="Moodboard & Reference" description="Stile visivo, palette, concept art e riferimenti ispiratori." />
          <DashCard to="/storia" icon="📖" title="Storia & Storyboard" description="Struttura narrativa, 20 frame con concept art e galleria." />
          <DashCard to="/gameplay" icon="🕹️" title="Gameplay" description="Gesture, interazioni, meccaniche di gioco e audio." />
          <DashCard to="/specifiche" icon="⚙️" title="Specifiche Tecniche" description="Software, SDK, strumenti AI e pipeline di sviluppo." />
          <DashCard to="/timeline" icon="📅" title="Timeline" description="Pianificazione su 12 settimane — 3 Mar › 25 Mag 2026." />
        </div>

        <h2 className="section-header">Risorse</h2>
        <div className="dashboard-grid">
          <DashCard to="/team" icon="👥" title="Team" description="Candidato, relatore e consulente psicologica." />
          <DashCard to="/documenti" icon="📁" title="Documenti" description="Tesi, presentazione e gioco VR disponibili per il download." />
          <DashCard to="/changelog" icon="📝" title="Changelog" description="Storico delle modifiche e degli aggiornamenti del progetto." />
        </div>
      </div>
    </Layout>
  );
}
