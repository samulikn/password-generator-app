import { type ReactElement } from "react";
import { UseLengthContext } from "../hooks/useLength";
import type { LengthType } from "../context/LengthContext";

function Length(): ReactElement | ReactElement[] {
  const { length, setLength } = UseLengthContext();
  const minLength: LengthType = 4;
  const maxLength: LengthType = 20;
  
  const updateFilling = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: LengthType = Number(e.target.value);
    setLength(value);
    const percent = (value - minLength) / (maxLength - minLength) * 100 - 0.05;
    e.target.style.setProperty("--fill", `${percent}%`);
  }

  return (
    <div className="pb-1 sm:pb-2">
      <div className="pb-2 sm:pb-4 flex justify-between items-center">
        <label htmlFor="length" className="text-base/5 sm:text-lg">
          Character Length
        </label>
        <span className="pr-4 sm:pr-0 text-2xl/8 text-green-200 sm:text-3xl/10">{length}</span>
      </div>
      <input
        id="length"
        type="range"
        value={length}
        min={minLength}
        max={maxLength}
        onInput={updateFilling}
        className="h-2 w-full [--fill:14%] appearance-none bg-grey-850 [&::-webkit-slider-thumb]:appearance-none 
        [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:bg-grey-200 [&::-webkit-slider-thumb]:rounded-full 
        [&::-webkit-slider-thumb]:cursor-pointer active:[&::-webkit-slider-thumb]:bg-grey-850 active:[&::-webkit-slider-thumb]:border-2 
        active:[&::-webkit-slider-thumb]:border-green-200 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-runnable-track]:
      bg-[linear-gradient(to_right,var(--color-green-200)_var(--fill),var(--color-grey-850)_var(--fill))]"
      ></input>
    </div>
  );
}

Length.propTypes = {};

export default Length;

// To do:
// Firefox 
/* Firefox */
    // [&::-moz-range-track]:h-2
    // [&::-moz-range-track]:
    //   bg-[linear-gradient(to_right,var(--color-green-200)_var(--fill),var(--color-grey-850)_var(--fill))]

    // [&::-moz-range-thumb]:w-7
    // [&::-moz-range-thumb]:h-7
    // [&::-moz-range-thumb]:rounded-full
    // [&::-moz-range-thumb]:bg-gray-200
