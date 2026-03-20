'use client'

import { useState } from 'react'
import catalogData from '../../data.json'

interface Product {
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [openProduct, setOpenProduct] = useState<Product | null>(null)
  
  const allProducts = catalogData.flatMap(cat => 
    cat.products.map(p => ({ ...p, category: cat.category }))
  )
  
  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory)

  return (
    <main className="products-page">
      <section className="products-hero" style={{ padding: '80px 0', background: '#0D1117', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <div className="product-category">Luxe & Hygiène</div>
          <h1 style={{ fontSize: '4rem', color: 'white', fontWeight: 800 }}>NOTRE <span className="highlight">CATALOGUE</span></h1>
          <p style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>Découvrez l'intégralité de nos solutions professionnelles sélectionnées pour les établissements les plus exigeants.</p>
        </div>
      </section>

      <section className="products-section" style={{ minHeight: '80vh' }}>
        <div className="container">
          <div className="category-filter">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              TOUS LES PRODUITS
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
                style={{ cursor: 'pointer' }}
              >
                <div className="product-category">{product.category}</div>
                <div className="product-image">
                  <img src={product.image || '/favicon.svg'} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#333', fontWeight: 800 }}>DÉTAILS +</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {openProduct && (
        <div className="modal" onClick={() => setOpenProduct(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setOpenProduct(null)}>&times;</span>
            <div className="modal-body" style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr', gap: '3rem', alignItems: 'center' }}>
              <div className="modal-img" style={{ background: '#fbfbfb', padding: '2rem', display: 'flex', justifyContent: 'center' }}>
                <img src={openProduct.image || '/favicon.svg'} alt={openProduct.name} style={{ width: '100%', height: 'auto', maxHeight: '750px', objectFit: 'contain' }} />
              </div>
              <div className="modal-info" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                <span className="product-category" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1.5rem', display: 'block' }}>
                  {openProduct.category}
                </span>
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '2rem', lineHeight: '1.2', color: '#0D1117' }}>
                  {openProduct.name}
                </h2>
                <div style={{ width: '60px', height: '2px', background: 'var(--primary)', marginBottom: '2.5rem' }}></div>
                <div style={{ marginBottom: '3.5rem' }}>
                  <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    {openProduct.description}
                  </p>
                  {openProduct.price && (
                    <p style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0D1117' }}>
                      {openProduct.price} CHF <span style={{ fontSize: '0.8rem', fontWeight: 400, opacity: 0.5 }}>HT</span>
                    </p>
                  )}
                </div>
                <div className="modal-cta">
                  <a href={`mailto:hello@aromea.com?subject=Demande de devis: ${openProduct.name}`} className="btn btn-primary" style={{ background: '#0D1117', color: 'white', padding: '1.5rem 2.5rem', width: 'fit-content' }}>
                    Demander une Offre Personnalisée
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
