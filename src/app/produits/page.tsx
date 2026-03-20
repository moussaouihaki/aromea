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
              <div className="modal-info">
                <div className="product-category">{openProduct.category}</div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>{openProduct.name}</h2>
                <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '3rem', lineHeight: '1.8' }}>{openProduct.description}</p>
                <div className="modal-cta">
                  <a href={`mailto:hello@aromea.com?subject=Demande de devis: ${openProduct.name}`} className="btn btn-primary" style={{ background: '#0D1117', color: 'white', border: '1px solid #0D1117' }}>Demander un Devis</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
