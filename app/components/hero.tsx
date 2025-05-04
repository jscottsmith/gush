import React, { PropsWithChildren } from "react";

export function Hero(props: PropsWithChildren) {
  return <section className="relative h-[90svh]">{props.children}</section>;
}
