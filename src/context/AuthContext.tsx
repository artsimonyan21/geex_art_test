import { FC, ReactNode, createContext } from "react";

const initialValue = {
  firstStep: {
    phoneNumber: "",
  },
};
export const AuthContext = createContext(initialValue);
const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
