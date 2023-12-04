import { Link, useLoaderData } from "react-router-dom";
import Container from "../shared/Container/Container";
import { FaCalendarDays, FaHeart, FaUser } from "react-icons/fa6";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import AddComment from "./AddComment";
import AllComments from "./AllComments";
import useAuth from "../../components/hooks/useAuth";
import CustomButton from "../shared/CustomButton/CustomButton";

const BlogDetails = () => {
  const blog = useLoaderData();
  const { user } = useAuth();
  console.log(blog);

  const {
    author,
    date,
    image,
    likedCount,
    title,
    email,
    _id,
    description,
    topics,
  } = blog;
  return (
    <Container>
      <SectionTitle heading={"Welcome To Details Page"}></SectionTitle>
      <div className="grid lg:grid-cols-5  my-16">
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
                    group-hover:scale-110 
                    transition"
            src={image}
            alt=""
          />
        </div>
        <div className="lg:col-span-4 text-black shadow-lg cursor-pointer text-center group  ">
          <div className="">
            <div className="p-6">
              <h2 className="text-3xl font-bold ">{title}</h2>
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
                  {!likedCount?.length ? (
                    <span>Likes:0</span>
                  ) : (
                    <span>Likes:{likedCount}</span>
                  )}
                </h3>
              </div>
              <div className="flex justify-center gap-4 my-4">
                {user?.email === email && (
                  <Link to={`/updateBlog/${_id}`}>
                    <CustomButton text={"Update"}></CustomButton>
                  </Link>
                )}
                <Link>
                  <CustomButton text={"Add Comment"}></CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle heading={"Welcome To Comment section"}></SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-3">
        <div className=" lg:col-span-4">
          <AllComments></AllComments>
        </div>
      </div>
    </Container>
  );
};

export default BlogDetails;
