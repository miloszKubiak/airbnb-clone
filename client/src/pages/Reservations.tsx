import { AccountNavbar } from "../components";
import { useEffect, useState } from "react";
import axios from "axios";

type TReservation = {
  checkIn: Date;
  checkOut: Date;
  numberOfGuests: string;
  numberOfNights: number;
  accommodationId: string;
  accommodationName: string;
  price: number;
  userId: string;
  userName: string;
};

export const Reservations = () => {
  const [reservations, setReservations] = useState<TReservation[]>([]);

  useEffect(() => {
    axios
      .get("/reservations")
      .then((response) => setReservations(response.data));
  }, []);

  return (
    <div>
      <AccountNavbar />
      <div>
        {reservations?.map((reservation) => (
          <div>{reservation.accommodationName}</div>
        ))}
      </div>
    </div>
  );
};
