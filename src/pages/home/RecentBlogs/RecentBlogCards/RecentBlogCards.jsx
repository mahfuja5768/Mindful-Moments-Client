import { useQuery } from "@tanstack/react-query";
import { getRecentBlogs } from "../../../../api/blogs";
import { useEffect, useState } from "react";
import Loader from "../../../shared/Loader/Loader";
import RecentBlogCard from "./RecentBlogCard";

const RecentBlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRecentBlogs()
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
    <div className="py-12 grid grid-cols-1 gap-8">
      {blogs.map((blog) => (
          <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>
 
      ))}
    </div>
  );
};

export default RecentBlogCards;
