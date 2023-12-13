import { useEffect, useState } from "react";
import Loader from "../shared/Loader/Loader";
import { getAllBlogs } from "../../api/blogs";
import AllBlog from "./AllBlog";
import Container from "../shared/Container/Container";
import SectionTitlee from "../shared/SectionTitle/SectionTitle";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import CustomButton from "../shared/CustomButton/CustomButton";
import axios from "axios";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchBlogName, setSearchBlogName] = useState([]);

  const handleSearch = () => {
    console.log(searchBlogName)
    axios
      .get(
        `https://foodie-pal-server.vercel.app/search-blogs/${searchBlogName}`
      )
      .then((res) => {
        const selectedFood = res.data;
        setBlogs(selectedFood);
      });
  };

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
      <SectionTitle heading={"All Blogs"}></SectionTitle>
      <div className="flex justify-center items-center my-5">
        <div className="join">
          <input
            onChange={(e) => setSearchBlogName(e.target.value)}
            className="input input-bordered join-item text-black"
            placeholder="Search here"
          />
          <button
            onClick={handleSearch}
            className="btn join-item rounded-r-full text-primary"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="py-12 grid grid-cols-1 gap-12">
        {blogs.map((blog) => (
          <AllBlog key={blog._id} blog={blog}></AllBlog>
        ))}
      </div>
    </Container>
  );
};

export default AllBlogs;
