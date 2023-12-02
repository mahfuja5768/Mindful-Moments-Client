import Container from "../../../shared/Container/Container";
import Title from "../../../shared/Title/Title";
import LikedBlogs from "../LikedBlogs/LikedBlogs";

const MostLikedPost = () => {
  return (
    <Container>
      <Title title={"Most Liked Posts"} center={"center"}></Title>
      <LikedBlogs></LikedBlogs>
    </Container>
  );
};

export default MostLikedPost;
