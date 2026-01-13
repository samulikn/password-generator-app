import { createContext, useState, type ReactElement } from "react";

export type PasswordType = string;

const initPasswordContextState: PasswordType = "";

export type PasswordContextType = {
  password: PasswordType;
  setPassword: (password: PasswordType) => void;
};

const PasswordContext = createContext<PasswordContextType | null>(null);

type ChildrenType = { children: ReactElement | ReactElement[] };

export const PasswordContextProvider = ({ children }: ChildrenType) => {
  const [password, setPassword] = useState<PasswordType>(
    initPasswordContextState
  );

  return (
    <PasswordContext.Provider value={{ password, setPassword }}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordContext;
