import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const SortSelect = () => {
  const { sort, setSort } = useContext(SearchContext);
  const options = ["A-Z", "Z-A", "Price-lowest", "Price-highest"];

  return (
    <div className="flex items-center gap-4">
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <p>filters</p>
    </div>
  );
};
