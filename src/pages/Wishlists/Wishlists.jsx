import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";
import Container from "../shared/Container/Container";
import { FaCalendarDays, FaHeart, FaUser } from "react-icons/fa6";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import CustomButton from "../shared/CustomButton/CustomButton";
import Swal from "sweetalert2";
import useAuth from "../../components/hooks/useAuth";

const Wishlists = () => {
  const axiosPublic = useAxiosPublic();
  const {user}= useAuth()
  const { refetch, data: blogs = [] } = useQuery({
    queryKey: ["blogs", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/wishlist-blogs?email=${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    // console.log(id);
    const res = await axiosPublic.delete(`/delete-wishlist-blog/${id}`);
    console.log(res.data);
    if (res.data.deletedCount > 0) {
      Swal.fire({
        title: "Success!",
        text: "Successfully deleted from wishlist!",
        icon: "success",
        confirmButtonText: "Done",
      });
      refetch();
    }
  };

  return (
    <Container>
      <SectionTitle heading={"Welcome To Your Wishlist"}></SectionTitle>
      <div className="py-12 my-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2  gap-8">
        {blogs?.map((item) => (
          <div key={item._id}>
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
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-5">Title: {item.title}</h2>
                <h2 className="text-lg font-medium mb-5">
                  Topic: {item.topics}
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  <h3 className="flex items-center gap-2">
                    {" "}
                    <span>
                      <FaUser className="text-primary" />
                    </span>
                    <span>{item.author}</span>
                  </h3>
                  <h3 className="flex items-center gap-2">
                    {" "}
                    <span>
                      <FaCalendarDays className="text-primary" />
                    </span>
                    <span>{item.date}</span>
                  </h3>
                  <h3 className="flex items-center gap-2">
                    {" "}
                    <span>
                      <FaHeart className="text-red-600" />
                    </span>
                    <span>{item.likedCount}</span>
                  </h3>{" "}
                </div>
                <div className="flex md:flex-row flex-col gap-5 justify-between mb-4">
                  <Link to={`/blog-details/${item.blogId}`}>
                    <CustomButton text={"Details"}></CustomButton>
                  </Link>
                  <Link onClick={() => handleDelete(item._id)}>
                    <CustomButton text={"Remove"}></CustomButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Wishlists;
