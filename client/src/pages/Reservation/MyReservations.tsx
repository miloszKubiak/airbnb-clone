import { AccountNavbar } from "../../components";
import { useEffect, useState } from "react";
import axios from "axios";
import { TAccommodation } from "../Accommodation/Accommodations";

type TReservation = {
  _id: string;
  checkIn: Date;
  checkOut: Date;
  numberOfGuests: string;
  numberOfNights: number;
  price: number;
  accommodation: TAccommodation;
};

export const MyReservations = () => {
  const [myReservations, setMyReservations] = useState<TReservation[]>([]);

  useEffect(() => {
    axios
      .get("/reservations")
      .then((response) => setMyReservations(response.data));
  }, []);
  console.log(myReservations);
  return (
    <div>
      <AccountNavbar />
      <div>
        {myReservations?.map((reservation) => (
          <div key={reservation._id}>{reservation.accommodation.title}</div>
        ))}
      </div>
    </div>
  );
};
