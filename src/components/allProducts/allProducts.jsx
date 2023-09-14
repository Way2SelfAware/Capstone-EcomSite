// React Hooks
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// My Imports
import { fetchAllProducts } from "../../API/apiEndpoints";
import { MdStarRate } from "react-icons/md";

const AllProducts = () => {
  // State Management
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //useEffect getAllProducts
  useEffect(() => {
    fetchAllProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.error("Error fetching (getAllProducts) from API:", error);
      });
  }, []);

  // Loading Message for user
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  // Error Message for user
  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Scamazon</h1>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>
              <MdStarRate />
              {product.rating.rate}({product.rating.count})
            </p>
            <p className="description">
              {/* {product.description} <br /> */}
              <Link
                to={`/product/${product.id}`}
                className="product-details-page-link"
              >
                View more details
              </Link>
            </p>
            <p>${product.price}</p>
            <button
              className="addToCartBttn"
              onClick={() => addToCart(product.id)}
            >
              {" "}
              Add to Cart{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllProducts;
