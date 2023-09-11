// React Hooks
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// My Imports
import { getSingleProduct } from "../../API/apiEndpoints";
import { MdStarRate } from "react-icons/md";
import { ShopContext } from "../../context/shop-context";
import "./ProductDetailsPage.css";
const ProductDetailsPage = () => {
  // Parameters Management
  const { productId } = useParams();
  // State Managment
  const [product, setProduct] = useState(null);
  // Shop Contexter
  const { addToCart } = useContext(ShopContext);
  // Fetch Single Product Details
  useEffect(() => {
    fetch(`${getSingleProduct}/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching (getSingleProduct) details:", error);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>
        <MdStarRate />
        {product.rating.rate}({product.rating.count})
      </p>
      <p>{product.category}</p>
      <p className="description">{product.description}</p>
      <p>${product.price}</p>
      <button 
      className="addToCartBttn"
      onClick={()=> addToCart(product.id)}> Add to Cart </button>
      <Link to="/">Back to Shop</Link>
    </div>
  );
};

export default ProductDetailsPage;
