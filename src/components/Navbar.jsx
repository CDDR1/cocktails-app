import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className='p-3 bg-white shadow-xl flex flex-col items-center gap-2.5'>
                <strong className='text-xl font-title font-semibold'>The<span className='text-primary-100'>Cocktail</span>DB</strong>
                <ul className='font-medium'>
                    <li><Link to='/' className='hover:text-primary-100'>Home</Link></li>
                    <li><Link to='/About' className='hover:text-primary-100'>About</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;