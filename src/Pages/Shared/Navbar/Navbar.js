import React from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi'

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/home' className='hover:bg-accent hover:text-[#D4D9E3]'>Home</Link></li>
        <li><Link to='/about' className='hover:bg-accent hover:text-[#D4D9E3]'>About</Link></li>
        <li><Link to='/appointment' className='hover:bg-accent hover:text-[#D4D9E3]'>Appointment</Link></li>
        <li><Link to='/reviews' className='hover:bg-accent hover:text-[#D4D9E3]'>Reviews</Link></li>
        <li><Link to='/contactUs' className='hover:bg-accent hover:text-[#D4D9E3]'>Contact Us</Link></li>
        <li><Link to='/login' className='hover:bg-accent hover:text-[#D4D9E3]'>Login</Link></li>
    </>
    return (
        <div class="navbar bg-base-100 justify-between container mx-auto">
            <div class="lg:navbar-start w-full justify-between">
                <div class="dropdown ">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <HiMenuAlt1 className='text-3xl' />
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='' class="btn btn-ghost normal-case text-xl hover:bg-accent hover:text-[#D4D9E3]">Doctors Protal</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;