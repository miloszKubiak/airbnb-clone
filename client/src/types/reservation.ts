import { TAccommodation } from "./accommodation";

export type TReservation = {
  _id: string;
  checkIn: Date;
  checkOut: Date;
  numberOfGuests: string;
  numberOfNights: number;
  price: number;
  accommodation: TAccommodation;
  status: string;
};
