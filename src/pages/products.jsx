/* eslint-disable react/jsx-key */
import { Fragment, useState } from 'react';
import CardProducts from '../components/Fragment/CardProducts';
import Button from '../components/Elements/Button';

const product = [
  {
    id: 1,
    name: 'Sepatu Baru',
    price: 1000000,
    image: '/images/shoes-1.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sunt nostrum cupiditate ad ab veritatis, natus totam facilis facere corrupti soluta tenetur 
      perspiciatis minima illo veniam. 
      Placeat doloremque inventore temporibus quae.`,
  },
  {
    id: 2,
    name: 'Sepatu seken',
    price: 500000,
    image: '/images/shoes-1.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sunt nostrum cupiditate ad ab veritatis, natus totam facilis facere corrupti soluta tenetur 
      perspiciatis minima illo veniam. 
      Placeat doloremque inventore temporibus quae.`,
  },
  {
    id: 3,
    name: 'Sepatu bekas',
    price: 350000,
    image: '/images/shoes-1.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sunt nostrum cupiditate ad ab veritatis, natus totam facilis facere corrupti soluta tenetur 
      perspiciatis minima illo veniam. 
      Placeat doloremque inventore temporibus quae.`,
  },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id : 1,
      qty: 1
    }
  ]);


  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
  }

  const handleAddToCart = (id) => {
    if (cart.find(item => item.id === id)) {
      setCart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item));
    } else {
      setCart([...cart, {id, qty: 1}]);
    }
  }
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="bg-black" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {product.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header image={product.image} />
              <CardProducts.Body name={product.name}>{product.description}</CardProducts.Body>
              <CardProducts.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
            </CardProducts>
          ))}
        </div>
        <div className="w-2/6 ">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2 ">Cart</h1>
          <table className='text-left table-auto border-separate border-spacing-x-5'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const Products = product.find(
                  (product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{Products.name}</td>
                    <td>
                      {Products.price.toLocaleString('id-ID', { 
                        style: 'currency', 
                        currency: 'IDR' 
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * Products.price).toLocaleString('id-ID', { 
                        style: 'currency', 
                        currency: 'IDR' 
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
