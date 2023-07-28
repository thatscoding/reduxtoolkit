import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" justify-between  h-12 bg-green-100 text-black font-bold flex items-center px-8">
      <Link to="/">
        <h1>myStore</h1>
      </Link>
      <div className="">
        <ul className="flex gap-12">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
