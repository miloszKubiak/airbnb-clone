import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="mt-5 grow flex items-center justify-around">
      <div className="mb-60">
        <h1 className="text-3xl text-center text-indigo-500 mb-5">Login</h1>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="w-full text-xl p-2 rounded-full text-white bg-indigo-500">
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
