import Image from "next/image";
import { Button } from "@/app/_components/_shadcn/ui/button";
import { Card, CardContent } from "@/app/_components/_shadcn/ui/card";
import { Avatar, AvatarImage } from "@/app/_components/_shadcn/ui/avatar";
import { Triangle } from "lucide-react";
import Link from "next/link";

const brands = [
  "Samsung",
  "LG",
  "Whirlpool",
  "Philco",
  "Mabe",
  "Frigidaire",
  "Columbia",
  "GE Appliances",
  "Gafa",
  "Panasonic",
  "Electrolux",
];

function BrandsLogo({ brand }: { brand: string }) {
  return (
    <Card className="bg-input cursor-pointer">
      <Link href="/models">
        <CardContent className="flex justify-center items-center size-full">
          <Image
            src="https://placehold.co/64x64"
            alt={`logo ${brand}`}
            width={64}
            height={64}
          />
        </CardContent>
      </Link>
    </Card>
  );
}

export default function Brands() {
  return (
    <div className="container py-10 px-8 mx-auto min-h-content">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="size-32 border hidden sm:block">
          <AvatarImage src="https://placehold.co/64x64" alt="icono heladera" />
        </Avatar>
        <div className="truncate">
          <h1 className="text-4xl font-extrabold">Heladeras</h1>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {brands.map((brand) => (
          <BrandsLogo key={brand} brand={brand} />
        ))}
      </div>
    </div>
  );
}
