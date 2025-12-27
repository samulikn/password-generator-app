import type { ReactElement } from "react";
import Password from "./Password";
import Settings from "./Settings";

export default function Container(): ReactElement {
  return (
    <div className="flex flex-col-reverse gap-4 sm:gap-6">
      <Settings />
      <Password />
    </div>
  );
}
