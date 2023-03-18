import { Reservation, TReservation } from "./Reservation";
import { useEffect, useState } from "react";
import axios from "axios";

export const MyReservations = () => {
  const [myReservations, setMyReservations] = useState<TReservation[]>([]);

  useEffect(() => {
    axios
      .get("/reservations")
      .then((response) => setMyReservations(response.data));
  }, []);

  return (
    <div>
      {myReservations?.map((reservation) => (
        <Reservation
          key={reservation._id}
          _id={reservation._id}
          checkIn={reservation.checkIn}
          checkOut={reservation.checkOut}
          numberOfGuests={reservation.numberOfGuests}
          numberOfNights={reservation.numberOfNights}
          price={reservation.price}
          accommodation={reservation.accommodation}
        />
      ))}
    </div>
  );
};
