import { SortSelect } from "./SortSelect";
import { Filters } from "./Filters";

export const FiltersBar = () => {
  return (
    <div className="mt-4 flex gap-4 items-center">
      <SortSelect />
      <Filters />
    </div>
  );
};
