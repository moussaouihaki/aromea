'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>L'ART DE <br/><span className="highlight">L'HYGIÈNE</span></h1>
            <p>Découvrez notre sélection exclusive de solutions sanitaires professionnelles conçues pour allier performance, durabilité et esthétisme.</p>
            <div className="hero-actions" style={{ display: 'flex', gap: '2rem' }}>
              <Link href="/produits" className="btn btn-primary">Explorer le Catalogue</Link>
              <Link href="/expertise" className="btn btn-outline">Expertise</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '150px 0', background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <div className="product-category" style={{ fontSize: '0.8rem' }}>La Marque</div>
            <h2 style={{ fontSize: '4rem', fontWeight: 800 }}>L'EXIGENCE <br/> DU PREMIUM</h2>
          </div>
          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
            <div className="feature-card">
              <h3 style={{ textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '2px' }}>CONSEIL EXPERT</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Un accompagnement personnalisé pour chaque secteur professionnel (Cliniques, EMS, Hôtellerie, Services publics).</p>
            </div>
            <div className="feature-card">
              <h3 style={{ textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '2px' }}>QUALITÉ SUISSE</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Sélection rigoureuse des meilleurs produits répondant aux normes de sécurité et d'hygiène les plus strictes.</p>
            </div>
            <div className="feature-card">
              <h3 style={{ textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '2px' }}>RÉACTIVITÉ</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Service de livraison rapide et gestion simplifiée de vos consommables pour garantir un fonctionnement sans interruption.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '150px 0', background: '#fbfbfb', borderTop: '1px solid #eee' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="product-category" style={{ marginBottom: '2rem' }}>Catalogue Complet</div>
          <p style={{ fontSize: '2rem', maxWidth: '800px', margin: '0 auto 4rem', fontWeight: 300, color: '#333' }}>
            Accédez à plus de <span style={{ fontWeight: 700 }}>390 références</span> de produits professionnels pour l'hygiène de vos sanitaires, bureaux et cuisines.
          </p>
          <Link href="/produits" className="btn btn-primary" style={{ background: 'black', color: 'white' }}>Accéder au Catalogue</Link>
        </div>
      </section>
    </main>
  )
}
