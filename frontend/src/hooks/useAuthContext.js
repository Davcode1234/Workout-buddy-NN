import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw Error("useAuthContext must be used inside AuthContextProvider");
  }

  return authContext;
};
