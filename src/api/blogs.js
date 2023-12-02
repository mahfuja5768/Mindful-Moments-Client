import useAxiosPublic from "../components/hooks/useAxiosPublic";
const axiosPublic = useAxiosPublic();

export const getMostLikedBlogs = async () => {
  const { data } = await axiosPublic('/most-liked-blogs');
//   console.log(data)
  return data;
};

export const getRecentBlogs = async () => {
  const { data } = await axiosPublic('/recent-blogs');
//   console.log(data)
  return data;
};

export const getAllBlogs = async () => {
  const { data } = await axiosPublic('/all-blogs');
//   console.log(data)
  return data;
};
export const getSingleBlogs = async (id) => {
  const { data } = await axiosPublic(`/get-single-blog/${id}`);
//   console.log(data)
  return data;
};

export const addToWishlist = async (blog) => {
  const { data } = await axiosPublic.post('/add-to-wishlist', blog);
//   console.log(data)
  return data;
};
