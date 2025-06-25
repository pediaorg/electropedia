import { ScrollArea } from "@/app/_components/_shadcn/ui/scroll-area";
import { Card, CardTitle } from "@/app/_components/_shadcn/ui/card";
import { Button } from "@/app/_components/_shadcn/ui/button";
import { Triangle, Funnel, ArrowDownWideNarrow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Discussion } from "@/app/_components/discussions";

const products = [
  { name: "Heladeras", img: "heladera.svg" },
  { name: "Calefactores", img: "calefactor.svg" },
  { name: "Lavarropas", img: "lavarropas.svg" },
];

const foros = [
  {
    name: "¿Es malo meter la mano en un enchufe?",
    img: "discussion.svg",
    date: "16/4/2025",
    answers: 5,
  },
  {
    name: "¿Cómo arreglar mi heladera Samsung?",
    img: "discussion.svg",
    date: "21/5/2025",
    answers: 5,
  },
  {
    name: "Se salió la puerta de mi heladera ¿Cómo la reparo?",
    img: "discussion.svg",
    date: "11/4/2025",
    answers: 2,
  },
  {
    name: "TOP 5 mejores heladeras marca Samsung",
    img: "discussion.svg",
    date: "7/3/2025",
    answers: 4,
  },
];

export default function DiscussionsPage() {
  return (
    <div className="container py-10 px-8 mx-auto">
      <div className="grid items-center pb-10">
        <div>
          <h1 className="text-7xl font-bold text-center">Foro</h1>
          <div className="flex flex-wrap justify-between gap-3 my-10 border-b border-foreground pb-3">
            <h2 className="text-foreground text-4xl">Discusiones</h2>
            <div className="flex gap-5 items-end md:items-center justify-end">
              <Button className="text-base">Nueva discusión</Button>
              <Button variant="secondary">
                <ArrowDownWideNarrow className="size-5 md:hidden" />
                <span className="hidden md:inline text-base">Ordenar por</span>
                <Triangle className="hidden md:inline rotate-180 fill-sidebar-primary-foreground size-3" />
              </Button>
              <Button className="border border-sidebar-foreground bg-input">
                <Funnel className="size-5 md:hidden stroke-black" />
                <span className="hidden md:inline text-base text-sidebar-foreground">
                  Filtros
                </span>
                <Triangle className="hidden md:inline rotate-180 fill-sidebar-foreground stroke-sidebar-foreground size-3" />
              </Button>
            </div>
          </div>
        </div>

        <ScrollArea className="rounded-md h-101">
          <div className="space-y-3">
            {foros.map((foro) => (
              <Discussion
                key={foro.name}
                name={foro.name}
                img={foro.img}
                date={foro.date}
                answers={foro.answers}
              />
            ))}
          </div>
        </ScrollArea>

        <div>
          <div className="flex justify-between my-10 border-b border-foreground">
            <h2 className="text-foreground text-4xl pb-3">
              Categorías con más discusiones
            </h2>
          </div>

          <div className="grid grid-cols-1 min-sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {products.map((product) => (
              <Link key={product.name} href="/discussions">
                <Card className="w-full p-3 bg-primary-foreground border-border">
                  <div className="w-full h-full flex items-center justify-around gap-5 ">
                    <div className="size-12 flex items-center justify-center">
                      <Image
                        src={product.img}
                        alt="icon"
                        width="64"
                        height="64"
                        className="object-contain rounded w-full h-full"
                      />
                    </div>
                    <CardTitle className="w-full overflow-hidden text-ellipsis font-medium text-2xl md:text-xl lg:text-2xl">
                      {product.name}
                    </CardTitle>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
