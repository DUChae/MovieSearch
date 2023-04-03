import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
