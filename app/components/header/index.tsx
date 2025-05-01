import { routes } from "@/app/routes.constants";
import Link from "next/link";
import React from "react";

const linkClass =
  "futura font-bold uppercase text-sm text-gray-800 hover:text-gray-900 cursor-scale";

export function Header() {
  return (
    <header className="flex justify-between p-8 absolute top-0 left-0 right-0 z-50">
      <Link href={routes.home} className={linkClass}>
        Gush
      </Link>
      <nav>
        <ul className="flex gap-6">
          <li className={linkClass}>
            <Link href={routes.services}>Services</Link>
          </li>
          <li className={linkClass}>
            <Link href={routes.about}>About</Link>
          </li>
          <li className={linkClass}>
            <Link href={routes.contact}>Contact</Link>
          </li>
        </ul>
      </nav>
      <Link href={routes.home} className={linkClass}>
        Home
      </Link>
    </header>
  );
}
