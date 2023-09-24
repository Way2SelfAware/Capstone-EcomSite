// React Hooks
import React, { useState, useEffect, useContext } from "react";
// My Imports
import AllProducts from "../../components/products/allProducts";

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="shopTitle">
        <h1>Scamazon</h1>
      </div>
      <div className="allproducts">
        <AllProducts />;
      </div>
    </div>
  );
};
export default Shop;
