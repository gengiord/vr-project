import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function RefCard({ title, meta, description, elements, link, linkText }) {
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
        <span className="placeholder">Immagine</span>
      </div>
    </div>
  );
}

export default function Reference() {
  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="🔗" title="Reference" subtitle="Fonti ispiratrici e progetti di riferimento" />

        <h2 className="section-header">Progetti VR Terapeutici</h2>

        <RefCard
          title="Journey" meta="Thatgamecompany, 2012"
          description="Esperienza che esplora il viaggio spirituale attraverso paesaggi desertici. Nota per la sua narrazione non verbale e l'uso del colore per comunicare emozioni."
          elements="Progressione emotiva attraverso colori, narrazione non verbale, design minimalista."
          link="https://thatgamecompany.com/journey/"
        />
        <RefCard
          title="Road to Acceptance" meta="Lucid Games, 2020"
          description="Esperienza VR creata da un developer che ha perso il padre. Permette agli utenti di interagire con ricordi e oggetti significativi in un ambiente virtuale. Uno dei primi esempi di VR applicata al lutto."
          elements="Approccio empatico, uso di oggetti simbolici, spazi intimi."
          link="#"
        />
        <RefCard
          title="Meeting You" meta="MBC Documentary, Corea del Sud, 2020"
          description="Progetto coreano che permette alle persone di incontrare virtualmente i propri cari defunti utilizzando tecnologie di ricostruzione facciale e voce. Ha sollevato importanti questioni etiche sull'uso della VR nel lutto."
          elements="Riflessioni etiche, importanza del consenso, limiti della simulazione."
          link="https://www.youtube.com/watch?v=uflTK8c4w0c"
          linkText="Guarda il documentario"
        />

        <h2 className="section-header" style={{ marginTop: '2rem' }}>Fonti Artistiche — Stile Visivo</h2>

        <RefCard
          title="Gris" meta="Nomada Studio / Devolver Digital, 2018"
          description="Gioco indie che usa il colore e la luce per rappresentare il percorso di elaborazione di un lutto. Ogni colore rappresenta un'emozione diversa. Ha ispirato la palette cromatica del progetto."
          elements="Uso simbolico dei colori, progressione visiva, minimalismo emotivo."
          link="https://nomada.studio/"
        />
        <RefCard
          title="Abzu" meta="Giant Squid / 505 Games, 2016"
          description="Esperienza subacquea meditativa. Nota per il suo uso dell'acqua come metafora emotiva e l'assenza di dialoghi. Ha influenzato il design degli ambienti acquatici del progetto."
          elements="Metafore acquatiche, ambienti meditativi, narrazione ambientale."
          link="https://abzugame.com/"
        />
      </div>
    </Layout>
  );
}
