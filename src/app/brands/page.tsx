import Image from "next/image";
import { Button } from "@/app/_components/_shadcn/ui/button";
import { Card, CardContent } from "@/app/_components/_shadcn/ui/card";
import { Avatar, AvatarImage } from "@/app/_components/_shadcn/ui/avatar";
import { Triangle } from "lucide-react";
import Link from "next/link";

const brands = [
  { name: "Samsung", img: "samsung.svg" },
  { name: "LG", img: "lg.svg" },
  { name: "Whirlpool", img: "whirlpool.svg" },
  { name: "Philco", img: "philco.svg" },
  { name: "Mabe", img: "mabe.svg" },
  { name: "Frigidaire", img: "frigidaire.svg" },
  { name: "Columbia", img: "columbia.svg" },
  { name: "GE Appliances", img: "geAppliances.svg" },
  { name: "Gafa", img: "gafa.svg" },
  { name: "Panasonic", img: "panasonic.svg" },
  { name: "Electrolux", img: "electrolux.svg" },
];

function BrandsLogo({ brand }: { brand: { name: string; img: string } }) {
  return (
    <Card className="bg-input cursor-pointer flex items-center justify-center">
      <Link href="/models" className="w-full h-full">
        <CardContent className="flex items-center justify-center w-full h-full">
          <div className="flex items-center justify-center">
            <Image
              src={brand.img}
              alt={brand.name}
              width={112}
              height={112}
              className="object-contain size-24"
            />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

export default function Brands() {
  return (
    <div className="container py-10 px-8 mx-auto min-h-content">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="size-32 place-items-center place-content-center border hidden sm:block">
          <AvatarImage
            src="heladera.svg"
            alt="icono heladera"
            className="size-22"
          />
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
          <BrandsLogo key={brand.name} brand={brand} />
        ))}
      </div>
    </div>
  );
}
