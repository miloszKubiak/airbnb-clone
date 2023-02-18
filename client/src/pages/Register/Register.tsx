import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="mt-5 grow flex items-center justify-around">
      <div className="mb-60">
        <h1 className="text-3xl text-center text-indigo-500 mb-5">Register</h1>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
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
