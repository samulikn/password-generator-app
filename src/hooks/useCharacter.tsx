import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";


export const UseCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error(
      "useCharacterContext must be used within CharacterProvider"
    );
  }
  return context;
};
