import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <img className='w=[400]' src={logo} alt="" />
            <p className='text-accent'>journalism Without Fear Or Favour</p>
            <p className='text-accent font-semibold'>{format(new Date, "EEEE , MMMM MM , yyyy")}</p>
        </div>
    );
};

export default Header;