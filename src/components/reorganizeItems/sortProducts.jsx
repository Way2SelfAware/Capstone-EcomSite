// React Hooks
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// My components
import { fetchProductsSorted } from "../../API/apiEndpoints";

const SortProducts = ({ sortOrder }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Fetching products based on sortOrder
    fetchProductsSorted(sortOrder)
      .then((data) => {})
      .catch((error) => {
        console.error("Error fetching sort:", error);
      });
  }, [sortOrder]);

  const handleSort = (sortOrder) => {
    navigate(`/sort/${sortOrder}`);
  };

  return (
    <div className="categories">
      <ul>
        <p>Sort</p>
        <button className="selectSrtBttn" onClick={() => handleSort("asc")}>
          Ascending
        </button>
        <button className="selectSrtBttn" onClick={() => handleSort("desc")}>
          Descending
        </button>
      </ul>
    </div>
  );
};

export default SortProducts;
