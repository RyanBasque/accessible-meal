import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({ name: '', email: '' });

function AuthProvider({ children }) {
  const [user, storeUser] = useState();

  return (
    <AuthContext.Provider
      value={{
        user,
        storeUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
