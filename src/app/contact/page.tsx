export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero" style={{ padding: '80px 0', background: 'var(--bg-dark)', textAlign: 'center' }}>
        <div className="container">
          <div className="badge">Contact & Devis</div>
          <h1>Une <span className="highlight">Solution</span> sur Mesure</h1>
          <p>Contactez-nous pour toute demande de catalogue papier ou devis personnalisé.</p>
        </div>
      </section>

      <section className="contact-details" style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div className="contact-info">
              <h2>Aromea Suisse</h2>
              <ul style={{ listStyle: 'none', marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div className="icon">📍</div>
                  <div>CH-2300 La Chaux-de-Fonds</div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div className="icon">📧</div>
                  <div><a href="mailto:hello@aromea.com" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 600 }}>hello@aromea.com</a></div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div className="icon">🕙</div>
                  <div>Lundi - Vendredi: 08:30 - 17:30</div>
                </li>
              </ul>
            </div>
            <div className="contact-form">
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Nom complet" style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none' }} />
                <input type="email" placeholder="Email professionnel" style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none' }} />
                <textarea placeholder="Votre message ou demande de devis" style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', minHeight: '150px' }}></textarea>
                <button type="submit" className="btn btn-primary" style={{ border: 'none', cursor: 'pointer' }}>Envoyer ma demande</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
