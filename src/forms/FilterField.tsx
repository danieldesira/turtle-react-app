import type { PropsWithChildren } from "react";

function FilterField({ children }: PropsWithChildren) {
  return <div className="flex gap-1 items-center">{children}</div>;
}

export default FilterField;
