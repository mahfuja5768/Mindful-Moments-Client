import axiosSecure from "../components/hooks/useAxiosSecure";
import useAxiosPublic from "./../components/hooks/useAxiosPublic";

const axiosPublic = useAxiosPublic();

export const saveUser = async (user) => {
  console.log(user);
  console.log(user?.email);
  const currentUser = {
    name: user?.displayName,
    photoUrl: user?.photoURL,
    email: user?.email,
    role: "guest",
  };
  const { data } = await axiosSecure.post("/users", currentUser);
  console.log(data);
  return data;
};

//clear token from client side
export const clearToken = async () => {
  localStorage.removeItem("access-token");
};