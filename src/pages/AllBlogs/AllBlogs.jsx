import { useEffect, useState } from "react";
import Loader from "../shared/Loader/Loader";
import { getAllBlogs } from "../../api/blogs";
import AllBlog from "./AllBlog";
import Container from "../shared/Container/Container";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllBlogs()
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
    <Container>
      <div className="py-12 grid grid-cols-1 gap-8 mt-24">
        {blogs.map((blog) => (
          <AllBlog key={blog._id} blog={blog}></AllBlog>
        ))}
      </div>
    </Container>
  );
};

export default AllBlogs;