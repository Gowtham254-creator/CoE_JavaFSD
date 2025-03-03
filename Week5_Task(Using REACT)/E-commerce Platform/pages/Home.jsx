import React from 'react';
import ProductCard from '../components/ProductCard';




const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      image: 'images/Shirt.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 9.99,
      image: 'images/Watch.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 12.99,
      image: 'images/Shoe.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 14.99,
      image: 'images/Glass.jpg',
    },
  ];
  

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Home;