import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function IndiceSection({ title, pages, desc, children }) {
  return (
    <div className="indice-section">
      <div className="indice-chapter-header">
        {title} {pages && <span className="indice-pages">{pages}</span>}
      </div>
      {desc && <p className="indice-desc">{desc}</p>}
      {children}
    </div>
  );
}

export default function Indice() {
  return (
    <Layout section="tesi">
      <div className="page">
        <PageHeader icon="📋" title="Indice" subtitle="Struttura dettagliata — ~80-98 cartelle" />

        <IndiceSection title="Sezioni Preliminari">
          <ul className="indice-list">
            <li>Frontespizio</li>
            <li>Abstract (italiano + inglese)</li>
            <li>Indice</li>
          </ul>
        </IndiceSection>

        <IndiceSection title="Introduzione" pages="~8-12 cartelle" desc="Contestualizzazione del tema, motivazione personale, domanda di ricerca e presentazione della struttura della tesi.">
          <ul className="indice-list">
            <li>
              <strong>Le 6W del progetto</strong>
              <ul>
                <li>What? — Argomento, titolo, oggetto, framework teorico</li>
                <li>Why? — Motivazione personale e accademica, obiettivi</li>
                <li>Who? — Candidato, relatore, collaboratori, destinatari</li>
                <li>How? — Framework pratico, tecnologia, interazione, metodologia</li>
                <li>Where? — Piattaforma, distribuzione, documentazione</li>
                <li>When? — Timeline di produzione</li>
              </ul>
            </li>
            <li><strong>Domanda di ricerca</strong></li>
            <li><strong>Struttura della tesi</strong></li>
          </ul>
        </IndiceSection>

        <IndiceSection title="Capitolo 1 — Lutto, tecnologia e nuovi strumenti" pages="~15-18 cartelle" desc="Capitolo unico di contesto che introduce il lutto, la sua evoluzione nell'era digitale e la Grief and Growth Therapy come framework del progetto.">
          <ul className="indice-list">
            <li><strong>1.1</strong> Il lutto: definizioni e modelli
              <ul>
                <li>Definizioni: lutto, cordoglio, elaborazione della perdita</li>
                <li>Panoramica sintetica dei modelli classici come contesto storico: Freud, Bowlby, Kübler-Ross, Worden</li>
                <li>Limiti dei modelli tradizionali: linearità, prescittività</li>
                <li>Le traiettorie del lutto (Bonanno): cronica, recovery, ritardata, resiliente</li>
                <li>Il Disturbo da Lutto Prolungato (DSM-5-TR, ICD-11)</li>
              </ul>
            </li>
            <li><strong>1.2</strong> La Grief and Growth Therapy (De Luca, 2024)
              <ul>
                <li>Origine e cornice integrativa (Analisi Transazionale)</li>
                <li>I quattro pilastri: Modello Duale del Lutto (DPM), Continuing Bonds (CB), Crescita Post Traumatica (PTG), Ricerca di senso (Meaning-Making)</li>
                <li>Relazione circolare tra i pilastri</li>
                <li>Metafore terapeutiche: Scrigno interno, Distillato, Due cantieri</li>
                <li>Perché la GGT è stata scelta come framework per questo progetto</li>
              </ul>
            </li>
            <li><strong>1.3</strong> Lutto e tecnologia digitale
              <ul>
                <li>Morte nell'era dei social media, memorial digitali</li>
                <li>Davide Sisto: <em>La morte si fa social</em>, <em>Online Afterlives</em></li>
                <li>Thanatecnologia: nuove forme di Continuing Bonds nel digitale</li>
                <li>Dalla commemorazione passiva al supporto attivo</li>
              </ul>
            </li>
            <li><strong>1.4</strong> Realtà Virtuale come strumento terapeutico e psico-educativo
              <ul>
                <li>VR in ambito terapeutico: cenni (PTSD, fobie, esposizione)</li>
                <li>Presenza, embodiment ed emozioni in VR (Slater, Bailenson, Riva)</li>
                <li>Serious games per la salute mentale</li>
                <li>VR e lutto: stato dell'arte (Road to Acceptance, "Meeting You", ecc.)</li>
                <li>Death Education e il progetto VR: posizionamento al livello primario</li>
                <li>Il gap: assenza di esperienze VR basate su framework terapeutici strutturati</li>
              </ul>
            </li>
          </ul>
        </IndiceSection>

        <IndiceSection title="Capitolo 2 — Game Design Document" pages="~15-20 cartelle" desc="Capitolo dedicato interamente alla progettazione dell'esperienza VR. Il GDD è il cuore concettuale del progetto.">
          <ul className="indice-list">
            <li><strong>2.1</strong> Concept e visione
              <ul>
                <li>Obiettivo: esperienza VR psico-educativa basata sulla GGT</li>
                <li>Target utente: persone in lutto, utenti inesperti di VR</li>
                <li>Genere: puzzle / esperienza interattiva / serious game</li>
              </ul>
            </li>
            <li><strong>2.2</strong> Consulenza con lo psicologo
              <ul>
                <li>Validazione del framework teorico</li>
                <li>Indicazioni per il design dell'esperienza</li>
                <li>Confini etici: cosa il gioco è e cosa non è (non è terapia)</li>
              </ul>
            </li>
            <li><strong>2.3</strong> Dalla GGT al gameplay: tradurre le tecniche in meccaniche
              <ul>
                <li>Mappatura tecniche GGT → meccaniche VR</li>
                <li>Design delle interazioni basate su hand tracking</li>
                <li>Design for emotion: come progettare per le emozioni</li>
              </ul>
            </li>
            <li><strong>2.4</strong> Struttura dell'esperienza
              <ul>
                <li>Prologo, Atto 1 (Il Fuoco), Atto 2 (L'Acqua), Atto 3 (L'Incontro sul Mare), Epilogo (L'Alba)</li>
                <li>Flow: onboarding → esperienza principale → conclusione</li>
                <li>Navigazione (lineare vs non lineare)</li>
              </ul>
            </li>
            <li><strong>2.5</strong> Narrativa e storytelling
              <ul>
                <li>Trama e personaggi (se presenti)</li>
                <li>Simbolismo e metafore</li>
                <li>Tono e registro emotivo</li>
              </ul>
            </li>
            <li><strong>2.6</strong> Scelte di design
              <ul>
                <li><strong>Hand tracking:</strong> motivazioni, implicazioni, impatto sull'immersione</li>
                <li><strong>Stile visivo:</strong> moodboard, palette colori, atmosfere per sezione</li>
                <li><strong>Comparto audio:</strong> musica, SFX, voce — come supportano l'esperienza emotiva</li>
                <li><strong>UI/UX:</strong> interfaccia minimale, indicazioni diegetiche</li>
              </ul>
            </li>
          </ul>
        </IndiceSection>

        <IndiceSection title="Capitolo 3 — Realizzazione del progetto" pages="~25-30 cartelle" desc="Capitolo principale della tesi. Documentazione tecnica e pratica dell'intero processo di sviluppo.">
          <ul className="indice-list">
            <li><strong>3.1</strong> Pre-produzione
              <ul>
                <li><strong>3.1.1</strong> Pianificazione e organizzazione — Timeline e milestones, strumenti di project management</li>
                <li><strong>3.1.2</strong> Prototipazione — Schizzi, wireframe, storyboard dell'esperienza, prototipi rapidi e test iniziali</li>
              </ul>
            </li>
            <li><strong>3.2</strong> Setup tecnico
              <ul>
                <li><strong>3.2.1</strong> Unity + Meta XR All-In-One SDK — Configurazione progetto, setup hand tracking, architettura</li>
                <li><strong>3.2.2</strong> Pipeline di sviluppo — Workflow asset (modelli 3D, texture, audio), version control</li>
              </ul>
            </li>
            <li><strong>3.3</strong> Strumenti AI nel progetto
              <ul>
                <li><strong>3.3.1</strong> Claude Code — Gestione del progetto, sviluppo codice, documentazione</li>
                <li><strong>3.3.2</strong> Gemini — Creazione storyboard e asset immagini (concept art)</li>
                <li><strong>3.3.3</strong> ElevenLabs — Generazione voci, effetti sonori e musica</li>
                <li><strong>3.3.4</strong> Meshy AI — Creazione modelli 3D</li>
              </ul>
            </li>
            <li><strong>3.4</strong> Sviluppo degli ambienti
              <ul>
                <li><strong>3.4.1</strong> Creazione degli ambienti 3D — Modellazione, sculpting, materiali, texture, illuminazione</li>
                <li><strong>3.4.2</strong> Environment e atmosfera — Cielo, particelle, effetti volumetrici, transizioni</li>
              </ul>
            </li>
            <li><strong>3.5</strong> Implementazione delle meccaniche
              <ul>
                <li><strong>3.5.1</strong> Sistema di hand tracking — Gesture recognition, feedback visivo e aptico, gestione grab/poke/pinch</li>
                <li><strong>3.5.2</strong> Meccaniche di gameplay — Implementazione tecniche GGT, interazioni con oggetti, progressione e trigger narrativi</li>
                <li><strong>3.5.3</strong> Navigazione e locomotion — Sistema di movimento, comfort e motion sickness</li>
              </ul>
            </li>
            <li><strong>3.6</strong> Comparto audio
              <ul>
                <li><strong>3.6.1</strong> Musica e colonna sonora — Selezione e/o creazione tracce, audio adattivo e dinamico</li>
                <li><strong>3.6.2</strong> Sound design — Effetti sonori ambientali e di interazione, spatial audio</li>
                <li><strong>3.6.3</strong> Voce — Narrazione, dialoghi, indicazioni</li>
              </ul>
            </li>
            <li><strong>3.7</strong> Effetti visivi
              <ul>
                <li>Effetti particellari (per sezione/livello)</li>
                <li>Effetti volumetrici (fumo, nebbia, luce divina)</li>
                <li>Shader e post-processing</li>
              </ul>
            </li>
            <li><strong>3.8</strong> Testing e iterazioni
              <ul>
                <li><strong>3.8.1</strong> Playtest — Sessioni di test, feedback raccolti, iterazioni</li>
                <li><strong>3.8.2</strong> Ottimizzazione — Performance su Meta Quest, draw call, texture, poligoni</li>
                <li><strong>3.8.3</strong> Bug fix e polish finale</li>
              </ul>
            </li>
            <li><strong>3.9</strong> Build e distribuzione
              <ul>
                <li>Esportazione per Meta Quest</li>
                <li>Piattaforma di distribuzione (da definire)</li>
                <li>Documentazione visiva: screenshot, video, materiali per tesi</li>
              </ul>
            </li>
          </ul>
        </IndiceSection>

        <IndiceSection title="Conclusioni" pages="~5-8 cartelle">
          <ul className="indice-list">
            <li>Riflessioni sul processo di ricerca e sviluppo</li>
            <li>Competenze acquisite (tecniche, umane, concettuali)</li>
            <li>Risposta alla domanda di ricerca</li>
            <li>Limiti del progetto</li>
            <li>Sviluppi futuri (co-design con psicologi, valutazione clinica, iterazioni)</li>
            <li>Riflessione personale sull'importanza dell'arte e della tecnologia per l'elaborazione del lutto</li>
          </ul>
        </IndiceSection>

        <IndiceSection title="Sezioni Finali">
          <ul className="indice-list">
            <li><strong>Bibliografia</strong></li>
            <li><strong>Sitografia</strong></li>
            <li><strong>Appendice</strong> — GDD completo, screenshot, diagrammi, moodboard</li>
            <li><strong>Ringraziamenti</strong></li>
          </ul>
        </IndiceSection>
      </div>
    </Layout>
  );
}
