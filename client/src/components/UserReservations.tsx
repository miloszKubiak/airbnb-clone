import { Reservation, TReservation } from "./Reservation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "./Pagination";

export const UserReservations = () => {
  const [userReservations, setUserReservations] = useState<TReservation[]>([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);

  const getMyReservations = async () => {
    const response = await axios.get(`/reservations`);
    setUserReservations(response.data);
    setNumOfPages(response.data.numOfPages);
    console.log(response.data);
  };

  useEffect(() => {
    getMyReservations();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        {userReservations.map((reservation) => (
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
