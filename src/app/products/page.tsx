import { Card, CardTitle } from "@/app/_components/_shadcn/ui/card";
import Image from "next/image";
import { ProductSelector } from "@/app/_components/dialogs";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/_shadcn/ui/dialog";

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
    <div className="flex flex-col items-center justify-center py-10 px-8">
      <h1 className="text-4xl font-extrabold">Productos</h1>
      <h2 className="text-lg mt-3 mb-6">Encontrá aquello que buscás!</h2>
      <hr className="w-full border-t-2 border-border mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {products.map((product) => (
          <Dialog key={product}>
            <DialogTrigger asChild>
              <Card className="w-full p-3">
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
                  <CardTitle className="w-full text-center overflow-hidden text-ellipsis font-medium text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap">
                    {product}
                  </CardTitle>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle />
              <ProductSelector />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
