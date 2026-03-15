import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

export default function Audio() {
  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="🎵" title="Audio" subtitle="Voce narrante, musica e SFX" />

        <SectionCard title="Voce Narrante">
          <p>38 battute — ~1m 40s su 15-25 min (~7% del tempo). Calma, profonda, intima. Non clinica, non teatrale. Una voce che accompagna senza giudicare.</p>
          <div className="spec-item"><strong>Servizio</strong> ElevenLabs</div>
          <div className="spec-item"><strong>Modello</strong> Multilingual v3</div>
          <div className="spec-item"><strong>Voce</strong> Italiana Custom</div>
          <div className="audio-example">
            <span className="audio-label">Esempio Voce</span>
            <span className="audio-placeholder">Audio non ancora disponibile</span>
          </div>
        </SectionCard>

        <SectionCard title="Musica — Colonna Sonora">
          <p>Musica adattiva e dinamica, generata o selezionata per accompagnare l'esperienza emotiva. Mai invadente, sempre in sottofondo. Transizioni morbide tra le fasi.</p>
          <table>
            <thead>
              <tr><th>Fase</th><th>Stile musicale</th><th>Mood</th></tr>
            </thead>
            <tbody>
              <tr><td>Prologo</td><td>Silenzio → battito lento</td><td>Vulnerabilità, attesa</td></tr>
              <tr><td>Atto 1 — Fuoco</td><td>Drone profondo, percussivo</td><td>Potenza, calore</td></tr>
              <tr><td>Atto 1 — Porta</td><td>Silenzio teso</td><td>Mistero, soglia</td></tr>
              <tr><td>Atto 2 — Acqua</td><td>Archi bassi, crescente</td><td>Malinconia, rilascio</td></tr>
              <tr><td>Atto 3 — Incontro</td><td>Melodia emotiva, piano</td><td>Intimità, pace</td></tr>
              <tr><td>Epilogo — Alba</td><td>Crescendo → pace</td><td>Rinascita, speranza</td></tr>
            </tbody>
          </table>
          <div className="audio-example">
            <span className="audio-label">Esempio Musica</span>
            <span className="audio-placeholder">Audio non ancora disponibile</span>
          </div>
        </SectionCard>

        <SectionCard title="SFX — Effetti Sonori">
          <p>Audio spaziale 3D. Ogni suono ha una posizione nello spazio. Feedback sonoro per ogni interazione del giocatore.</p>
          <table>
            <thead>
              <tr><th>Fase</th><th>SFX principali</th><th>Feedback interazione</th></tr>
            </thead>
            <tbody>
              <tr><td>Prologo</td><td>Sfere luminose, toni delicati</td><td>Tap: tono cristallino. Grab: suono morbido. Throw: whoosh.</td></tr>
              <tr><td>Atto 1 — Fuoco</td><td>Braci, scintille, calore</td><td>Martellate: impatto metallico + scintille. Chiave: tono rivelazione.</td></tr>
              <tr><td>Atto 1 — Porta</td><td>Chiave nella serratura, meccanismo</td><td>Rotazione: click meccanico. Apertura: rumble basso.</td></tr>
              <tr><td>Atto 2 — Acqua</td><td>Mare, onde, vento notturno</td><td>Lancio pietra: whoosh → splash. Onda luminosa: shimmer.</td></tr>
              <tr><td>Atto 3 — Incontro</td><td>Mare calmo, vento stellato</td><td>Tocco sfera-parola: cristallo + risonanza. Dissoluzione: particelle.</td></tr>
              <tr><td>Epilogo — Alba</td><td>Mare al mattino, gabbiani, luce</td><td>Gesti creativi: suoni generativi diversi per ogni gesto.</td></tr>
            </tbody>
          </table>
          <div className="audio-example">
            <span className="audio-label">Esempio SFX</span>
            <span className="audio-placeholder">Audio non ancora disponibile</span>
          </div>
        </SectionCard>
      </div>
    </Layout>
  );
}
