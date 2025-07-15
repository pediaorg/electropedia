import { api } from "@/trpc/server";
import Image from "next/image";

export default async function ProductSpecs(props: { productId: string }) {
  const product = await api.products.get({ id: props.productId });
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <div className="shadow rounded relative grid place-items-center">
        <Image src={product.image} alt="Producto" width={192} height={256} />
      </div>
      <div className="flex-1 space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <h3 className="text-lg text-muted-foreground">{product.brand}</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          {product.description || "No hay descripción disponible."}
        </p>
      </div>
    </div>
  );
}
