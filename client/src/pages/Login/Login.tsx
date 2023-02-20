import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "./Login.schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TFormValues } from "../Register/Register";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

axios.defaults.baseURL = "http://127.0.0.1:4000"; // to do - add to env file.
axios.defaults.withCredentials = true;

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({ resolver: yupResolver(loginSchema) });
  const { setUser } = useContext(UserContext);

  const handleLogin = async ({ email, password }: TFormValues) => {
    try {
      const { data } = await axios.post("/auth/login", { email, password });
      setUser(data);
      alert("Login successful");
      navigate("/");
    } catch (error) {
      alert("Login failed");
    }
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
            placeholder="Password"
            {...register("password")}
          />
          <p className="error">{errors.password?.message}</p>
          <button type="submit" className="primary">
            Login
          </button>
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
