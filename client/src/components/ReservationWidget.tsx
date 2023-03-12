type ReserveWidgetProps = {
  price: number;
  maxGuests: number;
};

export const ReservationWidget = ({ price, maxGuests }: ReserveWidgetProps) => {
  return (
    <div className="flex min-w-[50%] flex-col justify-center p-4 bg-white border-2 border-zinc-300 rounded-2xl">
      <p className="text-left">
        <span className="font-bold text-xl">{price} €</span> / night
      </p>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-4 my-4">
        <div className="flex flex-col">
          <label>Check-in: </label>
          <input
            className="p-1 border-2 border-zinc-300 rounded-md"
            type="date"
          />
        </div>
        <div className="flex flex-col">
          <label>Check Out: </label>
          <input
            className="p-1 border-2 border-zinc-300 rounded-md"
            type="date"
          />
        </div>
      </div>
      <div>
        <label className="text-center">Number of guests</label>
        <input type="number" min="1" max={maxGuests} />
        <button className="primary">Reserve</button>
        <p className="text-sm text-center my-2">You won't be charged yet</p>
      </div>
      <div>
        <div className="flex justify-between">
          <p>price x nights</p>
          <p>value</p>
        </div>
        <div className="flex justify-between">
          <p>cleaning price</p>
          <p>value</p>
        </div>
        <div className="flex justify-between">
          <p>tax</p>
          <p>value</p>
        </div>
        <div className="flex justify-between border-t-[1px] border-zinc-300 mt-4">
          <p className="mt-4">sum</p>
          <p className="mt-4">value</p>
        </div>
      </div>
    </div>
  );
};
