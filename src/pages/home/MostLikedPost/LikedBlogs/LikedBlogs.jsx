import { useQuery } from "@tanstack/react-query";
import { getMostLikedBlogs } from "../../../../api/blogs";
import { useEffect, useState } from "react";
import Loader from "../../../shared/Loader/Loader";
import LikedBlog from "./LikedBlog";

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
    <div className="py-12 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
      {blogs.map((blog) => (
          <LikedBlog key={blog._id} blog={blog}></LikedBlog>
 
      ))}
    </div>
  );
};

export default LikedBlogs;
