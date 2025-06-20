import { Button } from "@/app/_components/_shadcn/ui/button";

export default function ProductSelector() {
  return (
    <div className="DEBUG">
      <h1 className="text-3xl font-extrabold text-center">Productos</h1>
      <p className="text-center text-foreground mt-1 mb-1">¿A dónde vamos?</p>
      <hr className="my-2" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 justify-center mt-2">
        <Button className="bg-input text-2xl font-bold text-secundary px-6 py-2 rounded flex-1">
          Guías
        </Button>
        <Button className="bg-input text-2xl font-bold text-secundary px-6 py-2 rounded flex-1">
          Repuestos
        </Button>
      </div>
    </div>
  );
}
