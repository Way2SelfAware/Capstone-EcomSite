// React Hooks
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// My Imports
import { fetchAllProducts } from "../../API/apiEndpoints";
import { MdStarRate } from "react-icons/md";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  // State Management
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [sortBy, setSortBy] = useState("");
  // const [categoryFilter, setCategoryFilter] = useState("");


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
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} /> // Use ProductCard component
        ))}
      </div>
    </div>
  );
};
export default AllProducts;
