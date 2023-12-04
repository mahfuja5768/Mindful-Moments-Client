import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import CustomButton from "../CustomButton/CustomButton";

const Footer = () => {
  return (
    <div className=" p-10 bg-primary text-white">
      <footer>
        <Container>
          <div className=" py-12 md:py-16  grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:grid-cols-2">
              <div className="flex flex-col gap-3 ">
                <Link to="/">
                  {/* <img src={logo} alt="" className="mb-3 w-52 h-24" /> */}
                </Link>
                <h2 className="ms-5 font-bold text-3xl  mb-2 ">
                  Mindful Moments
                </h2>
                <h3 className="ms-5 font-bold text-xl  mb-2 ">
                  QUESTION OR FEEDBACK?
                </h3>
                <p className="flex items-center gap-2 ms-5">
                  <FaPhone className="text-lg"></FaPhone>{" "}
                  <span>+099 222 111</span>
                </p>
                <p className="flex items-center gap-2 ms-5">
                  <FaMailBulk className="text-lg"></FaMailBulk>{" "}
                  <span>@mindfulMoments.com</span>
                </p>
              </div>
            </div>

            <div className="">
              <nav className="flex flex-col gap-4 list-none">
                <header className="font-bold text-2xl  mb-2 ">
                  Quick Menu
                </header>
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
                    Wishlist
                  </NavLink>
                </li>
              </nav>
            </div>
            <nav className="">
              <header className="font-bold text-2xl  text-start md:text-center">
                Social links
              </header>
              <div className="flex justify-start md:items-center md:flex-col  md:justify-center gap-12 my-6">
                <a
                  href="https://www.facebook.com/"
                  className="hover:-translate-y-2 duration-300"
                  target="blank"
                >
                  <FaFacebookF className="text-xl "></FaFacebookF>
                </a>
                <a
                  href="https://www.dribbble.com/"
                  className="hover:-translate-y-2 duration-300"
                  target="blank"
                >
                  <FaLinkedin className="text-xl"></FaLinkedin>
                </a>
                <a
                  href="https://www.twitter.com/"
                  className="hover:-translate-y-2 duration-300"
                  target="blank"
                >
                  <FaTwitter className="text-xl"></FaTwitter>
                </a>
              </div>
            </nav>
            <div>
              <h2 className="font-bold text-3xl  mb-2 ">About Us</h2>
              <p>
                Welcome to  <span className="font-bold">Mindful Moments</span>, your go-to source for blog
                content. Explore our articles and stay informed!
              </p>
            </div>
          </div>
        </Container>
        <div className=" flex  justify-center text-center items-center flex-end  py-3 px-3">
          <p>
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved
            Here.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
