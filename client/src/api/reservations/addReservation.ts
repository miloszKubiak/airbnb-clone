import axios from "axios";

//póki co nieuzywane
export const addReservation = async (
  checkIn: string,
  checkOut: string,
  numberOfGuests: number,
  numberOfNights: number,
  accommodation: string | undefined,
  price: number,
  user: string
) => {
  const { data } = await axios.post("/reservations", {
    checkIn,
    checkOut,
    numberOfGuests,
    numberOfNights,
    accommodation,
    price,
    user,
  });
  console.log(data);
  return data;
};
