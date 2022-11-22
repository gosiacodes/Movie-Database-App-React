import { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
      <Fragment>
        <Header />
        <Outlet />
        <Footer />
      </Fragment>
    );
  };
  
  export default Layout;