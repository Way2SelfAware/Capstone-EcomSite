// React Hooks
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// My Imports
import { fetchProductById } from "../../API/apiEndpoints";
import { MdStarRate } from "react-icons/md";
import { useCart } from "../../pages/cart/cartContext";

const ProductDetailsPage = () => {
  // useParams
  const { id } = useParams();

  // State Management
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Single Product Details
  useEffect(() => {
    fetchProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
        console.log(data);
        console.log(id);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.error("Error fetching product details from API:", err);
      });
  }, [id]);

  const { addToCart } = useCart();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>
        <MdStarRate />
        {product.rating.rate} ({product.rating.count})
      </p>
      <p>{product.category}</p>
      <p className="description">{product.description}</p>
      <p>${product.price}</p>
      <button className="addToCartBttn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      <Link to="/">Back to Shop</Link>
    </div>
  );
};

export default ProductDetailsPage;
