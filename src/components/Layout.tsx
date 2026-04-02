import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const { cartCount } = useCart()

  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="logo">
          <span className="logo-icon">◈</span>
          <span className="logo-text">STORE</span>
        </Link>

        <nav className="nav">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Products
          </Link>
          <Link
            to="/checkout"
            className={`nav-link ${location.pathname === '/checkout' ? 'active' : ''}`}
          >
            Cart
            {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
          </Link>
        </nav>
      </header>

      <main className="main-content">{children}</main>

      <footer className="footer">
        <p>© 2025 Store. Minimal shopping experience.</p>
      </footer>
    </div>
  )
}
