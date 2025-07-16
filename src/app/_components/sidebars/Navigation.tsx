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
import {
  Settings,
  PackageOpen,
  Bot,
  HelpCircle,
  Megaphone,
  Hammer,
} from "lucide-react";
import Link from "next/link";

import { useState } from "react";

const routes = [
  {
    icon: <Settings className="stroke-2 size-8" />,
    to: "",
    text: "Respuestos",
  },
  {
    icon: <PackageOpen className="stroke-2 size-8" />,
    to: "/products",
    text: "Productos",
  },
  {
    icon: <Megaphone className="stroke-2 size-8" />,
    to: "/discussions",
    text: "Foro",
  },
  {
    icon: <Hammer className="stroke-2 size-8" />,
    to: "",
    text: "Buscar técnico",
  },
  { icon: <Bot className="stroke-2 size-8" />, to: "", text: "Asistente" },
  { icon: <HelpCircle className="stroke-2 size-8" />, to: "", text: "Ayuda" },
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
      <SheetContent side="left" className="bg-secondary">
        <SheetHeader>
          <SheetTitle className="text-4xl text-background">Navegar</SheetTitle>
        </SheetHeader>

        <SheetDescription className="flex flex-col gap-9 px-6 h-full justify-center pb-[72px]">
          {routes.map((r) => (
            <Link key={r.text} href={r.to} onClick={handleOpenClose}>
              <div className="flex text-3xl text-background gap-5 font-bold items-center">
                {r.icon}
                {r.text}
              </div>
            </Link>
          ))}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
