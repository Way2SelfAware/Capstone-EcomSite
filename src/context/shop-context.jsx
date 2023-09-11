// React Hooks
import React, { useState } from "react";
import { createContext } from "react";
// My Imports
import { getAllProducts } from "../API/apiEndpoints";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  const allProducts = getAllProducts();
  for (let i = 1; i <= allProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  // State Management
  const [cartItems, setCartItems] = useState({});
  // Cart Total
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = getAllProducts().find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  // Add to Cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  // Remove from Cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  // Update Cart
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  // Checkout Cart
  const checkout = () => {
    setCartItems(getDefaultCart());
  };
  // Contexter
  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
