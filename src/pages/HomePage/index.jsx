import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../store/slices/productsSlice';
import ProductCard from '../../components/ProductCard';
import Banner from '../../components/Banner';
import styles from './HomePage.module.css';

function HomePage() {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const featuredProducts = products.slice(0, 4);

  return (
    <div className={styles.homePage}>
      <Banner />

      <div className="container">
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Популярные товары</h2>
            <Link to="/products" className={styles.viewAll}>Все товары →</Link>
          </div>
          
          {loading ? (
            <p>Загрузка товаров...</p>
          ) : (
            <div className={styles.productsGrid}>
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default HomePage;
