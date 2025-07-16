"use client";

import { Input } from "@/app/_components/_shadcn/ui/input";
import { Card } from "@/app/_components/_shadcn/ui/card";
import { Loader2Icon, Plus, Send } from "lucide-react";
import Image from "next/image";
import { Button } from "../_shadcn/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/app/_components/_shadcn/ui/select";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createDiscussion, getProducts } from "@/app/lib/actions";

function Products(props: { onProductSelection: (id: string) => void }) {
  const [selected, setSelected] = useState<string>();
  const [label, setLabel] = useState<string>();

  const products = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  const handleValueChange = (productId: string) => {
    props.onProductSelection(productId);

    const product = products.data?.find((p) => p.id === productId);

    if (product) {
      setSelected(product.id);
      setLabel(product.name);
    }
  };

  return (
    <Select onValueChange={(id) => handleValueChange(id)}>
      <SelectTrigger className="cursor-pointer">
        <div className="max-w-[150px] truncate" title={label}>
          {!selected ? "Selecciona un producto" : label}
        </div>
      </SelectTrigger>
      <SelectContent className="w-75">
        <SelectGroup>
          <SelectLabel>Productos</SelectLabel>
          {products.data?.map((product) => (
            <SelectItem key={product.name} value={product.id}>
              <div className="flex">
                <Image
                  src={product.image}
                  alt={product.name}
                  width="60"
                  height="60"
                  className="object-contain rounded"
                />
                <p>{product.name}</p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default function NewDiscussion() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState("");

  const discussionMutation = useMutation({
    mutationFn: () =>
      createDiscussion({
        product_id: product,
        user_id: "68571baf81c56ec2ba5fd6aa",
        title: title,
        description: description,
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
            placeholder="Escriba un título..."
            onChange={(e) => setTitle(e.target.value)}
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
          </Card>
          <Input
            type="description"
            id="description"
            placeholder="Escriba la descripción..."
            onChange={(e) => setDescription(e.target.value)}
            className="bg-input border-border"
            disabled={discussionMutation.isPending}
          />
        </div>
      </div>
    </form>
  );
}
