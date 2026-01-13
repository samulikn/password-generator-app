import { useContext } from "react";
import PasswordContext from "../context/PasswordContext";

export const UsePasswordContext = () => {
  const context = useContext(PasswordContext);
  if (!context) {
    throw new Error("usePasswordContext must be used within PasswordProvider");
  }
  return context;
};
