import { Link } from "react-router-dom";
import Container from "../../../shared/Container/Container";
import Title from "../../../shared/Title/Title";
import RecentBlogCard from "../RecentBlogCards/RecentBlogCard";
import RecentBlogCards from "../RecentBlogCards/RecentBlogCards";

const RecentBlogs = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-6 mt-24">
        <div className=" col-span-4">
          <Title title={"Recent Posts"}></Title>
          <RecentBlogCards></RecentBlogCards>
          <div className="flex md:justify-center my-6">
           <Link to='/all-blogs'> <button className="btn hover:border-primary hover:text-primary hover:bg-transparent bg-primary text-white">
             See All Blogs
            </button></Link>
          </div>
        </div>
        <div className="lg:col-span-1">{/* side bar for filter */}</div>
      </div>
    </Container>
  );
};

export default RecentBlogs;
