import { format } from "date-fns";
import { Link } from "react-router-dom";
import { TAccommodation } from "./Accommodation";

export type TReservation = {
  _id: string;
  checkIn: Date;
  checkOut: Date;
  numberOfGuests: string;
  numberOfNights: number;
  price: number;
  accommodation: TAccommodation;
};

type ReservationProps = {
  _id: string;
  checkIn: Date;
  checkOut: Date;
  numberOfGuests: string;
  numberOfNights: number;
  price: number;
  accommodation: TAccommodation;
};

export const Reservation = ({
  _id,
  accommodation,
  numberOfNights,
  numberOfGuests,
  checkIn,
  checkOut,
  price,
}: ReservationProps) => {
  return (
    <Link
      to={`/account/reservations/${_id}`}
      key={_id}
      className="mt-10 flex gap-4 bg-zinc-100 rounded-xl overflow-hidden"
    >
      <div className="w-48">
        <img
          className="object-cover"
          src={accommodation?.photos![0]}
          alt="main photo of the place"
        />
      </div>
      <div>
        <h2>{accommodation.title}</h2>
        <p>
          {numberOfNights} night
          {numberOfNights > 1 ? "s" : ""}
        </p>
        <p>
          {numberOfGuests} guest
          {Number(numberOfGuests) > 1 ? "s" : ""}
        </p>
        <div className="flex gap-2">
          <p>{format(new Date(checkIn), "dd-MM-yyyy")}</p>
          <p>to</p>
          <p>{format(new Date(checkOut), "dd-MM-yyyy")}</p>
        </div>
        <div>
          <p>Total price: {price} €</p>
        </div>
      </div>
    </Link>
  );
};
