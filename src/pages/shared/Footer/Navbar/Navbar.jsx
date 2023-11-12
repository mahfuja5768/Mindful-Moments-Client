import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-white bg-transparent hover:text-white hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-white hover:bg-transparent"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-blogs"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-white bg-transparent hover:text-white hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-white hover:bg-transparent"
          }
        >
          All Blogs
        </NavLink>
      </li>
    </>
  );
};

export default Navbar;
