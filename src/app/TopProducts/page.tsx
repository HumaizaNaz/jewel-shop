'use client';

import Image from 'next/image';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Raj Ratan Necklace', price: 100, imageUrl: '/jw-1.jpg' }, 
  { id: 2, name: 'Golden Halo Necklace', price: 150, imageUrl: '/jw-2.jpg' },
  { id: 3, name: 'Sapphire Glow Necklace', price: 200, imageUrl: '/jw-3.jpg' },
  { id: 4, name: 'Golden Royal Bangles', price: 250, imageUrl: '/jw-4.jpg' }, 
  { id: 5, name: 'Golden Princess Bridal Set', price: 300, imageUrl: '/jw-5.jpg' }, 
  { id: 6, name: 'Majestic Bridal Choker', price: 350, imageUrl: '/jw-6.jpg' }, 
  { id: 7, name: 'Sapphire Bridal Necklace', price: 200, imageUrl: '/jw-7.jpg' }, 
  { id: 8, name: 'Bridal Empress Bangles', price: 300, imageUrl: '/jw-8.jpg' }, 
];


const TopProducts = () => {
  return (
    <div className="my-24">
      <h2 className="text-3xl font-semibold text-orange-950 text-center mb-6">Top Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-72 object-cover mb-4"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-orange-950">{product.name}</h3>
              <p className="text-lg font-medium text-orange-400 mb-4">${product.price}</p>
              <Link href={`/product/${product.id}`}>
                <button className="w-full bg-gradient-to-r from-orange-800 to-orange-950 text-white py-2 rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
