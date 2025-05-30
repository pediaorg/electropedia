import { Card, CardHeader, CardTitle } from "@/app/_components/_shadcn/ui/card";

import Image from "next/image";

const products = [
  "Heladeras",
  "Lavavajillas",
  "Secadoras",
  "Lavarropas",
  "Hornos Eléctricos",
  "Batidoras",
  "Planchas",
  "Aspiradoras",
  "Tostadoras",
  "Freidoras de aire",
  "Pavas",
  "Calefactores",
  "Cafeteras",
  "Ventiladores",
  "Mini Pimeres",
  "Aires acondicionados",
];

export default function ProductsPage() {
  return (
    <div className="  min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-extrabold">Productos</h1>
      <h2 className="text-lg mt-3 mb-6">Encontrá aquello que buscás!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {products.map((product) => (
          <Card key={product} className="h-[81px] w-full p-3">
            <div className="w-full h-full flex items-center gap-2 ">
              <div className="size-12 flex items-center justify-center">
                <Image
                  src="https://placehold.co/64x64"
                  alt="icon"
                  width="64"
                  height="64"
                  className="object-contain rounded w-full h-full"
                />
              </div>
              <CardTitle className="w-full text-center overflow-hidden text-ellipsis font-bold text-2xl">
                {product}
              </CardTitle>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
