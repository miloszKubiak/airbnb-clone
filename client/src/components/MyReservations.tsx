import { Reservation, TReservation } from "./Reservation";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "./Pagination";
import { AccommodationsContext } from "../context/AccommodationsContext";

export const MyReservations = () => {
  const { page } = useContext(AccommodationsContext);
  const [myReservations, setMyReservations] = useState<TReservation[]>([]);

  const getMyReservations = async () => {
    const response = await axios.get(`/reservations?page=${page}`);
    setMyReservations(response.data.reservations);
  };

  useEffect(() => {
    getMyReservations();
  }, [page]);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        {myReservations.map((reservation) => (
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
      <Pagination />
    </>
  );
};
