import Banner from "../Banner/Banner";
import MostLikedPost from "../MostLikedPost/MostLikedPost/MostLikedPost";
import NewsLetter from "../NewsLetter/NewsLetter";
import RecentBlogs from "../RecentBlogs/RecentBlogs/RecentBlogs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MostLikedPost></MostLikedPost>
      <RecentBlogs></RecentBlogs>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
