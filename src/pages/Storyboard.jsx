import { useState, useCallback } from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const frames = [
  { num: '01', title: 'Il Buio', desc: "Buio quasi totale. Al centro dell'inquadratura, due mani viste in prima persona emettono una luce dorata tenue. Sotto le mani, un pavimento d'acqua nera e immobile riflette la luce. Nient'altro è visibile.", voice: '"Guarda le tue mani." — "Sono qui con te."' },
  { num: '02', title: 'Onboarding: le sfere', desc: "Tre piccole sfere di luce bianco-dorata fluttuano davanti alle mani luminose. Una sfera è toccata da un dito indice e reagisce con un alone luminoso. L'acqua sotto riflette le luci.", voice: '"Toccala." — "Bene." — "Ora prendila... e lasciala andare." — "Lanciala via."' },
  { num: '03', title: 'La luce arancione in lontananza', desc: "Il buio si apre. All'orizzonte dell'acqua nera, una luce arancione intensa e calda emerge. L'acqua inizia a incresparsi con riflessi arancioni. Le mani del giocatore in primo piano.", voice: '"Toccare. Prendere. Lasciar andare. È tutto ciò che ti serve."' },
  { num: '04', title: "La Fucina: l'ambiente", desc: "Il giocatore è seduto davanti a un tavolo da fabbro in una caverna sotterranea. Braci ardenti, scintille nell'aria. Sull'incudine un blocco incandescente rosso-arancio, informe e pulsante. A destra, un martello.", voice: '"C\'è qualcosa dentro di te che brucia." — "Non devi spegnerlo. Non ancora."' },
  { num: '05', title: 'La Fucina: il colpo', desc: "Momento dell'impatto. Il martello colpisce il blocco incandescente sull'incudine. Esplosione di scintille dorate in tutte le direzioni. Il blocco si deforma, rivela una crepa luminosa dorata.", voice: '"Prendi il martello." — "Colpisci." — "Ancora."' },
  { num: '06', title: 'La chiave rivelata', desc: "Il blocco si è trasformato. Sull'incudine giace una chiave luminosa dorata che brilla di luce propria. Le ultime scintille si spengono. Le mani del giocatore si avvicinano per prenderla.", voice: '"Dalla rabbia nasce qualcosa. Non sempre lo vediamo subito."' },
  { num: '07', title: 'La Porta', desc: "Buio totale. Una grande porta di pietra scura emerge dal nulla con una serratura luminosa al centro. La mano del giocatore tiene la chiave dorata, estesa verso la serratura.", voice: '"Una porta. Non tutte si aprono con la forza." — "Usa quello che hai forgiato."' },
  { num: '08', title: 'Il Mare: le pietre fluttuanti', desc: "Il giocatore è seduto su uno scoglio, sulla riva di un mare vasto e calmo, di notte. Cielo stellato immenso. Davanti a lui, 6 pietre scure con frasi incise in luce fluttuano in semicerchio. L'orizzonte è infinito, vuoto.", voice: '"Ci sono pesi che porti da tempo." — "Parole che ti ripeti. Cose che credi di non aver fatto." — "Prendila. Leggila. E quando sei pronto... lanciala."' },
  { num: '09', title: 'Il Lancio: la pietra in volo', desc: "Momento dinamico. Una mano ha appena lanciato una pietra verso il mare. La pietra è in volo, la frase si dissolve in particelle luminose. In lontananza, appena percettibile sull'orizzonte, una tenue sagoma dorata seduta su una sedia.", voice: '— Silenzio. La voce tace durante i lanci.' },
  { num: '10', title: 'Lo Splash: onda luminosa', desc: "La pietra colpisce la superficie del mare. Un grande splash luminoso — l'acqua si illumina con un'onda circolare di luce azzurro-bianca. L'acqua intorno diventa più chiara. La sagoma sullo sfondo è leggermente più vicina.", voice: '— Silenzio. Solo suoni: splash, onda, nota musicale.' },
  { num: '11', title: 'La Figura si avvicina', desc: "Metà delle pietre lanciate. La sagoma dorata è a media distanza — chiaramente visibile. Figura umana semi-trasparente, fatta di particelle dorate, seduta su una sedia semplice, sul mare. Ferma, paziente, rivolta verso il giocatore.", voice: '— Silenzio. Solo suoni ambientali.' },
  { num: '12', title: "L'ultimo lancio: la Figura è vicina", desc: "L'ultima pietra sta per essere lanciata. La mano del giocatore stringe l'ultima pietra. La sagoma è ora vicina — a 2-3 metri. Dettagli visibili: spalle, capo leggermente inclinato, mani in grembo. L'acqua tra loro è quasi interamente luminosa.", voice: '— Silenzio. Momento di pura tensione emotiva.' },
  { num: '13', title: 'Faccia a faccia', desc: "Tutte le pietre lanciate. La sagoma è di fronte al giocatore, a 2 metri. Due figure sedute faccia a faccia, sul mare, sotto le stelle. Sagoma di particelle dorate, senza volto, su una sedia semplice di legno. Solo due presenze.", voice: '"Non tutto ciò che lasci andare si perde." — "A volte, è proprio lasciando andare... che qualcuno torna." — "Non devi parlare. Non devi fare nulla. Sii qui."' },
  { num: '14', title: 'Le sfere-parola', desc: 'Piccole sfere con parole luminose ("Grazie", "Mi manchi", "Ti perdono", "Ti voglio bene") fluttuano in un semicerchio lento intorno alla sagoma. La mano del giocatore si avvicina per toccare una sfera.', voice: '"Ci sono cose che vorresti dire?" — "Scegli se dirle."' },
  { num: '15', title: 'Il tocco: la parola che raggiunge', desc: "Close-up. Il dito indice tocca una sfera. La sfera si dissolve in un flusso di particelle dorate che fluiscono verso la sagoma. La sagoma reagisce: il capo si inclina dolcemente, una mano si alza in riconoscimento.", voice: '— Silenzio. Solo suoni cristallini e nota musicale calda.' },
  { num: '16', title: 'Il Silenzio: due presenze sul mare', desc: "Wide shot. Nessuna sfera, nessun oggetto. Solo il giocatore e la sagoma, seduti faccia a faccia sul mare sotto un cielo stellato immenso. L'acqua è calma e luminosa. Silenzio totale.", voice: '— Silenzio puro. Il momento più intimo.' },
  { num: '17', title: 'La Dissoluzione: braccia aperte', desc: "La sagoma si dissolve. Le braccia si aprono verso il giocatore — un abbraccio a distanza. Le particelle dorate si separano: alcune sull'acqua come riflessi, alcune verso il cielo come stelle, alcune sospese come lucciole. La sedia resta un momento, vuota, poi si dissolve. Dove sedeva la figura: un punto di luce dorata.", voice: '"È tempo di andare avanti."' },
  { num: '18', title: "L'alba nasce dal punto di luce", desc: "Il punto di luce dove sedeva la sagoma si espande. L'orizzonte si accende — la luce cresce dal mare, non dal cielo. Viola e indaco, poi arancione e rosa, infine oro pieno. Le mani del giocatore brillano della stessa luce dorata della sagoma.", voice: '"Non è un addio." — "È una trasformazione." — "Quello che hai perso è diventato luce."' },
  { num: '19', title: 'Le mani creative sul mare', desc: "L'alba è in corso. Il giocatore alza le mani con i palmi verso l'alto. Dalle dita, stelle si staccano e salgono. Sul mare, onde di luce si propagano. Gabbiani emergono dall'acqua luminosa. Il mondo si risveglia.", voice: '"Le tue mani possono creare ora." — "Un mondo nuovo." — "Che porta con sé ciò che è stato."' },
  { num: '20', title: "L'Alba piena: il mare luminoso", desc: "Wide shot finale. Il giocatore è al centro di un mare immenso e luminoso all'alba. Cielo dorato-rosa. Gabbiani, onde gentili. In lontananza, la chiave brilla come stella. Una lucciola vola vicino. Nel punto dove sedeva la figura, un riflesso dorato permanente. Pace.", voice: '"Il viaggio continua." — "Ma non sei più solo." — "Sei parte di qualcosa di più grande." — "Sempre."' },
];

const sections = [
  { title: "Prologo — L'Ingresso", from: 0, to: 3 },
  { title: 'Atto 1 — Il Fuoco', from: 3, to: 7 },
  { title: "Atto 2 — L'Acqua", from: 7, to: 12 },
  { title: "Atto 3 — L'Incontro sul Mare", from: 12, to: 17 },
  { title: "Epilogo — L'Alba sul Mare", from: 17, to: 20 },
];

const galleryItems = frames.map((f, i) => ({
  src: `assets/images/${f.num}.png`,
  alt: `Frame ${f.num}`,
  number: `Frame ${f.num}`,
  title: f.title,
  index: i,
}));

export default function Storyboard() {
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
        <PageHeader icon="🎬" title="Storyboard" subtitle="20 frame — testo, concept art e galleria" />

        {sections.map(s => (
          <div key={s.title}>
            <h2 className="section-header">{s.title}</h2>
            {frames.slice(s.from, s.to).map(f => (
              <div className="frame-card" key={f.num}>
                <div className="frame-text">
                  <span className="frame-number">Frame {f.num}</span>
                  <h3 className="frame-title">{f.title}</h3>
                  <p className="frame-description">{f.desc}</p>
                  <div className="frame-voice">{f.voice}</div>
                </div>
                <div className="frame-image">
                  <img src={`assets/images/${f.num}.png`} alt={`Frame ${f.num}`} />
                </div>
              </div>
            ))}
          </div>
        ))}

        <h2 className="section-header">Galleria — Concept Art</h2>
        <div className="gallery-grid">
          {galleryItems.map(g => (
            <div className="gallery-item" key={g.index} onClick={() => openLightbox(g.index)}>
              <img src={g.src} alt={g.alt} />
              <div className="overlay">
                <span className="g-number">{g.number}</span>
                <div className="g-title">{g.title}</div>
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
          <img src={`assets/images/${frames[lightbox].num}.png`} alt="" onClick={(e) => e.stopPropagation()} />
          <div className="lb-caption">Frame {frames[lightbox].num} — {frames[lightbox].title}</div>
        </div>
      )}
    </Layout>
  );
}
