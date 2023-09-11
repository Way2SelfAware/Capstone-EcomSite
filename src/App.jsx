// React Hooks
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// My Imports
import Navbar from "./components/navbar/navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";
import "./App.css";
import { ShopContextProvider } from "./context/shop-context";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          {/* NavBar */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/product/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
