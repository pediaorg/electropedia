import Image from "next/image";
import { Button } from "@/app/_components/_shadcn/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/app/_components/_shadcn/ui/card";
import { Input } from "@/app/_components/_shadcn/ui/input";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

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
    <div className="container mx-auto px-8 my-10">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="invisible sm:visible size-32 rounded-full border bg-white">
          <AvatarImage src="" alt="Heladeras Samsung" />
        </Avatar>
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
      <div className="sm:flex sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <div>
          <h2 className="font-normal text-3xl">Modelos</h2>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Input
            type=""
            placeholder="🔍︎ Encuentra tu dispositivo"
            className="rounded-2xl w-48 sm:w-100 bg-input text-secondary"
          />
          <Button variant="outline">Filtrar ▾</Button>
        </div>
      </div>
      <hr className="w-full border-t-2 border-border mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {models.map((model) => (
          <Card key={model} className="bg-input cursor-pointer">
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
