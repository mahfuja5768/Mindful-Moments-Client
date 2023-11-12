import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Footer/Navbar/Navbar";
import Layout from "./Layout";

const MainLayout = () => {
  return (
    <div>
     <Layout>
      <Outlet></Outlet>
     </Layout>
    </div>
  );
};

export default MainLayout;
