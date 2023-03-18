import { Link } from "react-router-dom";

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
};

type AccommodationProps = {
  _id: string;
  title: string;
  description: string;
  photos: string[];
};

export const Accommodation = ({
  _id,
  photos,
  title,
  description,
}: AccommodationProps) => {
  return (
    <div className="bg-gray-100 p-4 rounded-2xl" key={_id}>
      <Link
        to={`/accommodations/${_id}`}
        className="p-4 flex gap-4 bg-gray-100 cursor-pointer"
      >
        <div className="w-32 h-32 bg-gray-300 grow shrink-0">
          {photos!.length > 0 && (
            <img
              className="object-cover h-full"
              src={photos![0]}
              alt="main photo of the accommodation"
            />
          )}
        </div>
        <div className="grow-0 shrink">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
      <div>
        <Link
          to={`/account/accommodations/edit/${_id}`}
          className="link-primary mt-4"
          type="button"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};
