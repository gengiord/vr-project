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
          <div className="spec-item"><strong>Fruizione</strong> In presenza o da remoto (con Companion App)</div>
        </SectionCard>

        <SectionCard title="Principio di Design">
          <p>Tutto avviene nella <strong>comfort zone del hand tracking da seduti</strong>: ~60×60cm davanti al busto, tra vita e spalle. Il mondo arriva al giocatore, non il contrario. Gli oggetti fluttuano nella zona di comfort. Il giocatore è il centro immobile dell'esperienza.</p>
          <p>La <strong>voce narrante</strong> guida con frasi brevi e pause lunghe. Parla solo per ~7% del tempo totale (~1m 40s su 15-25 min). Il resto è silenzio, suoni ambientali e azione del giocatore.</p>
        </SectionCard>

        <SectionCard title="Modalità di Guida">
          <div className="spec-item">
            <strong>🧠 Guidata da uno Psicologo in tempo reale</strong>
            &nbsp;— Accompagnamento professionale e personalizzato. Lo psicologo segue la sessione tramite Companion App, in presenza o da remoto. Indicata per contesti clinici e terapeutici.
          </div>
          <div className="spec-item">
            <strong>🔊 Guidata da una Voce Narrante preregistrata</strong>
            &nbsp;— Esperienza autonoma e scalabile. Il giocatore vive il percorso in completa autonomia, guidato dalla voce narrante integrata nel visore. Indicata per uso personale, educativo e istituzionale.
          </div>
        </SectionCard>

        <SectionCard title="Esperienza a Distanza">
          <p>L'esperienza è progettata per essere vissuta <strong>anche da remoto</strong>, senza la necessità di essere fisicamente presenti in uno spazio dedicato.</p>
          <ul className="change-list">
            <li>Il giocatore indossa il Meta Quest da casa propria</li>
            <li>Lo psicologo (in modalità guidata) si connette da remoto tramite la Companion App</li>
            <li>Nessuna infrastruttura speciale richiesta: basta visore, app e connessione internet</li>
            <li>Aumenta l'accessibilità: raggiunge utenti con difficoltà di mobilità o in zone remote</li>
          </ul>
        </SectionCard>

        <SectionCard title="Progetto come Prodotto">
          <table>
            <thead>
              <tr><th>Aspetto</th><th>Dettaglio</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Logo e Identità Visiva</strong></td><td>Da progettare — nome, colori, font coerenti con il tono emotivo del progetto (caldo, intimo, non clinico)</td></tr>
              <tr><td><strong>Target</strong></td><td>Adulti in lutto, operatori della salute mentale (psicologi, terapeuti), istituzioni educative, hospice e strutture di supporto</td></tr>
              <tr><td><strong>Distribuzione</strong></td><td>Meta Quest Store (App Lab), SideQuest, distribuzione istituzionale diretta (cliniche, scuole, centri di ascolto)</td></tr>
              <tr><td><strong>Pubblicazione</strong></td><td>Strategia di lancio: presentazione accademica, comunicato stampa, social (Instagram, LinkedIn), possibile collaborazione con associazioni lutto</td></tr>
              <tr><td><strong>Posizionamento</strong></td><td>Unico progetto VR psico-educativo basato su un framework terapeutico strutturato (GGT) — gap nella ricerca attuale</td></tr>
            </tbody>
          </table>
        </SectionCard>

        <SectionCard title="Deliverable — Livelli di Ambizione">
          <div className="spec-item">
            <strong>🎯 Minimo</strong>
            &nbsp;— Presentazione con clip video che mostri il concept dell'esperienza (animatic / prototipo visivo)
          </div>
          <div className="spec-item">
            <strong>🏆 Target</strong>
            &nbsp;— Trailer completo e curato del progetto: ambienti realizzati, voce narrante integrata, concept art animella, mockup Companion App
          </div>
          <div className="spec-item">
            <strong>🚀 Top</strong>
            &nbsp;— Sviluppo effettivo del videogioco: versione giocabile su Meta Quest, meccaniche complete, hand tracking funzionante
          </div>
        </SectionCard>

        <div className="dashboard-grid">
          <DashCard to="/moodboard" icon="🎨" title="Moodboard & Reference" description="Stile visivo, palette colori, concept art e riferimenti ispiratori." />
          <DashCard to="/storia" icon="📖" title="Storia & Storyboard" description="Struttura narrativa: Prologo, 3 Atti, Epilogo. 20 frame di concept art." />
          <DashCard to="/gameplay" icon="🕹️" title="Gameplay" description="Gesture, interazioni e meccaniche di gioco per ogni atto." />
          <DashCard to="/specifiche" icon="⚙️" title="Specifiche Tecniche" description="Software, SDK e strumenti AI utilizzati nello sviluppo." />
          <DashCard to="/companion-app" icon="📱" title="Companion App" description="App mobile di supporto: journaling, guida psicologo, esperienza da remoto." />
          <DashCard to="/timeline" icon="📅" title="Timeline" description="Pianificazione su 12 settimane — 3 Mar › 25 Mag 2026." />
<DashCard to="/da-implementare" icon="🛠️" title="Da Implementare" description="Modifiche e migliorie da apportare al progetto — feedback del relatore." />
        </div>
      </div>
    </Layout>
  );
}
