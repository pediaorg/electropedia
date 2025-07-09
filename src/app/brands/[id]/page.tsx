import Image from "next/image";
import { Button } from "@/app/_components/_shadcn/ui/button";
import { Card, CardContent } from "@/app/_components/_shadcn/ui/card";
import { Avatar, AvatarImage } from "@/app/_components/_shadcn/ui/avatar";
import { Triangle } from "lucide-react";
import Link from "next/link";
import { api } from "@/trpc/server";

async function BrandsLogo(props: {
  brands: Awaited<ReturnType<typeof api.brands.getAll>>;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
      {props.brands.map((brand) => (
        <Card
          key={brand.name}
          className="bg-input cursor-pointer flex items-center justify-center"
        >
          <Link href="/models" className="w-full h-full">
            <CardContent className="flex items-center justify-center w-full h-full">
              <div className="flex items-center justify-center">
                <Image
                  src={brand.icon}
                  alt={brand.name}
                  width={112}
                  height={112}
                  className="object-contain size-24"
                />
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}

type PageProps = { params: Promise<{ id: string }> };
export default async function Brands(props: PageProps) {
  const params = await props.params;
  const category = await api.categories.get({ value: params.id });
  const brands = await api.brands.getAll();

  return (
    <div className="container py-10 px-8 mx-auto min-h-content">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="size-32 place-items-center place-content-center border hidden sm:block">
          <AvatarImage src={category?.icon} alt="" className="size-22" />
        </Avatar>
        <div className="truncate">
          <h1 className="text-4xl font-extrabold">{category?.name}</h1>
          <p className="text-xl text-muted-foreground">Guias de reparacion</p>
          <p className="text-sm text-muted-foreground">
            {brands.length} marcas
          </p>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-between mb-4">
        <h2 className="font-normal text-3xl">Marcas</h2>
        <Button className="border bg-input">
          <p className="text-secondary">Filtros</p>
          <Triangle className="rotate-180 fill-sidebar-foreground stroke-sidebar-foreground size-3" />
        </Button>
      </div>
      <hr className="border-t-2 border-border mb-6" />
      <BrandsLogo brands={brands} />
    </div>
  );
}
