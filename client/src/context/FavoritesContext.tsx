import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { TAccommodation } from "../components/Accommodation";

export type TFavorite = {
  accommodation: Pick<
    TAccommodation,
    | "_id"
    | "title"
    | "address"
    | "photos"
    | "price"
    | "category"
    | "averageRating"
    | "numOfReviews"
  >;
  user: string;
  _id: string;
};

type FavoritesContextType = {
  favorites: TFavorite[];
  setFavorites: Dispatch<SetStateAction<TFavorite[]>>;
  getUserFavorites: () => void;
};

type FavoritesContextProviderProps = {
  children: ReactNode;
};

export const FavoritesContext = createContext<FavoritesContextType>(
  {} as FavoritesContextType
);

export const FavoritesContextProvider = ({
  children,
}: FavoritesContextProviderProps) => {
  const [favorites, setFavorites] = useState<TFavorite[]>([]);

  const getUserFavorites = async () => {
    const response = await axios.get("/user-favorites");
    setFavorites(response.data.favorites);
  };

  console.log(favorites);

  useEffect(() => {
    getUserFavorites();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, getUserFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
