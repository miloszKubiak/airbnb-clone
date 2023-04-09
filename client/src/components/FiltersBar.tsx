import { SortSelect } from "./SortSelect";
import { Categories } from "./Categories";

export const FiltersBar = () => {
  return (
    <div className="mt-4 flex gap-4 items-center">
      <SortSelect />
      <Categories />
    </div>
  );
};
