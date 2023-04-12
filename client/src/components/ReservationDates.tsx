import { format } from "date-fns";
import { FaCloudMoon, FaRegCalendarAlt, GoPerson } from "react-icons/all";

type ReservationDatesProps = {
  numberOfNights: number;
  numberOfGuests: string;
  checkIn: Date;
  checkOut: Date;
};

export const ReservationDates = ({
  numberOfNights,
  numberOfGuests,
  checkIn,
  checkOut,
}: ReservationDatesProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <p>
          <FaCloudMoon />
        </p>
        <p>
          {numberOfNights} night
          {numberOfNights > 1 ? "s" : ""}
        </p>
      </div>
      <div className="flex items-center gap-1">
        <p>
          <GoPerson />
        </p>
        <p>
          {numberOfGuests} guest
          {Number(numberOfGuests) > 1 ? "s" : ""}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-1 text-[10px] sm:text-sm">
        <p className="flex items-center gap-1">
          <FaRegCalendarAlt />
          <span>{format(new Date(checkIn), "dd-MM-yyyy")}</span>
        </p>
        <p className="flex items-center gap-1">
          <FaRegCalendarAlt />
          <span>{format(new Date(checkOut), "dd-MM-yyyy")}</span>
        </p>
      </div>
    </div>
  );
};
