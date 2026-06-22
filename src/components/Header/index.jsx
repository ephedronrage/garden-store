import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';

function Header() {
  const cartItems = useSelector(state => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoIcon}>🌿</span>
            <span className={styles.logoText}>Garden Store</span>
          </Link>

          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>Главная</Link>
            <Link to="/products" className={styles.navLink}>Каталог</Link>
            <Link to="/categories" className={styles.navLink}>Категории</Link>
          </nav>

          <Link to="/cart" className={styles.cart}>
            <span className={styles.cartIcon}>🛒</span>
            {cartCount > 0 && (
              <span className={styles.cartBadge}>{cartCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
