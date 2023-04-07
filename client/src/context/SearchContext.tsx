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

  const clearFilters = () => {
    setSearch("");
  };

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        clearFilters,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
