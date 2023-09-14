// React Hooks
import React, { useState, useEffect, useContext } from "react";
// My Imports
import "./shop.css";
import AllProducts from "../../components/allProducts/allProducts";
import Categories from "../../components/getAllCategories/GetAllCategories";
import SortProducts from "../../components/sortProducts/sortProducts";

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="categories">
        <Categories />
      </div>
      <div className="sort-products">
        <SortProducts/>
      </div>
      <div className="allproducts">
        <AllProducts />;
      </div>
    </div>
  );
};
export default Shop;
