import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { TAccommodation } from "../components/Accommodation";
import axios from "axios";

type AccommodationsContextType = {
  accommodations: TAccommodation[];
  setAccommodations: Dispatch<SetStateAction<TAccommodation[]>>;
  numOfPages: number;
  setNumOfPages: Dispatch<SetStateAction<number>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  getAllAccommodations: () => void;
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
  const [accommodations, setAccommodations] = useState<TAccommodation[]>([]);
  const [numOfPages, setNumOfPages] = useState(1);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const getAllAccommodations = async () => {
    let url = `/accommodations?page=${page}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    const response = await axios.get(url);
    setAccommodations(response.data.accommodations);
    setNumOfPages(response.data.numOfPages);
  };

  useEffect(() => {
    getAllAccommodations();
  }, []);

  return (
    <AccommodationsContext.Provider
      value={{
        accommodations,
        setAccommodations,
        numOfPages,
        page,
        setPage,
        search,
        setSearch,
        setNumOfPages,
        getAllAccommodations,
      }}
    >
      {children}
    </AccommodationsContext.Provider>
  );
};
