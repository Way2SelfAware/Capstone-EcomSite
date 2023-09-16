import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchCartById,
  fetchUserById,
  fetchProductById,
  updateCartById,
} from "../../API/apiEndpoints";

const Cart = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState(null);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const userId = 2; // Hardcoded user
  const cartId = 3; // Hardcoded cart

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch cart data
        const cartData = await fetchCartById(cartId);
        setCart(cartData);

        // Fetch user data
        const userData = await fetchUserById(userId);
        setUser(userData);

        // Fetch product data for each product in the cart
        const productPromises = cartData.products.map((product) =>
          fetchProductById(product.productId)
        );
        const productData = await Promise.all(productPromises);
        setProducts(productData);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [cartId, userId]);

  const handleQuantityChange = async (productId, newQuantity) => {
    const updatedCart = { ...cart };
    const productIndex = updatedCart.products.findIndex(
      (product) => product.productId === productId
    );

    if (productIndex !== -1) {
      if (newQuantity <= 0) {
        // Remove the item from the cart if quantity is zero or negative
        updatedCart.products.splice(productIndex, 1);
      } else {
        updatedCart.products[productIndex].quantity = newQuantity;
      }

      try {
        // Update the cart using the PATCH method
        const response = await updateCartById(cartId, updatedCart); // Use the updateCartById function

        if (!response.ok) {
          throw new Error("Failed to update cart.");
        }

        // Fetch the updated cart data to ensure it matches the server's state
        const updatedCartData = await fetchCartById(cartId);
        setCart(updatedCartData);
      } catch (error) {
        setError(error);
      }
    }
  };

  const calculateTotalPrice = () => {
    let total = 0;
    products.forEach((product) => {
      const cartProduct = cart.products.find(
        (cartItem) => cartItem.productId === product.id
      );
      if (cartProduct) {
        total += product.price * cartProduct.quantity;
      }
    });
    return total.toFixed(2);
  };

  // Check if cart, user, and products are not null before rendering
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!cart || !user || !products) {
    return <div>Data not available</div>;
  }

  return (
    <div className="cart">
      <div>
        <h1 className="shopTitle">Your Cart Items</h1>
        {user && (
          <div>
            <p>
              Name: {user.name && user.name.firstname}{" "}
              {user.name && user.name.lastname}
            </p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        )}
      </div>
      <div className="cart-items">
        {products.length > 0 ? (
          products.map((product) => {
            const cartProduct = cart.products.find(
              (cartItem) => cartItem.productId === product.id
            );

            if (cartProduct && cartProduct.quantity > 0) {
              return (
                <div key={product.id} className="cartItem">
                  <img src={product.image} alt={product.title} />
                  <p className="description">Name: {product.title}</p>
                  <p className="cart-price">Price: ${product.price}</p>
                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          product.id,
                          getQuantityForProduct(product.id) - 1
                        )
                      }
                    >
                      -
                    </button>
                    <p className="cart-quantity">{cartProduct.quantity}</p>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          product.id,
                          getQuantityForProduct(product.id) + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })
        ) : (
          <p>Your Shopping Cart is Empty</p>
        )}
      </div>
      <div className="cart-total">
        <p>Total Price: ${calculateTotalPrice()}</p>
      </div>
    </div>
  );

  function getQuantityForProduct(productId) {
    const cartProduct = cart.products.find(
      (product) => product.productId === productId
    );
    return cartProduct ? cartProduct.quantity : 0;
  }
};

export default Cart;
