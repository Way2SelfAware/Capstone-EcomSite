import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsSorted } from "../../API/apiEndpoints";
import ProductCard from "../products/ProductCard";
import SortProducts from "./sortProducts";

const SortPage = () => {
  const { sortOrder } = useParams();
  const [sortProducts, setSortProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProductsSorted(sortOrder)
      .then((data) => {
        // Sort products based on sortOrder
        const sortedData =
          sortOrder === "asc"
            ? data.sort((a, b) => a.price - b.price)
            : data.sort((a, b) => b.price - a.price);

        setSortProducts(sortedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching category products:", error);
        setLoading(false);
      });
  }, [sortOrder]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="category-page">
      <div className="categories">
        <SortProducts />
      </div>
      <h1>{sortOrder} Products</h1>
      <div className="products">
        {sortProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SortPage;
