export type TAccommodation = {
  _id?: string;
  owner?: string;
  ownerName?: string;
  title: string;
  address: string;
  description: string;
  photos?: string[];
  perks: string[];
  extraInfo: string;
  checkIn: string;
  checkOut: string;
  maxGuests: number;
  price: number;
  category: string;
  averageRating: number;
  numOfReviews: number;
};
