import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="page" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</div>
        <h1 style={{ marginBottom: '0.5rem' }}>Pagina non trovata</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          La pagina che cerchi non esiste o è stata spostata.
        </p>
        <Link to="/" className="btn">Torna alla Home</Link>
      </div>
    </Layout>
  );
}
