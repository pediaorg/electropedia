"use client";

import { Input } from "@/app/_components/_shadcn/ui/input";
import { Card } from "@/app/_components/_shadcn/ui/card";
import { Loader2Icon, Plus, Send } from "lucide-react";
import Image from "next/image";
import { Button } from "../_shadcn/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../_shadcn/ui/popover";
import React, { useState } from "react";
import { Separator } from "../_shadcn/ui/separator";
import { ScrollArea } from "../_shadcn/ui/scroll-area";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createDiscussion, getProducts } from "@/app/lib/actions";

function Products(props: { onProductSelection: (id: string) => void }) {
  const products = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

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
            <h4 className="leading-none font-medium">Productos</h4>
            <p className="text-muted-foreground text-sm">
              Elija el producto deseado.{products.status}
            </p>
          </div>
          <ScrollArea className=" h-56 w-60 border rounded-md">
            <div className="p-3">
              {products.data?.map((product) => (
                <div
                  onClick={() => props.onProductSelection(product.id)}
                  key={product.name}
                >
                  <div className="flex gap-3 text-sm place-items-center px-1">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width="50"
                      height="50"
                      className="object-contain rounded"
                    />
                    <p className="text-base font-semibold">{product.name}</p>
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
  const [discussionTitle, setDiscussionTitle] = useState("");
  const [discussionDescription, setDiscussionDescription] = useState("");
  const [product, setProduct] = useState("");

  const discussionMutation = useMutation({
    mutationFn: () =>
      createDiscussion({
        product_id: product,
        user_id: "68571baf81c56ec2ba5fd6aa",
        title: discussionTitle,
        description: discussionDescription,
      }),
  });

  const handleNewDiscussion = () => {
    discussionMutation.mutate();
  };

  return (
    <form>
      <div className="flex flex-col gap-3">
        <div className="border-b border-secondary pb-3">
          <h1 className="text-5xl font-bold text-center w-full">
            Crear discusión
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between border-b border-secondary pb-3">
            <h2 className="text-2xl font-bold">Título</h2>
            <Products onProductSelection={setProduct} />
          </div>
          <Input
            type="title"
            id="title"
            placeholder="Escriba su respuesta..."
            onChange={(e) => setDiscussionTitle(e.target.value)}
            className="bg-input border-border"
            disabled={discussionMutation.isPending}
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
              <Button
                className="size-8 rounded-full"
                variant="ghost"
                disabled={discussionMutation.isPending}
                type="submit"
                onClick={handleNewDiscussion}
              >
                {discussionMutation.isPending ? (
                  <Loader2Icon className="size-5" />
                ) : (
                  <Send className="size-5" />
                )}
              </Button>
            </div>
          </Card>
          <Input
            type="answer"
            id="answer"
            placeholder="Escriba su respuesta..."
            onChange={(e) => setDiscussionDescription(e.target.value)}
            className="bg-input border-border"
            disabled={discussionMutation.isPending}
          />
        </div>
      </div>
    </form>
  );
}
