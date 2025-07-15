import { ScrollArea } from "@/app/_components/_shadcn/ui/scroll-area";
import { Card, CardTitle } from "@/app/_components/_shadcn/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/app/_components/_shadcn/ui/dialog";
import { Button } from "@/app/_components/_shadcn/ui/button";
import { Triangle, Funnel, ArrowDownWideNarrow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Discussion } from "@/app/_components/discussions";
import { NewDiscussion } from "@/app/_components/dialogs";
import { api } from "@/trpc/server";

const products = [
  { name: "Heladeras", img: "heladera.svg" },
  { name: "Aspiradoras", img: "aspiradora.svg" },
  { name: "Lavarropas", img: "lavarropas.svg" },
  { name: "Cafeteras", img: "cafetera.svg" },
];

async function Discussions() {
  const discussions = await api.discussions.getAll();

  return (
    <ScrollArea className="rounded-md h-80 px-8">
      <div className="space-y-3">
        {discussions.map(async (discussion) => {
          const answers = await api.answers.countByDiscussionId({
            id: String(discussion._id),
          });
          return (
            <Discussion
              key={discussion.id}
              id={discussion.id}
              name={discussion.title}
              date={discussion.publication_date}
              answers={answers}
            />
          );
        })}
      </div>
    </ScrollArea>
  );
}

function Categories() {
  return (
    <div className="bg-input px-8 pb-10">
      <div className="flex justify-between mb-10 mt-3 border-b border-secondary">
        <h2 className="text-secondary text-4xl pb-3">
          Categorías con más discusiones
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {products.map((product) => (
          //TODO: Hacer link dinámico
          <Link key={product.name} href="/discussions">
            <Card className="w-full p-3 bg-card border-border">
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
                <CardTitle className="w-full overflow-hidden text-center text-ellipsis font-medium text-2xl md:text-xl lg:text-2xl">
                  {product.name}
                </CardTitle>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="flex gap-5 items-end md:items-center justify-end">
      <Dialog>
        <DialogTitle />
        <DialogTrigger asChild>
          <Button className="text text-base">Nueva discusión</Button>
        </DialogTrigger>
        <DialogContent>
          <NewDiscussion />
        </DialogContent>
      </Dialog>

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
  );
}

export default async function DiscussionsPage() {
  return (
    <div className="container pt-10 mx-auto">
      <div className="grid items-center">
        <div className="px-8">
          <h1 className="text-7xl font-bold text-center">Foro</h1>
          <div className="flex flex-wrap justify-between gap-3 my-10 border-b border-foreground pb-3">
            <h2 className="text-foreground text-4xl">Discusiones</h2>
            <Buttons />
          </div>
        </div>

        <Discussions />

        <div className="w-full h-11 bg-gradient-to-b from-background to-input">
          &nbsp;
        </div>

        <Categories />
      </div>
    </div>
  );
}
