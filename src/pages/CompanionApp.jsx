import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

export default function CompanionApp() {
  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader
          icon="📱"
          title="Companion App"
          subtitle="Applicazione mobile di supporto all'esperienza VR — concept e design"
        />

        <SectionCard title="Cos'è la Companion App">
          <p>
            La Companion App è un'applicazione mobile progettata per <strong>affiancare l'esperienza VR</strong>,
            non sostituirla. Non è necessaria per vivere "Il Viaggio", ma la arricchisce offrendo
            un contesto prima, durante e dopo la sessione.
          </p>
          <p>
            L'app è un <strong>concept di design</strong>: non verrà sviluppata nel prototipo finale,
            ma la sua progettazione è parte integrante del GDD e dimostra la visione del progetto
            come prodotto scalabile.
          </p>
          <div className="spec-item"><strong>Stato</strong> Concept — solo design (no sviluppo)</div>
          <div className="spec-item"><strong>Piattaforma</strong> iOS / Android</div>
          <div className="spec-item"><strong>Strumento di design</strong> Figma</div>
          <div className="spec-item"><strong>Deliverable</strong> Almeno una schermata rappresentativa</div>
        </SectionCard>

        <SectionCard title="Funzioni Principali">
          <table>
            <thead>
              <tr><th>Quando</th><th>Funzione</th><th>Descrizione</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Prima</strong></td>
                <td>Preparazione alla sessione</td>
                <td>Breve guida sull'esperienza, indicazioni su come sedersi comodamente, possibilità di scegliere la modalità di guida (voce narrante o psicologo).</td>
              </tr>
              <tr>
                <td><strong>Durante</strong></td>
                <td>Monitoraggio passivo</td>
                <td>Lo psicologo (in modalità guidata) può seguire in tempo reale il progresso del giocatore. Nessuna interruzione — solo osservazione.</td>
              </tr>
              <tr>
                <td><strong>Dopo</strong></td>
                <td>Journaling e follow-up</td>
                <td>Spazio per annotare emozioni e pensieri post-sessione. Esercizi di riflessione basati sulla GGT. Suggerimenti per i giorni successivi.</td>
              </tr>
            </tbody>
          </table>
        </SectionCard>

        <SectionCard title="Modalità di Guida">
          <p>L'app gestisce la scelta tra le due modalità di guida disponibili:</p>
          <div className="spec-item">
            <strong>🧠 Guidata da uno Psicologo</strong>
            &nbsp;— Accompagnamento professionale in tempo reale. Lo psicologo accede all'app come operatore e segue la sessione da remoto o in presenza.
          </div>
          <div className="spec-item">
            <strong>🔊 Voce Narrante Preregistrata</strong>
            &nbsp;— Esperienza autonoma e scalabile. Il giocatore vive l'esperienza in completa autonomia, guidato solo dalla voce narrante integrata nel visore.
          </div>
        </SectionCard>

        <SectionCard title="Schermata Principale — Concept">
          <p>
            La schermata principale (home) dell'app mostra:
          </p>
          <ul className="change-list">
            <li>Stato della sessione (pre-sessione / sessione in corso / post-sessione)</li>
            <li>Scelta della modalità di guida (psicologo vs. voce narrante)</li>
            <li>Accesso al journaling post-sessione</li>
            <li>Esercizi di riflessione suggeriti dalla GGT</li>
            <li>Collegamento con il profilo dell'utente e storico delle sessioni</li>
          </ul>
          <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px dashed var(--border)', textAlign: 'center' }}>
            <span style={{ fontSize: '2rem' }}>🖼️</span>
            <p style={{ margin: '0.5rem 0 0', opacity: 0.6, fontSize: '0.9rem' }}>Mockup Figma — da progettare (Sett. 6)</p>
          </div>
        </SectionCard>

        <SectionCard title="Esperienza a Distanza">
          <p>
            La Companion App è anche il punto di accesso per vivere l'esperienza VR <strong>da remoto</strong>,
            senza la necessità di essere fisicamente presenti in uno spazio dedicato.
          </p>
          <ul className="change-list">
            <li>Il giocatore può avviare la sessione VR da casa propria, con il solo Meta Quest</li>
            <li>Lo psicologo si connette da remoto tramite l'app, seguendo la sessione in tempo reale</li>
            <li>La Companion App funge da ponte tra visore e operatore</li>
            <li>Nessuna infrastruttura dedicata necessaria: basta un dispositivo mobile e una connessione internet</li>
          </ul>
        </SectionCard>
      </div>
    </Layout>
  );
}
