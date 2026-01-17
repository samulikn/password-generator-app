import { useState } from "react";
import IconCopy from "../images/icon-copy.svg?react";
import { UsePasswordContext } from "../hooks/usePassword";

function Password() {
  const [copied, setCopied] = useState<boolean>(false);

  const { password } = UsePasswordContext();

  const textColor: string = !password ? "text-grey-700" : "text-white";
  const className: string = [
    textColor,
    "text-2xl/8 sm:text-3xl/10 border-none",
  ].join(" ");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 5000);
    } catch (err) {
      console.error("Faild to copy", err);
    }
  };

  return (
    <div className="relative p-4 bg-grey-800 flex justify-between items-center sm:px-8">
      <p className={className}>{!password ? "P4$5W0rD!" : password}</p>
      {copied ? (
        <span aria-hidden className="absolute top-5 right-14 sm:top-6 sm:right-16 text-green-200 text-base sm:text-lg ml-auto bg-grey-800">
          COPIED
        </span>
      ) : null}
      <button aria-label="Copy">
        <IconCopy
          className="w-full text-green-200 hover:text-white"
          onClick={handleCopy}
        />
      </button>
    </div>
  );
}

export default Password;
