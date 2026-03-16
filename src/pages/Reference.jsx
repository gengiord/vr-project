import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const base = import.meta.env.BASE_URL;

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
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : image ? (
          <img src={image} alt={title} />
        ) : (
          <span className="placeholder">Media non disponibile</span>
        )}
      </div>
    </div>
  );
}

export default function Reference() {
  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="🔗" title="Reference" subtitle="Fonti ispiratrici e progetti di riferimento" />

        <h2 className="section-header">Esperienze sul Lutto e Terapia</h2>

        <RefCard
          title="Road to Acceptance" meta="Alvarenga & Kobenova, 2024"
          description="Gioco VR gamificato che guida il giocatore attraverso le fasi del lutto di Kübler-Ross tramite storytelling interattivo e micro-giochi. Progetto accademico presentato alla DiGRA Conference 2024."
          elements="Approccio gamificato al lutto, narrazione in prima persona, struttura a fasi emotive."
          link="https://arxiv.org/abs/2512.17025"
          linkText="Leggi il paper"
          image={`${base}assets/images/road-to-acceptance.jpeg`}
        />
        <RefCard
          title="That Dragon, Cancer" meta="Numinous Games, 2016"
          description="Gioco narrativo autobiografico che racconta la lotta di un bambino contro il cancro. Esperienza profondamente emotiva che esplora fede, speranza e perdita. Disponibile anche in VR."
          elements="Narrazione autobiografica, gestione del lutto attraverso il gioco, immersione emotiva."
          link="https://www.thatdragoncancer.com/"
          video="https://www.youtube.com/embed/vlKCJlhJwxU"
        />
        <RefCard
          title="Meeting You" meta="MBC Documentary, Corea del Sud, 2020"
          description="Progetto coreano che permette alle persone di incontrare virtualmente i propri cari defunti utilizzando tecnologie di ricostruzione facciale e voce. Ha sollevato importanti questioni etiche sull'uso della VR nel lutto."
          elements="Riflessioni etiche, importanza del consenso, limiti della simulazione."
          link="https://www.youtube.com/watch?v=uflTK8c4w0c"
          linkText="Guarda il documentario"
          video="https://www.youtube.com/embed/uflTK8c4w0c"
        />
        <RefCard
          title="EMMA's World" meta="Botella, Baños et al., 2008"
          description="Ambiente virtuale terapeutico sviluppato per il trattamento del lutto complicato e del PTSD. I pazienti interagiscono con ambienti simbolici (prati, deserti, foreste) per elaborare le emozioni legate alla perdita."
          elements="VR clinica per il lutto, ambienti simbolici adattivi, integrazione con CBT."
          link="https://www.researchgate.net/publication/23389624"
          linkText="Leggi il paper"
          image={`${base}assets/images/emmas-world.webp`}
        />
        <RefCard
          title="Traces: The Grief Processor" meta="Vali Fugulin / Couzin Films, 2025"
          description="Esperienza VR multi-utente interattiva che invita a esplorare poeticamente il proprio lutto — dalla perdita di una persona cara a un'amicizia o un sogno. Guidata da un ritualista, utilizza elementi personali dei partecipanti per creare un'esperienza condivisa. Selezionata al SXSW 2025."
          elements="Elaborazione collettiva del lutto, ritualità digitale, personalizzazione dell'esperienza, VR come spazio poetico."
          link="https://www.couzinfilms.com/en/productions/traces"
          video="https://player.vimeo.com/video/1062239027"
        />
        <RefCard
          title="Spiritfarer" meta="Thunder Lotus Games, 2020"
          description="Gioco di gestione e narrazione sul tema dell'accompagnamento alla morte. Il giocatore guida anime verso l'aldilà, costruendo relazioni e affrontando il distacco. Premiato per la sua delicatezza nel trattare la perdita."
          elements="Accompagnamento alla morte come meccanica, costruzione di relazioni, accettazione del distacco."
          link="https://thunderlotusgames.com/spiritfarer/"
          video="https://www.youtube.com/embed/4pKJ-NuSjNE"
        />

        <h2 className="section-header" style={{ marginTop: '2rem' }}>Fonti Artistiche — Stile Visivo 3D/VR</h2>

        <RefCard
          title="Journey" meta="Thatgamecompany, 2012"
          description="Esperienza che esplora il viaggio spirituale attraverso paesaggi desertici. Nota per la sua narrazione non verbale e l'uso del colore per comunicare emozioni."
          elements="Progressione emotiva attraverso colori, narrazione non verbale, design minimalista."
          link="https://thatgamecompany.com/journey/"
          video="https://www.youtube.com/embed/61DZC-60x20"
        />
        <RefCard
          title="Gris" meta="Nomada Studio / Devolver Digital, 2018"
          description="Gioco indie che usa il colore e la luce per rappresentare il percorso di elaborazione di un lutto. Ogni colore rappresenta un'emozione diversa. Ha ispirato la palette cromatica del progetto."
          elements="Uso simbolico dei colori, progressione visiva, minimalismo emotivo."
          link="https://nomada.studio/"
          video="https://www.youtube.com/embed/RdrvV25zoA8"
        />
        <RefCard
          title="Neva" meta="Nomada Studio / Devolver Digital, 2024"
          description="Dal team di Gris, un'avventura sul legame tra una guerriera e un cucciolo di lupo in un mondo che muore. Esplora temi di perdita, crescita e trasformazione attraverso le stagioni."
          elements="Evoluzione del legame emotivo, uso delle stagioni come metafora, arte pittorica."
          link="https://nevagame.com/"
          video="https://www.youtube.com/embed/6TwolC-YT2Y"
        />
        <RefCard
          title="Abzu" meta="Giant Squid / 505 Games, 2016"
          description="Esperienza subacquea meditativa. Nota per il suo uso dell'acqua come metafora emotiva e l'assenza di dialoghi. Ha influenzato il design degli ambienti acquatici del progetto."
          elements="Metafore acquatiche, ambienti meditativi, narrazione ambientale."
          link="https://abzugame.com/"
          video="https://www.youtube.com/embed/bpvHqAsNVH0"
        />
        <RefCard
          title="Flower" meta="Thatgamecompany, 2009"
          description="Esperienza poetica in cui il giocatore controlla il vento e guida petali di fiori attraverso paesaggi che si trasformano. Esplora la tensione tra natura e urbanizzazione con un linguaggio puramente visivo."
          elements="Interazione attraverso il movimento, trasformazione ambientale, serenità come gameplay."
          link="https://thatgamecompany.com/flower/"
          video="https://www.youtube.com/embed/0IS9sGGuvYo"
        />
      </div>
    </Layout>
  );
}
