import { Card, CardTitle } from "@/app/_components/_shadcn/ui/card";
import Image from "next/image";
import { ProductSelector } from "@/app/_components/dialogs";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/_shadcn/ui/dialog";
import { api } from "@/trpc/server";

export default async function ProductsPage() {
  const response = await api.categories.getAll();
  return (
    <div className="flex flex-col items-center justify-center py-10 px-8">
      <h1 className="text-4xl font-extrabold">Productos</h1>
      <h2 className="text-lg mt-3 mb-6">Encontrá aquello que buscás!</h2>
      <hr className="w-full border-t-2 border-border mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {response.map((category) => (
          <Dialog key={category.name}>
            <DialogTrigger asChild>
              <Card className="w-full p-3">
                <div className="w-full h-full flex items-center gap-2 ">
                  <div className="size-12 flex items-center justify-center">
                    <Image
                      src={category.icon}
                      alt="icon"
                      width="64"
                      height="64"
                      className="object-contain rounded w-full h-full"
                    />
                  </div>
                  <CardTitle className="w-full text-center overflow-hidden text-ellipsis font-medium text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap">
                    {category.name}
                  </CardTitle>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle />
              <ProductSelector productValue={category.value} />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
