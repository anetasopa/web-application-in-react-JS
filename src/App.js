import React, { useState, useEffect } from 'react';
import { ProductPage } from './Component/ProductPage';
import { fetchProducts } from './fetch-poducts';
import { ProductItem } from './Component/Productitem';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const products = await fetchProducts();

      setProducts(products);
    } 

    getData()
  }, []);

  return (
    <ProductPage>
      {products.map(product => 
        <ProductItem 
          key={product.image}
          product={product}
        />
      )}
    </ProductPage>
  )
}