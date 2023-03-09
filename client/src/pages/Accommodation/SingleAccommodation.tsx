import { AccountNavbar } from "../../components";
import { Link } from "react-router-dom";

export const SingleAccommodation = () => {
  return (
    <div>
      <AccountNavbar />
      <p>single accommodation</p>
      <Link className="link-primary" to={"/"}>
        back
      </Link>
    </div>
  );
};
