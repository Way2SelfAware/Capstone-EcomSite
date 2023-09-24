// React Hooks
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// My Components
import { useCart, CartProvider } from "./cartContext";
import "./cart.css";

function CartItem({ product }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="cartItem">
      <img src={product.image} alt={product.name} />
      <div className="description">
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
          <div className="quantity">
            <button onClick={() => decreaseQuantity(product.id)}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => increaseQuantity(product.id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cart() {
  const { cart, clearCart, calculateTotal, setCart } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert(
        "Your Cart is empty. Go pick out something nice for yourself, you deserve it!"
      );
    } else {
      alert(
        "Your order has been placed successfully! Our Oompa Loompas are working on your order."
      );
      clearCart();
    }
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>
          Your Cart is empty. Go pick out something nice for yourself, you
          deserve it!
          <br />
          <Link to="/">Treat yo self!</Link>
        </p>
      ) : (
        <>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <div className="cart-total">
            <p>Total: ${calculateTotal()}</p>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
