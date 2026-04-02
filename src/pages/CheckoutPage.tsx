import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

export function CheckoutPage() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart()
  const navigate = useNavigate()

  const handleConfirmOrder = () => {
    navigate('/receipt')
  }

  if (cart.length === 0) {
    return (
      <div className="page checkout-page">
        <div className="checkout-empty">
          <span className="empty-icon">◈</span>
          <h2>Your cart is empty</h2>
          <p>Add some products to get started</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page checkout-page">
      <h1 className="page-title">Shopping Cart</h1>

      <div className="checkout-layout">
        <section className="cart-items-section">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span className="cart-item-icon">{item.image}</span>
              <div className="cart-item-details">
                <span className="cart-item-category">{item.category}</span>
                <h3>{item.name}</h3>
                <span className="cart-item-price">${item.price.toFixed(2)}</span>
              </div>
              <div className="cart-item-actions">
                <div className="quantity-control">
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </section>

        <aside className="checkout-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span className="free">Free</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button className="btn-primary checkout-btn" onClick={handleConfirmOrder}>
            Confirm Order
          </button>
          <p className="secure-note">
            Secure checkout powered by Stripe
          </p>
        </aside>
      </div>
    </div>
  )
}
