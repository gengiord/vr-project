import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const members = [
  { name: 'Dott. Gennaro Giordano', role: 'Candidato', desc: 'Studente magistrale in Multimedia (Design della Comunicazione). Autore della tesi, game designer e sviluppatore del progetto VR "Il Viaggio".' },
  { name: 'Prof. Corrado Piscitelli', role: 'Relatore', desc: 'Docente di riferimento per la tesi magistrale. Supervisione accademica e guida metodologica per il progetto.' },
  { name: 'Dott.ssa Myriam Giordano', role: 'Consulente Psicologica', desc: 'Psicologa. Consulenza sul framework GGT, validazione delle meccaniche di gioco in relazione ai pilastri terapeutici e supervisione degli aspetti psicologici dell\'esperienza.' },
];

export default function Team() {
  return (
    <Layout>
      <div className="page">
        <PageHeader icon="👥" title="Team" subtitle="Le persone coinvolte nel progetto" />
        <div className="team-grid">
          {members.map(m => (
            <div className="team-card" key={m.name}>
              <div className="team-photo">👤</div>
              <h3>{m.name}</h3>
              <div className="team-role">{m.role}</div>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
