// Products - GET
export const getAllProducts = "https://fakestoreapi.com/products";
export const getSingleProduct = (productId) =>
  `https://fakestoreapi.com/products/${productId}`;

export const limitProducts = "https://fakestoreapi.com/products?limit=5";
export const sortProducts = "https://fakestoreapi.com/products?sort=desc";
export const getAllCategories = "https://fakestoreapi.com/products/categories";
export const getProductsInCategory =
  "https://fakestoreapi.com/products/category/jewelery";

// Products - POST or PATCH
export const addNewProduct = "https://fakestoreapi.com/products";
export const updateProduct = "https://fakestoreapi.com/products/7";

// Products - DELETE
export const deleteProduct = "https://fakestoreapi.com/products/6";

// Cart - GET
export const getAllCarts = "https://fakestoreapi.com/carts";
export const getSingleCart = "https://fakestoreapi.com/carts/5";
export const limitCarts = "https://fakestoreapi.com/carts?limit=5";
export const sortCarts = "https://fakestoreapi.com/carts?sort=desc";
export const getCartsDateRange =
  "https://fakestoreapi.com/carts?startdate=2019-12-10&enddate=2020-10-10";
export const getUserCarts = "https://fakestoreapi.com/carts/user/2";

// Cart - POST
export const addNewCart = "https://fakestoreapi.com/carts";

// Cart - PUT or PATCH
export const updateCart = "https://fakestoreapi.com/carts/7";

// Cart - DELETE
export const deleteCart = "https://fakestoreapi.com/carts/6";

// Users - GET
export const getAllUsers = "https://fakestoreapi.com/users";
export const getSingleUser = "https://fakestoreapi.com/users/1";
export const limitUsers = "https://fakestoreapi.com/users?limit=5";
export const sortUsers = "https://fakestoreapi.com/users?sort=desc";

// Users - POST
export const addNewUser = "https://fakestoreapi.com/users";

// Users - PUT or PATCH
export const updateUser = "https://fakestoreapi.com/users/7";

// Users - DELETE
export const deleteUser = "https://fakestoreapi.com/users/6";

// Login
export const userLogin = "https://fakestoreapi.com/auth/login";
