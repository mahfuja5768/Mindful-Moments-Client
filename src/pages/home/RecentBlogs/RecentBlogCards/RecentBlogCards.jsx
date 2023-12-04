import Loader from "../../../shared/Loader/Loader";
import RecentBlogCard from "./RecentBlogCard";

const RecentBlogCards = ({ isLoading, blogs }) => {
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="py-12 grid grid-cols-1 gap-8">
      {blogs?.map((blog) => (
        <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>
      ))}
    </div>
  );
};

export default RecentBlogCards;
