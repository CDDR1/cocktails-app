import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <span>TheCocktailDB</span>
                <ul>
                    <li><Link to='/Home'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;