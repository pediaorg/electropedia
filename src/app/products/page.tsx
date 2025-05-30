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
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-6">
        <h1 className="font-bold text-2xl mb-2">Productos</h1>
        <h2 className="text-lg">Encontrá aquello que buscás!</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-[8px]">
        {products.map((product) => (
          <Card
            key={product}
            className="w-[226px] h-[81px] flex items-center justify-center mx-auto"
          >
            <CardHeader className="p-2 flex flex-row items-center justify-center space-x-2 w-full">
              <Image
                src=""
                alt={product}
                width={40}
                height={40}
                className="object-contain rounded"
              />
              <CardTitle className="text-sm font-medium truncate w-full overflow-hidden text-ellipsis text-left">
                {product}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
