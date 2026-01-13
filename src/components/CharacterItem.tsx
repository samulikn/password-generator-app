import { type ReactElement } from "react";
import { type CharacterType } from "../context/CharacterContext";
import { UseCharacterContext } from "../hooks/useCharacter";

export type CharacterItemType = {
  id: number;
};

function CharacterItem({ id }: CharacterItemType): ReactElement {
  const { characters, toggleCheckbox } = UseCharacterContext();

  const item: CharacterType | undefined = characters.find((i) => i.id === id);

  const itemId: string | undefined = item?.charName
    .replace(" ", "")
    .toLowerCase();

  const handleChange = () => {
    if (item) toggleCheckbox(item.id);
  };

  const content: ReactElement | ReactElement[] = !item ? (
    <></>
  ) : (
    <div className="text-base/5 flex gap-4 sm:text-lg/6">
      <input
        id={itemId}
        type="checkbox"
        name={item.charName}
        checked={item.isIncluded}
        onChange={handleChange}
        className="h-5 w-5 appearance-none border-2 checked:bg-green-200 checked:border-green-200 checked:bg-[url('images/icon-check.svg')] checked:bg-no-repeat checked:bg-center hover:border-green-200"
      />
      <label htmlFor={itemId} className="">
        Include {item.charName}
      </label>
    </div>
  );

  return content;
}

export default CharacterItem;