import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6 rounded-2xl "
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "#312E81" }}>
          Sign in to your account
        </h1>
        <p className="mt-2" style={{ color: "#312E81" }}>
          Don't have an account?
          <Link
            className="font-medium ml-2 hover:underline"
            style={{ color: "#B58E6F" }}
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        // Optional: you can pass color props to style inputs/buttons if CommonForm supports it
      />
    </div>
  );
}

export default AuthLogin;
