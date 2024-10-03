import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <div className='page-content'>
        <Outlet />
      </div>
    </>
  );
}

export default Root;
