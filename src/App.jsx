// React Hooks
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// My Imports
import Navbar from "./components/navbar/navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* NavBar */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
