// API endpoints as Functions:
// Function to fetch all products
export async function fetchAllProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Function to fetch a single product by ID
export async function fetchProductById(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// Function to fetch products with a limit
export async function fetchProductsLimit(limit) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products?limit=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching limited products:", error);
    return [];
  }
}

// Function to fetch products sorted by 'asc' or 'desc'
export async function fetchProductsSorted(sortOrder) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products?sort=${sortOrder}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching sorted products:", error);
    return [];
  }
}

// Function to fetch all product categories
export async function fetchAllCategories() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// Function to fetch products in a specific category
export async function fetchProductsByCategory(category) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
}

// Function to add a new product
export async function addProduct(newProduct) {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding a product:", error);
    return null;
  }
}

// Function to update a product by ID
export async function updateProductById(id, updatedProduct) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating a product:", error);
    return null;
  }
}

// Function to delete a product by ID
export async function deleteProductById(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting a product:", error);
    return null;
  }
}

// Functions for Cart API
// Function to fetch all carts
export async function fetchAllCarts() {
  try {
    const response = await fetch("https://fakestoreapi.com/carts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching carts:", error);
    return [];
  }
}

// Function to fetch a single cart by ID
export async function fetchCartById(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/carts/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    return null;
  }
}

// Function to fetch carts with a limit
export async function fetchCartsLimit(limit) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/carts?limit=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching limited carts:", error);
    return [];
  }
}

// Function to fetch carts sorted by 'asc' or 'desc'
export async function fetchCartsSorted(sortOrder) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/carts?sort=${sortOrder}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching sorted carts:", error);
    return [];
  }
}

// Function to fetch carts in a date range
export async function fetchCartsByDateRange(startDate, endDate) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/carts?startdate=${startDate}&enddate=${endDate}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching carts by date range:", error);
    return [];
  }
}

// Function to fetch user carts by user ID
export async function fetchUserCarts(userId) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/carts/user/${userId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user carts:", error);
    return [];
  }
}

// Function to add a new cart
export async function addCart(newCart) {
  try {
    const response = await fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify(newCart),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding a cart:", error);
    return null;
  }
}

// Function to update a cart by ID
export async function updateCartById(id, updatedCart) {
  try {
    const response = await fetch(`https://fakestoreapi.com/carts/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedCart),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating a cart:", error);
    return null;
  }
}

// Function to delete a cart by ID
export async function deleteCartById(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/carts/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting a cart:", error);
    return null;
  }
}

// Functions for User API
// Function to fetch all users
export async function fetchAllUsers() {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

// Function to fetch a single user by ID
export async function fetchUserById(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/users/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

// Function to fetch users with a limit
export async function fetchUsersLimit(limit) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/users?limit=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching limited users:", error);
    return [];
  }
}

// Function to fetch users sorted by 'asc' or 'desc'
export async function fetchUsersSorted(sortOrder) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/users?sort=${sortOrder}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching sorted users:", error);
    return [];
  }
}

// Function to add a new user
export async function addUser(newUser) {
  try {
    const response = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding a user:", error);
    return null;
  }
}

// Function to update a user by ID
export async function updateUserById(id, updatedUser) {
  try {
    const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating a user:", error);
    return null;
  }
}

// Function to delete a user by ID
export async function deleteUserById(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting a user:", error);
    return null;
  }
}

// Function for user login
export async function userLogin(username, password) {
  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
}
