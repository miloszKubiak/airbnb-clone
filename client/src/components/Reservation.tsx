import { Link } from "react-router-dom";
import { TAccommodation } from "./Accommodation";
import { ReservationDates } from "./ReservationDates";
import { FaMoneyBillWave } from "react-icons/all";

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
      flex items-center justify-between gap-2"
    >
      <div className="basis-1/4 min-h-full flex -ml-2">
        <img
          className="object-cover"
          src={accommodation?.photos![0]}
          alt="main photo of the place"
        />
      </div>
      <div className="flex flex-col py-2 justify-between basis-1/2 h-full text-[10px] sm:text-sm">
        <h2 className="font-bold">{accommodation.title}</h2>
        <ReservationDates
          numberOfNights={numberOfNights}
          numberOfGuests={numberOfGuests}
          checkIn={checkIn}
          checkOut={checkOut}
        />
        <div className="flex items-center gap-1">
          <p>
            <FaMoneyBillWave />
          </p>
          <p>Total price: {price} €</p>
        </div>
      </div>
      <div
        className={`status status-${status} flex gap-1 items-center justify-center basis-1/6`}
      >
        <p>Status: </p>
        <p>{status}</p>
      </div>
    </Link>
  );
};
