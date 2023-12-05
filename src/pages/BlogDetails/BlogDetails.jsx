import { Link, useLoaderData } from "react-router-dom";
import Container from "../shared/Container/Container";
import { FaCalendarDays, FaHeart, FaUser } from "react-icons/fa6";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import AllComments from "./AllComments";
import useAuth from "../../components/hooks/useAuth";
import CustomButton from "../shared/CustomButton/CustomButton";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { addReview } from "../../api/blogs";
import useComments from "../../components/hooks/useComments";

const BlogDetails = () => {
  const blog = useLoaderData();
  const { user } = useAuth();
  const [disable, setDisable] = useState(true);
  const [review, setReview] = useState(" ");
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

  const [allComments, refetch] = useComments();
  const [comments, setComments] = useState([]);
  console.log(allComments);
  useEffect(() => {
    const selectedProperty = allComments.filter((item) => item.blogId === _id);
    console.log(selectedProperty);
    setComments(selectedProperty);
  }, [allComments]);

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = async () => {
    console.log(review);
    setDisable(true);

    const newReview = {
      blogId: _id,
      title,
      review,
      email: user?.email,
      name: user?.displayName,
      photo: user?.photoURL,
    };
    // console.log(addBlog);
    const res = await addReview(newReview);
    Swal.fire({
      title: "Success!",
      text: "Successfully review added!",
      icon: "success",
      confirmButtonText: "Done",
    });
    refetch();
  };

  const handleAddReview = () => {
    setDisable(false);
  };

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
                <div className="flex justify-center gap-5">
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
              </div>
              {!disable && (
                <div className="my-6">
                  <input
                    onChange={handleReviewChange}
                    type="text"
                    className="input-border border-2 p-2"
                    placeholder="add review"
                  />
                  <span onClick={handleSubmit}>
                    {" "}
                    <CustomButton text="Submit"></CustomButton>
                  </span>
                </div>
              )}
              <div className="flex justify-center gap-4 my-4">
                {user?.email === email && (
                  <Link to={`/updateBlog/${_id}`}>
                    <CustomButton text={"Update"}></CustomButton>
                  </Link>
                )}

                {user?.email !== email && (
                  <Link onClick={handleAddReview}>
                    <CustomButton text={"Add Comment"}></CustomButton>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle heading={"Welcome To Comment section"}></SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-3">
        <div className=" lg:col-span-4">
          <AllComments comments={comments}></AllComments>
        </div>
      </div>
    </Container>
  );
};

export default BlogDetails;
