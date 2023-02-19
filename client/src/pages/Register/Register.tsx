import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./Register.schema";

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister: SubmitHandler<RegisterFormValues> = (
    data: RegisterFormValues
  ) => {
    console.log(data);
  };

  return (
    <div className="mt-5 grow flex items-center justify-around">
      <div className="mb-60">
        <h1 className="text-3xl text-center text-indigo-500 mb-5">Register</h1>
        <form
          className="max-w-md mx-auto"
          onSubmit={handleSubmit(handleRegister)}
        >
          <input type="text" placeholder="Your name" {...register("name")} />
          <p className="error">{errors.name?.message}</p>
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

          <input
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword")}
          />
          <p className="error">{errors.confirmPassword?.message}</p>
          <button className="primary">Register</button>
          <div className="text-center py-3">
            Have an account?{" "}
            <Link className="font-bold text-indigo-500 underline" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
