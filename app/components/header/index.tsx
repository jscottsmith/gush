import { ArrowRight } from "lucide-react";
import { routes } from "@/app/routes.constants";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { content } from "@/app/content";
import { Placeholder } from "@/components/ui/placeholder";

function ServiceLink(props: { label: string; description: string }) {
  return (
    <div className="flex gap-md items-center cursor-scale">
      <div>
        <h2 className="text-lg">{props.label}</h2>
        <p className="text-sm mt-sm">{props.description}</p>
      </div>
      <div className="w-6">
        <ArrowRight />
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="flex justify-between p-8 absolute top-0 left-0 right-0 z-50">
      <Link
        href={routes.home}
        className="font-futura cursor-scale uppercase font-bold italic"
      >
        Gush
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <ul className="flex gap-6">
            {/* Services mega menu */}
            <NavigationMenuItem className="cursor-scale">
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <section className="flex gap-md w-[360px]">
                  <div className="flex flex-col gap-sm">
                    <NavigationMenuLink asChild>
                      <Link href={routes.services}>
                        <ServiceLink
                          label={content.services.creative.name}
                          description={content.services.creative.description}
                        />
                      </Link>
                    </NavigationMenuLink>
                    <Separator />
                    <NavigationMenuLink asChild>
                      <Link href={routes.services}>
                        <ServiceLink
                          label={content.services.technology.name}
                          description={content.services.technology.description}
                        />
                      </Link>
                    </NavigationMenuLink>
                  </div>
                  <Placeholder className="w-[220px] rounded-sm" />
                </section>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href={routes.about}>About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href={routes.contact}>Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </ul>
        </NavigationMenuList>
      </NavigationMenu>

      <ThemeToggle />
    </header>
  );
}
