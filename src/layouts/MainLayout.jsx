import { Outlet } from "react-router-dom";
import Layout from "./Layout";
import Footer from "../pages/shared/Footer/Footer";

const MainLayout = () => {
  return (
    // <div>
    //  <Layout>
    //   <Outlet></Outlet>
    //  </Layout>
    // </div>
    <div>
    <Layout>
    <div className="pt-0 min-h-[calc(100vh-306px)]">
      <Outlet />
    </div>
    </Layout >
    <Footer />
  </div>
  );
};

export default MainLayout;
