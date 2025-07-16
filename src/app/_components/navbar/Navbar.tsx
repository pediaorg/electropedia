"use client";

import { BrandLogo } from "@/app/_components/logos";
import { Button } from "@/app/_components/_shadcn/ui/button";
import { Input } from "@/app/_components/_shadcn/ui/input";
import { Menu, Bell, User } from "lucide-react";
import Link from "next/link";
import { NavigationSidebar, ProfileSidebar } from "@/app/_components/sidebars";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  const isLogged = path === "/";

  return (
    <div className="p-5 border-b-2 flex justify-between lg:gap-13 md:gap-8 gap-2">
      <div className="flex gap-4 lg:gap-6 item-center justify-between w-full md:w-fit ">
        <NavigationSidebar>
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-unset cursor-pointer"
          >
            <Menu className="size-8 stroke-secondary" />
          </Button>
        </NavigationSidebar>
        <Link href="/">
          <BrandLogo />
        </Link>
      </div>

      <div className="w-full hidden sm:block max-w-xl">
        <Input
          className="w-full rounded-2xl bg-input text-secondary placeholder:text-secondary/80"
          placeholder="Encuentra tu dispositivo"
        />
      </div>

      <div className="sm:flex hidden gap-y-1 gap-x-5 items-center">
        {isLogged ? (
          <>
            <Link href="/products">
              <Button
                variant="secondary"
                size="sm"
                className="bg-input text-secondary px-4 hover:bg-input/80 cursor-pointer"
              >
                Ingresar
              </Button>
            </Link>
            <Link href="/products">
              <Button
                variant="secondary"
                size="sm"
                className="px-4 cursor-pointer"
              >
                Registrarse
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="bg-input text-secondary px-4 hover:bg-input/80 rounded-full cursor-pointer"
            >
              <Bell className="size-5 fill-white stroke-white" />
            </Button>
            <ProfileSidebar>
              <Button
                variant="secondary"
                size="icon"
                className="bg-input text-secondary px-4 hover:bg-input/80 rounded-full cursor-pointer"
              >
                <User className="size-5 fill-white stroke-white" />
              </Button>
            </ProfileSidebar>
          </>
        )}
      </div>
    </div>
  );
}
