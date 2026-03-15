import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import DashCard from '../components/DashCard';

export default function Home() {
  return (
    <Layout>
      <div className="dashboard">
        <PageHeader icon="🏠" title="Lutto nell'era digitale" subtitle="Documentazione tesi e progetto" />

        <h2 className="section-header">Tesi</h2>
        <div className="dashboard-grid">
          <DashCard to="/tesi" icon="📚" title="Info Generali" description="Domanda di ricerca, motivazione, obiettivi, metodologia e le 6W del progetto." />
          <DashCard to="/indice" icon="📋" title="Indice" description="Struttura completa della tesi: 3 capitoli, introduzione e conclusioni." />
          <DashCard to="/bibliografia" icon="📖" title="Bibliografia" description="Fonte principale e fonti secondarie per il framework teorico." />
        </div>

        <h2 className="section-header">Progetto VR</h2>
        <div className="dashboard-grid">
          <DashCard to="/progetto" icon="🎮" title="Game Design" description="Info generali, principi di design e navigazione del progetto." />
          <DashCard to="/storia" icon="📖" title="Storia" description="Struttura narrativa: Prologo, 3 Atti, Epilogo." />
          <DashCard to="/specifiche" icon="⚙️" title="Specifiche Tecniche" description="Software, SDK, strumenti AI e gameplay." />
          <DashCard to="/moodboard" icon="🎨" title="Moodboard" description="Stile visivo, palette cromatiche, ambienti e reference visivi." />
          <DashCard to="/storyboard" icon="🎬" title="Storyboard" description="20 frame con testo, concept art e galleria." />
          <DashCard to="/audio" icon="🎵" title="Audio" description="Voce narrante, musica e SFX." />
          <DashCard to="/gameplay" icon="🕹️" title="Gameplay" description="Gesture, interazioni e meccaniche di gioco." />
          <DashCard to="/reference" icon="🔗" title="Reference" description="Progetti VR ispiratori e fonti artistiche per lo stile visivo." />
          <DashCard to="/timeline" icon="📅" title="Timeline" description="Pianificazione su 12 settimane." />
        </div>

        <h2 className="section-header">Varie</h2>
        <div className="dashboard-grid">
          <DashCard to="/team" icon="👥" title="Team" description="Candidato, relatore e consulente psicologica." />
          <DashCard to="/documenti" icon="📁" title="Documenti" description="Tesi, presentazione e gioco VR disponibili per il download." />
        </div>
      </div>
    </Layout>
  );
}
