import ArrowRightIcon from "../images/icon-arrow-right.svg?react";
import Rectangle from "./Rectangle";
import { UseCharacterContext } from "../hooks/useCharacter";
import { UseLengthContext } from "../hooks/useLength";
import { UsePasswordContext } from "../hooks/usePassword";

const TotalStrength = () => {
  const { characters } = UseCharacterContext();
  const { length } = UseLengthContext();
  const { setPassword } = UsePasswordContext();

  let charSize: number = characters
    .filter((c) => c.isIncluded)
    .reduce((sum, curr) => sum + curr.chars.length, 0);

  let rectangles: number = 4;
  let filledRectangles: number = 0;
  let passwordStrength: string = "";
  let bgRectangle: string = "";

  function calculateEntropy(length: number, poolSize: number): number {
    if (length < 4 || poolSize <= 0) {
      return 0;
    }
    return length * Math.log2(poolSize);
  }

  const entropy = calculateEntropy(length, charSize);

  if (entropy === 0) {
    filledRectangles = 0;
    passwordStrength = "";
    bgRectangle = "border-grey-200";;
  } else if (entropy < 28) {
    filledRectangles = 1;
    passwordStrength = "TOO WEAK!";
    bgRectangle = "tooweak";
  } else if (entropy < 36) {
    filledRectangles = 2;
    passwordStrength = "WEAK";
    bgRectangle = "weak";
  } else if (entropy < 60) {
    filledRectangles = 3;
    passwordStrength = "MEDIUM";
    bgRectangle = "medium";
  } else {
    filledRectangles = 4;
    passwordStrength = "STRONG";
    bgRectangle = "strong";
  }

  const generatePassword = () => {
    let chars = characters
      .filter((c) => c.isIncluded)
      .reduce((prev, curr) => prev + curr.chars, "");

    let generatePassword = "";
    for (let s = 0; s < length; s++) {
      const i = Math.floor(Math.random() * chars.length);
      generatePassword += chars[i];
    }

    setPassword(generatePassword);
  };

  return (
    <div>
      <div className="p-4 sm:px-8 bg-grey-850 flex items-center min-h-16 sm:min-h-18">
        <p className="text-base/5 text-grey-600 sm:text-lg">STRENGTH</p>
        <span className="ml-auto mr-4 text-lg/6 sm:text-2xl sm:pl-4">
          {passwordStrength}
        </span>
        <div className="flex gap-2">
          {Array.from(
            { length: rectangles },
            (v: number = filledRectangles, i) => (
              <Rectangle
                key={i}
                index={i}
                filledRectangles={v}
                bgColor={bgRectangle}
              />
            )
          )}
        </div>
      </div>
      <button
        onClick={generatePassword}
        disabled={!charSize}
        className="w-full mt-4 sm:mt-8 bg-green-200 px-26 py-4 text-grey-800 text-base/5 inline border-2 border-green-200 hover:text-green-200 
        hover:bg-transparent disabled:opacity-10 disabled:cursor-not-allowed disabled:hover:bg-green-200 disabled:hover:text-grey-800"
      >
        GENERATE <ArrowRightIcon className="inline mb-1" />
      </button>
    </div>
  );
};

export default TotalStrength;
