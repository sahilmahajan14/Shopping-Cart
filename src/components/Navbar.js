import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const { cart } = useSelector((state) => state);

    return (
        <nav className="bg-slate shadow-md">
            <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto px-5">
                <NavLink to="/">
                    <div className="flex items-center">
                        <img src="../logo.png" className="h-14" alt="logo" />
                    </div>
                </NavLink>
                <div className="flex space-x-8 items-center">
                    <NavLink to="/" className="text-2xl text-white hover:text-white transition-colors duration-300">
                        Home
                    </NavLink>
                    <NavLink to="/cart" className="relative text-2xl text-white hover:text-white transition-colors duration-300">
                        <FaShoppingCart />
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                                {cart.length}
                            </span>
                        )}
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
