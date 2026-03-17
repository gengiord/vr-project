import { useState, useCallback } from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function SafeImg({ src, alt, className, style, onClick }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="img-placeholder" style={style}>
        <span>🖼️</span><span>Immagine non disponibile</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onClick={onClick}
      onError={() => setFailed(true)}
    />
  );
}

const acts = [
  {
    phase: 'Prologo',
    title: "L'Ingresso",
    time: '~1 min',
    emotionArc: 'Disorientamento → Accettazione',
    color: '#1a1a2e',
    details: [
      { icon: '🌑', label: 'Ambiente', text: "Buio totale. Mani luminose. Pavimento d'acqua scura riflettente." },
      { icon: '🎮', label: 'Interazioni', text: 'Tutorial guidato dalla voce narrante. 3 sfere insegnano i gesti base: tap, grab+release, throw.' },
      { icon: '✨', label: 'Transizione', text: 'Luce arancione in lontananza → dissolvenza verso la fucina.' },
    ],
    frames: [
      { num: '01', title: 'Il Buio', desc: "Buio quasi totale. Al centro dell'inquadratura, due mani viste in prima persona emettono una luce dorata tenue. Sotto le mani, un pavimento d'acqua nera e immobile riflette la luce. Nient'altro è visibile.", voice: '"Guarda le tue mani." — "Sono qui con te."' },
      { num: '02', title: 'Onboarding: le sfere', desc: "Tre piccole sfere di luce bianco-dorata fluttuano davanti alle mani luminose. Una sfera è toccata da un dito indice e reagisce con un alone luminoso. L'acqua sotto riflette le luci.", voice: '"Toccala." — "Bene." — "Ora prendila... e lasciala andare." — "Lanciala via."' },
      { num: '03', title: 'La luce arancione in lontananza', desc: "Il buio si apre. All'orizzonte dell'acqua nera, una luce arancione intensa e calda emerge. L'acqua inizia a incresparsi con riflessi arancioni. Le mani del giocatore in primo piano.", voice: '"Toccare. Prendere. Lasciar andare. È tutto ciò che ti serve."' },
    ],
  },
  {
    phase: 'Atto 1',
    title: 'Il Fuoco',
    time: '3-5 min',
    emotionArc: 'Rabbia → Trasformazione',
    color: '#d4500a',
    details: [
      { icon: '🔥', label: 'La Fucina', text: 'Caverna con incudine, braci, scintille. Blocco incandescente + martello.' },
      { icon: '⚒️', label: 'Azione', text: 'Martellare il blocco (8-15 colpi). Il blocco si spacca e rivela una chiave.' },
      { icon: '🚪', label: 'La Porta', text: 'Buio. Una porta di pietra con serratura luminosa.' },
      { icon: '🔑', label: 'Risoluzione', text: 'Inserire la chiave e girarla. La porta si apre sul mare.' },
    ],
    frames: [
      { num: '04', title: "La Fucina: l'ambiente", desc: "Il giocatore è seduto davanti a un tavolo da fabbro in una caverna sotterranea. Braci ardenti, scintille nell'aria. Sull'incudine un blocco incandescente rosso-arancio, informe e pulsante. A destra, un martello.", voice: '"C\'è qualcosa dentro di te che brucia." — "Non devi spegnerlo. Non ancora."' },
      { num: '05', title: 'La Fucina: il colpo', desc: "Momento dell'impatto. Il martello colpisce il blocco incandescente sull'incudine. Esplosione di scintille dorate in tutte le direzioni. Il blocco si deforma, rivela una crepa luminosa dorata.", voice: '"Prendi il martello." — "Colpisci." — "Ancora."' },
      { num: '06', title: 'La chiave rivelata', desc: "Il blocco si è trasformato. Sull'incudine giace una chiave luminosa dorata che brilla di luce propria. Le ultime scintille si spengono. Le mani del giocatore si avvicinano per prenderla.", voice: '"Dalla rabbia nasce qualcosa. Non sempre lo vediamo subito."' },
      { num: '07', title: 'La Porta', desc: "Buio totale. Una grande porta di pietra scura emerge dal nulla con una serratura luminosa al centro. La mano del giocatore tiene la chiave dorata, estesa verso la serratura.", voice: '"Una porta. Non tutte si aprono con la forza." — "Usa quello che hai forgiato."' },
    ],
  },
  {
    phase: 'Atto 2',
    title: "L'Acqua",
    time: '3-5 min',
    emotionArc: 'Senso di colpa → Perdono',
    color: '#1a3a5c',
    details: [
      { icon: '🌊', label: 'Il Mare Notturno', text: 'Scoglio su mare vasto e calmo, notte stellata. 6 pietre scure con frasi di colpa fluttuano in semicerchio.' },
      { icon: '💪', label: 'Rituale', text: 'Lanciare le pietre nel mare, una alla volta. Ad ogni lancio: splash, onda luminosa, acqua più chiara.' },
      { icon: '👤', label: 'Avvicinamento', text: 'Una sagoma dorata si avvicina ad ogni pietra lanciata, simbolo di connessione.' },
    ],
    frames: [
      { num: '08', title: 'Le pietre fluttuanti', desc: "Il giocatore è seduto su uno scoglio, sulla riva di un mare vasto e calmo, di notte. Cielo stellato immenso. Davanti a lui, 6 pietre scure con frasi incise in luce fluttuano in semicerchio. L'orizzonte è infinito, vuoto.", voice: '"Ci sono pesi che porti da tempo." — "Parole che ti ripeti. Cose che credi di non aver fatto." — "Prendila. Leggila. E quando sei pronto... lanciala."' },
      { num: '09', title: 'Il lancio: la pietra in volo', desc: "Momento dinamico. Una mano ha appena lanciato una pietra verso il mare. La pietra è in volo, la frase si dissolve in particelle luminose. In lontananza, appena percettibile sull'orizzonte, una tenue sagoma dorata seduta su una sedia.", voice: '— Silenzio. La voce tace durante i lanci.' },
      { num: '10', title: 'Lo splash: onda luminosa', desc: "La pietra colpisce la superficie del mare. Un grande splash luminoso — l'acqua si illumina con un'onda circolare di luce azzurro-bianca. L'acqua intorno diventa più chiara. La sagoma sullo sfondo è leggermente più vicina.", voice: '— Silenzio. Solo suoni: splash, onda, nota musicale.' },
      { num: '11', title: 'La figura si avvicina', desc: "Metà delle pietre lanciate. La sagoma dorata è a media distanza — chiaramente visibile. Figura umana semi-trasparente, fatta di particelle dorate, seduta su una sedia semplice, sul mare. Ferma, paziente, rivolta verso il giocatore.", voice: '— Silenzio. Solo suoni ambientali.' },
      { num: '12', title: "L'ultimo lancio: la figura è vicina", desc: "L'ultima pietra sta per essere lanciata. La mano del giocatore stringe l'ultima pietra. La sagoma è ora vicina — a 2-3 metri. Dettagli visibili: spalle, capo leggermente inclinato, mani in grembo. L'acqua tra loro è quasi interamente luminosa.", voice: '— Silenzio. Momento di pura tensione emotiva.' },
    ],
  },
  {
    phase: 'Atto 3',
    title: "L'Incontro sul Mare",
    time: '5-10 min',
    emotionArc: 'Connessione → Dialogo → Accettazione',
    color: '#3a6b8c',
    details: [
      { icon: '🤝', label: 'Il Silenzio Condiviso', text: 'Mare calmo e luminoso. Sagoma a 2m. Due figure faccia a faccia. 10-15s di silenzio profondo.' },
      { icon: '💬', label: 'Le Parole', text: 'Sfere-parola fluttuano: "Grazie", "Mi manchi", "Ti perdono", "Perdonami", "Vai in pace", "Ti voglio bene". Il giocatore tocca quelle che vuole (o nessuna). Nessun timer.' },
      { icon: '⭐', label: 'La Scelta', text: 'Una sfera dorata appare in grembo. Se il giocatore la alza, la sagoma si dissolve — braccia aperte, particelle, riflessi sull\'acqua. Resta un punto di luce.' },
    ],
    frames: [
      { num: '13', title: 'Faccia a faccia', desc: "Tutte le pietre lanciate. La sagoma è di fronte al giocatore, a 2 metri. Due figure sedute faccia a faccia, sul mare, sotto le stelle. Sagoma di particelle dorate, senza volto, su una sedia semplice di legno. Solo due presenze.", voice: '"Non tutto ciò che lasci andare si perde." — "A volte, è proprio lasciando andare... che qualcuno torna." — "Non devi parlare. Non devi fare nulla. Sii qui."' },
      { num: '14', title: 'Le sfere-parola', desc: 'Piccole sfere con parole luminose ("Grazie", "Mi manchi", "Ti perdono", "Ti voglio bene") fluttuano in un semicerchio lento intorno alla sagoma. La mano del giocatore si avvicina per toccare una sfera.', voice: '"Ci sono cose che vorresti dire?" — "Scegli se dirle."' },
      { num: '15', title: 'Il tocco: la parola che raggiunge', desc: "Close-up. Il dito indice tocca una sfera. La sfera si dissolve in un flusso di particelle dorate che fluiscono verso la sagoma. La sagoma reagisce: il capo si inclina dolcemente, una mano si alza in riconoscimento.", voice: '— Silenzio. Solo suoni cristallini e nota musicale calda.' },
      { num: '16', title: 'Il silenzio: due presenze sul mare', desc: "Wide shot. Nessuna sfera, nessun oggetto. Solo il giocatore e la sagoma, seduti faccia a faccia sul mare sotto un cielo stellato immenso. L'acqua è calma e luminosa. Silenzio totale.", voice: '— Silenzio puro. Il momento più intimo.' },
      { num: '17', title: 'La dissoluzione: braccia aperte', desc: "La sagoma si dissolve. Le braccia si aprono verso il giocatore — un abbraccio a distanza. Le particelle dorate si separano: alcune sull'acqua come riflessi, alcune verso il cielo come stelle, alcune sospese come lucciole. La sedia resta un momento, vuota, poi si dissolve. Dove sedeva la figura: un punto di luce dorata.", voice: '"È tempo di andare avanti."' },
    ],
  },
  {
    phase: 'Epilogo',
    title: "L'Alba sul Mare",
    time: '3-5 min',
    emotionArc: 'Rinascita → Crescita',
    color: '#4a2060',
    details: [
      { icon: '🌅', label: "L'Alba", text: "L'alba nasce dal punto dove sedeva la figura. Le mani del giocatore brillano della stessa luce dorata della sagoma." },
      { icon: '🎨', label: 'Espressione Creativa', text: 'Gesti creativi liberi: palms up → stelle, push → onda di luce, finger wiggle → gabbiani, hands together → luce-cuore.' },
      { icon: '🎬', label: 'Finale', text: 'Dissolvenza al bianco → titolo → nero. Un nuovo inizio.' },
    ],
    frames: [
      { num: '18', title: "L'alba nasce dal punto di luce", desc: "Il punto di luce dove sedeva la sagoma si espande. L'orizzonte si accende — la luce cresce dal mare, non dal cielo. Viola e indaco, poi arancione e rosa, infine oro pieno. Le mani del giocatore brillano della stessa luce dorata della sagoma.", voice: '"Non è un addio." — "È una trasformazione." — "Quello che hai perso è diventato luce."' },
      { num: '19', title: 'Le mani creative sul mare', desc: "L'alba è in corso. Il giocatore alza le mani con i palmi verso l'alto. Dalle dita, stelle si staccano e salgono. Sul mare, onde di luce si propagano. Gabbiani emergono dall'acqua luminosa. Il mondo si risveglia.", voice: '"Le tue mani possono creare ora." — "Un mondo nuovo." — "Che porta con sé ciò che è stato."' },
      { num: '20', title: "L'alba piena: il mare luminoso", desc: "Wide shot finale. Il giocatore è al centro di un mare immenso e luminoso all'alba. Cielo dorato-rosa. Gabbiani, onde gentili. In lontananza, la chiave brilla come stella. Una lucciola vola vicino. Nel punto dove sedeva la figura, un riflesso dorato permanente. Pace.", voice: '"Il viaggio continua." — "Ma non sei più solo." — "Sei parte di qualcosa di più grande." — "Sempre."' },
    ],
  },
];

const allFrames = acts.flatMap(a => a.frames);

export default function Storia() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = useCallback((i) => setLightbox(i), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const navLightbox = useCallback((dir) => {
    setLightbox(prev => {
      const next = prev + dir;
      if (next < 0) return allFrames.length - 1;
      if (next >= allFrames.length) return 0;
      return next;
    });
  }, []);

  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader icon="📖" title="Storia" subtitle="Un viaggio attraverso le fasi del lutto — 15-25 minuti" />

        <div className="story-timeline">
          <div className="timeline-header">
            <h3>Struttura Narrativa</h3>
            <p>Un percorso emotivo guidato, basato sul modello Grief and Growth Therapy</p>
          </div>
          <div className="timeline-flow">
            {acts.map((act, index) => (
              <div className="timeline-item" key={act.phase}>
                <div className="timeline-marker" style={{ backgroundColor: act.color }}>
                  <span className="timeline-phase">{act.phase}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-title">{act.title}</div>
                  <div className="timeline-time">{act.time}</div>
                  <div className="timeline-desc">{act.emotionArc}</div>
                </div>
                {index < acts.length - 1 && <div className="timeline-connector" />}
              </div>
            ))}
          </div>
        </div>

        <h2 className="section-header">Storyboard</h2>
        {acts.map(act => (
          <div key={act.phase}>
            <h3 className="section-header">{act.phase} — {act.title}</h3>
            {act.frames.map((f) => {
              const globalIndex = allFrames.findIndex(x => x.num === f.num);
              return (
                <div className="frame-card" key={f.num}>
                  <div className="frame-text">
                    <span className="frame-number">Frame {f.num}</span>
                    <h3 className="frame-title">{f.title}</h3>
                    <p className="frame-description">{f.desc}</p>
                    <div className="frame-voice">{f.voice}</div>
                  </div>
                  <div className="frame-image" onClick={() => openLightbox(globalIndex)} style={{ cursor: 'pointer' }}>
                    <SafeImg src={`assets/images/${f.num}.png`} alt={`Frame ${f.num}`} />
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        <h2 className="section-header">Galleria — Concept Art</h2>
        <div className="gallery-grid">
          {allFrames.map((f, i) => (
            <div className="gallery-item" key={f.num} onClick={() => openLightbox(i)}>
              <SafeImg src={`assets/images/${f.num}.png`} alt={`Frame ${f.num}`} />
              <div className="overlay">
                <span className="g-number">Frame {f.num}</span>
                <div className="g-title">{f.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" style={{ display: 'flex' }} onClick={closeLightbox}>
          <span className="lb-close" onClick={closeLightbox}>&times;</span>
          <span className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); navLightbox(-1); }}>‹</span>
          <span className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); navLightbox(1); }}>›</span>
          <SafeImg src={`assets/images/${allFrames[lightbox].num}.png`} alt={allFrames[lightbox].title} onClick={(e) => e.stopPropagation()} />
          <div className="lb-caption">Frame {allFrames[lightbox].num} — {allFrames[lightbox].title}</div>
        </div>
      )}
    </Layout>
  );
}
