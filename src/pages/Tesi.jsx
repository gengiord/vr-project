import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';
import DashCard from '../components/DashCard';

export default function Tesi() {
  return (
    <Layout section="tesi">
      <div className="page">
        <PageHeader icon="📚" title="Lutto nell'era digitale" subtitle="La realtà virtuale come strumento di supporto nell'elaborazione della perdita" />

        {/* Domanda di ricerca in primo piano */}
        <SectionCard title="Domanda di Ricerca">
          <blockquote style={{ fontSize: '1.05rem', borderLeftColor: 'var(--accent)', borderLeftWidth: '4px', fontStyle: 'normal', lineHeight: 1.65 }}>
            È possibile realizzare un progetto in realtà virtuale che possa supportare l'elaborazione di un lutto, con valenza psico-educativa, utilizzando la <strong>Grief and Growth Therapy</strong> come framework teorico?
          </blockquote>
        </SectionCard>

        <SectionCard title="Info Candidato">
          <div className="candidate-info">
            {[
              { icon: '👤', label: 'Candidato', value: 'Gennaro Giordano' },
              { icon: '👨‍🏫', label: 'Relatore', value: 'Prof. Corrado Piscitelli' },
              { icon: '🎓', label: 'Corso', value: 'Multimedia (Design della Comunicazione)' },
              { icon: '📅', label: 'Anno Accademico', value: '2025/2026' },
              { icon: '🧠', label: 'Framework', value: 'Grief and Growth Therapy' },
            ].map(({ icon, label, value }) => (
              <div className="candidate-item" key={label}>
                <span className="candidate-icon">{icon}</span>
                <div className="candidate-content">
                  <span className="candidate-label">{label}</span>
                  <span className="candidate-value">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Motivazione">
          <p><strong>Personale:</strong> Esperienze di lutto vissute in prima persona — la perdita di un nonno, la separazione dei genitori, la fine di una relazione.</p>
          <p><strong>Accademica:</strong> Gap nella ricerca — la VR è stata poco impiegata a fini psico-educativi per l'elaborazione del lutto.</p>
        </SectionCard>

        <SectionCard title="Obiettivi">
          <ul>
            <li>Realizzare un progetto VR che supporti la comprensione e l'elaborazione del lutto</li>
            <li>Dimostrare che la realtà virtuale può essere uno strumento efficace per l'educazione emotiva</li>
            <li>Rendere accessibile un tema intimo e complesso tramite un'esperienza immersiva e interattiva</li>
            <li>Avvicinare utenti inesperti alla VR trattando tematiche profonde</li>
          </ul>
        </SectionCard>

        <SectionCard title="Le 6W del Progetto">
          <div className="tesi-grid tesi-grid-3">
            {[
              { icon: '💡', q: 'Why? — Perché', a: 'Mancanza di strumenti digitali per l\'elaborazione del lutto. VR come medium immersivo per Death Education primaria. Framework teorico: Grief and Growth Therapy (GGT).' },
              { icon: '🎯', q: 'What? — Cosa', a: 'Progetto VR psico-educativo sull\'elaborazione del lutto. Esperienza interattiva da seduti, hand tracking, 15-25 min. Target: utenti in lutto, caregiver, operatori sanitari.' },
              { icon: '👥', q: 'Who? — Chi', a: 'Destinatari: persone che hanno vissuto un lutto, studenti, educatori, operatori della salute mentale.' },
              { icon: '⚙️', q: 'How? — Come', a: 'Unity + Meta XR SDK. Hand tracking (no controller). Ricerca teorica → consulenza psicologo → game design → sviluppo.' },
              { icon: '📍', q: 'Where? — Dove', a: 'Meta Quest (standalone). Distribuzione: da definire (Itch.io, SideQuest, distribuzione accademica).' },
              { icon: '📅', q: 'When? — Timeline', a: 'Pre-produzione (Sett. 1-6): ricerca, consulenza psicologo, GDD, storyboard. Produzione (Sett. 7-10): sviluppo Unity, ambienti, meccaniche. Post-produzione (Sett. 11-12): testing, build finale.' },
            ].map(({ icon, q, a }) => (
              <div className="tesi-card" key={q}>
                <span className="tesi-icon">{icon}</span>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Metodologia">
          <p>Ricerca teorica → Consulenza con psicologo → Game design → Sviluppo → Documentazione</p>
        </SectionCard>

        <SectionCard title="Messaggio">
          <blockquote>"Più lasci andare il peso, più puoi avvicinarti a chi hai perso."</blockquote>
        </SectionCard>

        <div className="dashboard-grid">
          <DashCard to="/indice" icon="📋" title="Indice" description="Struttura completa della tesi: 3 capitoli, introduzione e conclusioni." />
          <DashCard to="/bibliografia" icon="📖" title="Bibliografia" description="Fonte principale e fonti secondarie per il framework teorico." />
          <DashCard to="/documenti" icon="📁" title="Documenti" description="Download della tesi in formato PDF e Word." />
        </div>
      </div>
    </Layout>
  );
}
