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
  { name: "Heladeras", img: "heladera.svg" },
  { name: "Lavavajillas", img: "lavavajillas.svg" },
  { name: "Secadoras", img: "secadoras.svg" },
  { name: "Lavarropas", img: "lavarropas.svg" },
  { name: "Hornos Eléctricos", img: "hornoElectrico.svg" },
  { name: "Batidoras", img: "batidora.svg" },
  { name: "Planchas", img: "plancha.svg" },
  { name: "Aspiradoras", img: "aspiradora.svg" },
  { name: "Tostadoras", img: "tostadora.svg" },
  { name: "Freidoras de aire", img: "airFryer.svg" },
  { name: "Pavas", img: "pava.svg" },
  { name: "Calefactores", img: "calefactor.svg" },
  { name: "Cafeteras", img: "cafetera.svg" },
  { name: "Ventiladores", img: "ventilador.svg" },
  { name: "Mini Pimeres", img: "miniPimeres.svg" },
  { name: "Aires acondicionados", img: "airConditioner.svg" },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-8">
      <h1 className="text-4xl font-extrabold">Productos</h1>
      <h2 className="text-lg mt-3 mb-6">Encontrá aquello que buscás!</h2>
      <hr className="w-full border-t-2 border-border mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {products.map((product) => (
          <Dialog key={product.name}>
            <DialogTrigger asChild>
              <Card className="w-full p-3">
                <div className="w-full h-full flex items-center gap-2 ">
                  <div className="size-12 flex items-center justify-center">
                    <Image
                      src={product.img}
                      alt="icon"
                      width="64"
                      height="64"
                      className="object-contain rounded w-full h-full"
                    />
                  </div>
                  <CardTitle className="w-full text-center overflow-hidden text-ellipsis font-medium text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap">
                    {product.name}
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
