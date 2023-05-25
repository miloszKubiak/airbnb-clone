import { FaMoneyBillWave } from "react-icons/all";

type PriceProps = {
  price: number;
};

export const Price = ({ price }: PriceProps) => {
  return (
    <div className="flex items-center gap-1 text-xs sm:text-sm">
      <p>
        <FaMoneyBillWave />
      </p>
      <p className="font-bold">Total price: {price} €</p>
    </div>
  );
};
