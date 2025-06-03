import Image from "next/image";
import { Button } from "@/app/_components/_shadcn/ui/button";
import { Card, CardContent } from "@/app/_components/_shadcn/ui/card";
import { Avatar, AvatarImage } from "../_components/_shadcn/ui/avatar";
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

export default function Brands() {
  return (
    <div className="DEBUG p-6 mx-30 my-10 min-h-screen">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="size-32 border bg-white hidden sm:block">
          <AvatarImage src="" alt="Heladera" />
        </Avatar>
        <div className="overflow-hidden text-ellipsis">
          <h1 className="text-4xl font-extrabold">Heladeras</h1>
          <p className="text-xl text-muted-foreground">Guias de reparacion</p>
          <p className="text-sm text-muted-foreground">
            {brands.length} marcas
          </p>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-between mb-4">
        <h2 className="font-normal text-3xl">Marcas</h2>
        <Button variant="outline">Filtrar ▾</Button>
      </div>
      <hr className="border-t-2 border-[#cfc7bb] mb-6" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {brands.map((brand) => (
          <Card key={brand} className="bg-amber-100 cursor-pointer">
            <CardContent className="flex justify-center items-center h-full">
              <Image src="" alt="" width="64" height="64" className="h-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
