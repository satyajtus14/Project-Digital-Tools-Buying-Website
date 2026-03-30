import React from 'react';
import { FiShoppingCart } from "react-icons/fi";


const NavBar = ({carts}) => {
    return (
        <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="flex items-center font-bold text-3xl bg-gradient-to-t from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent ">
             DigiTools
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-8 px-1 text-md">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
         
          <a> <FiShoppingCart />{carts.length}</a>
          <a> Login</a>
          <a className="btn bg-gradient-to-t from-[#4f39f6] to-[#9514fa] rounded-full text-white">Get Started</a>
        </div>
      </div>
    );
};

export default NavBar;