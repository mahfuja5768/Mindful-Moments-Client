import { FaCalendarDays, FaHeart, FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { addToWishlist } from "../../../../api/blogs";
import CustomButton from "../../../shared/CustomButton/CustomButton";
import Swal from "sweetalert2";
import useAuth from "../../../../components/hooks/useAuth";

const RecentBlogCard = ({ blog }) => {
  // console.log(blog);
  const { author, date, image, likedCount, topics, title, _id } = blog;
  const navigate = useNavigate();
  
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
    const res = await addToWishlist(addBlog);
    Swal.fire({
      title: "Success!",
      text: "Successfully added to wishlist!",
      icon: "success",
      confirmButtonText: "Done",
    });
    navigate("/wishlist");
  };

  return (
    <div className="text-black shadow-lg cursor-pointer group">
      <div className=" flex md:flex-row flex-col">
        <div
          className=" md:w-[250px]
                aspect-square
                relative 
                overflow-hidden 
              "
        >
          <img
            className=" w-full object-cover 
                  h-full 
                  group-hover:scale-110 
                  transition"
            src={image}
            alt=""
          />
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold ">{title}</h2>
          <p className="my-5 text-2xl font-medium">Topics: {topics}</p>
          <div className="grid md:grid-cols-3 gap-2">
            <h3 className="flex items-center gap-2">
              {" "}
              <span>
                <FaUser className="text-primary" />
              </span>
              <span>{author}</span>
            </h3>
            <h3 className="flex items-center gap-2">
              {" "}
              <span>
                <FaCalendarDays className="text-primary" />
              </span>
              <span>{date}</span>
            </h3>
            <h3 className="flex items-center gap-2">
              {" "}
              <span>
                <FaHeart className="text-red-600" />
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
