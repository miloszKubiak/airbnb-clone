import { AccountNavbar } from "../../components";
import { useParams } from "react-router-dom";
import { TReservation } from "../../components/Reservation";
import { useEffect, useState } from "react";
import axios from "axios";

export const SingleReservationPage = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState<TReservation | null>(null);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`/reservations/${id}`)
      .then((response) => setReservation(response.data));
  }, [id]);

  if (!reservation)
    return (
      <div>
        <h2>"nothing to display"</h2>
      </div>
    );

  return (
    <div>
      <AccountNavbar />
      <div className="bg-emerald-400">
        {reservation.price}
        <h2>{reservation._id}</h2>
      </div>
    </div>
  );
};
