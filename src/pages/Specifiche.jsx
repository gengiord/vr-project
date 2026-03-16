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

        <SectionCard title="AI">
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
