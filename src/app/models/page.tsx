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

const models = [
  {
    name: "BESPOKE French Door con Family Hub 32 de 699L",
    img: "frenchDoor.svg",
  },
  {
    name: "Bespoke Side By Side 590L con Auto Open Door",
    img: "autoOpenDoor.svg",
  },
  { name: "328L Bespoke freezer inferior con Space Max", img: "spaceMax.svg" },
  { name: "Side by Side Family Hub de 685L", img: "familyHub.svg" },
  {
    name: "Heladera Freezer Superior Twin Cooling Plus™ 382 L",
    img: "superiorTwinCooling.svg",
  },
  {
    name: "Heladera Side by Side de 647L con All Around Cooling",
    img: "allAroundCooling.svg",
  },
];

function ModelCard({ model }: { model: { name: string; img: string } }) {
  return (
    <Card className="bg-input cursor-pointer">
      <Link href="guides/">
        <CardContent className="flex flex-col items-center justify-center size-full p-2">
          <Image
            src={model.img}
            alt={model.name}
            width={128}
            height={128}
            className="mb-1 object-contain size-32"
          />
          <CardTitle className="font-medium text-center">
            {model.name}
          </CardTitle>
        </CardContent>
      </Link>
    </Card>
  );
}

export default function ModelsPage() {
  return (
    <div className="container mx-auto px-8 my-10">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="hidden sm:block size-32 rounded-full border bg-white">
          <AvatarImage src="" alt="Heladeras" />
        </Avatar>
        <div className="overflow-hidden [&>*]:overflow-hidden">
          <h1 className="text-4xl font-extrabold text-ellipsis">Heladeras</h1>
          <p className="text-xl text-muted-foreground text-ellipsis">
            Guias de reparacion
          </p>
          <p className="text-sm text-muted-foreground text-ellipsis">
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
            className="rounded-2xl w-auto sm:w-100 bg-input text-secondary"
          />
          <Button variant="outline">Filtrar ▾</Button>
        </div>
      </div>
      <hr className="w-full border-t-2 border-border mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {models.map((model) => (
          <ModelCard key={model.name} model={model} />
        ))}
      </div>
    </div>
  );
}
