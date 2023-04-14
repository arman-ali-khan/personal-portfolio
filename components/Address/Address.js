import React from 'react';
import {TbLocation } from 'react-icons/tb'

const Address = () => {
    return (
        <div className='w-full border h-full rounded-lg p-4'>
            <div className='my-3'>
                <h2 className='text-xl font-bold font-gumela'>Address</h2>
            </div>
            <div className='flex flex-col gap-2'>
                <a href="#" className="flex justify-between items-center">
                    <p className='flex items-center gap-2 font-bold'>
                        <span className='text-xl'><TbLocation /></span>
                        Location
                        </p>
                    <p>Bangladesh</p>
                </a>
                <a href="#" className="flex justify-between items-center">
                    <p className='flex items-center gap-2 font-bold'>
                        <span className='text-xl'><TbLocation /></span>
                        Location
                        </p>
                    <p>Bangladesh</p>
                </a>
            </div>
        </div>
    );
};

export default Address;