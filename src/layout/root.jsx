//import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

/** Root layout component */
function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Root;
