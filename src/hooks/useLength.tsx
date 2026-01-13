import { useContext } from "react";
import LengthContext from "../context/LengthContext";

export const UseLengthContext = () => {
  const context = useContext(LengthContext);
  if (!context) {
    throw new Error("useLengthContext must be used within LengthProvider");
  }
  return context;
};
