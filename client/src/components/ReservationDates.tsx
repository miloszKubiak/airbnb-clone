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
    <div>
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
      <div className="flex items-center gap-1">
        <p>
          <FaRegCalendarAlt />
        </p>
        <p>{format(new Date(checkIn), "dd-MM-yyyy")}</p>
        <span>to</span>
        <p>{format(new Date(checkOut), "dd-MM-yyyy")}</p>
      </div>
    </div>
  );
};
