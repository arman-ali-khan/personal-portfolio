import React from 'react';

const Hero = () => {
    return (
        <div className='sm:flex items-center justify-around my-14'>
            <div className='flex justify-center'>
                <div className='w-96 rounded-full overflow-hidden'>
                <img src="https://avatars.githubusercontent.com/u/74469015?v=4" alt="" />
                </div>
            </div>
            <div>
                <div className=''>
                    <h3 className='text-xl'><span className='text-4xl'>Hi</span> I am <br/> 
                    <span className='text-6xl'>Arman Ali Khan</span>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Hero;