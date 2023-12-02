import { FaCalendarDays, FaHeart, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { addToWishlist } from "../../../../api/blogs";

const RecentBlogCard = ({ blog }) => {
  // console.log(blog);
  const { author, date, image, likedCount, title, _id, description } = blog;

  const handleToWishlist  = async(id)=>{
    // console.log('c',id)
    const blogId = id
    const res = await addToWishlist(blogId)
     
  }

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
                  w-full 
                  group-hover:scale-110 
                  transition"
            src={image}
            alt=""
          />
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-medium ">{title}</h2>
          <p className="my-5">{description}</p>
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
          <div className="flex md:justify-between mt-6">
            <button onClick={()=>handleToWishlist(_id)} className="btn hover:border-primary hover:text-primary hover:bg-transparent bg-primary text-white">
              Add to wishlist
            </button>
            <Link to={`/blog-details/${_id}`}>
              <button  className="btn hover:border-primary hover:text-primary hover:bg-transparent bg-primary text-white">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogCard;
