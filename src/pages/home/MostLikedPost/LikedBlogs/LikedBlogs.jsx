import { useQuery } from "@tanstack/react-query";
import { getMostLikedBlogs } from "../../../../api/blogs";
import { useEffect, useState } from "react";
import Loader from "../../../shared/Loader/Loader";
import LikedBlog from "./LikedBlog";
import img2 from "../../../../assets/home/banner/img_7.jpg";
import Container from "../../../shared/Container/Container";

const LikedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMostLikedBlogs()
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching most liked blogs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <section
      className="mb-24 mt-20 text-white py-24 bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${img2})`,
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        {" "}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <LikedBlog key={blog._id} blog={blog}></LikedBlog>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LikedBlogs;
