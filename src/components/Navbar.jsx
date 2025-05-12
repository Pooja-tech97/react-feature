import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
      <Link to="/dashboard" style={{ marginRight: "15px" }}>
        Dashboard
      </Link>
      <Link to="/profile" style={{ marginRight: "15px" }}>
        Profile
      </Link>
      <Link to="/counter">Counter</Link>
    </nav>
  );
};

export default Navbar;
