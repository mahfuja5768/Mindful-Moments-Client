import { Link } from "react-router-dom";
import useAuth from "../../../components/hooks/useAuth";

const UserProfile = ({ flex, center }) => {
  const { user, logOut } = useAuth();
//   console.log(user);
  return (
    <div
      className={
        flex
          ? "flex items-center justify-center gap-3 "
          : " flex flex-col gap-4"
      }
    >
      {user && (
        <div
          className={
            center
              ? "flex items-center justify-center gap-3 border p-2 rounded-3xl cursor-pointer"
              : "cursor-pointer flex-col gap-3"
          }
        >
          <div className="avatar">
            <div className="w-12 mask mask-squircle">
              <img className="" src={user?.photoURL} />
            </div>
          </div>
          <h1>{user?.displayName}</h1>
        </div>
      )}
      {user ? (
        <>
          <Link
            onClick={logOut}
            className="px-4 py-3 btn bg-neutral-100 text-primary rounded-3xl transition font-semibold cursor-pointer"
          >
            Log Out
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="px-4 py-3 btn bg-neutral-100 text-primary rounded-3xl transition font-semibold cursor-pointer"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-3 btn bg-neutral-100 text-primary rounded-3xl transition font-semibold cursor-pointer"
          >
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
};

export default UserProfile;
