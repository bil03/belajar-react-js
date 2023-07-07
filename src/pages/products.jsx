import CardProducts from '../components/Fragment/CardProducts';

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
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {product.map((product) => (
        <CardProducts>
          <CardProducts.Header image={product.image} />
          <CardProducts.Body name={product.name}>{product.description}</CardProducts.Body>
          <CardProducts.Footer price={product.price} />
        </CardProducts>
      ))}
    </div>
  );
};

export default ProductsPage;
