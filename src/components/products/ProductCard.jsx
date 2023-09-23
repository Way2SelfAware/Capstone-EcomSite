// React Hooks
import React from "react";
import { Link } from "react-router-dom";
import { MdStarRate } from "react-icons/md";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div key={product.id} className="product">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>
        <MdStarRate />
        {product.rating.rate} ({product.rating.count})
      </p>
      <p className="description">
        <Link
          to={`/product/${product.id}`}
          className="product-details-page-link"
        >
          View more details
        </Link>
      </p>
      <p>${product.price}</p>
      <button className="addToCartBttn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
