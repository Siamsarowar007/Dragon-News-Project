import React from 'react';
import Marquee from 'react-fast-marquee';

const LatesNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-2'>
            <p className='bg-secondary text-base-100 px-3 py-2'>Latest</p>
            <Marquee pauseOnHover={true} gradient={true}>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptate architecto</p>
                {/* <p className='font-bold'>মুননী আইলেই শুরু হয় দাঙ্গা, শান্তি পায় না একটুও,কথার খোঁচায় বাজে সাইরেন, লেগে যায় সবার রক্তচাপ উঁচু,বলে সবাই—"দূর ভাই, আবার শুরু, এ তো চলন্ত হাই ভোল্টেজ তুফান!" ⚡😆</p> */}
            </Marquee>
        </div>
    );
};

export default LatesNews;