import { useState } from "react";

function Length() {
  const [length, setLength] = useState<string>("6");
  const minLength: string = "4";
  const maxLength: string = "20";
  
  const updateFilling = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLength(e.target.value);
    const percent = (Number(value) - Number(minLength)) / (Number(maxLength) - Number(minLength)) * 100;
    e.target.style.setProperty("--fill", `${percent}%`);
  }

  return (
    <div className="pb-1">
      <div className="pb-2 flex justify-between items-center">
        <label htmlFor="length" className="text-base/5">
          Character Length
        </label>
        <span className="text-2xl/8 text-green-200">{length}</span>
      </div>
      <input
        id="length"
        type="range"
        value={length}
        min={minLength}
        max={maxLength}
        onInput={updateFilling}
        className="h-2 w-full [--fill:20%] appearance-none bg-grey-850 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:bg-grey-200 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer active:[&::-webkit-slider-thumb]:bg-grey-850 active:[&::-webkit-slider-thumb]:border-2 active:[&::-webkit-slider-thumb]:border-green-200 [&::-webkit-slider-runnable-track]:
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
