import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

const base = import.meta.env.BASE_URL;

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
              <tr><td>Atto 1 — Fuoco</td><td>Drone profondo, percussivo</td><td>Potenza, calore</td></tr>
              <tr><td>Atto 1 — Porta</td><td>Silenzio teso</td><td>Mistero, soglia</td></tr>
              <tr><td>Atto 2 — Acqua</td><td>Archi bassi, crescente</td><td>Malinconia, rilascio</td></tr>
              <tr><td>Atto 3 — Incontro</td><td>Melodia emotiva, piano</td><td>Intimità, pace</td></tr>
              <tr><td>Epilogo — Alba</td><td>Crescendo → pace</td><td>Rinascita, speranza</td></tr>
            </tbody>
          </table>
        </SectionCard>

        <SectionCard title="SFX — Effetti Sonori">
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
        </SectionCard>
      </div>
    </Layout>
  );
}
