import { Link } from "react-router-dom";

type UserAccommodationProps = {
  _id: string;
  title: string;
  description: string;
  photos: string[];
  onDelete: (_id: string) => void;
};

export const UserAccommodation = ({
  _id,
  photos,
  title,
  description,
  onDelete,
}: UserAccommodationProps) => {
  return (
    <div className="bg-gray-100 p-4 rounded-2xl" key={_id}>
      <Link
        to={`/accommodations/${_id}`}
        className="p-4 flex gap-4 bg-gray-100 cursor-pointer"
      >
        <div className="w-32 h-32 bg-gray-300 grow shrink-0">
          {photos!.length > 0 && (
            <img
              className="object-cover h-full w-full"
              src={photos![0]}
              alt="main photo of the accommodation"
            />
          )}
        </div>
        <div className="grow-0 shrink">
          <h2 className="text-xl text-left font-bold">{title}</h2>
          <p className="text-xs text-left mt-4 md:text-sm h-24 overflow-hidden">
            {description}
          </p>
        </div>
      </Link>
      <div className="flex gap-4 items-center justify-center">
        <Link
          to={`/account/accommodations/edit/${_id}`}
          className="link-primary"
          type="button"
        >
          Edit
        </Link>
        <button onClick={() => onDelete(_id)} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
};
