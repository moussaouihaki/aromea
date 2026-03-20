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
      <section className="products-hero" style={{ padding: '60px 0', background: 'var(--bg-dark)', textAlign: 'center' }}>
        <div className="container">
          <div className="badge">Catalogue Complet</div>
          <h1>Nos <span className="highlight">Solutions</span> d'Hygiène</h1>
          <p>Explorez notre gamme complète de plus de 300 références professionnelles.</p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
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
