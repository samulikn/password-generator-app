import { useState, type ReactElement } from "react";

export type CharacterItemType = {
  item: string;
  checked?: boolean;
};

function CharacterItem({
  item,
  checked = false,
}: CharacterItemType): ReactElement {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const itemId: string = item.replace(" ", "").toLocaleLowerCase();

  return (
    <div className="text-base/5 flex gap-4 sm:text-lg/6">
      <input
        id={itemId}
        type="checkbox"
        name={item}
        checked={isChecked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setIsChecked(e.target.checked);
        }}
        className=" h-5 w-5 appearance-none border-2 checked:bg-green-200 checked:border-green-200 checked:bg-[url('assets/images/icon-check.svg')] checked:bg-no-repeat checked:bg-center"
      />
      <label htmlFor={itemId} className="">
        Include {item}
      </label>
    </div>
  );
}

export default CharacterItem;
