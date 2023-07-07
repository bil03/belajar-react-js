import Button from "../Elements/Button";

const CardProducts = (props) => {
    const { children } = props
    return ( 
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-md mx-2">
        {children}
        </div> 
    );
    
}

const Header = (props) => {
    const { image } = props;
    return (
      <a href="#">
        <img src={image} alt="product" className="p-8 rounded-t-lg" />
      </a>
    );
}

const Body = (props) => {
    const { children, title } = props
    return(
        <div className="px-5 pb-5">
        <a href="">
          <h5 className="text-ml font-semibold tracking-tight text-white">
            {title}
          </h5>
          <p className="text-s text-white">
            {children}
          </p>
        </a>
      </div>
    )
}

const Footer = (props) => {
    const { price } = props
    return (
      <div className="flex item-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-white">{price}</span>
        <Button classname="bg-blue-600">Add To Cart</Button>
      </div>
    );
}

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;