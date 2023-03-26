import { FaMoneyBillWave } from "react-icons/all";

type PriceProps = {
  price: number;
};

export const Price = ({ price }: PriceProps) => {
  return (
    <div className="flex items-center gap-1">
      <p>
        <FaMoneyBillWave />
      </p>
      <p>Total price: {price} €</p>
    </div>
  );
};
