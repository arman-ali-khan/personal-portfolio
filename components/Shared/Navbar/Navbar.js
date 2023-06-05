import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center sticky top-0 z-50">
      <div className="navbar min-h-12 py-0 z-50 w-full duration-300 md:w-9/12 backdrop-blur-lg backdrop-contrast-75  rounded-full">
        <div className="flex-1">
          <Link href={"/"} className="px-4 py-0 rounded-md normal-case text-xl">
            Logo
          </Link>
        </div>
        <div className="flex-1">
          <ul>
            <li>
              <Link href={"/"}>
                <button className="px-4 py-0 rounded hover:text-primary">
                  Home
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <div className="dropdown py-0 dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-sm btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content shadow bg-base-100 border border-warning rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
