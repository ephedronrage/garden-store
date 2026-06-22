import { createSlice } from '@reduxjs/toolkit';

const savedCart = localStorage.getItem('cart');
const initialState = {
  items: savedCart ? JSON.parse(savedCart) : [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
      
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;