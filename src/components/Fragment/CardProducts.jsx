/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

const CardProducts = (props) => {
    const { children } = props
    return ( 
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow-md mx-3 my-2 flex flex-col justify-between">
        {children}
        </div> 
    );
    
}

const Header = (props) => {
    const { image, id } = props;
    return (
      <Link to={`/product/${id}`}>
        <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover" />
      </Link>
    );
}

const Body = (props) => {
    const { children, name } = props
    return(
        <div className="px-5 pb-5 h-full">
        <a href="">
          <h5 className="text-ml font-semibold tracking-tight text-white">
            {name.substring(0, 20)} ...
          </h5>
          <p className="text-s text-white">
            {children.substring(0, 100)}...
          </p>
        </a>
      </div>
    )
}

const Footer = (props) => {
    const dispatch = useDispatch();
    const { price, id } = props
    return (
      <div className="flex item-center justify-between px-5 pb-5">
        <span className="text-xm font-bold text-white">{price.toLocaleString('id-ID', { style: 'currency', currency: 'USD' })}</span>
        <Button classname="bg-blue-600" onClick={() => dispatch(addToCart({id, qty:1}))}>
          Add To Cart
        </Button>
      </div>
    );
}

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;