import { useState } from "react";
import { createContext } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const logIn = () => setLogin(true);
  const logOut = () => {
    localStorage.removeItem('userId');
    setLogin(false);
  };

  return (
    <AuthContext.Provider value={{ login, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;