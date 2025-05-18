import clsx from "clsx";
import React, { PropsWithChildren } from "react";

export function Placeholder(props: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={clsx(
        props.className,
        "bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-600 from-zinc-400 to-zinc-300"
      )}
    >
      {props.children}
    </div>
  );
}
