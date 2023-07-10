/* eslint-disable react/jsx-key */
import { Fragment } from 'react';
import CardProducts from '../components/Fragment/CardProducts';
import Button from '../components/Elements/Button';

const product = [
  {
    id: 1,
    name: 'Sepatu Baru',
    price: '1.000.000',
    image: '/images/shoes-1.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sunt nostrum cupiditate ad ab veritatis, natus totam facilis facere corrupti soluta tenetur 
      perspiciatis minima illo veniam. 
      Placeat doloremque inventore temporibus quae.`,
  },
  {
    id: 2,
    name: 'Sepatu Baru',
    price: '1.000.000',
    image: '/images/shoes-1.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sunt nostrum cupiditate ad ab veritatis, natus totam facilis facere corrupti soluta tenetur 
      perspiciatis minima illo veniam. 
      Placeat doloremque inventore temporibus quae.`,
  },
  {
    id: 3,
    name: 'Sepatu Baru',
    price: '1.000.000',
    image: '/images/shoes-1.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sunt nostrum cupiditate ad ab veritatis, natus totam facilis facere corrupti soluta tenetur 
      perspiciatis minima illo veniam. 
      Placeat doloremque inventore temporibus quae.`,
  },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
  }
  return (
    <Fragment>
      <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
        {email}
        <Button className='bg-black' onClick={handleLogout}>Log Out</Button>
      </div>
      <div className="flex justify-center py-5">
        {product.map((product) => (
          <CardProducts key={product.id}>
            <CardProducts.Header image={product.image} />
            <CardProducts.Body name={product.name}>{product.description}</CardProducts.Body>
            <CardProducts.Footer price={product.price} />
          </CardProducts>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
