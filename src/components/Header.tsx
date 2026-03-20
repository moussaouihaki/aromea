'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <nav className="container nav">
        <Link href="/" className="logo">
          <span className="logo-accent">A</span>romea
        </Link>
        <ul className="nav-links">
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/produits">Produits</Link></li>
          <li><Link href="/expertise">Expertise</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <a href="mailto:hello@aromea.com" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', borderRadius: '50px' }}>Catalogue</a>
      </nav>
    </header>
  )
}
