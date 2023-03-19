import { AccountNavbar, AddressLink } from "../../components";
import { useParams } from "react-router-dom";
import { TReservation } from "../../components/Reservation";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

export const SingleReservationPage = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState<TReservation | null>(null);

  const handleDeleteReservation = () => {
    console.log("delete");
  };

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
      <div className="mt-10 p-6 bg-zinc-100 flex gap-4 justify-around">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold">
            {reservation.accommodation?.title}
          </h1>
          <AddressLink address={reservation.accommodation?.address} />
          <p>
            {reservation.numberOfGuests} guest
            {Number(reservation.numberOfGuests) > 1 ? "s" : ""}
          </p>
          <p>
            {reservation.numberOfNights} night
            {reservation.numberOfNights > 1 ? "s" : ""}
          </p>
          <div className="flex gap-2">
            <p>{format(new Date(reservation.checkIn), "dd-MM-yyyy")}</p>
            <p>to</p>
            <p>{format(new Date(reservation.checkOut), "dd-MM-yyyy")}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-xl">
            Total price: {reservation.price} €
          </h1>
          <button
            className="px-3 py-2 bg-rose-400 text-white rounded-xl text-xs sm:text-sm"
            onClick={handleDeleteReservation}
          >
            Cancel reservation
          </button>
        </div>
      </div>
      <div className="grid gap-2 grid-cols-[2fr_1fr] overflow-hidden">
        <img
          className="cursor-pointer h-full"
          src={reservation.accommodation?.photos![0]}
          alt="photo of the place"
        />
        <div className="grid gap-2">
          <img
            className="cursor-pointer"
            src={reservation.accommodation?.photos![0]}
            alt="photo of the place"
          />
          <img
            className="cursor-pointer"
            src={reservation.accommodation?.photos![0]}
            alt="photo of the place"
          />
        </div>
      </div>
    </div>
  );
};
