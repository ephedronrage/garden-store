import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slices/productsSlice';
import ProductCard from '../../components/ProductCard';
import styles from './ProductsPage.module.css';

function ProductsPage() {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector(state => state.products);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const getFilteredProducts = () => {
    let filtered = [...products];

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy === 'price_asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price_desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="container">
      <h1 className={styles.title}>Каталог товаров</h1>
      
      <div className={styles.toolbar}>
        <input
          type="text"
          placeholder="Поиск товаров..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className={styles.sortSelect}
        >
          <option value="default">По умолчанию</option>
          <option value="price_asc">Цена: по возрастанию</option>
          <option value="price_desc">Цена: по убыванию</option>
          <option value="name">По названию</option>
        </select>
      </div>

      {loading ? (
        <p>Загрузка товаров...</p>
      ) : (
        <div className={styles.productsGrid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
