import { Label } from "@/app/_components/_shadcn/ui/label";
import { Input } from "@/app/_components/_shadcn/ui/input";
import { Button } from "@/app/_components/_shadcn/ui/button";

interface Props {
  productName: string;
}

export default function NewGuide({ productName }: Props) {
  return (
    <div className="DEBUG grid grid-cols-1 items-center gap-2">
      <div>
        <h1 className="text-2xl font-extrabold text-center">Nueva Guía</h1>
        <h2 className="text-xl font-normal text-center italic">
          {productName}
        </h2>
      </div>
      <hr className="mb-3"></hr>
      <div className="grid grid-cols-1 items-center gap-3">
        <p className="text-sm font-medium italic">
          Desde Electropedia le pedimos que ingrese titulo, descripción y el
          archivo del instructivo en formato PDF para que de esa forma podamos
          verificar la información proporcionada. En caso de que podamos
          confirmar la veracidad del aporte, la guía será publicada con éxito y
          el autor correspondiente estará etiqutado sobre esta.
        </p>
        <div className="grid w-full gap-3">
          <Label htmlFor="Name" className="mt-2">
            Nombre
          </Label>
          <Input
            type="name"
            id="name"
            placeholder="Escriba su nombre..."
            className="bg-input"
          />
          <Label htmlFor="Description" className="mt-2">
            Descripción
          </Label>
          <Input
            type="description"
            id="description"
            placeholder="Escriba una descripción..."
            className="bg-input"
          />
          <Label htmlFor="Instructive" className="mt-2">
            Instructivo
          </Label>
          <Input id="instructive" type="file" className="w-1/2" />
        </div>
        <div className="flex justify-end">
          <Button size="sm">Subir guía</Button>
        </div>
      </div>
    </div>
  );
}
