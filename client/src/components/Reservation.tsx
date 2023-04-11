import { Link } from "react-router-dom";
import { TAccommodation } from "./Accommodation";
import { ReservationDates } from "./ReservationDates";
import { Price } from "./Price";
import { Status } from "./Status";

export type TReservation = {
  _id: string;
  checkIn: Date;
  checkOut: Date;
  numberOfGuests: string;
  numberOfNights: number;
  price: number;
  accommodation: TAccommodation;
  status: string;
};

type ReservationProps = {
  _id: string;
  checkIn: Date;
  checkOut: Date;
  numberOfGuests: string;
  numberOfNights: number;
  price: number;
  accommodation: TAccommodation;
  status: string;
};

export const Reservation = ({
  _id,
  accommodation,
  numberOfNights,
  numberOfGuests,
  checkIn,
  checkOut,
  price,
  status,
}: ReservationProps) => {
  return (
    <Link
      to={`/account/reservations/${_id}`}
      key={_id}
      className="mt-10 h-40 px-2 bg-zinc-100 rounded-xl overflow-hidden w-[80%]
      flex items-center gap-2"
    >
      <div className="min-h-full flex -ml-2 w-48">
        <img
          className="object-cover"
          src={accommodation?.photos![0]}
          alt="main photo of the place"
        />
      </div>
      <div className="ml-2 py-2 flex flex-col justify-between h-full text-[8px] sm:text-sm basis-1/2">
        <h2 className="font-bold">{accommodation?.title}</h2>
        <ReservationDates
          numberOfNights={numberOfNights}
          numberOfGuests={numberOfGuests}
          checkIn={checkIn}
          checkOut={checkOut}
        />
        <Price price={price} />
        <Status status={status} />
      </div>
    </Link>
  );
};
