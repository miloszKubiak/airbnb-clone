import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader } from "./Loader";
import { TReservationRequest } from "../types/reservation";

type ReserveWidgetProps = {
  price: number;
  maxGuests: number;
  id?: string;
  title?: string;
};

export const ReservationWidget = ({
  price,
  maxGuests,
  id,
}: ReserveWidgetProps) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const queryClient = useQueryClient();

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  const tax = 50;
  const cleaningPrice = 100;
  let fullPrice = numberOfNights * price + tax + cleaningPrice;

  const { mutate: addReservation, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: TReservationRequest = {
        checkIn,
        checkOut,
        numberOfGuests,
        numberOfNights,
        accommodation: id,
        price: fullPrice,
        user: user?._id,
      };
      await axios.post("/reservations", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reservations"] });
      toast.success("The reservation was successful!");
      navigate(`/account/my-reservations`);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (isLoading) return <Loader />;

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
      <div className="flex flex-col gap-1 items-center">
        <label className="text-center">
          Number of guests (max. {maxGuests})
        </label>
        <input
          type="number"
          min="1"
          max={maxGuests}
          value={numberOfGuests}
          onChange={(event: any) => setNumberOfGuests(event.target.value)}
        />
        <button
          className="primary disabled:bg-zinc-300 w-full text-xl"
          onClick={() => addReservation()}
          disabled={numberOfNights <= 0 || !user}
        >
          Reserve
        </button>
        <p className="text-sm text-center my-2">You won't be charged yet</p>
      </div>
      {numberOfNights > 0 && (
        <div>
          <div className="flex justify-between">
            <p>
              {price} € x {numberOfNights}
            </p>
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
          <div className="flex justify-between border-t-[1px] border-zinc-300 mt-4 font-bold">
            <p className="mt-4">Total</p>
            <p className="mt-4">
              {price * numberOfNights + cleaningPrice + tax} €
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
