import { Link } from "react-router-dom";
import { loginSchema } from "./Login.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type LoginFormValues = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: yupResolver(loginSchema) });

  const handleLogin: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-5 grow flex items-center justify-around">
      <div className="mb-60">
        <h1 className="text-3xl text-center text-indigo-500 mb-5">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit(handleLogin)}>
          <input
            type="email"
            placeholder="your@email.com"
            {...register("email")}
          />
          <p className="error">{errors.email?.message}</p>
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <p className="error">{errors.password?.message}</p>
          <button className="primary">Login</button>
          <div className="text-center py-3">
            Don't have an account?{" "}
            <Link
              className="font-bold text-indigo-500 underline"
              to={"/register"}
            >
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
