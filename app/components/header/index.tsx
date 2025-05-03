import { routes } from "@/app/routes.constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const linkClass = "cursor-scale";

export function Header() {
  return (
    <header className="flex justify-between p-8 absolute top-0 left-0 right-0 z-50">
      <Link href={routes.home} className={linkClass}>
        Gush
      </Link>
      <nav>
        <ul className="flex gap-6">
          <li className={linkClass}>
            <Button asChild variant="ghost">
              <Link href={routes.services}>Services</Link>
            </Button>
          </li>
          <li className={linkClass}>
            <Button asChild variant="ghost">
              <Link href={routes.about}>About</Link>
            </Button>
          </li>
          <li className={linkClass}>
            <Button asChild variant="ghost">
              <Link href={routes.contact}>Contact</Link>
            </Button>
          </li>
        </ul>
      </nav>
      <Link href={routes.home} className={linkClass}>
        Home
      </Link>
    </header>
  );
}
