import { Input } from "@/app/_components/_shadcn/ui/input";
import { Card } from "@/app/_components/_shadcn/ui/card";
import { Plus, Send } from "lucide-react";
import Image from "next/image";
import { Button } from "../_shadcn/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../_shadcn/ui/popover";
import React from "react";
import { Separator } from "../_shadcn/ui/separator";
import { ScrollArea } from "../_shadcn/ui/scroll-area";
import { api } from "@/trpc/server";

async function Categories() {
  const categories = await api.categories.getAll();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary" size="sm" className="text text-base">
          <p>Elegir producto</p>
          <Plus className="size-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <div className="grid gap-3">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Categorías</h4>
            <p className="text-muted-foreground text-sm">
              Elija la categoría de producto.
            </p>
          </div>
          <ScrollArea className=" h-56 border rounded-md">
            <div className="p-3">
              {categories.map((category) => (
                <div key={category.name}>
                  <div className="flex gap-5 text-sm place-items-center px-1">
                    <Image
                      src={category.icon}
                      alt={category.name}
                      width="40"
                      height="40"
                      className="object-contain rounded"
                    />
                    <p className="text-xl font-semibold">{category.name}</p>
                  </div>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default function NewDiscussion() {
  return (
    <div className="flex flex-col gap-3">
      <div className="border-b border-secondary pb-3">
        <h1 className="text-5xl font-bold text-center w-full">
          Crear discusión
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between border-b border-secondary pb-3">
          <h2 className="text-2xl font-bold">Título</h2>
          <Categories></Categories>
        </div>
        <Input
          type="answer"
          id="answer"
          placeholder="Escriba su respuesta..."
          className="bg-input border-border"
        />
        <div className="border-b border-secondary pb-3">
          <h3 className="text-2xl font-bold">Descripción</h3>
        </div>
        <Card className="flex flex-row items-center bg-input rounded-lg p-2 w-full justify-between">
          <div className="flex gap-2">
            <div className="flex px-1 place-items-center">
              <Plus className="size-5" />
              <Input id="instructive" type="file" className="w-1/2 px-2" />
            </div>
          </div>
          <div className="place-items-center place-content-center rounded-full bg-background size-8">
            <Send className="size-5" />
          </div>
        </Card>
        <Input
          type="answer"
          id="answer"
          placeholder="Escriba su respuesta..."
          className="bg-input border-border"
        />
      </div>
    </div>
  );
}
