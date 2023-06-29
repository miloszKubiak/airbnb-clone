import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import axios from "axios";
import { TAccommodation } from "../types/accommodation";

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
  getUserFavoritesInBookmarks: (page: number) => void;
  addToFavorites: (accommodation: string, user: string) => void;
  removeFromFavorites: (id: string) => void;
  selectedId: string | null;
  setSelectedId: Dispatch<SetStateAction<string | null>>;
  favoritesNumOfPages: number | 1;
  setFavoritesNumOfPages: Dispatch<SetStateAction<number | 1>>;
  favoritesPage: number | 1;
  setFavoritesPage: Dispatch<SetStateAction<number | 1>>;
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
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [favoritesNumOfPages, setFavoritesNumOfPages] = useState(1);
  const [favoritesPage, setFavoritesPage] = useState(1);

  const getUserFavorites = async () => {
    try {
      const response = await axios.get("/user-favorites");
      setFavorites(response.data.favorites);
    } catch (error) {
      console.error(error);
    }
  };

  const getUserFavoritesInBookmarks = async (page: number) => {
    let url = `/user-favorites/in-bookmark?page=${page}`;
    const response = await axios.get(url);
    setFavorites(response.data.favorites);
    setFavoritesNumOfPages(response.data.numOfPages);
  };

  const addToFavorites = async (accommodation: string, user: string) => {
    const data = {
      accommodation,
      user,
    };
    const response = await axios.post("/user-favorites", data);
    const _id = response.data.favorite._id;
    setFavorites((prev: any) => [...prev, { _id, ...data }]);
  };

  const removeFromFavorites = async (id: string) => {
    await axios.delete(`/user-favorites/${id}`);
    setFavorites(favorites.filter((favorite: any) => favorite !== id));
    getUserFavoritesInBookmarks(favoritesPage);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
        getUserFavorites,
        getUserFavoritesInBookmarks,
        addToFavorites,
        removeFromFavorites,
        selectedId,
        setSelectedId,
        favoritesNumOfPages,
        setFavoritesNumOfPages,
        favoritesPage,
        setFavoritesPage,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
