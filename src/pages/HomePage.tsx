import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { products } from '../data/products'

const categories = ['All', ...new Set(products.map((p) => p.category))]

export function HomePage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <div className="page">
      <section className="hero-section">
        <h1>Minimal Essentials</h1>
        <p>Curated products for everyday living</p>
      </section>

      <section className="products-section">
        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <article key={product.id} className="product-card">
              <div
                className="product-visual clickable"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <span className="product-icon">{product.image}</span>
              </div>
              <div className="product-info">
                <span
                  className="product-category"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {product.category}
                </span>
                <h3
                  className="product-name clickable"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {product.name}
                </h3>
                <div className="product-footer">
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  <button
                    className="btn-secondary"
                    onClick={(e) => {
                      e.stopPropagation()
                      addToCart(product)
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
