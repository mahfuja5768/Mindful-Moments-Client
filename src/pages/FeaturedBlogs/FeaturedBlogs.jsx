import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAuth from "../../components/hooks/useAuth";
import Container from "../shared/Container/Container";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { getAllBlogs } from "../../api/blogs";
import Loader from "../shared/Loader/Loader";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllBlogs()
      .then((data) => {
        const sortedData = data.sort(
          (a, b) => b.description.length - a.description.length
        );
        // console.log(sortedData.map((i) => i.description.length));
        const longestDescriptions = sortedData.slice(0, 10);
        // console.log(longestDescriptions);
        setBlogs(longestDescriptions);
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
      <SectionTitle heading={"Featured Blogs"}></SectionTitle>
      <div className="overflow-x-auto my-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg  bg-[#f7f7f7] border-y-4 border-primary text-primary">
              <th></th>
              <th>Blog Image</th>
              <th>Blog Title</th>
              <th>Blog Topic</th>
              <th>Author Name</th>
            </tr>
          </thead>
          <tbody>
            {blogs?.map((item, idx) => (
              <tr key={item?._id} className="text-lg text-black font-semibold">
                <th>{idx + 1}</th>
                <th>
                  <img
                    src={item.image}
                    className="w-24 h-24 rounded-2xl"
                    alt=""
                  />
                </th>
                <th>{item.title}</th>
                <th>{item.topics}</th>
                <td>{item.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default FeaturedBlogs;
