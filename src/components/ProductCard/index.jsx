import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/slices/cartSlice';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  const discountPercent = product.discont_price 
    ? Math.round((1 - product.discont_price / product.price) * 100)
    : 0;

  return (
    <Link to={`/products/${product.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img 
          src={`http://localhost:3333${product.image}`}
          alt={product.title}
          className={styles.image}
        />
        {discountPercent > 0 && (
          <span className={styles.discount}>-{discountPercent}%</span>
        )}
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        
        <div className={styles.priceBlock}>
          {product.discont_price ? (
            <>
              <span className={styles.currentPrice}>
                {product.discont_price} ₽
              </span>
              <span className={styles.oldPrice}>
                {product.price} ₽
              </span>
            </>
          ) : (
            <span className={styles.currentPrice}>
              {product.price} ₽
            </span>
          )}
        </div>

        <button className={styles.addToCart} onClick={handleAddToCart}>
          В корзину
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
