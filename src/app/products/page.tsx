import { Card, CardTitle } from "@/app/_components/_shadcn/ui/card";

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
      <h1 className="text-2xl font-bold">Productos</h1>
      <h2 className="text-lg mt-3 mb-6">Encontrá aquello que buscás!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px]">
        {products.map((product) => (
          <Card
            key={product}
            className="w-[226px] h-[81px] flex items-center justify-center mx-auto"
          >
            <div className="flex flex-row items-center justify-center w-full h-full">
              {/* TODO: Corroborar como alinear el icono y el texto de otra forma */}
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src=""
                  alt="icon"
                  className="object-contain rounded w-full h-full"
                />
              </div>
              <CardTitle className="ml-4 text-center w-full">
                {product}
              </CardTitle>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
