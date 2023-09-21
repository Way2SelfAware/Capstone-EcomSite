// Categories.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllCategories } from "../../API/apiEndpoints";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchAllCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="categories">
      <ul>
        <p>Categories</p>
        {categories.map((category) => (
          <Link to={`/category/${category}`} key={category}>
            {/* Use Link to navigate to the category page */}
            <button className="selectCatBttn">{category}</button>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
