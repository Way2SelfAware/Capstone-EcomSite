// React Hooks
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// My Components
import { useCart } from "../../pages/cart/cartContext";
import { fetchAllProducts } from "../../API/apiEndpoints";
import { MdStarRate } from "react-icons/md";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  // State Management
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const { addToCart } = useCart();

  // useEffect getAllProducts
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

  // Handle Sort Change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Handle Filter Change
  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  // Filter by selected category
  const filteredProducts = categoryFilter
    ? products.filter((product) => product.category === categoryFilter)
    : products;

  // Sort by selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low-to-high") {
      return a.price - b.price;
    } else if (sortBy === "price-high-to-low") {
      return b.price - a.price;
    }
    return 0;
  });

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
      <div className="controls">
        <label>Sort By:</label>
        <select className="selectSrtBttn" onChange={handleSortChange}>
          <option value="">None</option>
          <option value="price-low-to-high">Price Low to High</option>
          <option value="price-high-to-low">Price High to Low</option>
        </select>
        <label>Filter By Category:</label>
        <select className="selectCatBttn" onChange={handleCategoryFilterChange}>
          <option value="">None</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
        </select>
      </div>
      <span>
        <br />
        <br />
      </span>
      <div className="products">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
