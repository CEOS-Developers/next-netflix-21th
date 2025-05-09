import { create } from 'zustand';
import type { Product } from '@models/product';

interface ProductStore {
  products: Record<string, Product>;
  setProduct: (product: Product) => void;
  getProduct: (type: Product['type'], id: Product['id']) => Product | undefined;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: {},
  setProduct: (product) =>
    set((state) => ({
      products: { ...state.products, [`${product.type}-${product.id}`]: product },
    })),
  getProduct: (type, id) => get().products[`${type}-${id}`],
}));
