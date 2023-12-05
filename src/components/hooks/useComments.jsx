import { useQuery } from "@tanstack/react-query";
import axiosSecure from "./useAxiosSecure";

const useComments = () => {
  const { refetch, data: allComments = [] } = useQuery({
    queryKey: ["allComments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });

  return [allComments, refetch];
};

export default useComments;