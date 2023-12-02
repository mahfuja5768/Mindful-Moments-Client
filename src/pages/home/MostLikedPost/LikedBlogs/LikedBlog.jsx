import { FaCalendarDays, FaHeart, FaUser } from "react-icons/fa6";

const LikedBlog = ({ blog }) => {
  // console.log(blog);
  const { author, date, image, likedCount, title, _id } = blog;
  return (
    <div>
      <div className="text-black shadow-2xl cursor-pointer group">
        <div
          className="
                aspect-square
                w-full 
                relative 
                overflow-hidden 
                rounded-t-xl
              "
        >
          <img
            className="rounded-t-xl  object-cover 
                  h-full 
                  w-full 
                  group-hover:scale-110 
                  transition"
            src={image}
            alt=""
          />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-medium mb-5">{title}</h2>
          <div className="grid grid-cols-2 gap-2">
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
          </h3></div>
        </div>
      </div>
    </div>
  );
};

export default LikedBlog;
