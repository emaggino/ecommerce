import React, { createContext, useState, useEffect } from 'react';
//import { useSelector, useDispatch } from 'react-redux';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([]);
  //const products = useSelector((state) => state.productReducer.value);
  //const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProduct(data);
      console.log(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {' '}
      {children}{' '}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
