import { FaCalendarDays, FaHeart, FaUser } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addToWishlist } from "../../../../api/blogs";
import CustomButton from "../../../shared/CustomButton/CustomButton";
import Swal from "sweetalert2";
import useAuth from "../../../../components/hooks/useAuth";

const RecentBlogCard = ({ blog }) => {
  // console.log(blog);
  const { author, date, image, likedCount, topics, title, _id } = blog;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleToWishlist = async (id) => {
    // console.log("c", id);
    const addBlog = {
      author,
      blogId: id,
      date,
      image,
      likedCount,
      topics,
      title,
      email: user?.email,
    };
    // console.log(addBlog);
    if (user && user.email) {
      const res = await addToWishlist(addBlog);
      Swal.fire({
        title: "Success!",
        text: "Successfully added to wishlist!",
        icon: "success",
        confirmButtonText: "Done",
      });
      navigate("/wishlist");
    } else {
      Swal.fire({
        title: "Error!",
        text: "You are not login, please login first!",
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="text-black shadow-lg">
      <div className=" flex md:flex-row flex-col">
        <div
          className=" md:w-[400px]
                aspect-square
                relative 
                overflow-hidden  cursor-pointer
              "
        >
          <img
            className=" w-full object-cover 
                  h-full 
                 hover:scale-110 
                  transition"
            src={image}
            alt=""
          />
        </div>
        <div className="p-6 w-full">
          <h2 className="text-3xl font-bold ">{title}</h2>
          <p className="my-5 text-2xl font-medium">Topics: {topics}</p>
          <div className="flex justify-between items-center gap-2">
            <Link className="cursor-pointer text-secondary hover:text-primary"><h3 className="flex items-center gap-2">
              {" "}
              <span>
                <FaUser className="text-secondary" />
              </span>
              <span>{author}</span>
            </h3></Link>
            <h3 className="flex items-center gap-2">
              {" "}
              <span>
                <FaCalendarDays className="text-secondary" />
              </span>
              <span>{date}</span>
            </h3>
            <h3 className="flex items-center gap-2">
              {" "}
              <span>
                <FaHeart className="text-secondary" />
              </span>
              <span>{likedCount}</span>
            </h3>
          </div>
          <div className="flex md:justify-between mt-6 gap-5">
            <Link onClick={() => handleToWishlist(_id)}>
              <CustomButton text=" Add to wishlist"></CustomButton>
            </Link>
            <Link to={`/blog-details/${_id}`}>
              <CustomButton text=" Read More"></CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogCard;
