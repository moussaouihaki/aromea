import Link from 'next/link'

export default function ExpertisePage() {
  return (
    <main className="expertise-page">
      <section className="expertise-hero" style={{ padding: '80px 0', background: 'var(--bg-dark)', textAlign: 'center' }}>
        <div className="container">
          <div className="badge">Notre Savoir-Faire</div>
          <h1>Une <span className="highlight">Expertise</span> Professionnelle</h1>
          <p>Nos services vont au-delà de la simple fourniture de produits sanitaires.</p>
        </div>
      </section>

      <section className="expertise-grid" style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="feature-card" style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
              <div className="icon">🏥</div>
              <h3>Santé & Hygiène</h3>
              <p>Des solutions spécifiques pour les établissements de santé (EMS, hôpitaux, cabinets) répondant aux normes les plus strictes.</p>
            </div>
            <div className="feature-card" style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
              <div className="icon">🏨</div>
              <h3>Hôtellerie & Restauration</h3>
              <p>Distributeurs de savon, entretien de cuisine, solutions d'ambiances et consommables pour garantir une expérience client irréprochable.</p>
            </div>
            <div className="feature-card" style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
              <div className="icon">🏢</div>
              <h3>Bureaux & Industrie</h3>
              <p>Équipement complet des sanitaires, maintenance régulière et fournitures d'entretien pour le bien-être de vos employés.</p>
            </div>
            <div className="feature-card" style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
              <div className="icon">♻️</div>
              <h3>Solutions Écologiques</h3>
              <p>Nous privilégions des produits biodégradables et durables pour minimiser l'impact environnemental de votre activité.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Besoin d'un accompagnement personnalisé ?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-dim)' }}>Nos experts se déplacent dans toute la Suisse occidentale pour auditer vos besoins.</p>
          <Link href="/contact" className="btn btn-primary">Prendre Rendez-vous</Link>
        </div>
      </section>
    </main>
  )
}
