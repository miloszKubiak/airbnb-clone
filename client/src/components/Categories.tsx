import { categories } from "../utils/categories";
import { CategoryItem } from "./CategoryItem";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const Categories = () => {
  const { setCategory, setPage } = useContext(SearchContext);

  return (
    <div className="flex gap-4 overflow-x-scroll text-zinc-700">
      {categories.map((categoryItem) => (
        <CategoryItem
          key={categoryItem.id}
          icon={categoryItem.icon}
          name={categoryItem.name}
          onSetCategory={() => {
            setPage(1);
            setCategory(categoryItem.name);
          }}
        />
      ))}
    </div>
  );
};
