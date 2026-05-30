// app/page.tsx
'use client';
import { useCart } from '../hooks/useCart';

const menu = [
  { id: 1, name: 'Burger Classique', price: 10 },
  { id: 2, name: 'Pizza Margherita', price: 12 },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Menu hanetantoine</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menu.map((item) => (
          <div key={item.id} className="card">
            <h2 className="text-xl">{item.name}</h2>
            <p className="text-gray-600">{item.price}€</p>
            <button 
              onClick={() => addToCart(item)}
              className="mt-2 bg-black text-white px-4 py-2 rounded"
            >
              Ajouter
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
