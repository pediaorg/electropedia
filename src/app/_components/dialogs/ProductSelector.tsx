import { Button } from "@/app/_components/_shadcn/ui/button";
import Link from "next/link";

export default function ProductSelector(props: { productId: string }) {
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-center">Productos</h1>
      <p className="text-center text-foreground mt-1 mb-1">¿A dónde vamos?</p>
      <hr className="my-2" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 justify-center mt-2">
        <Link href={`/brands/${props.productId}`}>
          <Button className="size-full bg-input text-2xl font-bold text-secundary px-6 py-2 rounded flex-1 focus-visible:ring-0">
            Guías
          </Button>
        </Link>
        <Button className="size-full bg-input text-2xl font-bold text-secundary px-6 py-2 rounded flex-1 focus-visible:ring-0">
          Repuestos
        </Button>
      </div>
    </div>
  );
}
