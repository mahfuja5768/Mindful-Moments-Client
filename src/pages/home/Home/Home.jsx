import Banner from "../Banner/Banner";
import MostLikedPost from "../MostLikedPost/MostLikedPost/MostLikedPost";
import RecentBlogs from "../RecentBlogs/RecentBlogs/RecentBlogs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MostLikedPost></MostLikedPost>
      <RecentBlogs></RecentBlogs>
    </div>
  );
};

export default Home;
