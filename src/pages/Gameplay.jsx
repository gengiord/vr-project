import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

export default function Gameplay() {
  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="🕹️" title="Gameplay" subtitle="Gesture, interazioni e meccaniche di gioco" />

        <SectionCard title="Principio di Interazione">
          <p>Tutto avviene nella <strong>comfort zone del hand tracking da seduti</strong>: ~60×60cm davanti al busto, tra vita e spalle. Il mondo arriva al giocatore, non il contrario. Gli oggetti fluttuano nella zona di comfort. Il giocatore è il centro immobile dell'esperienza.</p>
          <p>Escursione massima 30-40cm. Gomito mai sopra la spalla. Tutti i gesti sono equivalenti a movimenti quotidiani da seduti.</p>
        </SectionCard>

        <SectionCard title="Gesture">
          <table>
            <thead>
              <tr><th>Gesture</th><th>Descrizione</th><th>Dove</th></tr>
            </thead>
            <tbody>
              <tr><td>Grab</td><td>Chiudere la mano su un oggetto</td><td>Davanti al corpo</td></tr>
              <tr><td>Release</td><td>Aprire la mano per lasciare</td><td>Davanti al corpo</td></tr>
              <tr><td>Tap</td><td>Toccare con l'indice</td><td>Davanti al corpo</td></tr>
              <tr><td>Push</td><td>Spingere con il palmo aperto</td><td>In avanti</td></tr>
              <tr><td>Throw</td><td>Afferrare e lanciare in avanti</td><td>Davanti al corpo → avanti</td></tr>
              <tr><td>Wrist rotation</td><td>Ruotare il polso</td><td>Davanti al petto</td></tr>
              <tr><td>Palms up</td><td>Aprire le mani verso l'alto</td><td>Grembo/petto</td></tr>
              <tr><td>Hands together</td><td>Unire le mani</td><td>Centro petto</td></tr>
            </tbody>
          </table>
        </SectionCard>

        <SectionCard title="Meccaniche per Fase">
          <h3>Prologo — Tutorial</h3>
          <p>3 sfere insegnano i gesti base: tap (toccare), grab+release (afferrare e rilasciare), throw (lanciare). Guidato dalla voce narrante.</p>
          <h3>Atto 1 — La Fucina</h3>
          <p>Grab martello → colpire dall'alto (20-30cm) → 8-15 colpi → blocco si spacca → grab chiave. Poi: braccio avanti 30cm (snap magnetico) → wrist rotation 90° per girare chiave nella porta.</p>
          <h3>Atto 2 — Il Mare</h3>
          <p>Grab pietra → throw verso il mare. Ad ogni lancio: splash, onda luminosa. Più pietre lanci → più la figura si avvicina.</p>
          <h3>Atto 3 — L'Incontro</h3>
          <p>Tap sulle sfere-parola per scegliere le parole. Nessun timer, nessun obbligo. Grab sfera dorata dal grembo → alzare verso il cielo.</p>
          <h3>Epilogo — Gesti Creativi</h3>
          <p>Gesti liberi: palms up → stelle, push → onda di luce, finger wiggle → gabbiani, hands together → luce-cuore. Ogni gesto genera un effetto visivo diverso.</p>
        </SectionCard>

        <SectionCard title="Feedback e Risposte">
          <p>Ogni interazione ha un feedback multimodale: visivo (particelle, luce, deformazioni), sonoro (SFX spaziale 3D) e in alcuni casi aptico (vibrazione controller/mani).</p>
          <p>La voce narrante si attiva solo nei momenti chiave. Il resto del tempo è silenzio, suoni ambientali e l'azione del giocatore.</p>
        </SectionCard>
      </div>
    </Layout>
  );
}
