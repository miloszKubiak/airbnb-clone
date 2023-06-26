import { Reservation } from "./Reservation";
import { useState } from "react";
import { Pagination } from "./Pagination";
import { Loader } from "./Loader";
import { useQuery } from "@tanstack/react-query";
import { getUserReservations } from "../api/reservations";

export const AllUserReservations = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, data } = useQuery({
    queryKey: ["reservations", page],
    queryFn: () => getUserReservations(page),
  });

  const numOfPages = data?.numOfPages || 1;

  if (isLoading) return <Loader />;

  if (isError)
    return (
      <div className="mt-20 flex justify-center items-center">
        <p>There was an error...</p>
      </div>
    );

  if (data?.reservations.length <= 0)
    return (
      <div className="mt-20 flex justify-center items-center">
        <p>There are no reservations...</p>
      </div>
    );

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        {data?.reservations.map((reservation) => (
          <Reservation
            key={reservation._id}
            _id={reservation._id}
            checkIn={reservation.checkIn}
            checkOut={reservation.checkOut}
            numberOfGuests={reservation.numberOfGuests}
            numberOfNights={reservation.numberOfNights}
            price={reservation.price}
            accommodation={reservation.accommodation}
            status={reservation.status}
          />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} numOfPages={numOfPages} />
    </>
  );
};
