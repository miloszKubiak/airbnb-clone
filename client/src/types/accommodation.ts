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

export type TAccommodationFormValues = {
  ownerName?: string;
  id?: string;
  title: string;
  address: string;
  description: string;
  photos?: any[];
  perks?: string[];
  category: string;
  extraInfo: string;
  checkIn: string;
  checkOut: string;
  maxGuests: number;
  price: number;
};
