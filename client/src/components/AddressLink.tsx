import { GoLocation } from "react-icons/all";

type AddressLinkProps = {
  address: string;
};

export const AddressLink = ({ address }: AddressLinkProps) => {
  return (
    <div className="flex items-center gap-2 font-bold text-xs sm:text-sm underline my-2">
      <GoLocation />
      <a target="_blank" href={"https://maps.google.com/?q=" + address}>
        {address}
      </a>
    </div>
  );
};
