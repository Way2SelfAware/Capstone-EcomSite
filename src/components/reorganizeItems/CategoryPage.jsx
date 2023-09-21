import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsByCategory } from "../../API/apiEndpoints";
import ProductCard from "../products/ProductCard";
import Categories from "./Categories";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProductsByCategory(categoryName)
      .then((data) => {
        setCategoryProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching category products:", error);
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="category-page">
      <div className="categories">
        <Categories />
      </div>
      <h1>{categoryName} Products</h1>
      <div className="products">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
