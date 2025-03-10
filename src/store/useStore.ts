import { create } from 'zustand';
import { Product } from '@/types';

export interface CartItem extends Product {
  quantity: number;
}

interface Store {
  cart: CartItem[];
  balance: number;
  isCartOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  purchase: () => boolean;
}

export const useStore = create<Store>((set, get) => ({
  cart: [],
  balance: 200, // Başlangıç bakiyesi
  isCartOpen: false,

  addToCart: (product) => {
    const cart = get().cart;
    const existingItem = cart.find(item => item._id === product._id);

    if (existingItem) {
      set({
        cart: cart.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      });
    } else {
      set({
        cart: [...cart, { ...product, quantity: 1 }]
      });
    }
  },

  removeFromCart: (productId) => {
    set({
      cart: get().cart.filter(item => item._id !== productId)
    });
  },

  updateQuantity: (productId, quantity) => {
    set({
      cart: get().cart.map(item =>
        item._id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    });
  },

  clearCart: () => {
    set({ cart: [] });
  },

  toggleCart: () => {
    set({ isCartOpen: !get().isCartOpen });
  },

  purchase: () => {
    const { cart, balance } = get();
    const total = cart.reduce((sum, item) => {
      const price = item.discount
        ? item.price * (1 - item.discount / 100)
        : item.price;
      return sum + price * item.quantity;
    }, 0);

    if (total <= balance) {
      set({
        balance: balance - total,
        cart: [],
        isCartOpen: false
      });
      return true;
    }
    return false;
  }
})); 