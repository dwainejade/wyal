import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import "./Layout.scss";

function Layout() {
  return (
    <div className="Layout">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
