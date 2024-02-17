"use client";
import { useEventListener } from "usehooks-ts";

export function Cursor() {
  useEventListener("pointermove", (e: PointerEvent) => {
    document.documentElement.style.setProperty("--x", e.clientX.toString());
    document.documentElement.style.setProperty("--y", e.clientY.toString());
  });

  return <span className="cursor" />;
}
