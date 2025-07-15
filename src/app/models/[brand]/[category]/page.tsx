import Image from "next/image";
import { Button } from "@/app/_components/_shadcn/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/app/_components/_shadcn/ui/card";
import { Input } from "@/app/_components/_shadcn/ui/input";
import { Avatar, AvatarImage } from "@/app/_components/_shadcn/ui/avatar";
import Link from "next/link";
import { api } from "@/trpc/server";
import { Search, ChevronDown } from "lucide-react";

async function ModelCard(props: {
  product: Awaited<ReturnType<typeof api.products.getByBrandName>>;
}) {
  return (
    <Card className="bg-input cursor-pointer">
      <Link href={`/guides/${props.product._id}`}>
        <CardContent className="flex flex-col items-center justify-center size-full p-2">
          <Image
            src={props.product.image}
            alt={props.product.name}
            width={128}
            height={128}
            className="mb-1 object-contain size-32"
          />
          <CardTitle className="font-medium text-center">
            {props.product.name}
          </CardTitle>
        </CardContent>
      </Link>
    </Card>
  );
}

type PageProps = {
  params: Promise<{ brand: string; category: string }>;
};
export default async function ModelsPage(props: PageProps) {
  const params = await props.params;

  const products = await api.products.getAllByProduct({
    name: params.brand,
    category: params.category,
  });
  const brand = await api.brands.getByName({ name: params.brand });

  return (
    <div className="container mx-auto px-8 my-10">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="hidden sm:block size-32 place-items-center place-content-center rounded-full border bg-white">
          <AvatarImage
            src={"/" + brand?.icon}
            alt={brand?.name}
            height="24"
            width="24"
            className="size-24"
          />
        </Avatar>
        <div className="overflow-hidden [&>*]:overflow-hidden">
          <h1 className="text-4xl font-extrabold text-ellipsis">
            {brand?.name}
          </h1>
          <p className="text-xl text-muted-foreground text-ellipsis">
            Guias de reparacion
          </p>
          <p className="text-sm text-muted-foreground text-ellipsis">
            {products.length} Modelos
          </p>
        </div>
      </div>
      <div className="sm:flex sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <div>
          <h2 className="font-normal text-3xl">Modelos</h2>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <Input
              type="text"
              placeholder="Encuentra tu dispositivo"
              className="rounded-2xl pl-10 w-full bg-input text-secondary"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          </div>
          <Button variant="outline" className="flex items-center gap-1">
            Filtrar
            <ChevronDown className="size-4" />
          </Button>
        </div>
      </div>
      <hr className="w-full border-t-2 border-border mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ModelCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
