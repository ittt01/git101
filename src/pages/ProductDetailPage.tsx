import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { products } from '../data/products';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'filled' : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="page product-detail-page">
        <div className="product-not-found">
          <span className="not-found-icon">◈</span>
          <h2>Product Not Found</h2>
          <p>The product you are looking for does not exist.</p>
          <button className="btn-primary" onClick={() => navigate('/')}>
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const averageRating =
    product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="page product-detail-page">
      <button className="back-link" onClick={() => navigate('/')}>
        ← Back to Products
      </button>

      <div className="product-detail-layout">
        <section className="product-hero">
          <div className="product-image-large">
            <span className="product-emoji">{product.image}</span>
          </div>
          <div className="product-meta">
            <span className="product-category">{product.category}</span>
            <h1 className="product-title">{product.name}</h1>
            <div className="product-rating-summary">
              <StarRating rating={Math.round(averageRating)} />
              <span className="rating-text">
                {averageRating.toFixed(1)} ({product.reviews.length} reviews)
              </span>
            </div>
            <p className="product-price-large">${product.price.toFixed(2)}</p>
            <button className="btn-primary add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </section>

        <section className="product-description-section">
          <h2>Description</h2>
          <p className="description-text">{product.description}</p>

          <h3>Features</h3>
          <ul className="features-list">
            {product.features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="check-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="product-reviews-section">
          <h2>Customer Reviews</h2>
          <div className="reviews-list">
            {product.reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="review-user">
                    <div className="user-avatar">{review.user.charAt(0)}</div>
                    <div className="user-info">
                      <span className="user-name">{review.user}</span>
                      <span className="review-date">{review.date}</span>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
