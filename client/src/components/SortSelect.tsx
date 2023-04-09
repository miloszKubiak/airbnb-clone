import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const SortSelect = () => {
  const { sort, setSort } = useContext(SearchContext);
  const options = ["a-z", "z-a", "price-lowest", "price-highest"];

  return (
    <select
      className="p-2"
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
