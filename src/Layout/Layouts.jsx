import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast"; 

function Layouts() {
  return (
    <>
      <Header />
      <Toaster position="top-right" reverseOrder={false} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layouts;
