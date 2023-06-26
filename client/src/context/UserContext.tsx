import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { TUser } from "../types/user";

type UserContextType = {
  user: TUser | null;
  setUser: Dispatch<SetStateAction<TUser | null>>;
  ready: boolean;
};

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      axios.get("/auth/profile").then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
};
