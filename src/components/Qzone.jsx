import React from 'react';
import classImg from '../assets/class.png'
import playGroundImg from '../assets/playground.png'
import swimmingImg from '../assets/swimming.png'
const Qzone = () => {
    return (
        <div className='bg-base-200 px-4 pt-2'>
            <h1 className='font-bold mb-5'>Q-Zone</h1>
            <div className="space-y-5">
                <img src={classImg} alt="" />
                <img src={swimmingImg} alt="" />
                <img src={playGroundImg} alt="" />
            </div>

        </div>
    );
};

export default Qzone;