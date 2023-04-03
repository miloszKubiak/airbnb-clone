import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type AccommodationsContextType = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

type AccommodationsContextProviderProps = {
  children: ReactNode;
};

export const AccommodationsContext = createContext<AccommodationsContextType>(
  {} as AccommodationsContextType
);

export const AccommodationsContextProvider = ({
  children,
}: AccommodationsContextProviderProps) => {
  const [search, setSearch] = useState("");

  return (
    <AccommodationsContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </AccommodationsContext.Provider>
  );
};
