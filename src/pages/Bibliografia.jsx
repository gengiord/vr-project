import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

function BiblioItem({ children }) {
  return <div className="biblio-item">{children}</div>;
}

export default function Bibliografia() {
  return (
    <Layout section="tesi">
      <div className="page">
        <PageHeader icon="📖" title="Bibliografia" subtitle="Fonte principale e fonti secondarie" />

        <SectionCard title="Fonte Principale" className="biblio-section">
          <BiblioItem>
            <strong>De Luca Maria Luisa</strong>, <em>Psicoterapia per il lutto. La Grief and Growth Therapy: un approccio integrato in una cornice di Analisi Transazionale</em>, Edizioni San Paolo, Cinisello Balsamo, 2023.<br />
            ISBN 978-88-922-4204-3
          </BiblioItem>
        </SectionCard>

        <SectionCard title="Fonti Secondarie — GGT e Pilastri Teorici" className="biblio-section">
          <BiblioItem>Stroebe Margaret, Schut Henk, <em>The Dual Process Model of Coping with Bereavement: Rationale and Description</em>, in «Death Studies», vol. 23, n. 3, 1999, pp. 197-224.</BiblioItem>
          <BiblioItem>Klass Dennis, Silverman Phyllis R., Nickman Steven, <em>Continuing Bonds: New Understandings of Grief</em>, Taylor &amp; Francis, Washington, 1996.</BiblioItem>
          <BiblioItem>Tedeschi Richard G., Calhoun Lawrence G., <em>Posttraumatic Growth: Conceptual Foundations and Empirical Evidence</em>, in «Psychological Inquiry», vol. 15, n. 1, 2004, pp. 1-18.</BiblioItem>
          <BiblioItem>Neimeyer Robert A., <em>Meaning Reconstruction and the Experience of Loss</em>, American Psychological Association, Washington, 2001.</BiblioItem>
          <BiblioItem>Frankl Viktor E., <em>Man's Search for Meaning</em>, Beacon Press, Boston, 2006 (ed. orig. 1946).</BiblioItem>
          <BiblioItem>Bonanno George A., <em>The Other Side of Sadness: What the New Science of Bereavement Tells Us About Life After Loss</em>, Basic Books, New York, 2009.</BiblioItem>
        </SectionCard>

        <SectionCard title="Fonti Secondarie — Modelli Classici" className="biblio-section">
          <BiblioItem>Freud Sigmund, <em>Lutto e melanconia</em> (1917), in <em>Opere</em>, vol. 8, Bollati Boringhieri, Torino, 1976.</BiblioItem>
          <BiblioItem>Bowlby John, <em>Attachment and Loss: Vol. 3. Loss, Sadness and Depression</em>, Basic Books, New York, 1980.</BiblioItem>
          <BiblioItem>Kübler-Ross Elisabeth, <em>On Death and Dying</em>, Macmillan, New York, 1969.</BiblioItem>
          <BiblioItem>Worden J. William, <em>Grief Counseling and Grief Therapy: A Handbook for the Mental Health Practitioner</em>, Springer, New York, 2018 (5ª ed.).</BiblioItem>
        </SectionCard>

        <SectionCard title="Fonti Secondarie — Lutto nell'Era Digitale" className="biblio-section">
          <BiblioItem>Sisto Davide, <em>La morte si fa social. Immortalità, memoria e lutto nell'epoca della cultura digitale</em>, Bollati Boringhieri, Torino, 2018.</BiblioItem>
          <BiblioItem>Kasket Elaine, <em>All the Ghosts in the Machine: The Digital Afterlife of Your Personal Data</em>, Robinson, Londra, 2019.</BiblioItem>
          <BiblioItem>Stokes Patrick, <em>Digital Souls: A Philosophy of Online Death</em>, Bloomsbury, Londra, 2021.</BiblioItem>
          <BiblioItem>Testoni Ines, <em>L'ultima nascita. Psicologia del morire e Death Education</em>, Bollati Boringhieri, Torino, 2015.</BiblioItem>
        </SectionCard>

        <SectionCard title="Fonti Secondarie — VR Terapeutica" className="biblio-section">
          <BiblioItem>Rizzo Albert "Skip", Shilling Russell, <em>Clinical Virtual Reality Tools to Advance the Prevention, Assessment, and Treatment of PTSD</em>, in «European Journal of Psychotraumatology», vol. 8, sup. 5, 2017.</BiblioItem>
          <BiblioItem>Slater Mel, <em>Place Illusion and Plausibility Can Lead to Realistic Behaviour in Immersive Virtual Environments</em>, in «Philosophical Transactions of the Royal Society B», vol. 364, 2009, pp. 3549-3557.</BiblioItem>
          <BiblioItem>Bailenson Jeremy, <em>Experience on Demand: What Virtual Reality Is, How It Works, and What It Can Do</em>, W. W. Norton, New York, 2018.</BiblioItem>
          <BiblioItem>Riva Giuseppe, <em>Psicologia dei nuovi media</em>, Il Mulino, Bologna, 2012.</BiblioItem>
        </SectionCard>

        <SectionCard title="Fonti Secondarie — Game Design e VR" className="biblio-section">
          <BiblioItem>Schell Jesse, <em>The Art of Game Design: A Book of Lenses</em>, CRC Press, Boca Raton, 2019 (3ª ed.).</BiblioItem>
          <BiblioItem>Isbister Katherine, <em>How Games Move Us: Emotion by Design</em>, MIT Press, Cambridge, 2016.</BiblioItem>
          <BiblioItem>Jerald Jason, <em>The VR Book: Human-Centered Design for Virtual Reality</em>, Morgan &amp; Claypool, San Rafael, 2016.</BiblioItem>
        </SectionCard>

        <div className="biblio-note">
          <strong>Nota:</strong> Questa bibliografia è temporanea e in fase di aggiornamento.
        </div>
      </div>
    </Layout>
  );
}
