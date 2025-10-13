import { Outlet } from "react-router-dom";
import AuthLayoutImg from "../../assets/AuthLayout.png";

function AuthLayout() {
  return (
    <div id="loginimage" className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center w-1/2 px-12">
      <img className="w-1/2  z-[0] h-full absolute" src={AuthLayoutImg} alt="AuthLayout" />
      </div>
      <div className="flex flex-1 items-center justify-center bg-black bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
