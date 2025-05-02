import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center text-accent'>
            <div className=""></div>
            <div className="nav flex gap-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="loin-btn flex gap-5">
                <img src={user} alt="" />
                <Link to='/auth/login' className='btn btn-primary px-8'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;