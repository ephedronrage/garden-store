import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity, clearCart } from '../../store/slices/cartSlice';
import styles from './CartPage.module.css';

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalAmount = cartItems.reduce((sum, item) => {
    const price = item.discont_price || item.price;
    return sum + price * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <div className={styles.empty}>
          <h2 className={styles.emptyTitle}>Корзина пуста</h2>
          <Link to="/products" className={styles.continueShopping}>
            Перейти в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className={styles.title}>Корзина</h1>
      
      <div className={styles.content}>
        <div className={styles.items}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.item}>
              <img 
                src={`http://localhost:3333${item.image}`}
                alt={item.title}
                className={styles.itemImage}
              />
              <div className={styles.itemInfo}>
                <h3>{item.title}</h3>
                <p>{item.discont_price || item.price} ₽</p>
              </div>
              <div className={styles.quantity}>
                <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>
                  +
                </button>
              </div>
              <button 
                onClick={() => dispatch(removeFromCart(item.id))}
                className={styles.removeBtn}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>

        <div className={styles.sidebar}>
          <div className={styles.total}>
            <span>Итого:</span>
            <span className={styles.totalAmount}>{totalAmount} ₽</span>
          </div>
          <button 
            className={styles.orderBtn}
            onClick={() => {
              dispatch(clearCart());
              alert('Заказ оформлен!');
            }}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

