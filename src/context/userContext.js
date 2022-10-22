import { createContext, useContext, useState } from "react";

const AuthContext = createContext({ name: "", email: "" });

function AuthProvider({ children }) {
  const [user, storeUser] = useState();
  const [resturant, setRestaurant] = useState();

  return (
    <AuthContext.Provider
      value={{
        user,
        storeUser,
        resturant,
        setRestaurant,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
