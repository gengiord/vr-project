import { useState } from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

const base = import.meta.env.BASE_URL;

const phases = [
  {
    id: 'prologo',
    phase: 'Prologo',
    title: "L'Ingresso — Tutorial",
    time: '~1 min',
    color: '#1a1a2e',
    emotionArc: 'Disorientamento → Accettazione',
    objective: 'Insegnare i 3 gesti fondamentali in modo naturale, senza testo, solo attraverso la voce narrante e le sfere.',
    mechanics: [
      { icon: '👆', name: 'Tap', detail: 'La prima sfera si avvicina lentamente. La voce dice "Toccala". Il giocatore impara il tap — contatto leggero del dito indice.' },
      { icon: '✊', name: 'Grab + Release', detail: 'La seconda sfera. "Prendila… e lasciala andare." Il giocatore chiude la mano per afferrare, apre per rilasciare.' },
      { icon: '🤲', name: 'Throw', detail: 'La terza sfera. "Lanciala via." Il giocatore afferra e proietta il braccio in avanti. Splash luminoso.' },
    ],
    designNotes: 'Nessun timer, nessuna penalità. Se il giocatore non riesce, la sfera si avvicina ancora. Il tutorial è paziente e ripetuto quanto serve.',
    transition: 'Luce arancione in lontananza → dissolvenza verso la fucina.',
  },
  {
    id: 'atto1',
    phase: 'Atto 1',
    title: 'La Fucina',
    time: '3–5 min',
    color: '#d4500a',
    emotionArc: 'Rabbia → Trasformazione',
    objective: 'Canalizzare la tensione emotiva attraverso un gesto fisico ripetitivo e catartico: martellare.',
    mechanics: [
      { icon: '🔨', name: 'Grab martello', detail: 'Il martello è posizionato nell\'area di comfort, a destra. Chiusura della mano (grab). Feedback tattile + suono metallico.' },
      { icon: '⬇️', name: 'Colpo dall\'alto', detail: 'Movimento del braccio dall\'alto verso il basso, 20–30 cm. Ogni colpo deforma il blocco, genera scintille. Tra 8 e 15 colpi per completare la sequenza.' },
      { icon: '✨', name: 'Blocco che si spacca', detail: 'Dopo l\'ultimo colpo, il blocco si apre e rivela una chiave dorata luminosa. Picco emotivo del momento.' },
      { icon: '🔑', name: 'Grab chiave', detail: 'La chiave fluttua nell\'area di comfort. Il giocatore la afferra (grab).' },
      { icon: '🚪', name: 'Inserimento chiave', detail: 'Braccio in avanti 30 cm verso una serratura luminosa — snap magnetico automatico. La chiave si posiziona da sola.' },
      { icon: '🔄', name: 'Wrist rotation', detail: 'Rotazione del polso 90° per girare la chiave. La porta si apre. Dissolvenza verso il mare.' },
    ],
    designNotes: 'Il numero di colpi non è esposto al giocatore. La progressione è visiva: ogni colpo lascia crepe sempre più grandi. Il sistema è tollerante: un colpo "sbagliato" conta comunque.',
    transition: 'La porta si apre → onda di luce → mare notturno.',
  },
  {
    id: 'atto2',
    phase: 'Atto 2',
    title: 'Il Mare',
    time: '3–5 min',
    color: '#1a3a5c',
    emotionArc: 'Senso di colpa → Perdono',
    objective: 'Liberare il peso emotivo attraverso un rituale di lancio: ogni pietra è un peso che si abbandona.',
    mechanics: [
      { icon: '🪨', name: 'Grab pietra', detail: '6 pietre scure fluttuano in semicerchio davanti al giocatore. Ogni pietra ha una frase di colpa incisa in luce. Il giocatore sceglie quale prendere.' },
      { icon: '🌊', name: 'Throw verso il mare', detail: 'Lancio in avanti. Traiettoria assistita: se la direzione è plausibile, la pietra cade nell\'acqua. Il sistema non richiede precisione.' },
      { icon: '💧', name: 'Splash luminoso', detail: 'Al contatto con l\'acqua: splash 3D, onda circolare di luce azzurra, nota musicale unica per ogni pietra.' },
      { icon: '👤', name: 'Sagoma che si avvicina', detail: 'Ad ogni lancio, la figura dorata in lontananza si avvicina di un passo. Dopo 6 lanci, è a 2 metri dal giocatore.' },
    ],
    designNotes: 'L\'ordine dei lanci è libero. Il giocatore può lanciare le pietre tutte in fretta o prendersi il tempo per leggere ogni frase. L\'acqua si schiarisce progressivamente ad ogni lancio.',
    transition: 'Ultima pietra lanciata → silenzio → la sagoma è di fronte.',
  },
  {
    id: 'atto3',
    phase: 'Atto 3',
    title: "L'Incontro",
    time: '5–10 min',
    color: '#3a6b8c',
    emotionArc: 'Connessione → Dialogo → Accettazione',
    objective: 'Creare uno spazio di silenzio e scelta. Il giocatore decide se e cosa "dire" alla figura. Nessuna risposta è sbagliata.',
    mechanics: [
      { icon: '🔵', name: 'Sfere-parola', detail: '6 sfere fluttuano lentamente: "Grazie", "Mi manchi", "Ti perdono", "Perdonami", "Vai in pace", "Ti voglio bene". Il giocatore può toccare quelle che vuole — o nessuna.' },
      { icon: '✨', name: 'Tap sfera-parola', detail: 'Il tap dissolve la sfera in particelle dorate che fluiscono verso la figura. La figura risponde inclinando la testa, una mano si alza dolcemente.' },
      { icon: '⭐', name: 'Sfera dorata nel grembo', detail: 'Dopo che il giocatore ha interagito (o dopo un lungo silenzio), una sfera dorata appare nel grembo del giocatore.' },
      { icon: '🙌', name: 'Alzare la sfera', detail: 'Il giocatore prende la sfera e la alza verso il cielo. La figura si dissolve: braccia aperte, particelle verso il cielo, riflessi sull\'acqua. La sedia rimane vuota un istante, poi scompare.' },
    ],
    designNotes: 'Non c\'è un numero minimo di sfere da toccare. Se il giocatore sceglie il silenzio totale, l\'esperienza lo rispetta. La sfera dorata appare comunque. Il gesto finale è sempre disponibile.',
    transition: 'Dissoluzione della figura → punto di luce → alba.',
  },
  {
    id: 'epilogo',
    phase: 'Epilogo',
    title: "L'Alba",
    time: '3–5 min',
    color: '#4a2060',
    emotionArc: 'Rinascita → Creatività → Pace',
    objective: 'Dare al giocatore il controllo creativo sul mondo: da spettatore a creatore. Un finale aperto e positivo.',
    mechanics: [
      { icon: '🤲', name: 'Palms up → stelle', detail: 'Aprire le mani verso il cielo. Dalle dita si staccano punti luminosi che salgono come stelle.' },
      { icon: '🫱', name: 'Push → onda di luce', detail: 'Spingere con il palmo aperto in avanti. Un\'onda circolare di luce si propaga sull\'acqua.' },
      { icon: '🖐️', name: 'Finger wiggle → gabbiani', detail: 'Muovere le dita rapidamente (wiggle). Gabbiani emergono dall\'acqua e volano via.' },
      { icon: '🙏', name: 'Hands together → luce-cuore', detail: 'Unire le due mani al centro del petto. Una luce pulsante a forma di cuore si espande dal punto di contatto.' },
    ],
    designNotes: 'Non c\'è un ordine imposto. Il giocatore esplora liberamente. Ogni gesto può essere ripetuto. L\'esperienza termina con una dissolvenza al bianco solo quando il giocatore abbassa le mani per ~10 secondi — segnale naturale di fine.',
    transition: 'Dissolvenza al bianco → titolo del progetto → nero.',
  },
];

const gestures = [
  { name: 'Tap', icon: '👆', desc: 'Toccare con il dito indice', zone: 'Davanti al corpo', uses: 'Sfere-parola, tutorial, attivazioni' },
  { name: 'Grab', icon: '✊', desc: 'Chiudere la mano su un oggetto', zone: 'Davanti al corpo (comfort zone)', uses: 'Martello, chiave, pietre, sfera dorata' },
  { name: 'Release', icon: '🤚', desc: 'Aprire la mano per rilasciare', zone: 'Davanti al corpo', uses: 'Rilasciare oggetti, fine grab' },
  { name: 'Throw', icon: '🤾', desc: 'Afferrare e proiettare in avanti', zone: 'Avanti fino a 30–40 cm', uses: 'Pietre nell\'Atto 2, sfere tutorial' },
  { name: 'Push', icon: '🫱', desc: 'Spingere con il palmo aperto', zone: 'In avanti, 20–30 cm', uses: 'Onda di luce nell\'Epilogo' },
  { name: 'Wrist rotation', icon: '🔄', desc: 'Ruotare il polso di 90°', zone: 'Davanti al petto', uses: 'Girare la chiave nell\'Atto 1' },
  { name: 'Palms up', icon: '🤲', desc: 'Aprire entrambe le mani verso l\'alto', zone: 'Grembo → petto', uses: 'Stelle nell\'Epilogo' },
  { name: 'Hands together', icon: '🙏', desc: 'Unire le mani al centro del petto', zone: 'Centro petto', uses: 'Luce-cuore nell\'Epilogo' },
  { name: 'Finger wiggle', icon: '🖐️', desc: 'Muovere le dita rapidamente', zone: 'Davanti al corpo', uses: 'Gabbiani nell\'Epilogo' },
];

const narrationDensity = [
  { phase: 'Prologo', density: 'Alta', note: 'Guida tutorial — ogni gesto è annunciato e confermato' },
  { phase: 'Atto 1', density: 'Media', note: 'Frasi brevi prima e dopo i momenti chiave' },
  { phase: 'Atto 2', density: 'Bassa', note: 'Solo inizio e fine. I lanci avvengono in silenzio' },
  { phase: 'Atto 3', density: 'Minima', note: 'Solo introduzione. Il dialogo è del giocatore' },
  { phase: 'Epilogo', density: 'Media', note: 'Tre frasi di chiusura. Poi silenzio e musica' },
];

export default function Gameplay() {
  const [tab, setTab] = useState('panoramica');
  const [openPhase, setOpenPhase] = useState(null);

  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="🕹️" title="Gameplay" subtitle="Gesture, interazioni e meccaniche di gioco" />

        <div className="tabs">
          <button className={`tab-btn${tab === 'panoramica' ? ' active' : ''}`} onClick={() => setTab('panoramica')}>
            🗺️ Panoramica
          </button>
          <button className={`tab-btn${tab === 'meccaniche' ? ' active' : ''}`} onClick={() => setTab('meccaniche')}>
            ⚙️ Meccaniche per Fase
          </button>
          <button className={`tab-btn${tab === 'gesture' ? ' active' : ''}`} onClick={() => setTab('gesture')}>
            🤲 Gesture
          </button>
          <button className={`tab-btn${tab === 'feedback' ? ' active' : ''}`} onClick={() => setTab('feedback')}>
            🔊 Feedback & Design
          </button>
          <button className={`tab-btn${tab === 'audio' ? ' active' : ''}`} onClick={() => setTab('audio')}>
            🎵 Audio
          </button>
        </div>

        {/* ===== PANORAMICA ===== */}
        {tab === 'panoramica' && (
          <>
            <SectionCard title="Principio di Interazione">
              <p>Il Viaggio usa esclusivamente il <strong>Meta XR Hand Tracking SDK</strong> — nessun controller fisico. Le mani del giocatore sono la sola interfaccia. Tutto avviene nella <strong>comfort zone da seduti</strong>: il giocatore resta fermo mentre il mondo si avvicina a lui. Gli oggetti fluttuano sempre nell'area raggiungibile senza sforzo.</p>
              <p style={{ marginTop: '0.75rem' }}>Ogni gesto corrisponde a un movimento quotidiano: prendere un bicchiere, girare una chiave, lanciare un sasso in un lago. Le dimensioni esatte e i parametri tecnici sono nella scheda <strong>Gesture</strong>.</p>
            </SectionCard>

            <SectionCard title="Filosofia del No-Fail">
              <p>Il Viaggio non ha stati di fallimento. Nessun game over, nessun timer visibile, nessun punteggio. Ogni azione del giocatore è accettata e rispettata. Se un gesto non è riconosciuto, il sistema aspetta pazientemente o propone una nuova opportunità.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                {[
                  { icon: '⏳', label: 'Nessun timer', desc: 'Il giocatore si prende il tempo che vuole in ogni fase.' },
                  { icon: '♾️', label: 'Retry infiniti', desc: 'Se un gesto non va a buon fine, l\'oggetto ritorna in posizione.' },
                  { icon: '🤝', label: 'Assistenza magnetica', desc: 'Snap automatico per inserimento chiave e posizionamento oggetti.' },
                  { icon: '🛡️', label: 'Tolleranza gesture', desc: 'Il sistema accetta approssimazioni: un lancio impreciso conta comunque.' },
                ].map(item => (
                  <div key={item.label} style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', padding: '1rem' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{item.label}</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{item.desc}</span>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="Struttura del Flusso">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {phases.map((p, i) => (
                  <div key={p.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: p.color, marginTop: 4 }} />
                      {i < phases.length - 1 && <div style={{ width: 2, height: 40, background: 'var(--border)', marginTop: 4 }} />}
                    </div>
                    <div style={{ paddingBottom: '1rem' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'baseline', flexWrap: 'wrap' }}>
                        <strong>{p.phase}</strong>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>— {p.title}</span>
                        <span style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>{p.time}</span>
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.2rem' }}>{p.emotionArc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </>
        )}

        {/* ===== MECCANICHE PER FASE ===== */}
        {tab === 'meccaniche' && (
          <>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Seleziona una fase per vedere i dettagli delle meccaniche, la progressione e le note di design.</p>
            {phases.map(p => (
              <div key={p.id} style={{ marginBottom: '1rem' }}>
                <button
                  onClick={() => setOpenPhase(openPhase === p.id ? null : p.id)}
                  style={{
                    width: '100%', textAlign: 'left', background: 'var(--bg-paper)',
                    border: '1px solid var(--border)', borderRadius: 'var(--radius)',
                    padding: '1rem 1.25rem', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    borderLeft: `4px solid ${p.color}`,
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline', flexWrap: 'wrap' }}>
                      <strong style={{ fontSize: '1rem' }}>{p.phase} — {p.title}</strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{p.time}</span>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem' }}>{p.emotionArc}</div>
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem', flexShrink: 0 }}>{openPhase === p.id ? '▲' : '▼'}</span>
                </button>

                {openPhase === p.id && (
                  <div style={{ border: '1px solid var(--border)', borderTop: 'none', borderRadius: '0 0 var(--radius) var(--radius)', padding: '1.5rem', background: 'var(--bg-paper)' }}>
                    <div style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', padding: '0.875rem 1rem', marginBottom: '1.5rem' }}>
                      <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Obiettivo</strong>
                      <p style={{ marginTop: '0.3rem' }}>{p.objective}</p>
                    </div>

                    <h3 style={{ fontSize: '0.95rem', marginBottom: '1rem', color: 'var(--text)' }}>Sequenza di interazioni</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                      {p.mechanics.map((m, i) => (
                        <div key={m.name} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0, minWidth: 120 }}>
                            <span style={{ width: 20, height: 20, borderRadius: '50%', background: p.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                            <span style={{ fontSize: '1.1rem' }}>{m.icon}</span>
                            <strong style={{ fontSize: '0.875rem' }}>{m.name}</strong>
                          </div>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.5 }}>{m.detail}</p>
                        </div>
                      ))}
                    </div>

                    {p.designNotes && (
                      <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                        <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Note di Design</strong>
                        <p style={{ marginTop: '0.3rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>{p.designNotes}</p>
                      </div>
                    )}

                    <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '1rem' }}>
                      <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Transizione</strong>
                      <p style={{ marginTop: '0.3rem', fontSize: '0.875rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>{p.transition}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        {/* ===== GESTURE ===== */}
        {tab === 'gesture' && (
          <>
            <SectionCard title="Sistema di Gesture">
              <p style={{ marginBottom: '1.25rem' }}>9 gesti, tutti eseguibili da seduti con movimenti naturali della vita quotidiana.</p>
              <table>
                <thead>
                  <tr><th>Gesture</th><th>Descrizione</th><th>Zona</th><th>Utilizzata in</th></tr>
                </thead>
                <tbody>
                  {gestures.map(g => (
                    <tr key={g.name}>
                      <td><span style={{ marginRight: '0.5rem' }}>{g.icon}</span><strong>{g.name}</strong></td>
                      <td>{g.desc}</td>
                      <td style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{g.zone}</td>
                      <td style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{g.uses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </SectionCard>

            <SectionCard title="Comfort Zone">
              <p style={{ marginBottom: '1rem' }}>L'area di interazione progettata per il giocatore seduto con Meta Quest 2.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {[
                  { label: 'Larghezza', value: '~60 cm', desc: 'Da spalla a spalla, centrata sul busto' },
                  { label: 'Altezza', value: '~60 cm', desc: 'Dalla vita fino alle spalle' },
                  { label: 'Profondità', value: '30–40 cm', desc: 'Massima estensione del braccio senza tensione' },
                  { label: 'Centro', value: 'Petto/ombelico', desc: 'Punto di riferimento per posizionare gli oggetti chiave' },
                ].map(item => (
                  <div key={item.label} style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', padding: '1rem' }}>
                    <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{item.label}</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.25rem' }}>{item.value}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="Implementazione Tecnica">
              <p>Hand Tracking via <strong>Meta XR SDK</strong> (OVRHand + Hand Pose Detection). Soglie di confidenza calibrate per uso seduto. Gli oggetti interattivi non escono mai dalla comfort zone — posizionamento procedurale.</p>
              <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                <strong>Snap magnetico:</strong> trigger zone sferica (15 cm) intorno alla serratura — la chiave si aggancia automaticamente. <strong>Latenza:</strong> feedback visivo anticipato di ~2 frame rispetto all'audio.
              </p>
            </SectionCard>
          </>
        )}

        {/* ===== FEEDBACK & DESIGN ===== */}
        {tab === 'feedback' && (
          <>
            <SectionCard title="Feedback Multimodale">
              <p style={{ marginBottom: '1.25rem' }}>Ogni interazione produce feedback su tre canali simultanei, calibrati per amplificare la risposta emotiva senza sovraccaricare i sensi.</p>
              <table>
                <thead>
                  <tr><th>Canale</th><th>Tipo</th><th>Esempi</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>👁️ Visivo</strong></td>
                    <td>Particelle, luci, deformazioni, glow</td>
                    <td>Scintille al colpo del martello, onda luminosa al lancio pietra, glow oggetto grabbable</td>
                  </tr>
                  <tr>
                    <td><strong>🔊 Sonoro</strong></td>
                    <td>SFX spaziale 3D, note musicali, ambience</td>
                    <td>Clang metallico, splash acqua, nota cristallina per sfera-parola, silenzio intenzionale</td>
                  </tr>
                </tbody>
              </table>
            </SectionCard>

            <SectionCard title="Progressione degli Oggetti Interattivi">
              <p style={{ marginBottom: '1rem' }}>Gli oggetti cambiano aspetto in base allo stato dell'interazione, fornendo feedback visivo costante senza testo o UI sovrapposta.</p>
              <table>
                <thead>
                  <tr><th>Stato</th><th>Visuale</th><th>Audio</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Idle</strong></td><td>Fluttuazione lenta, nessun glow</td><td>Nessun suono</td></tr>
                  <tr><td><strong>Proximity</strong></td><td>Glow leggero, frequenza fluttuazione aumenta</td><td>Tono sottile (quasi subliminale)</td></tr>
                  <tr><td><strong>Hover</strong></td><td>Glow forte, outline luminoso</td><td>Nota breve di attivazione</td></tr>
                  <tr><td><strong>Grabbed</strong></td><td>Oggetto bloccato alla mano, trail di particelle</td><td>Suono di "lock" morbido</td></tr>
                  <tr><td><strong>Released / Used</strong></td><td>Burst di particelle, dissolvenza o trasformazione</td><td>SFX contestuale (splash, clang, nota)</td></tr>
                </tbody>
              </table>
            </SectionCard>

            <SectionCard title="Accessibilità e Inclusività">
              <table>
                <thead>
                  <tr><th>Aspetto</th><th>Soluzione adottata</th></tr>
                </thead>
                <tbody>
                  <tr><td>Mobilità ridotta degli arti superiori</td><td>Tutti i gesti richiedono movimenti minimi (max 40 cm). Nessun gesto richiede forza o velocità elevata.</td></tr>
                  <tr><td>Dominanza della mano</td><td>Il sistema funziona simmetricamente con entrambe le mani. Gli oggetti si adattano alla mano che si avvicina.</td></tr>
                  <tr><td>Comfort in VR (nausea)</td><td>Esperienza completamente seduta. Nessuna locomozione. Nessun cambio di prospettiva brusco. Fade/dissolvenza tra scene.</td></tr>
                  <tr><td>Comprensione dei gesti</td><td>Il tutorial del Prologo può essere ripetuto. La voce narrante suggerisce senza imporre.</td></tr>
                </tbody>
              </table>
            </SectionCard>
          </>
        )}

        {/* ===== AUDIO ===== */}
        {tab === 'audio' && (
          <>
            <SectionCard title="Voce Narrante">
              <p style={{ marginBottom: '1rem' }}>38 battute — circa <strong>1m 40s su 15–25 min totali (~7% del tempo)</strong>. Calma, profonda, intima. Non clinica, non teatrale. Una voce che accompagna senza giudicare.</p>
              <div className="candidate-info" style={{ marginTop: '0.75rem', marginBottom: '1.5rem' }}>
                {[
                  { icon: '🎙️', label: 'Servizio', value: 'ElevenLabs' },
                  { icon: '🧠', label: 'Modello', value: 'Multilingual v3' },
                  { icon: '🇮🇹', label: 'Voce', value: 'Italiana Custom' },
                ].map(({ icon, label, value }) => (
                  <div className="candidate-item" key={label}>
                    <span className="candidate-icon">{icon}</span>
                    <div className="candidate-content">
                      <span className="candidate-label">{label}</span>
                      <span className="candidate-value">{value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Densità per fase</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {narrationDensity.map(item => (
                  <div key={item.phase} style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', padding: '0.875rem' }}>
                    <strong style={{ display: 'block' }}>{item.phase}</strong>
                    <span style={{
                      display: 'inline-block', marginTop: '0.3rem', marginBottom: '0.5rem',
                      padding: '0.15rem 0.5rem', borderRadius: 4, fontSize: '0.75rem',
                      background: item.density === 'Alta' ? '#c9184a22' : item.density === 'Media' ? '#3a86ff22' : '#6c757d22',
                      color: item.density === 'Alta' ? '#c9184a' : item.density === 'Media' ? '#3a86ff' : 'var(--text-muted)',
                    }}>{item.density}</span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.note}</p>
                  </div>
                ))}
              </div>

              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Esempi audio</h4>
              <div className="audio-examples">
                <div className="audio-item">
                  <h4>Voce 1 - Tutorial Prologo</h4>
                  <audio controls src={`${base}assets/audio/audio1.mp3`} />
                  <div className="audio-transcript">
                    <p><strong>Testo:</strong> "Più lasci andare il peso... più puoi avvicinarti a chi hai perso."</p>
                  </div>
                </div>
                <div className="audio-item">
                  <h4>Voce 2 - Atto del Fuoco</h4>
                  <audio controls src={`${base}assets/audio/audio2.mp3`} />
                  <div className="audio-transcript">
                    <p><strong>Testo:</strong> "Ora prova a toccare la sfera... senti come risponde al tuo tocco."</p>
                  </div>
                </div>
                <div className="audio-item">
                  <h4>Voce 3 - Atto dell'Acqua</h4>
                  <audio controls src={`${base}assets/audio/audio3.mp3`} />
                  <div className="audio-transcript">
                    <p><strong>Testo:</strong> "L'alba non cancella la notte... ma la trasforma in luce."</p>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Musica — Colonna Sonora">
              <table>
                <thead>
                  <tr><th>Fase</th><th>Stile musicale</th><th>Mood</th></tr>
                </thead>
                <tbody>
                  <tr><td>Prologo</td><td>Silenzio → battito lento</td><td>Vulnerabilità, attesa</td></tr>
                  <tr><td>Atto 1 — Fucina</td><td>Drone profondo, percussivo</td><td>Potenza, calore</td></tr>
                  <tr><td>Atto 1 — Porta</td><td>Silenzio teso</td><td>Mistero, soglia</td></tr>
                  <tr><td>Atto 2 — Mare</td><td>Archi bassi, crescente</td><td>Malinconia, rilascio</td></tr>
                  <tr><td>Atto 3 — Incontro</td><td>Melodia emotiva, piano</td><td>Intimità, pace</td></tr>
                  <tr><td>Epilogo — Alba</td><td>Crescendo → pace</td><td>Rinascita, speranza</td></tr>
                </tbody>
              </table>
            </SectionCard>

            <SectionCard title="SFX — Effetti Sonori">
              <table>
                <thead>
                  <tr><th>Fase</th><th>Ambience</th><th>Feedback interazione</th></tr>
                </thead>
                <tbody>
                  <tr><td>Prologo</td><td>Sfere luminose, toni delicati</td><td>Tap: tono cristallino. Grab: suono morbido. Throw: whoosh.</td></tr>
                  <tr><td>Atto 1 — Fucina</td><td>Braci, scintille, calore</td><td>Martellate: impatto metallico + scintille. Chiave: tono rivelazione.</td></tr>
                  <tr><td>Atto 1 — Porta</td><td>Chiave nella serratura, meccanismo</td><td>Rotazione: click meccanico. Apertura: rumble basso.</td></tr>
                  <tr><td>Atto 2 — Mare</td><td>Mare, onde, vento notturno</td><td>Lancio pietra: whoosh → splash. Onda luminosa: shimmer.</td></tr>
                  <tr><td>Atto 3 — Incontro</td><td>Mare calmo, vento stellato</td><td>Tocco sfera-parola: cristallo + risonanza. Dissoluzione: particelle.</td></tr>
                  <tr><td>Epilogo — Alba</td><td>Mare al mattino, gabbiani, luce</td><td>Gesti creativi: suoni generativi diversi per ogni gesto.</td></tr>
                </tbody>
              </table>
            </SectionCard>
          </>
        )}
      </div>
    </Layout>
  );
}
