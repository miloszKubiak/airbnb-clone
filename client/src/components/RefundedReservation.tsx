import { ReservationDates } from "./ReservationDates";
import { Price } from "./Price";

type RefundedReservationProps = {
  _id: string;
  checkIn: Date;
  checkOut: Date;
  numberOfGuests: string;
  numberOfNights: number;
  price: number;
};

export const RefundedReservation = ({
  _id,
  numberOfNights,
  numberOfGuests,
  checkIn,
  checkOut,
  price,
}: RefundedReservationProps) => {
  return (
    <div
      key={_id}
      className="mt-10 h-40 px-2 bg-zinc-100 rounded-xl overflow-hidden sm:w-[60%]
      flex items-center gap-2 bg-rose-300"
    >
      <div className="py-2 flex flex-col justify-between w-full h-full text-sm">
        <h2 className="font-bold text-center">Accommodation deleted by user</h2>
        <div className="flex gap-2">
          <div className="flex-1">
            <p className="text-xs sm:text-sm">
              If the amount has been paid, we will refund it within a few days
              of removing the accommodation.
            </p>
          </div>
          <div className="flex-1 text-xs sm:text-sm">
            <p className="font-bold text-xs mb-1">Reservation details:</p>
            <ReservationDates
              numberOfNights={numberOfNights}
              numberOfGuests={numberOfGuests}
              checkIn={checkIn}
              checkOut={checkOut}
            />
            <Price price={price} />
          </div>
        </div>
      </div>
    </div>
  );
};
