import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

type PaymentMethod = 'credit-card' | 'promptpay' | 'cod'

export function CheckoutPage() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart()
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit-card')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')

  const handleConfirmOrder = () => {
    navigate('/receipt')
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const parts = []
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substring(i, i + 4))
    }
    return parts.join(' ')
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value)
    if (formatted.length <= 19) {
      setCardNumber(formatted)
    }
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4)
    }
    return v
  }

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value)
    if (formatted.length <= 5) {
      setExpiryDate(formatted)
    }
  }

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/[^0-9]/gi, '')
    if (v.length <= 3) {
      setCvv(v)
    }
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
      <h1 className="page-title">Checkout</h1>

      <div className="checkout-layout">
        <section className="checkout-main">
          {/* Cart Items */}
          <div className="checkout-section">
            <h2>Order Items</h2>
            <div className="cart-items-section">
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
            </div>
          </div>

          {/* Payment Methods */}
          <div className="checkout-section">
            <h2>Payment Method</h2>
            <div className="payment-methods">
              <label className={`payment-option ${paymentMethod === 'credit-card' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="payment"
                  value="credit-card"
                  checked={paymentMethod === 'credit-card'}
                  onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                />
                <div className="payment-content">
                  <span className="payment-icon">💳</span>
                  <div className="payment-info">
                    <span className="payment-title">Credit Card</span>
                    <span className="payment-desc">Visa, Mastercard, Amex</span>
                  </div>
                </div>
              </label>

              <label className={`payment-option ${paymentMethod === 'promptpay' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="payment"
                  value="promptpay"
                  checked={paymentMethod === 'promptpay'}
                  onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                />
                <div className="payment-content">
                  <span className="payment-icon">📱</span>
                  <div className="payment-info">
                    <span className="payment-title">PromptPay</span>
                    <span className="payment-desc">Scan QR code to pay</span>
                  </div>
                </div>
              </label>

              <label className={`payment-option ${paymentMethod === 'cod' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                />
                <div className="payment-content">
                  <span className="payment-icon">💵</span>
                  <div className="payment-info">
                    <span className="payment-title">Cash on Delivery</span>
                    <span className="payment-desc">Pay when you receive</span>
                  </div>
                </div>
              </label>
            </div>

            {/* Dynamic Payment Forms */}
            <div className="payment-form">
              {paymentMethod === 'credit-card' && (
                <div className="credit-card-form">
                  <div className="form-row">
                    <label className="form-label">
                      Card Number
                      <input
                        type="text"
                        className="form-input"
                        placeholder="0000 0000 0000 0000"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                      />
                    </label>
                  </div>
                  <div className="form-row dual">
                    <label className="form-label">
                      Expiry Date
                      <input
                        type="text"
                        className="form-input"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={handleExpiryChange}
                      />
                    </label>
                    <label className="form-label">
                      CVV
                      <input
                        type="text"
                        className="form-input"
                        placeholder="123"
                        value={cvv}
                        onChange={handleCvvChange}
                      />
                    </label>
                  </div>
                  <div className="secure-badge">
                    <span>🔒</span> Your payment is secured with SSL encryption
                  </div>
                </div>
              )}

              {paymentMethod === 'promptpay' && (
                <div className="promptpay-form">
                  <div className="qr-container">
                    <div className="mock-qr">
                      <div className="qr-pattern">
                        {Array.from({ length: 25 }).map((_, i) => (
                          <div
                            key={i}
                            className={`qr-block ${Math.random() > 0.5 ? 'filled' : ''}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="qr-instruction">
                      Scan this QR code with your banking app to complete payment
                    </p>
                  </div>
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="cod-form">
                  <div className="cod-notice">
                    <span className="cod-icon">📦</span>
                    <p>
                      You will pay <strong>${cartTotal.toFixed(2)}</strong> when your order is delivered.
                    </p>
                    <p className="cod-note">
                      Please prepare exact change for a smoother delivery experience.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Order Summary */}
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
            {paymentMethod === 'cod' ? 'Place Order' : 'Pay Now'}
          </button>
          <p className="secure-note">
            {paymentMethod === 'credit-card' && 'Secure checkout powered by Stripe'}
            {paymentMethod === 'promptpay' && 'Powered by PromptPay'}
            {paymentMethod === 'cod' && 'Pay on delivery'}
          </p>
        </aside>
      </div>
    </div>
  )
}
