// app/page.tsx
'use client';
import { useCart } from '../hooks/useCart';

const menu = [
  { id: 1, name: 'Burger Signature', price: 12.50 },
  { id: 2, name: 'Salade César', price: 9.00 },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <main className="max-w-4xl mx-auto p-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold">hanetantoine</h1>
        
        {/* Bouton Tally intégrant les attributs demandés */}
        <button 
          data-tally-open="EkML7o" 
          data-tally-emoji-text="👋" 
          data-tally-emoji-animation="wave"
          className="btn-primary"
        >
          Contact & Suggestions
        </button>
      </header>

      <section>
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <div className="grid gap-6">
          {menu.map((item) => (
            <div key={item.id} className="card flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.price.toFixed(2)}€</p>
              </div>
              <button 
                onClick={() => addToCart(item)}
                className="btn-primary"
              >
                Ajouter
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
