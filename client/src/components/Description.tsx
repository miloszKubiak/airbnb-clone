type DescriptionProps = {
  description: string;
  checkIn: string;
  checkOut: string;
  extraInfo: string;
  ownerName: string;
};

export const Description = ({
  description,
  checkIn,
  checkOut,
  extraInfo,
  ownerName,
}: DescriptionProps) => {
  return (
    <div className="flex flex-col justify-between">
      <h2 className="font-bold text-xl">Accommodation hosted by {ownerName}</h2>
      <p className="mb-2">{description}</p>
      <div className="flex flex-col gap-1 font-bold">
        <h2>
          Check-in hour : <span className="font-normal">{checkIn}</span>
        </h2>
        <h2>
          Checkout hour : <span className="font-normal">{checkOut}</span>
        </h2>
      </div>
      <p>{extraInfo}</p>
    </div>
  );
};
