/* eslint-disable react/jsx-key */
import { Fragment, useEffect, useState } from 'react';
import CardProducts from '../components/Fragment/CardProducts';
import { getProducts } from '../services/product.service';
import { useLogin } from '../hooks/useLogin';
import TableCart from '../components/Fragment/TableCart';
import NavBar from '../components/Layout/NavBar';

const ProductsPage = () => {
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  useLogin();

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem('cart')) || []);
  // }, []);

  useEffect (() => {
    getProducts((data) => {
      setProducts(data);  
    });
  }, [])

  return (
    <Fragment>
      <NavBar />
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 && 
            products.map((product) => (
            <CardProducts key={product.title}>
              <CardProducts.Header image={product.image} id={product.id} />
              <CardProducts.Body name={product.title}>{product.description}</CardProducts.Body>
              <CardProducts.Footer price={product.price} id={product.id} />
            </CardProducts>
          ))}
        </div>
        <div className="w-2/6 ">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2 ">Cart</h1>
          <TableCart products={products}/>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
