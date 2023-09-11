// React Hooks
import React, { useState, useEffect, useContext } from "react";
// My Imports
import "./shop.css";
import AllProducts from "../../components/allProducts/allProducts";
import { ShopContext } from "../../context/shop-context";

const Shop = () => {
  return <AllProducts />;
};
export default Shop;
