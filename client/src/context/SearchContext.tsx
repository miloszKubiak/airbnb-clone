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

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
