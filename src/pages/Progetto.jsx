import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';
import DashCard from '../components/DashCard';

export default function Progetto() {
  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="🎮" title={'"Il Viaggio" — Game Design'} subtitle="Esperienza VR psico-educativa sull'elaborazione del lutto" />

        <SectionCard title="Informazioni Generali">
          <div className="spec-item"><strong>Nome progetto</strong> Il Viaggio (titolo provvisorio)</div>
          <div className="spec-item"><strong>Tipo</strong> Esperienza VR psico-educativa sull'elaborazione del lutto</div>
          <div className="spec-item"><strong>Framework teorico</strong> Grief and Growth Therapy (GGT)</div>
          <div className="spec-item"><strong>Piattaforma</strong> Meta Quest (standalone)</div>
          <div className="spec-item"><strong>Tecnologia</strong> Unity + Meta XR All-In-One SDK</div>
          <div className="spec-item"><strong>Interazione</strong> Hand tracking (no controller), da seduti</div>
          <div className="spec-item"><strong>Voce narrante</strong> ElevenLabs TTS — voce calma, profonda, intima</div>
          <div className="spec-item"><strong>Durata stimata</strong> 15-25 minuti</div>
        </SectionCard>

        <SectionCard title="Principio di Design">
          <p>Tutto avviene nella <strong>comfort zone del hand tracking da seduti</strong>: ~60×60cm davanti al busto, tra vita e spalle. Il mondo arriva al giocatore, non il contrario. Gli oggetti fluttuano nella zona di comfort. Il giocatore è il centro immobile dell'esperienza.</p>
          <p>La <strong>voce narrante</strong> guida con frasi brevi e pause lunghe. Parla solo per ~7% del tempo totale (~1m 40s su 15-25 min). Il resto è silenzio, suoni ambientali e azione del giocatore.</p>
        </SectionCard>

        <div className="dashboard-grid">
          <DashCard to="/moodboard" icon="🎨" title="Moodboard & Reference" description="Stile visivo, palette colori, concept art e riferimenti ispiratori." />
          <DashCard to="/storia" icon="📖" title="Storia & Storyboard" description="Struttura narrativa: Prologo, 3 Atti, Epilogo. 20 frame di concept art." />
          <DashCard to="/gameplay" icon="🕹️" title="Gameplay" description="Gesture, interazioni e meccaniche di gioco per ogni atto." />
          <DashCard to="/specifiche" icon="⚙️" title="Specifiche Tecniche" description="Software, SDK e strumenti AI utilizzati nello sviluppo." />
          <DashCard to="/timeline" icon="📅" title="Timeline" description="Pianificazione su 12 settimane — 3 Mar › 25 Mag 2026." />
          <DashCard to="/da-implementare" icon="🛠️" title="Da Implementare" description="Modifiche e migliorie da apportare al progetto — feedback del relatore." />
        </div>
      </div>
    </Layout>
  );
}
