import { Link } from "react-router-dom";
import Container from "../../shared/Container/Container";
import CustomButton from "../../shared/CustomButton/CustomButton";
import Swal from "sweetalert2";

const NewsLetter = () => {

    const handleSubscribe = ()=>{
        Swal.fire({
          title: "Success!",
          text: "Successfully subscribed!",
          icon: "success",
          confirmButtonText: "Done",
        });
    }

  return (
    <Container>
      <div className=" my-24 flex justify-center flex-col items-center bg-[#f7f7f7] py-28">
        <h2 className="text-primary text-xl mb-7 font-bold md:text-4xl">Subscribe to newsletter</h2>
        <div>
          <input type="text" className='bg-white input input-border border-2 me-2 border-primary' placeholder="Enter your email" />
          <Link onClick={handleSubscribe}>
            <CustomButton text={"Subscribe"}></CustomButton>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NewsLetter;
