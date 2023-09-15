// React Hooks
import React, { useState, useEffect, useContext } from "react";
// My Imports
import AllProducts from "../../components/products/allProducts";
import Categories from "../../components/categories/Categories";
import SortProducts from "../../components/sortProducts/sortProducts";

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="shopTitle">
        <h1>Scamazon</h1>
      </div>
      <div className="categories">
        <Categories />
      </div>
      <div className="sort-products">
        <SortProducts />
      </div>
      <div className="allproducts">
        <AllProducts />;
      </div>
    </div>
  );
};
export default Shop;
