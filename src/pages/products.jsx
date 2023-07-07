import Button from "../components/Elements/Button";
import CardProducts from "../components/Fragment/CardProducts";

const Products = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProducts>
        <CardProducts.Header image="/images/shoes-1.jpg" />
        <CardProducts.Body title="sepatu baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum cupiditate ad ab veritatis, natus totam facilis facere corrupti soluta tenetur perspiciatis minima illo veniam. Placeat doloremque inventore temporibus quae.
        </CardProducts.Body>
        <CardProducts.Footer price="Rp.1000,000" />
      </CardProducts>
      <CardProducts>
        <CardProducts.Header image="/images/shoes-1.jpg" />
        <CardProducts.Body title="sepatu baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum cupiditate ad ab veritatis, natus totam facilis facere corrupti soluta tenetur perspiciatis minima illo veniam. Placeat doloremque inventore temporibus quae.
        </CardProducts.Body>
        <CardProducts.Footer price="Rp.1000,000" />
      </CardProducts>
    </div>
  );
};

export default Products;
