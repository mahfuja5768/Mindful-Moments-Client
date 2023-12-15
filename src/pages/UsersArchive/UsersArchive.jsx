import { useQuery } from "@tanstack/react-query";
import useAuth from "../../components/hooks/useAuth";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";
import Container from "../shared/Container/Container";

const UsersArchive = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { data: blogs = [] } = useQuery({
      queryKey: ["blogs"],
      queryFn: async () => {
        const res = await axiosPublic.get(
          `/wishlist-blogs?email=${user?.email}`
        );
        console.log(res.data);
        return res.data;
      },
    });

  return <Container>
     <div>
       
     </div>
  </Container>;
};

export default UsersArchive;
