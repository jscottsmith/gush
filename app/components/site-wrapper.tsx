import clsx from "clsx";
import React, { HTMLAttributes, PropsWithChildren } from "react";

type SiteWrapperProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  /**
   * add default site padding to top/bottom
   */
  padY?: boolean;
  padT?: boolean;
  padB?: boolean;
};

export function SiteWrapper({
  padY,
  padT,
  padB,
  className,
  ...props
}: SiteWrapperProps) {
  return (
    <div
      className={clsx(
        className,
        "px-base",
        padY && "py-base",
        padT && "pt-base",
        padB && "pb-base"
      )}
      {...props}
    >
      {props.children}
    </div>
  );
}
