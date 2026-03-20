'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section id="accueil" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="badge">Solutions d'Hygiène Professionnelles</div>
            <h1>L'Excellence du <span className="highlight">Nettoyage</span> pour votre Entreprise</h1>
            <p>Aromea propose une gamme complète d'équipements et de consommables premium pour les professionnels exigeants en Suisse.</p>
            <div className="hero-actions">
              <Link href="/produits" className="btn btn-primary">Explorer le Catalogue</Link>
              <Link href="/expertise" className="btn btn-outline">Notre Expertise</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src="/hero.png" alt="Aromea Products Showcase" />
              <div className="floating-card">
                <span className="count">+300</span>
                <span className="label">Produits Référencés</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights" style={{ padding: '100px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Nos <span className="highlight">Engagements</span></h2>
            <p>Nous accompagnons les professionnels avec une sélection rigoureuse et un service de proximité.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">🏆</div>
              <h3>Qualité Premium</h3>
              <p>Sélection rigoureuse des meilleurs produits européens et locaux.</p>
            </div>
            <div className="feature-card">
              <div className="icon">📦</div>
              <h3>Stock Permanent</h3>
              <p>Plus de 1000 références prêtes à être livrées sous 48h.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🛠️</div>
              <h3>Service Expert</h3>
              <p>Accompagnement, conseil et installation de vos équipements sanitaires.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Besoin d'un <span className="highlight">Devis</span> ?</h2>
            <p>Contactez nos experts pour une solution sur mesure adaptée à votre établissement (Hôtellerie, Restauration, Santé, Bureaux).</p>
            <Link href="/contact" className="btn btn-white">Nous Contacter</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
