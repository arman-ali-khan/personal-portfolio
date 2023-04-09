import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-slate-600 container mx-auto h-12 flex items-center justify-between px-3'>
            <div className='text-xl font-bold uppercase flex items-center h-full '>Logo</div>
            {/* Nav link */}
            <div className='hidden sm:block'>
                <ul className='flex items-center gap-3'>
                    <li className='btn-link '>
                        <Link href={'#'}>Home</Link>
                    </li>
                    <li className='btn-link'>
                        <Link href={'#'}>Home</Link>
                    </li>
                    <li className='btn-link'>
                        <Link href={'#'}>Home</Link>
                    </li>
                    <li className='btn-link'>
                        <Link href={'#'}>Home</Link>
                    </li>
                </ul>
            </div>
            <div>
                <button className='btn-link'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;