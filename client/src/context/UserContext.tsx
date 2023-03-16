import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import axios from "axios";

type TUser = {
  _id: string;
  name: string;
  email: string;
  password?: string;
};

type UserContextType = {
  user: TUser | null;
  setUser: Dispatch<SetStateAction<TUser | null>>;
  ready: boolean;
  usernames: TUser[] | null;
  setUsernames: Dispatch<SetStateAction<TUser[] | null>>;
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
  const [usernames, setUsernames] = useState<TUser[] | null>(null);

  useEffect(() => {
    axios.get("/users").then(({ data }) => setUsernames(data));
  }, []);

  console.log(usernames);

  useEffect(() => {
    if (!user) {
      axios.get("/auth/profile").then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, usernames, setUsernames, ready }}
    >
      {children}
    </UserContext.Provider>
  );
};
