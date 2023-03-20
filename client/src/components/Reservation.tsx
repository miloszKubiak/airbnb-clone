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
      className="mt-10 h-32 px-2 flex gap-4 bg-zinc-100 rounded-xl overflow-hidden w-[80%] md:w-[60%]"
    >
      <div className="w-40 -ml-2">
        <img
          className="object-cover h-full"
          src={accommodation?.photos![0]}
          alt="main photo of the place"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center text-xs sm:text-sm">
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
    </Link>
  );
};
