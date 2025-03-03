import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-700 py-4">


      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-yellow-200 text-center flex-1">
          A Simple E-Commerce Platform
        </h1>
        <ul className="flex justify-between items-center">
          <li className="mr-6">
            <Link to="/" className="text-white hover:text-green-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-white hover:text-red-300">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
