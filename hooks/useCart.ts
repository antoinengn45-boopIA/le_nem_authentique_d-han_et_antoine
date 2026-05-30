// hooks/useCart.ts
import { useState } from 'react';

export const useCart = () => {
  const [items, setItems] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setItems((prev) => [...prev, product]);
    alert(`${product.name} ajouté au panier !`);
  };

  return { items, addToCart };
};
