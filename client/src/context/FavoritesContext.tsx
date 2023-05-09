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
  addToFavorites: (accommodation: string, user?: string) => void;
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

  const addToFavorites = async (accommodation: string) => {
    // const data = {
    //   accommodation: accommodation,
    //   user: user,
    // };
    // const response = await axios.post("/user-favorites", data);
    // const _id = response.data.favorite._id;
    //
    // setFavorites((prev: any) => [...prev, { data, _id }]);
    console.log(`${accommodation} removed from favorites`);
    setFavorites((prev: any) => [...prev, accommodation]);
  };

  const removeFromFavorites = async (id: string) => {
    console.log(`${id} removed from favorites`);
    setFavorites(favorites.filter((favorite: any) => favorite !== id));
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
