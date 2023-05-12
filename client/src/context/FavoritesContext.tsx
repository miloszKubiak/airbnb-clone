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
  isFav: boolean;
};

type FavoritesContextType = {
  favorites: TFavorite[];
  setFavorites: Dispatch<SetStateAction<TFavorite[]>>;
  getUserFavorites: () => void;
  addToFavorites: (accommodation: string, user: string) => void;
  removeFromFavorites: (id: string) => void;
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
    try {
      const response = await axios.get("/user-favorites");
      setFavorites(response.data.favorites);
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavorites = async (accommodation: string, user: string) => {
    const data = {
      accommodation,
      user,
    };
    const response = await axios.post("/user-favorites", data);
    const _id = response.data.favorite._id;
    console.log(`${accommodation} added to favorites`);
    setFavorites((prev: any) => [...prev, { _id, ...data }]);
  };

  const removeFromFavorites = async (accommodation: any) => {
    await axios.delete(`/user-favorites`, accommodation);
    console.log(`${accommodation} removed from favorites`);
    setFavorites(
      favorites.filter((favorite: any) => favorite !== accommodation)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
        getUserFavorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
