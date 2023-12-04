import useAxiosPublic from "../components/hooks/useAxiosPublic";
import axiosSecure from "../components/hooks/useAxiosSecure";
const axiosPublic = useAxiosPublic();
// const axiosPublic = useAS();

export const getMostLikedBlogs = async () => {
  const { data } = await axiosPublic('/most-liked-blogs');
//   console.log(data)
  return data;
};


export const getAllBlogs = async () => {
  const { data } = await axiosPublic('/all-blogs');
//   console.log(data)
  return data;
};
export const getSingleBlogs = async (id) => {
  const { data } = await axiosSecure(`/get-single-blog/${id}`);
//   console.log(data)
  return data;
};

export const addToWishlist = async (blog) => {
  const { data } = await axiosSecure.post('/add-to-wishlist', blog);
//   console.log(data)
  return data;
};

//get titles
export const getTopics = async () => {
  const { data } = await axiosPublic.get('/topics');
//   console.log(data)
  return data;
};

//get titles
export const addNewBlog = async (blog) => {
  console.log(blog)
  const { data } = await axiosSecure.post('/add-new-blog', blog);
  console.log(data)
  return data;
};
