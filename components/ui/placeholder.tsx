import clsx from "clsx";
import React from "react";

export function Placeholder(props: { className: string }) {
  return (
    <div
      className={clsx(
        props.className,
        "bg-gradient-to-b dark:from-slate-800 dark:to-slate-600 from-slate-400 to-slate-300"
      )}
    />
  );
}
