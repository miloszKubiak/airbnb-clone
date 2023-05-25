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
    <div className="flex flex-col gap-1 sm:gap-2">
      <div className="flex items-center gap-3 text-xs sm:text-[15px]">
        <div className="flex gap-1 items-center">
          <p>
            <FaCloudMoon />
          </p>
          <p>
            {numberOfNights} night
            {numberOfNights > 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <p>
            <GoPerson />
          </p>
          <p>
            {numberOfGuests} guest
            {Number(numberOfGuests) > 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs sm:text-sm"></div>
      <div className="flex gap-2 flex-col sm:flex-row text-xs sm:text-[15px]">
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
