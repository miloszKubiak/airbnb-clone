type DescriptionProps = {
  description: string;
  checkIn: string;
  checkOut: string;
};

export const Description = ({
  description,
  checkIn,
  checkOut,
}: DescriptionProps) => {
  return (
    <div className="flex flex-col justify-between">
      <p className="mb-2">{description}</p>
      <h2>Check-in hour: {checkIn}</h2>
      <h2>Checkout hour: {checkOut}</h2>
    </div>
  );
};
