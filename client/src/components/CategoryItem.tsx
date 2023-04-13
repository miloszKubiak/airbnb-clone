import { ReactNode } from "react";

type CategoryItemProps = {
  icon: ReactNode;
  name: string;
  onSetCategory: (name: string) => void;
};

export const CategoryItem = ({
  icon,
  name,
  onSetCategory,
}: CategoryItemProps) => {
  return (
    <div
      onClick={() => onSetCategory(name)}
      className="flex-1 min-w-[5rem] flex flex-col items-center justify-center cursor-pointer"
    >
      <div className="p-1 w-full h-full text-3xl flex-1 flex items-center justify-center">
        {icon}
      </div>
      <p className="p-1 w-full h-full text-xs text-center">{name}</p>
    </div>
  );
};
