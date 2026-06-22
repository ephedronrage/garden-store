const BASE_URL = 'http://localhost:3333';

async function request(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error('Ошибка загрузки данных');
  }
  return response.json();
}

export const api = {
  getProducts: () => request('/products/all'),
  getProductById: (id) => request(`/products/${id}`),
  getCategories: () => request('/categories/all'),
  getCategoryById: (id) => request(`/categories/${id}`),
};
