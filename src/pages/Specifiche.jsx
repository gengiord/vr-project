import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

export default function Specifiche() {
  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="⚙️" title="Specifiche Tecniche" subtitle="Software, SDK e strumenti AI" />

        <SectionCard title="Software e SDK">
          <table>
            <thead>
              <tr><th>Strumento</th><th>Versione</th><th>Ruolo</th></tr>
            </thead>
            <tbody>
              <tr><td>Unity</td><td>2022.3 LTS</td><td>Game engine principale</td></tr>
              <tr><td>Meta XR All-In-One SDK</td><td>Latest</td><td>Hand tracking, passthrough, interazione VR</td></tr>
              <tr><td>Meta Quest</td><td>Quest 3 / Quest 2</td><td>Piattaforma target (standalone)</td></tr>
              <tr><td>Visual Studio</td><td>2022</td><td>IDE principale per sviluppo C#</td></tr>
              <tr><td>Visual Studio Code</td><td>Latest</td><td>Editor codice secondario</td></tr>
              <tr><td>Blender</td><td>4.x</td><td>Modellazione 3D, sculpting, UV mapping</td></tr>
              <tr><td>Adobe Photoshop</td><td>CC 2025</td><td>Texture, concept art, post-produzione immagini</td></tr>
              <tr><td>Adobe Illustrator</td><td>CC 2025</td><td>Grafica vettoriale, icone, UI assets</td></tr>
              <tr><td>Adobe Premiere Pro</td><td>CC 2025</td><td>Montaggio video, trailer, documentazione</td></tr>
              <tr><td>Obsidian</td><td>Latest</td><td>Knowledge management, appunti e organizzazione tesi</td></tr>
              <tr><td>Git + GitHub</td><td>—</td><td>Version control e backup</td></tr>
            </tbody>
          </table>
        </SectionCard>

        <SectionCard title="Strumenti AI">
          <p>Il progetto utilizza strumenti AI per accelerare la produzione:</p>
          <table>
            <thead>
              <tr><th>Strumento</th><th>Uso</th></tr>
            </thead>
            <tbody>
              <tr><td>Claude Code</td><td>Assistente di codifica avanzato per sviluppo Unity C#, architettura, debugging</td></tr>
              <tr><td>Windsurf (Cascade)</td><td>Assistente di codifica per documentazione, gestione del sito e sviluppo</td></tr>
              <tr><td>Google Gemini</td><td>Ricerca, analisi testi accademici, generazione bozze per la tesi, brainstorming</td></tr>
              <tr><td>ElevenLabs</td><td>Generazione voce narrante italiana custom, musica e SFX (Multilingual v3)</td></tr>
              <tr><td>Meshy AI</td><td>Generazione modelli 3D e concept art per ambienti e oggetti interattivi</td></tr>
            </tbody>
          </table>
        </SectionCard>
      </div>
    </Layout>
  );
}
