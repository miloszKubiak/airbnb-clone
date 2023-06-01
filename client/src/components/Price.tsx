import { FaMoneyBillWave } from "react-icons/all";

type PriceProps = {
  price: number;
};

export const Price = ({ price }: PriceProps) => {
  return (
    <div className="flex items-center gap-1 text-sm sm:text-sm">
      <p>
        <FaMoneyBillWave />
      </p>
      <div className="flex gap-1 font-bold">
        <p className="hidden sm:block">Total price:</p>
        <p>{price} €</p>
      </div>
    </div>
  );
};
