import { AccountNavbar } from "../../components";
import { Link, useParams } from "react-router-dom";
import { GoPlus } from "react-icons/all";
import { useEffect, useState } from "react";
import axios from "axios";

export type TAccommodation = {
  title: string;
  address: string;
  description: string;
  photos?: string[];
  perks: string[];
  extraInfo: string;
  checkIn: string;
  checkOut: string;
  maxGuests: number;
  price: number;
};

export const Accommodations = () => {
  const [accommodations, setAccommodations] = useState<TAccommodation | []>([]);

  useEffect(() => {
    axios.get("/accommodations").then(({ data }) => setAccommodations(data));
  }, []);

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
