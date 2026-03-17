import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

export default function Specifiche() {
  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="⚙️" title="Specifiche Tecniche" subtitle="Software, SDK e strumenti AI" />

        <SectionCard title="Hardware">
          <table>
            <thead>
              <tr><th>Dispositivo</th><th>Versione</th><th>Ruolo</th></tr>
            </thead>
            <tbody>
              <tr><td>Meta Quest</td><td>Quest 2</td><td>Piattaforma target (standalone)</td></tr>
              <tr><td>MacBook Pro</td><td>—</td><td>Macchina di sviluppo principale (macOS)</td></tr>
              <tr><td>PC Windows Desktop</td><td>—</td><td>Macchina di sviluppo secondaria (Windows)</td></tr>
            </tbody>
          </table>
        </SectionCard>

        <SectionCard title="Software">
          <table>
            <thead>
              <tr><th>Strumento</th><th>Versione</th><th>Ruolo</th></tr>
            </thead>
            <tbody>
              <tr><td>Unity</td><td>6.3</td><td>Game engine principale</td></tr>
              <tr><td>Meta XR All-In-One SDK</td><td>Latest</td><td>Hand tracking, passthrough, interazione VR</td></tr>
              <tr><td>Visual Studio</td><td>2022</td><td>IDE principale per sviluppo C#</td></tr>
              <tr><td>Visual Studio Code</td><td>Latest</td><td>Editor codice secondario</td></tr>
              <tr><td>Blender</td><td>5.0</td><td>Modellazione 3D, sculpting, UV mapping</td></tr>
              <tr><td>Figma</td><td>Latest</td><td>Progettazione UI, wireframe e interfacce utente</td></tr>
              <tr><td>Meta Quest Developer Hub</td><td>Latest</td><td>Gestione dispositivo, sideloading, log e debug</td></tr>
              <tr><td>Meta Quest Simulator</td><td>Latest</td><td>Test e simulazione esperienze VR senza headset</td></tr>
              <tr><td>Adobe Photoshop</td><td>CC 2025</td><td>Texture, concept art, post-produzione immagini</td></tr>
              <tr><td>Adobe Illustrator</td><td>CC 2025</td><td>Grafica vettoriale, icone, UI assets</td></tr>
              <tr><td>Adobe Premiere Pro</td><td>CC 2025</td><td>Montaggio video, trailer, documentazione</td></tr>
              <tr><td>Git + GitHub</td><td>—</td><td>Version control e backup</td></tr>
            </tbody>
          </table>
        </SectionCard>

        <SectionCard title="Strumenti AI — Utilizzo e Risultati">
          <table>
            <thead>
              <tr><th>Strumento</th><th>Uso nel progetto</th><th>Risultati e note</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Claude Code</strong></td>
                <td>Sviluppo Unity C#, architettura sistema, debugging, refactoring</td>
                <td>Alta qualità del codice prodotto. Utile per strutturare sistemi complessi (hand tracking, state machine). Limitazione: non ha accesso diretto al progetto Unity — richiede copia-incolla manuale del contesto.</td>
              </tr>
              <tr>
                <td><strong>Windsurf (Cascade)</strong></td>
                <td>Documentazione sito, gestione codice React/CSS, sviluppo iterativo</td>
                <td>Efficace per iterazioni rapide sul frontend. Integrazione diretta con il filesystem riduce il friction. Meno preciso di Claude Code su task di architettura complessa.</td>
              </tr>
              <tr>
                <td><strong>Google Gemini</strong></td>
                <td>Ricerca accademica, analisi testi, brainstorming, bozze tesi</td>
                <td>Utile per sintesi di paper lunghi e generazione di prime bozze. Buona capacità di ragionamento su temi psicologici. Usato principalmente nella fase di ricerca teorica (Sett. 1-2).</td>
              </tr>
              <tr>
                <td><strong>ElevenLabs</strong></td>
                <td>Generazione voce narrante italiana (Multilingual v3), musica, SFX</td>
                <td>Qualità della voce molto alta — tono caldo e intimo adatto al contesto. Possibilità di clonare voci custom. Limitazione: il piano gratuito vincola la lunghezza degli audio e l'accesso alle voci più naturali.</td>
              </tr>
              <tr>
                <td><strong>Meshy AI</strong></td>
                <td>Generazione modelli 3D low-poly e concept art per ambienti e oggetti</td>
                <td>Veloce per prototipi e placeholder. Qualità sufficiente per lo stile low-poly del progetto. Limitazione: i modelli richiedono sempre pulizia manuale in Blender (topologia, UV, rigging).</td>
              </tr>
            </tbody>
          </table>
        </SectionCard>
      </div>
    </Layout>
  );
}
