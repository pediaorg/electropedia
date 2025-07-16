import Image from "next/image";

import { Button } from "@/app/_components/_shadcn/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/_shadcn/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/_shadcn/ui/tabs";
import { cn } from "@/app/lib/utils";
import { text } from "stream/consumers";

const MONTHLY_PRICES = [
  {
    price: 5,
    title: "Desbloquear videos",
    features: ["guias con videos, completamente visibles"],
  },
  {
    price: 14,
    title: "Electropemium",
    dark: true,
    features: [
      "Limite de 3 guías eliminado",
      "videos disponibles",
      "Ayudante Virtual con IA (proximamente)",
    ],
  },
  {
    price: 18,
    title: "Plan Técnico",
    features: [
      "Validación como técnico de la plataforma",
      "Identificador de técnico",
      "Mayor visibilidad para los dempas usuarios",
      "Posibilidad de dar datos de contacto",
      "¡Ideal para trabajadores autónomos!",
    ],
  },
];
const YEARLY_PRICES = [
  {
    price: 20,
    title: "Desbloquear Videos",
    features: ["Guias con videos, completamente visibles"],
  },
  {
    price: 70,
    title: "Electropemium",
    dark: true,
    features: [
      "Limite de 3 guías eliminado",
      "Videos disponibles",
      "Ayudante Virtual con IA (proximamente)",
    ],
  },
  {
    price: 80,
    title: "Plan Técnico",
    features: [
      "validación como técnico de la plataforma",
      "Identificador de técnico",
      "Mayor visibilidad para los dempas usuarios",
      "Posibilidad de dar datos de contacto",
      "¡Ideal para trabajadores autónomos!",
    ],
  },
];

type Props = {
  dark?: boolean;
  price: number;
  basis: "mo" | "year";
  title: string;
  features: String[];
};

function SubscriptionPlanCard(props: Props) {
  return (
    <Card
      className={cn(
        "text-center border border-border w-full rounded-xl bg-input",
        props.dark && "bg-black text-white"
      )}
    >
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-between h-full">
        <div>
          <div className="text-5xl font-bold mb-2">
            <span className="text-2xl align-super">$</span>
            {props.price}
            <span className="text-sm font-normal">/{props.basis}</span>
          </div>
          <ul
            className={cn(
              "text-black font-bold space-y-1 text-left list-disc list-inside mb-4",
              props.dark && "text-white"
            )}
          >
            {props.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <Button
          variant={props.dark ? "outline" : "secondary"}
          className={cn("w-full", props.dark && "text-black")}
        >
          Seleccionar
        </Button>
      </CardContent>
    </Card>
  );
}

export default async function SubscriptionPage() {
  return (
    <div className="flex flex-col items-center mx-auto container py-10 px-8 gap-12">
      <h1 className="font-bold text-center text-6xl">Electropedia Plus</h1>
      <p className="font-medium text-center text-2xl">
        Hazte usuario premium y aprovecha todas las funcionalidades disponibles
      </p>
      <div className="w-full">
        <Tabs defaultValue="monthly" className="items-center">
          <TabsList className="gap-3">
            <TabsTrigger value="monthly">Mensual</TabsTrigger>
            <TabsTrigger value="yearly">Anual</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-15 mx-auto">
              {MONTHLY_PRICES.map((plan) => (
                <SubscriptionPlanCard
                  price={plan.price}
                  title={plan.title}
                  basis="mo"
                  key={plan.title}
                  dark={plan.dark}
                  features={plan.features}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="yearly" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-15 mx-auto">
              {YEARLY_PRICES.map((plan) => (
                <SubscriptionPlanCard
                  price={plan.price}
                  title={plan.title}
                  basis="year"
                  key={plan.title}
                  dark={plan.dark}
                  features={plan.features}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
