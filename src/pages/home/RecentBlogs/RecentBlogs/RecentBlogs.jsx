import { Link } from "react-router-dom";
import Container from "../../../shared/Container/Container";
import Title from "../../../shared/Title/Title";
import RecentBlogCards from "../RecentBlogCards/RecentBlogCards";
import CustomButton from "../../../shared/CustomButton/CustomButton";
import { useEffect, useState } from "react";
import { getTopics } from "../../../../api/blogs";
import useAxiosPublic from "../../../../components/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const RecentBlogs = () => {
  const [topic, setTopic] = useState("");
  // console.log(topic.item);
  const [topics, setTopics] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    getTopics()
      .then((data) => {
        const allTopics = data.map((i) => i.topics);
        setTopics(allTopics);
      })
      .catch((error) => {
        console.error("Error fetching most liked blogs:", error);
      });
  }, []);

  let url;
  if (topic && topic !== "All") {
    url = `/recent-blogs?topics=${topic.item}`;
  } else if (topic === "All") {
    url = "/recent-blogs";
  } else {
    url = "/recent-blogs";
  }

  const {
    refetch,
    data: blogs = [],
    isLoading,
  } = useQuery({
    queryKey: ["blogs", topic],
    queryFn: async () => {
      const res = await axiosPublic.get(url);
      // console.log(res.data);
      return res.data;
    },
  });

  return (
    <Container>
      <Title title={"Recent Posts"}></Title>
      <div className="grid lg:grid-cols-6 my-12 text-black justify-center items-start gap-5">
        <div className=" lg:col-span-4">
          <RecentBlogCards
            isLoading={isLoading}
            blogs={blogs}
          ></RecentBlogCards>
          <div className="flex md:justify-center my-6">
            <Link to="/all-blogs">
              {" "}
              <CustomButton text={"See All "} />{" "}
            </Link>
          </div>
        </div>
        <div className="lg:col-span-1 shadow-xl py-12 px-6">
          <h2 className="text-2xl font-bold border-b-4 border-primary  pb-2">
            Choose Topics:
          </h2>
          <div>
            {topics.map((item, idx) => (
              <div key={idx}>
                <p
                  onClick={() => setTopic({ item })}
                  className="py-3 text-xl cursor-pointer select-none font-semibold"
                >
                  {item}
                </p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecentBlogs;
