import { Outlet } from "react-router-dom";
import AuthLayoutImg from "../../assets/AuthLayout.png";

function AuthLayout() {
  return (
    <div id="loginimage" className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center w-1/2 px-12">
      <img className="w-1/2  z-[0] h-full absolute" src={AuthLayoutImg} alt="AuthLayout" />
        <div className="max-w-md z-[1] space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight">
            <span
              style={{
                fontFamily: "'Dancing Script', 'Comic Sans MS', cursive, sans-serif",
                fontSize: "2.5rem",
                fontWeight: "bold",
                letterSpacing: "0.05em",
                display: "inline-block",
                color: "inherit"
              }}
            >
              The{' '}
              <span
                style={{
                  fontFamily: "'Dancing Script', 'Comic Sans MS', cursive, sans-serif",
                  fontSize: "2.7rem",
                  fontWeight: "bold",
                  letterSpacing: "0.12em",
                  color: "#ffe066",
                  marginLeft: "0.2em"
                }}
              >
                झंकार
              </span>
            </span>
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
