type ReserveWidgetProps = {
  price: number;
  maxGuests: number;
};

export const ReserveWidget = ({ price, maxGuests }: ReserveWidgetProps) => {
  return (
    <div className="flex flex-none flex-col justify-center p-4 bg-white border-2 border-zinc-300 rounded-2xl">
      <p className="text-left">Price: {price} € / per night</p>
      <div className="flex justify-between gap-4 my-4">
        <input
          className="p-1 border-2 border-zinc-300 rounded-md"
          type="date"
        />
        <input
          className="p-1 border-2 border-zinc-300 rounded-md"
          type="date"
        />
      </div>
      <div>
        <p className="text-center">Number of guests</p>
        <input type="number" value={1} min="1" max={maxGuests} />
        <button className="primary">Reserve</button>
      </div>
    </div>
  );
};
