import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../components/hooks/useAuth";
import { imageUpload } from "../../api/utils";
import { getToken, saveUser } from "../../api/auth";
import Container from "../shared/Container/Container";
import Swal from "sweetalert2";
import style from "./Signup.module.css";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } =
    useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    try {
      const imageData = await imageUpload(image);
      const result = await createUser(email, password);
      await updateUserProfile(name, imageData?.data?.display_url);

      // console.log(result.user);
      const saveUserInfo = await saveUser(result?.user);
      console.log(saveUserInfo);

      // //get token
      await getToken(result?.user?.email);
      navigate("/");
      Swal.fire({
        title: "Success!",
        text: "Successfully user created!",
        icon: "success",
        confirmButtonText: "Done",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      // console.log(result.user);
      const saveUserInfo = await saveUser(result?.user);
      console.log(saveUserInfo);

      //get token
      await getToken(result?.user?.email);
      navigate("/");
      Swal.fire({
        title: "Success!",
        text: "Successfully user created!",
        icon: "success",
        confirmButtonText: "Done",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container} onclick="onclick">
      <div className={style.top}></div>
      <div className={style.bottom}></div>
      <div className={style.center}>
        <Container>
          <div className="flex justify-center items-center text-white">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-secondary ">
              <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                <p className="text-sm ">Welcome to Mindful-Moments</p>
              </div>
              <form
                onSubmit={handleSubmit}
                noValidate=""
                action=""
                className="space-y-6 ng-untouched ng-pristine ng-valid text-black"
              >
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block  text-white mb-2 text-sm"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name Here"
                      className="w-full px-3 py-2 border   rounded-md border-gray-300 focus:outline-primary"
                      data-temp-mail-org="0"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block  text-white mb-2 text-sm"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Enter Your Email Here"
                      className="w-full px-3 py-2 border rounded-md   border-gray-300 focus:outline-primary"
                      data-temp-mail-org="0"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="password"
                        className="text-sm  text-white mb-2"
                      >
                        Password
                      </label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      autoComplete="new-password"
                      id="password"
                      required
                      placeholder="*******"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="image"
                      className="block  text-white mb-2 text-sm"
                    >
                      Select Image:
                    </label>
                    <input
                      required
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-primary w-full rounded-md py-3 "
                  >
                    {loading ? (
                      <TbFidgetSpinner className="animate-spin m-auto" />
                    ) : (
                      "Continue"
                    )}
                  </button>
                </div>
              </form>
              <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-primary"></div>
                <p className="px-3 text-sm">Signup with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-primary"></div>
              </div>
              <div
                onClick={handleGoogleSignIn}
                className="flex justify-center items-center space-x-2 border m-3 p-2 border-primary border-rounded cursor-pointer"
              >
                <FcGoogle size={32} />

                <p>Continue with Google</p>
              </div>
              <p className="px-6 text-sm text-center ">
                Already have an account?{" "}
                <Link to="/login" className="hover:underline hover:primary">
                  Login
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
