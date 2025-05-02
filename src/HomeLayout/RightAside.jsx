import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../components/FindUs';
import Qzone from '../components/Qzone';
import BgColor from '../components/BgColor';

const RightAside = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
            <BgColor></BgColor>
        </div>
    );
};

export default RightAside;