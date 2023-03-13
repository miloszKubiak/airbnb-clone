import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";

type ReserveWidgetProps = {
  price: number;
  maxGuests: number;
  id: string;
  title: string;
};

export const ReservationWidget = ({
  price,
  maxGuests,
  id,
  title,
}: ReserveWidgetProps) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const tax = 50;
  const cleaningPrice = 200;

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  const handleReserve = async () => {
    try {
      const response = await axios.post("/reservations", {
        checkIn,
        checkOut,
        numberOfGuests,
        numberOfNights,
        accommodationId: id,
        accommodationName: title,
        price: numberOfNights * price + tax + cleaningPrice,
        userId: user?._id,
        userName: user?.name,
      });
      const reservationId = response.data._id;
      alert("Success!");
      navigate("/");
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex min-w-[50%] flex-col justify-center p-4 bg-white border-2 border-zinc-300 rounded-2xl">
      <p className="text-left">
        <span className="font-bold text-xl">{price} €</span> / night
      </p>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-4 my-4">
        <div className="flex flex-col">
          <label>Check-in: </label>
          <input
            className="p-1 border-2 border-zinc-300 rounded-md"
            type="date"
            value={checkIn}
            onChange={(event) => setCheckIn(event.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>Check Out: </label>
          <input
            className="p-1 border-2 border-zinc-300 rounded-md"
            type="date"
            value={checkOut}
            onChange={(event) => setCheckOut(event.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="text-center">Number of guests</label>
        <input
          type="number"
          min="1"
          max={maxGuests}
          value={numberOfGuests}
          onChange={(event: any) => setNumberOfGuests(event.target.value)}
        />
        <button className="primary" onClick={handleReserve}>
          Reserve
        </button>
        <p className="text-sm text-center my-2">You won't be charged yet</p>
      </div>
      <div>
        <div className="flex justify-between">
          <p>price x nights</p>
          <p>{numberOfNights > 0 && price * numberOfNights} €</p>
        </div>
        <div className="flex justify-between">
          <p>cleaning price</p>
          <p>{cleaningPrice} €</p>
        </div>
        <div className="flex justify-between">
          <p>tax</p>
          <p>{tax} €</p>
        </div>
        <div className="flex justify-between border-t-[1px] border-zinc-300 mt-4">
          <p className="mt-4">sum</p>
          <p className="mt-4">
            {price * numberOfNights + cleaningPrice + tax} €
          </p>
        </div>
      </div>
    </div>
  );
};
