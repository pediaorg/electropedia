"use client";

import {
  SheetContent,
  SheetTitle,
  SheetHeader,
  Sheet,
  SheetTrigger,
  SheetDescription,
} from "@/app/_components/_shadcn/ui/sheet";
import { JSXChildren } from "@/app/lib/types";
import { User, Edit, Wrench, Users, LogOut } from "lucide-react";
import { Button } from "@/app/_components/_shadcn/ui/button";
import Link from "next/link";

import { useState } from "react";

const routes = [
  {
    icon: <User className="stroke-2 size-8" />,
    to: "/profile/68571baf81c56ec2ba5fd6aa",
    text: "Tu perfil",
  },
  {
    icon: <Edit className="stroke-2 size-8" />,
    to: "/profile/68571baf81c56ec2ba5fd6aa",
    text: "Editar perfil",
  },
  {
    icon: <Wrench className="stroke-2 size-8" />,
    to: "/subscription",
    text: "Hacerse Premium",
  },
  {
    icon: <Users className="stroke-2 size-8" />,
    to: "",
    text: "Cambiar cuenta",
  },
  {
    icon: <LogOut className="stroke-2 size-8" />,
    to: "/",
    text: "Cerrar sesión",
  },
];

export default function NavigationSidebar({
  children,
}: {
  children: JSXChildren;
}) {
  const [open, setOpen] = useState(false);

  const handleOpenClose = () => setOpen((open) => !open);

  return (
    <Sheet open={open} onOpenChange={(state) => setOpen(state)}>
      <SheetTrigger asChild onClick={handleOpenClose}>
        {children}
      </SheetTrigger>
      <SheetContent side="right" className="bg-secondary">
        <SheetHeader>
          <SheetTitle className="text-4xl text-background flex items-center justify-between pr-6">
            Tu perfil
            <Button
              variant="secondary"
              size="icon"
              className="bg-input text-secondary px-4 size-14 hover:bg-input/80 rounded-full cursor-pointer"
            >
              <User className="size-8 fill-white stroke-white" />
            </Button>
          </SheetTitle>
        </SheetHeader>

        <SheetDescription asChild>
          <div className="flex flex-col gap-9 px-6 h-full justify-center pb-[72px]">
            {routes.map((r) => (
              <Link key={r.text} href={r.to} onClick={handleOpenClose}>
                <div className="flex text-3xl text-background gap-5 font-bold items-center">
                  {r.icon}
                  {r.text}
                </div>
              </Link>
            ))}
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
