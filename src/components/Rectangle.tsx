import type { ReactElement } from "react";

type RectangleProps = {
  index: number;
  filledRectangles: number;
  bgColor: string;
};

export default function Rectangle({
  index,
  filledRectangles,
  bgColor,
}: RectangleProps): ReactElement {
  const defaultClassName = "h-7 w-2.5 border-2";
  const filled = index < filledRectangles ? bgColor : "border-grey-200";
  const className = [defaultClassName, filled].join(" ");

  return <div className={className}></div>;
}
