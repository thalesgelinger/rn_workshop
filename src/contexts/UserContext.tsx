import React, {createContext, useContext, useState} from 'react';

interface UserContextProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({children}: UserProviderProps) => {
  const [user, setUser] = useState('Initial');

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
