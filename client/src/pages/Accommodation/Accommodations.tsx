import { AccountNavbar } from "../../components";
import { Link, useParams } from "react-router-dom";
import { GoPlus } from "react-icons/all";

export const Accommodations = () => {
  return (
    <div>
      <AccountNavbar />
      <div className="text-center mt-10">
        <Link className="link-primary" to={"/account/accommodations/new"}>
          <GoPlus />
          Add new
        </Link>
        <p>accommodations</p>
      </div>
    </div>
  );
};
