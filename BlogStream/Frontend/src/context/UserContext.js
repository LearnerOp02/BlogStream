import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const setUserMethod = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      localStorage.removeItem('user');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token'); 
  };

  return (
    <UserContext.Provider value={{ user, setUserMethod, logout }}>
      {children}
    </UserContext.Provider>
  );
}
