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

export type TReservationRequest = {
  checkIn: string;
  checkOut: string;
  numberOfGuests: number;
  numberOfNights: number;
  accommodation: string | undefined;
  price: number;
  user: string | undefined;
};
