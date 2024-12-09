import AuthContext from "./AuthContext";
import { useState } from "react";

const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
  
    const logIn = (token, username) => {
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      setLoggedIn(true);
    };
    const logOut = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      setLoggedIn(false);
    };
  
    return (
      <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
        {children}
      </AuthContext.Provider>
    );
  };
  export default AuthProvider;