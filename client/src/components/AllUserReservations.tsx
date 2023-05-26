import { Reservation, TReservation } from "./Reservation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "./Pagination";
import { Loader } from "./Loader";

export const AllUserReservations = () => {
  const [userReservations, setUserReservations] = useState<TReservation[]>([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const getUserReservations = async () => {
    setLoading(true);
    let url = `/reservations?page=${page}`;
    const response = await axios.get(url);
    setLoading(false);
    setUserReservations(response.data.reservations);
    setNumOfPages(response.data.numOfPages);
  };

  useEffect(() => {
    getUserReservations();
  }, [page]);

  if (loading) return <Loader />;

  if (userReservations.length <= 0)
    return (
      <div className="mt-20 flex justify-center items-center">
        <p>There are no reservations...</p>
      </div>
    );

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
