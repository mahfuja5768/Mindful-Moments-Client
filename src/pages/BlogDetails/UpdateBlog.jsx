import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Container from "../shared/Container/Container";
import Swal from "sweetalert2";
import { getTopics } from "../../api/blogs";

const UpdateBlog = () => {
  const blog = useLoaderData();
  const { id } = useParams();
  const {
    date,
    image,
    likedCount,
    title,
    _id,
    description,
    topics,
  } = blog;
  console.log(id, blog);

  const [topic, setTopic] = useState([]);
  //   console.log(topics);
  useEffect(() => {
    getTopics()
      .then((data) => {
        // console.log(data);
        const allTopics = data.map((i) => i.topics);
        setTopic(allTopics);
      })
      .catch((error) => {
        console.error("Error fetching most liked blogs:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const date = form.date.value;
    const topics = form.topics.value;
    const imageValue = form.image.files[0];
    try {
      const imageData = await imageUpload(imageValue);
      const image = imageData?.data?.display_url;
      const newBlog = {
        title,
        description,
        date,
        image,
        author: user?.displayName,
        email: user?.email,
        topics,
      };
      console.log(newBlog);

      const res = await addNewBlog(newBlog);

      Swal.fire({
        title: "Success!",
        text: "New blog added successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      navigate("/all-blogs");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <div className="flex justify-center items-center my-12 mt-24 text-white">
        <div className="flex flex-col p-6 rounded-md sm:p-10 bg-secondary ">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Add New Blog</h1>
            <p className="text-sm ">Welcome to Mindful-Moments</p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-6 text-black ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-white text-sm"
                >
                  Blog Title
                </label>
                <input d
                  type="text"
                  name="title"
                  id="name"
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border  rounded-md border-gray-300 focus:outline-primary"
                  data-temp-mail-org="0"
                />
              </div>

              <div>
                <label className="label">
                  <span className="text-white text-sm">Topic Name</span>
                </label>
                <label>
                  <select
                    name="topics"
                    className="select select-bordered text-black"
                  >
                    {topic?.map((topic, idx) => (
                      <option key={idx}>{topic}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block  text-white mb-2 text-sm"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id=""
                  required
                  placeholder="description here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary"
                  data-temp-mail-org="0"
                />
              </div>

              <div>
                <div className="flex justify-between">
                  <label htmlFor="date" className=" text-white text-sm mb-2">
                    Date
                  </label>
                </div>
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block  text-white mb-2 text-sm"
                >
                  Select Image:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                />
              </div>
            </div>

            <div>
              <input type="submit" className="btn" value="Add Blog" />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default UpdateBlog;
