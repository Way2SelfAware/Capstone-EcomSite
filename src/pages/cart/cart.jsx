// React Hooks
import React, { useContext } from "react";
// My Components
import { useCart, CartProvider } from "./cartContext";
import "./cart.css";

function CartItem({ product, removeFromCart }) {
  return (
    <div className="cartItem">
      <img src={product.image} alt={product.name} />
      <div className="description">
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      </div>
    </div>
  );
}

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

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
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              removeFromCart={removeFromCart}
            />
          ))}
          <button className="checkout" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
