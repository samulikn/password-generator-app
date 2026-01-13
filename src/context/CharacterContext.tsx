import { createContext, useState, type ReactElement } from "react";

export type CharacterType = {
  id: number;
  charName: string;
  isIncluded: boolean;
  chars: string;
};

const initCharacterState: CharacterType[] = [
  { id: 1, charName: "Uppercase Letters", isIncluded: true, chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  { id: 2, charName: "Lowercase Letters", isIncluded: true, chars: "abcdefghijklmnopqrstuvwxyz" },
  { id: 3, charName: "Numbers", isIncluded: false, chars: "1234567890" },
  { id: 4, charName: "Symbols", isIncluded: false, chars: "!?,.<>@#$%^&*()+-_=:;|/\\'\"{}[]`~" },
];

export type CharacterContextType = {
  characters: CharacterType[];
  toggleCheckbox: (id: number) => void;
};

const CharacterContext = createContext<CharacterContextType | null>(
  null
);

type ChildrenType = { children: ReactElement | ReactElement[] };

export const CharacterContextProvider = ({ children }: ChildrenType) => {
  const [characters, setCharacters] =
    useState<CharacterType[]>(initCharacterState);

  const toggleCheckbox = (id: number) => {
    setCharacters((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isIncluded: !item.isIncluded } : item
      )
    );
  };

  return (
    <CharacterContext.Provider value={{ characters, toggleCheckbox }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;
