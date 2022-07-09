import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className='p-3 bg-white shadow-xl flex flex-col items-center gap-2.5 lg:flex-row lg:justify-around'>
                <strong className='text-3xl font-title font-semibold'>The<span className='text-primary-100'>Cocktail</span>DB</strong>
                <ul className='font-medium lg:flex lg:gap-5'>
                    <li><Link to='/' className='text-xl font-bold hover:text-primary-100'>Home</Link></li>
                    <li><Link to='/About' className='text-xl font-bold hover:text-primary-100'>About</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;