import { ReactNode, useContext } from "react";
import { SearchContext } from "../context/SearchContext";

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
  const { category } = useContext(SearchContext);
  return (
    <div
      onClick={() => onSetCategory(name)}
      className={category === name ? "selected-category" : "category"}
    >
      <div className="p-1 w-full h-full text-3xl flex-1 flex items-center justify-center">
        {icon}
      </div>
      <p className="p-1 w-full h-full text-xs text-center">{name}</p>
    </div>
  );
};
