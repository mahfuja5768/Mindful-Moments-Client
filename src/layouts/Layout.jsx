import { Link } from "react-router-dom";
import Navbar from "../pages/shared/Footer/Navbar/Navbar";


const Layout = ({ children }) => {
    return (
        <div className="drawer text-white">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full  bg-primary fixed z-10">
         <div className="navbar max-w-screen-xl mx-auto">
         <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 "><Link to='/' className=" cursor-pointer font-bold text-2xl">Mindful-Moments</Link></div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal text-lg font-semibold">
             <Navbar></Navbar>
             
            </ul>
          </div>
         </div>
        </div>
        {children}
      </div>
      <div className="drawer-side z-10 to-black">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-secondary">
        <Navbar></Navbar>
         
        </ul>
      </div>
    </div>
    );
};

export default Layout;