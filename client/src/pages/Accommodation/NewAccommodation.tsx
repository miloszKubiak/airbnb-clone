import { AccountNavbar } from "../../components";
import { Link } from "react-router-dom";

export const NewAccommodation = () => {
  return (
    <div>
      <AccountNavbar />
      <p>form</p>
      <Link className="primary" to={"/account/accommodations"}>
        back
      </Link>
    </div>
  );
};
