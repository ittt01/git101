import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { useEffect, useMemo } from 'react'

export function ReceiptPage() {
  const { cart, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()

  const orderId = useMemo(() => {
    const timestamp = Date.now().toString(36).toUpperCase()
    const random = Math.random().toString(36).substring(2, 6).toUpperCase()
    return `ORD-${timestamp}-${random}`
  }, [])

  const orderDate = useMemo(() => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }, [])

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/', { replace: true })
    }
  }, [cart, navigate])

  const handleBackToHome = () => {
    clearCart()
    navigate('/')
  }

  if (cart.length === 0) {
    return null
  }

  return (
    <div className="page receipt-page">
      <div className="receipt-card">
        <div className="receipt-header">
          <div className="success-icon">✓</div>
          <h1>Order Confirmed</h1>
          <p>Thank you for your purchase!</p>
        </div>

        <div className="receipt-info">
          <div className="info-row">
            <span>Order ID</span>
            <span className="order-id">{orderId}</span>
          </div>
          <div className="info-row">
            <span>Date</span>
            <span>{orderDate}</span>
          </div>
          <div className="info-row">
            <span>Status</span>
            <span className="status-badge">Confirmed</span>
          </div>
        </div>

        <div className="receipt-divider" />

        <div className="receipt-items">
          <h3>Items Purchased</h3>
          <div className="items-list">
            {cart.map((item) => (
              <div key={item.id} className="receipt-item">
                <span className="item-icon">{item.image}</span>
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-qty">Qty: {item.quantity}</span>
                </div>
                <span className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="receipt-divider" />

        <div className="receipt-total">
          <div className="total-row">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="total-row">
            <span>Shipping</span>
            <span className="free">Free</span>
          </div>
          <div className="grand-total">
            <span>Grand Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>

        <div className="receipt-actions">
          <button className="btn-primary" onClick={handleBackToHome}>
            Back to Home
          </button>
          <p className="receipt-note">
            A confirmation email has been sent to your inbox.
          </p>
        </div>
      </div>
    </div>
  )
}
