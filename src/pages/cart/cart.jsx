// React Hooks
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// My Imports
import "./cart.css";
import { fetchProductById } from "../../API/apiEndpoints";

const Cart = ({ id }) => {
  // useNavigate
  const navigate = useNavigate();
  // State Management
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  // variables
  const totalAmount = 0;

  // Fetch Single Product Details
  useEffect(() => {
    fetch(fetchProductById(id))
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching (getSingleProduct) details:", error);
      });
  }, [id]);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          product && <CartItem data={product} />
        )}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
