import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-center sticky top-0 z-50'>
      <div className="navbar z-50 w-full duration-300 md:w-9/12 backdrop-blur-lg backdrop-contrast-75  rounded-full">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-1">
    <ul>
      <li><button className='btn btn-sm btn-warning'>Home</button></li>
    </ul>
  </div>
  <div className="flex-none">
   
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 border border-warning rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  );
};

export default Navbar;