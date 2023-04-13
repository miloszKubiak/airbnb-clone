import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type SearchContextType = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  clearFilters: () => void;
};

type SearchContextProviderProps = {
  children: ReactNode;
};

export const SearchContext = createContext<SearchContextType>(
  {} as SearchContextType
);

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("A-Z");
  const [category, setCategory] = useState("all");

  const clearFilters = () => {
    setSearch("");
    setSort("A-Z");
    setCategory("all");
  };

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        sort,
        setSort,
        category,
        setCategory,
        clearFilters,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
