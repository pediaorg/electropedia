import Image from "next/image";
import { Button } from "@/app/_components/_shadcn/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/app/_components/_shadcn/ui/card";
import { Input } from "@/app/_components/_shadcn/ui/input";

const models = [
  "BESPOKE French Door con Family Hub 32 de 699L",
  "Bespoke Side By Side 590L con Auto Open Door",
  "328L Bespoke freezer inferior con Space Max",
  "Side by Side Family Hub de 685L",
  "Heladera Freezer Superior Twin Cooling Plus™ 382 L",
  "Heladera Side by Side de 647L con All Around Cooling",
];

export default function ModelsPage() {
  return (
    <div className="DEBUG min-h-screen p-6">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src=""
          alt=""
          width="64"
          height="64"
          className="size-12 border rounded-full bg-blue-50"
        />
        <div className="overflow-hidden">
          <h1 className="text-4xl font-extrabold overflow-hidden text-ellipsis">
            Heladeras Samsung
          </h1>
          <p className="text-xl text-muted-foreground overflow-hidden text-ellipsis">
            Guias de reparacion
          </p>
          <p className="text-sm text-muted-foreground overflow-hidden text-ellipsis">
            {models.length} Modelos
          </p>
        </div>
      </div>
      <div className="hidden sm:flex flex-row items-center justify-between mb-4 gap-2">
        <div>
          <h2 className="font-normal text-3xl">Modelos</h2>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Input
            type=""
            placeholder="🔍︎ Encuentra tu dispositivo"
            className="rounded-2xl w-full sm:w-128 bg-amber-300"
          />
          <Button variant="outline">Filtrar ▾</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {models.map((model) => (
          <Card key={model} className="bg-amber-200 cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center size-full p-2">
              <Image src="" alt="" width="64" height="64" className="mb-1" />
              <CardTitle className="font-medium text-center">{model}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
