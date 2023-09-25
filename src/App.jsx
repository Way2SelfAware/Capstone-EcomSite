import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import ProductDetailsPage from "./components/products/ProductDetailsPage";
import Login from "./pages/user/login";
import "./App.css";
import { CartProvider } from "./pages/cart/cartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
