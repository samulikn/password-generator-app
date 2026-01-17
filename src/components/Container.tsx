import type { ReactElement } from "react";
import Password from "./Password";
import Settings from "./Settings";
import { PasswordContextProvider } from "../context/PasswordContext";

export default function Container(): ReactElement {
  return (
    <div className="flex flex-col-reverse gap-4 sm:gap-6 sm:w-135 sm:h-auto">
      <PasswordContextProvider>
        <Settings />
        <Password />
      </PasswordContextProvider>
    </div>
  );
}
