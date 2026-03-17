import { useState, useCallback } from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

function SafeImg({ src, alt, style }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="img-placeholder" style={{ minHeight: 140, ...style }}>
        <span>🖼️</span><span>Immagine non disponibile</span>
      </div>
    );
  }
  return <img src={src} alt={alt} style={style} onError={() => setFailed(true)} />;
}

const base = import.meta.env.BASE_URL;

const frames = [
  { num: '01', title: 'Il Buio' }, { num: '02', title: 'Onboarding: le sfere' }, { num: '03', title: 'La luce arancione in lontananza' },
  { num: '04', title: "La Fucina: l'ambiente" }, { num: '05', title: 'La Fucina: il colpo' }, { num: '06', title: 'La chiave rivelata' }, { num: '07', title: 'La Porta' },
  { num: '08', title: 'Le pietre fluttuanti' }, { num: '09', title: 'Il lancio: la pietra in volo' }, { num: '10', title: 'Lo splash: onda luminosa' },
  { num: '11', title: 'La figura si avvicina' }, { num: '12', title: "L'ultimo lancio: la figura è vicina" },
  { num: '13', title: 'Faccia a faccia' }, { num: '14', title: 'Le sfere-parola' }, { num: '15', title: 'Il tocco: la parola che raggiunge' },
  { num: '16', title: 'Il silenzio: due presenze sul mare' }, { num: '17', title: 'La dissoluzione: braccia aperte' },
  { num: '18', title: "L'alba nasce dal punto di luce" }, { num: '19', title: 'Le mani creative sul mare' }, { num: '20', title: "L'alba piena: il mare luminoso" },
];

function Palette({ colors }) {
  return (
    <div className="palette">
      {colors.map(({ color, label }) => (
        <div key={label}>
          <div className="palette-swatch" style={{ background: color }}></div>
          <div className="palette-label">{label}</div>
        </div>
      ))}
    </div>
  );
}

function MoodCard({ title, description, palette, tags }) {
  return (
    <div className="mood-card">
      <h3>{title}</h3>
      {tags && (
        <div className="mood-tags">
          {tags.map(tag => <span key={tag} className="mood-tag">{tag}</span>)}
        </div>
      )}
      <p>{description}</p>
      {palette && <Palette colors={palette} />}
    </div>
  );
}

function StyleSpec({ label, value }) {
  return (
    <div className="style-spec">
      <span className="style-spec-label">{label}</span>
      <span className="style-spec-value">{value}</span>
    </div>
  );
}

function RefCard({ title, meta, description, elements, link, linkText, video, image }) {
  return (
    <div className="ref-card">
      <div className="ref-text">
        <h3>{title}</h3>
        <div className="ref-meta">{meta}</div>
        <p>{description}</p>
        <div className="ref-elements"><strong>Elementi presi in prestito:</strong> {elements}</div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="ref-link">{linkText || 'Visita il sito'} →</a>
      </div>
      <div className="ref-image">
        {video ? (
          <iframe
            src={video}
            title={`${title} trailer`}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : image ? (
          <SafeImg src={image} alt={title} />
        ) : (
          <span className="placeholder">Media non disponibile</span>
        )}
      </div>
    </div>
  );
}

export default function Moodboard() {
  const [tab, setTab] = useState('stile');
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = useCallback((i) => setLightbox(i), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const navLightbox = useCallback((dir) => {
    setLightbox(prev => {
      const next = prev + dir;
      if (next < 0) return frames.length - 1;
      if (next >= frames.length) return 0;
      return next;
    });
  }, []);

  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="🎨" title="Moodboard & Reference" subtitle="Stile visivo, palette, concept art e riferimenti" />

        <div className="tabs">
          <button className={`tab-btn${tab === 'stile' ? ' active' : ''}`} onClick={() => setTab('stile')}>
            🎨 Stile Visivo
          </button>
          <button className={`tab-btn${tab === 'riferimenti' ? ' active' : ''}`} onClick={() => setTab('riferimenti')}>
            🔗 Riferimenti
          </button>
        </div>

        {/* ===== STILE VISIVO ===== */}
        {tab === 'stile' && (
          <>
            <h2 className="section-header">Identità Visiva</h2>
            <SectionCard>
              <div className="style-identity">
                <div className="style-badges">
                  <span className="style-badge primary">3D Game</span>
                  <span className="style-badge primary">Low Poly Art</span>
                  <span className="style-badge secondary">Stilizzato</span>
                  <span className="style-badge secondary">Non Fotorealistico</span>
                </div>
                <p className="style-tagline">
                  Un'estetica <strong>low poly stilizzata</strong> — forme geometriche essenziali, superfici piatte o con shading minimale, luce come elemento narrativo. Non si cerca il realismo: si cerca l'<em>emozione</em>.
                </p>
                <div className="style-specs-grid">
                  <StyleSpec label="Genere visivo" value="3D Low Poly Art — Stilizzato" />
                  <StyleSpec label="Approccio" value="Non fotorealistico (NPR)" />
                  <StyleSpec label="Poligoni" value="Bassa/media densità — forme geometriche pulite" />
                  <StyleSpec label="Shading" value="Flat shading + toon shading selettivo" />
                  <StyleSpec label="Proporzioni" value="Leggermente stilizzate, non realistiche" />
                  <StyleSpec label="Target piattaforma" value="Meta Quest — ottimizzato per mobile VR" />
                </div>
              </div>
            </SectionCard>

            <h2 className="section-header">Stile Visivo — Dettaglio</h2>
            <div className="mood-grid">
              <MoodCard title="Geometria Low Poly" tags={['Forma', 'Struttura']}
                description="Mesh a bassa densità poligonale. Superfici piane con variazioni di tono minime. Silhouette nette e riconoscibili. Nessun dettaglio superfluo — ogni forma ha un significato narrativo." />
              <MoodCard title="Materiali e Texture" tags={['Shader', 'NPR']}
                description="Flat color + gradient sottili. Acqua: shader toon con riflessioni semplificate. Fucina: materiali warm con glow emissivo. Nessuna texture fotografica — tutto procedurale o dipinto." />
              <MoodCard title="Illuminazione" tags={['Luce', 'Narrativa']}
                description="Luce come elemento narrativo. Buio → luce tenue → luce calda → alba piena. Le mani del giocatore sono sempre fonte di luce. Nessuna luce ambient neutra — tutto ha una temperatura emotiva." />
              <MoodCard title="Particelle" tags={['VFX', 'Atmosfera']}
                description="Scintille (fucina), gocce luminose (splash), particelle dorate (sagoma), stelle (epilogo), lucciole (transizioni). Sistema particellare low poly coerente con l'estetica generale." />
            </div>

            <h2 className="section-header">Palette Colori per Atto</h2>
            <div className="mood-grid">
              <MoodCard title="Prologo — L'Ingresso" description="Buio quasi totale. Luce dorata tenue dalle mani. Acqua nera stilizzata." palette={[
                { color: '#0a0a0f', label: 'Buio' }, { color: '#1a1a2e', label: 'Notte' },
                { color: '#d4a857', label: 'Oro tenue' }, { color: '#f5e6c8', label: 'Luce mani' },
              ]} />
              <MoodCard title="Atto 1 — Il Fuoco" description="Calore della fucina. Rosso-arancio incandescente. Scintille dorate. Ambiente low poly caldo e roccioso." palette={[
                { color: '#8b2500', label: 'Brace' }, { color: '#d4500a', label: 'Fuoco' },
                { color: '#f5a623', label: 'Scintille' }, { color: '#1a0f0a', label: 'Caverna' },
              ]} />
              <MoodCard title="Atto 2 — L'Acqua" description="Mare notturno low poly. Blu profondo. Pietre geometriche scure. Splash luminosi stilizzati." palette={[
                { color: '#0d1b2a', label: 'Mare notte' }, { color: '#1a3a5c', label: 'Acqua profonda' },
                { color: '#7ec8e3', label: 'Splash' }, { color: '#2a2a3e', label: 'Pietre' },
              ]} />
              <MoodCard title="Atto 3 — L'Incontro sul Mare" description="Mare calmo e luminoso. Sagoma dorata low poly. Sfere cristalline geometriche. Intimità stellata." palette={[
                { color: '#1b2838', label: 'Cielo notte' }, { color: '#3a6b8c', label: 'Mare calmo' },
                { color: '#d4a857', label: 'Sagoma' }, { color: '#f0e4d0', label: 'Sfere luce' },
              ]} />
              <MoodCard title="Epilogo — L'Alba sul Mare" description="Alba dal mare. Viola, rosa, oro pieno. Gabbiani stilizzati. Luce che invade tutto il campo visivo." palette={[
                { color: '#4a2060', label: 'Viola alba' }, { color: '#e8788a', label: 'Rosa' },
                { color: '#f5a623', label: 'Arancione' }, { color: '#ffd700', label: 'Oro pieno' },
              ]} />
            </div>

            <h2 className="section-header">Ambienti</h2>
            <SectionCard>
              <table>
                <thead>
                  <tr><th>Ambiente</th><th>Stile geometrico</th><th>Seduto su...</th><th>Oggetti zona mani</th></tr>
                </thead>
                <tbody>
                  <tr><td>Prologo</td><td>Minimal — vuoto</td><td>Vuoto (sedia reale)</td><td>3 sfere tutorial</td></tr>
                  <tr><td>Fucina</td><td>Rocce angolari, low poly</td><td>Roccia bassa</td><td>Incudine, martello, blocco</td></tr>
                  <tr><td>Porta</td><td>Geometrico — buio</td><td>Buio</td><td>Chiave, porta</td></tr>
                  <tr><td>Mare — Pietre</td><td>Scogliera low poly</td><td>Scoglio</td><td>Pietre fluttuanti</td></tr>
                  <tr><td>Mare — Incontro</td><td>Piattaforma sul mare</td><td>Scoglio</td><td>Sfere-parola + sfera dorata</td></tr>
                  <tr><td>Alba</td><td>Orizzonte aperto</td><td>Scoglio</td><td>Nulla (mani = strumento)</td></tr>
                </tbody>
              </table>
            </SectionCard>

            <h2 className="section-header">Galleria — Concept Art</h2>
            <div className="gallery-grid">
              {frames.map((f, i) => (
                <div className="gallery-item" key={f.num} onClick={() => openLightbox(i)}>
                  <SafeImg src={`assets/images/${f.num}.png`} alt={`Frame ${f.num}`} />
                  <div className="overlay">
                    <span className="g-number">Frame {f.num}</span>
                    <div className="g-title">{f.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ===== RIFERIMENTI ===== */}
        {tab === 'riferimenti' && (
          <>
            <h2 className="section-header">Fonti Artistiche — Stile Visivo</h2>
            <RefCard title="Journey" meta="Thatgamecompany, 2012"
              description="Esperienza che esplora il viaggio spirituale attraverso paesaggi desertici. Nota per la sua narrazione non verbale e l'uso del colore per comunicare emozioni."
              elements="Progressione emotiva attraverso colori, narrazione non verbale, design minimalista."
              link="https://thatgamecompany.com/journey/" video="https://www.youtube.com/embed/61DZC-60x20" />
            <RefCard title="Gris" meta="Nomada Studio / Devolver Digital, 2018"
              description="Gioco indie che usa il colore e la luce per rappresentare il percorso di elaborazione di un lutto. Ogni colore rappresenta un'emozione diversa. Ha ispirato la palette cromatica del progetto."
              elements="Uso simbolico dei colori, progressione visiva, minimalismo emotivo."
              link="https://nomada.studio/" video="https://www.youtube.com/embed/RdrvV25zoA8" />
            <RefCard title="Abzu" meta="Giant Squid / 505 Games, 2016"
              description="Esperienza subacquea meditativa. Nota per il suo uso dell'acqua come metafora emotiva e l'assenza di dialoghi. Ha influenzato il design degli ambienti acquatici del progetto."
              elements="Metafore acquatiche, ambienti meditativi, narrazione ambientale."
              link="https://abzugame.com/" video="https://www.youtube.com/embed/bpvHqAsNVH0" />
            <RefCard title="Monument Valley" meta="ustwo games, 2014"
              description="Architettura impossibile stilizzata, palette controllata, estetica pulitissima. Riferimento per la chiarezza visiva e il design degli spazi interagibili."
              elements="Chiarezza visiva, geometria stilizzata, design spazi interagibili."
              link="https://www.monumentvalleygame.com/" video="https://www.youtube.com/embed/wC1jHHF_Wjo" />
            <RefCard title="Neva" meta="Nomada Studio / Devolver Digital, 2024"
              description="Dal team di Gris, un'avventura sul legame tra una guerriera e un cucciolo di lupo in un mondo che muore. Esplora temi di perdita, crescita e trasformazione attraverso le stagioni."
              elements="Evoluzione del legame emotivo, uso delle stagioni come metafora, arte pittorica."
              link="https://nevagame.com/" video="https://www.youtube.com/embed/6TwolC-YT2Y" />
            <RefCard title="Flower" meta="Thatgamecompany, 2009"
              description="Esperienza poetica in cui il giocatore controlla il vento e guida petali di fiori attraverso paesaggi che si trasformano. Esplora la tensione tra natura e urbanizzazione con un linguaggio puramente visivo."
              elements="Interazione attraverso il movimento, trasformazione ambientale, serenità come gameplay."
              link="https://thatgamecompany.com/flower/" video="https://www.youtube.com/embed/0IS9sGGuvYo" />

            <h2 className="section-header" style={{ marginTop: '2rem' }}>Esperienze sul Lutto e Terapia</h2>
            <RefCard title="Road to Acceptance" meta="Alvarenga & Kobenova, 2024"
              description="Gioco VR gamificato che guida il giocatore attraverso le fasi del lutto di Kübler-Ross tramite storytelling interattivo e micro-giochi. Progetto accademico presentato alla DiGRA Conference 2024."
              elements="Approccio gamificato al lutto, narrazione in prima persona, struttura a fasi emotive."
              link="https://arxiv.org/abs/2512.17025" linkText="Leggi il paper"
              image={`${base}assets/images/road-to-acceptance.jpeg`} />
            <RefCard title="That Dragon, Cancer" meta="Numinous Games, 2016"
              description="Gioco narrativo autobiografico che racconta la lotta di un bambino contro il cancro. Esperienza profondamente emotiva che esplora fede, speranza e perdita. Disponibile anche in VR."
              elements="Narrazione autobiografica, gestione del lutto attraverso il gioco, immersione emotiva."
              link="https://www.thatdragoncancer.com/" video="https://www.youtube.com/embed/vlKCJlhJwxU" />
            <RefCard title="Meeting You" meta="MBC Documentary, Corea del Sud, 2020"
              description="Progetto coreano che permette alle persone di incontrare virtualmente i propri cari defunti utilizzando tecnologie di ricostruzione facciale e voce. Ha sollevato importanti questioni etiche sull'uso della VR nel lutto."
              elements="Riflessioni etiche, importanza del consenso, limiti della simulazione."
              link="https://www.youtube.com/watch?v=uflTK8c4w0c" linkText="Guarda il documentario"
              video="https://www.youtube.com/embed/uflTK8c4w0c" />
            <RefCard title="EMMA's World" meta="Botella, Baños et al., 2008"
              description="Ambiente virtuale terapeutico sviluppato per il trattamento del lutto complicato e del PTSD. I pazienti interagiscono con ambienti simbolici (prati, deserti, foreste) per elaborare le emozioni legate alla perdita."
              elements="VR clinica per il lutto, ambienti simbolici adattivi, integrazione con CBT."
              link="https://www.researchgate.net/publication/23389624" linkText="Leggi il paper"
              image={`${base}assets/images/emmas-world.webp`} />
            <RefCard title="Traces: The Grief Processor" meta="Vali Fugulin / Couzin Films, 2025"
              description="Esperienza VR multi-utente interattiva che invita a esplorare poeticamente il proprio lutto — dalla perdita di una persona cara a un'amicizia o un sogno. Guidata da un ritualista, utilizza elementi personali dei partecipanti per creare un'esperienza condivisa. Selezionata al SXSW 2025."
              elements="Elaborazione collettiva del lutto, ritualità digitale, personalizzazione dell'esperienza, VR come spazio poetico."
              link="https://www.couzinfilms.com/en/productions/traces" video="https://player.vimeo.com/video/1062239027" />
            <RefCard title="Spiritfarer" meta="Thunder Lotus Games, 2020"
              description="Gioco di gestione e narrazione sul tema dell'accompagnamento alla morte. Il giocatore guida anime verso l'aldilà, costruendo relazioni e affrontando il distacco. Premiato per la sua delicatezza nel trattare la perdita."
              elements="Accompagnamento alla morte come meccanica, costruzione di relazioni, accettazione del distacco."
              link="https://thunderlotusgames.com/spiritfarer/" video="https://www.youtube.com/embed/4pKJ-NuSjNE" />
          </>
        )}
      </div>

      {lightbox !== null && (
        <div className="lightbox" style={{ display: 'flex' }} onClick={closeLightbox}>
          <span className="lb-close" onClick={closeLightbox}>&times;</span>
          <span className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); navLightbox(-1); }}>‹</span>
          <span className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); navLightbox(1); }}>›</span>
          <SafeImg src={`assets/images/${frames[lightbox].num}.png`} alt={frames[lightbox].title} onClick={(e) => e.stopPropagation()} />
          <div className="lb-caption">Frame {frames[lightbox].num} — {frames[lightbox].title}</div>
        </div>
      )}
    </Layout>
  );
}
