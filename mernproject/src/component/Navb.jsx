import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Navb = () => {
  return (
    <>
      <div className="nav-ul">
        <Link className="nav-link" to="/">
          Product
        </Link>
        <Link className="nav-link" to="/add">
          Add Product
        </Link>
        <Link className="nav-link" to="/update">
          Update Product
        </Link>
        <Link className="nav-link" to="/logout">
          Log Out
        </Link>
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
        <Link className="nav-link" to="/signup">
          Signup
        </Link>
      </div>
    </>
  );
};

export default Navb;
