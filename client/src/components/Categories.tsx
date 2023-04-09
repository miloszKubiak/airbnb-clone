import { categories } from "../utils/categories";
import { CategoryItem } from "./CategoryItem";

export const Categories = () => {
  return (
    <div className="flex gap-4 overflow-x-scroll">
      {categories.map((categoryItem) => (
        <CategoryItem
          key={categoryItem.id}
          icon={categoryItem.icon}
          name={categoryItem.name}
        />
      ))}
    </div>
  );
};
