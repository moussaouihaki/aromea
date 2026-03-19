'use client'

import { useState, useEffect } from 'react'
import catalogData from '../data.json'

interface Product {
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [openProduct, setOpenProduct] = useState<Product | null>(null)
  
  const allProducts = catalogData.flatMap(cat => 
    cat.products.map(p => ({ ...p, category: cat.category }))
  )
  
  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory)

  return (
    <main>
      <header className="header">
        <nav className="container nav">
          <div className="logo">
            <span className="logo-accent">A</span>romea
          </div>
          <ul className="nav-links">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#produits">Produits</a></li>
            <li><a href="#expert">Expertise</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="mailto:hello@aromea.com" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', borderRadius: '50px' }}>Catalogue</a>
        </nav>
      </header>

      <section id="accueil" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="badge">Solutions d'Hygiène Professionnelles</div>
            <h1>L'Excellence du <span className="highlight">Nettoyage</span> pour votre Entreprise</h1>
            <p>Aromea propose une gamme complète d'équipements et de consommables premium pour les professionnels exigeants.</p>
            <div className="hero-actions">
              <a href="#produits" className="btn btn-primary">Explorer les Produits</a>
              <a href="#expert" className="btn btn-outline">Notre Expertise</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src="/hero.png" alt="Aromea Products Showcase" />
              <div className="floating-card">
                <span className="count">+150</span>
                <span className="label">Produits Référencés</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="produits" className="products-section">
        <div className="container">
          <div className="section-header">
            <h2>Nos <span className="highlight">Catégories</span></h2>
            <p>Des solutions adaptées à chaque besoin professionnel.</p>
          </div>

          <div className="category-filter">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              Tous
            </button>
            {catalogData.map(cat => (
              <button 
                key={cat.category}
                className={`filter-btn ${selectedCategory === cat.category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.category)}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product, idx) => (
              <div 
                key={idx} 
                className="product-card"
                onClick={() => setOpenProduct(product)}
              >
                <div className="product-category">{product.category}</div>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button className="btn btn-outline" style={{ marginTop: 'auto', width: '100%' }}>En savoir plus</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expert" className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">🏆</div>
              <h3>Qualité Premium</h3>
              <p>Sélection rigoureuse des meilleurs produits européens.</p>
            </div>
            <div className="feature-card">
              <div className="icon">📦</div>
              <h3>Stock Permanent</h3>
              <p>Plus de 1000 références prêtes à être livrées.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🛠️</div>
              <h3>Service Expert</h3>
              <p>Accompagnement et installation de vos équipements.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Besoin d'un <span className="highlight">Devis</span> ?</h2>
            <p>Contactez nos experts pour une solution sur mesure adaptée à votre établissement.</p>
            <a href="mailto:hello@aromea.com" className="btn btn-white">Nous Contacter</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <span className="logo-accent">A</span>romea
          </div>
          <p>&copy; 2024 Aromea. Tous droits réservés. Solutions d'hygiène professionnelles.</p>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </footer>

      {openProduct && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close-modal" onClick={() => setOpenProduct(null)}>&times;</span>
            <div className="modal-body">
              <div className="modal-img">
                <img src={openProduct.image} alt={openProduct.name} />
              </div>
              <div className="modal-info">
                <div className="product-category">{openProduct.category}</div>
                <h2>{openProduct.name}</h2>
                <p>{openProduct.description}</p>
                <div className="modal-cta">
                  <a href={`mailto:hello@aromea.com?subject=Demande de devis: ${openProduct.name}`} className="btn btn-primary">Demander un Devis</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
