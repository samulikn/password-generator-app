import { type ReactElement } from "react";
import CharacterItem from "./CharacterItem";
import { UseCharacterContext } from "../hooks/useCharacter";

const CharacterList = (): ReactElement => {
  const { characters } = UseCharacterContext();

  return (
    <ul className="list-none">
      {characters.map((listItem) => (
        <li key={listItem.id} className="pb-4 last:pb-0">
          <CharacterItem id={listItem.id} />
        </li>
      ))}
    </ul>
  );
};
export default CharacterList;
