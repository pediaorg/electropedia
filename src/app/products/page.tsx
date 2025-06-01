"use client";

import { Card, CardTitle } from "@/app/_components/_shadcn/ui/card";
import Image from "next/image";
import { ProductSelector } from "@/app/_components/dialogs";
import { useState } from "react";

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
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold">Productos</h1>
      <h2 className="text-lg mt-3 mb-6">Encontrá aquello que buscás!</h2>
      <hr className="w-3xl border-t-2 border-[#cfc7bb] mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {products.map((product) => (
          <Card
            key={product}
            className="w-full p-3"
            onClick={() => setSelectedProduct(product)}
          >
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
              <CardTitle className="w-full text-center overflow-hidden text-ellipsis font-medium text-2xl">
                {product}
              </CardTitle>
            </div>
          </Card>
        ))}
      </div>
      {selectedProduct && (
        <ProductSelector
          product={selectedProduct}
          open={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
