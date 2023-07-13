import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const navigate = useNavigate();
  const isClient = localStorage.getItem("is_client");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");        
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = () => {                
    // isLoggedIn
    setIsLoggedIn(true);
    navigate("/");
  };

  const handleLogout = () => {
    // remove the access token
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isClient, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
