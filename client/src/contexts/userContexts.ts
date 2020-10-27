import {User} from '../types/user';
import {createContext} from 'react';

type UserContextValue = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
});
