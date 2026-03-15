import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FileCard from '../components/FileCard';

export default function Documenti() {
  return (
    <Layout>
      <div className="page">
        <PageHeader icon="📁" title="Documenti" subtitle="Download della tesi in formato PDF e Word" />
        <div className="tesi-grid">
          <FileCard icon="📄" title="Tesi Completa" description="Versione impaginata pronta per la stampa e consultazione." disabled />
          <FileCard icon="📝" title="Tesi Editabile" description="Versione modificabile per appunti e riferimenti." disabled />
          <FileCard icon="🎯" title="Presentazione" description="Slide complete per la difesa orale della tesi." disabled />
          <FileCard icon="🎮" title="Esperienza VR" description="Build funzionante del progetto per Meta Quest." disabled />
        </div>
      </div>
    </Layout>
  );
}
