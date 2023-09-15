// React Hooks
import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
// My Imports
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Links to Pages */}
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <MdShoppingCart />
        </Link>
        <Link to="/login"> Login </Link>
      </div>
    </div>
  );
};

export default Navbar;
