import { AccountNavbar } from "../../components";
import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { TAccommodation } from "../Accommodation/Accommodations";
import { Link } from "react-router-dom";
import { format } from "date-fns";

type TReservation = {
  _id: string;
  checkIn: Date;
  checkOut: Date;
  numberOfGuests: string;
  numberOfNights: number;
  price: number;
  accommodation: TAccommodation;
};

export const MyReservations = () => {
  const [myReservations, setMyReservations] = useState<TReservation[]>([]);

  useEffect(() => {
    axios
      .get("/reservations")
      .then((response) => setMyReservations(response.data));
  }, []);

  return (
    <div>
      <AccountNavbar />
      <div>
        {myReservations?.map((reservation) => (
          <Link
            to={`/account/reservations/${reservation._id}`}
            key={reservation._id}
            className="mt-10 flex gap-4 bg-zinc-100 rounded-xl overflow-hidden"
          >
            <div className="w-48">
              <img
                className="object-cover"
                src={reservation.accommodation?.photos![0]}
                alt="main photo of the place"
              />
            </div>
            <div className="">
              <h2>{reservation.accommodation.title}</h2>
              <p>
                {reservation.numberOfNights} night
                {reservation.numberOfNights > 1 ? "s" : ""}
              </p>
              <p>
                {reservation.numberOfGuests} guest
                {Number(reservation.numberOfGuests) > 1 ? "s" : ""}
              </p>
              <div className="flex gap-2">
                <p>{format(new Date(reservation.checkIn), "dd-MM-yyyy")}</p>
                <p>to</p>
                <p>{format(new Date(reservation.checkOut), "dd-MM-yyyy")}</p>
              </div>
              <div>
                <p>Total price: {reservation.price} €</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
