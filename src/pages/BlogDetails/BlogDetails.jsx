import { Link, useLoaderData } from "react-router-dom";
import Container from "../shared/Container/Container";
import { FaCalendarDays, FaHeart, FaUser } from "react-icons/fa6";

const BlogDetails = () => {
  const blog = useLoaderData();
  console.log(blog);

  const { author, date, image, likedCount, title, _id, description, topics } =
    blog;
  return (
    <Container>
      <div className="grid grid-cols-5 mt-28 mb-12">
        <div
          className="col-span-1 h-[300px] w-full
                  aspect-square
                  relative 
                  overflow-hidden 
                "
        >
          <img
            className=" w-full object-cover 
                    h-[300px]
                    w-full 
                    group-hover:scale-110 
                    transition"
            src={image}
            alt=""
          />
        </div>
        <div className="col-span-4 text-black shadow-lg cursor-pointer text-center group  ">
          <div className="">
            <div className="p-6">
              <h2 className="text-3xl font-medium ">{title}</h2>
              <p className="my-5">{description}</p>
              <div className="grid md:grid-cols-3 gap-2">
                <h3 className="flex items-center justify-center gap-2">
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
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogDetails;
