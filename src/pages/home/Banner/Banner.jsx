import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img2 from "../../../assets/home/banner/h3.jpg";
import { Link } from "react-router-dom";
import Container from "../../shared/Container/Container";
import CustomButton from "../../shared/CustomButton/CustomButton";

const Banner = () => {
  return (
    <section
      className="my-24 text-white pt-12 bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img2})`,
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      data-aos-duration="3000"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <Container>
        <div className="flex flex-col lg:flew-row justify-center items-center gap-6 py-24 px-16 pt-12">
          <div className="md:ml-10 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold my-3">Explore, Learn, Inspire</h2>
            <h3 className="text-xl font-semibold text-center">
              Uncover Stories, Embrace Knowledge, Ignite Passion
            </h3>
            <p className="lg:w-1/2  ">
              Welcome to [Your Blog Name], where curiosity meets discovery. Dive
              into a world of captivating narratives, insightful articles, and
              endless inspiration. Join us on a journey of exploration and
              learning. Let your curiosity be your guide.
            </p>
            <Link to={"/all-blogs"} className="mt-6">
              <CustomButton text={"See Blogs"}></CustomButton>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
