import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import ProductDetailsPage from "./components/products/ProductDetailsPage";
import CategoryPage from "./components/reorganizeItems/CategoryPage";
import SortPage from "./components/reorganizeItems/sortPage";
import Login from "./pages/user/login";
import "./App.css";
import { CartProvider } from "./pages/cart/cartContext";

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/sort/:sortName" element={<SortPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
