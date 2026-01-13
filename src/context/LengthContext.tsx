import { createContext, useState, type ReactElement } from "react";

export type LengthType = number;

const initLengthContextState: LengthType = 6;

export type LengthContextType = {
  length: LengthType;
  setLength: (length: LengthType) => void;
};

const LengthContext = createContext<LengthContextType | null>(null);

type ChildrenType = { children: ReactElement | ReactElement[] };

export const LengthContextProvider = ({ children }: ChildrenType) => {
  const [length, setLength] = useState<LengthType>(initLengthContextState);

  return (
    <LengthContext.Provider value={{ length, setLength }}>
      {children}
    </LengthContext.Provider>
  );
};

export default LengthContext;
