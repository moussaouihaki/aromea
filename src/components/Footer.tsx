export default function Footer() {
  return (
    <footer className="footer" style={{ padding: '80px 0', background: '#0D1117', color: 'white', textAlign: 'center' }}>
      <div className="container footer-content">
        <div className="logo" style={{ color: 'white' }}>
          <span className="logo-accent">A</span>romea
        </div>
        <p style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.6 }}>&copy; 2024 Aromea. SOLUTIONS PROFESSIONNELLES D'HYGIÈNE POUR ÉTABLISSEMENTS EXIGEANTS.</p>
        <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Instagram</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px' }}>LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
