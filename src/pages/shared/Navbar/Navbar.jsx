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
      <li>
        <NavLink
          to="/add-blogs"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-white bg-transparent hover:text-white hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-white hover:bg-transparent"
          }
        >
          Add Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/featured-blogs"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-white bg-transparent hover:text-white hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-white hover:bg-transparent"
          }
        >
          Featured Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-white bg-transparent hover:text-white hover:bg-transparent decoration-2 underline-offset-8"
              : "bg-transparent hover:text-white hover:bg-transparent"
          }
        >
          Bookmark
        </NavLink>
      </li>
    </>
  );
};

export default Navbar;
