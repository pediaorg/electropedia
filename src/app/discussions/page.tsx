const foros = [
  { name: "¿Es malo meter la mano en un enchufe?", img: "https://placehold.co/100x100", date: "16/4/2025", answers: "5" },
  { name: "¿Cómo arreglar mi heladera Samsung?", img: "https://placehold.co/100x100", date: "21/5/2025", answers: "5" },
  {
    name: "Se salió la puerta de mi heladera ¿Cómo la reparo?",
    img: "https://placehold.co/100x100",
    date: "11/4/2025",
    answers: "2"
  },
  { name: "TOP 5 mejores heladeras marca Samsung", img: "https://placehold.co/100x100", date: "7/3/2025", answers: "4" },
];
import { ScrollArea } from "@/app/_components/_shadcn/ui/scroll-area";
import { Card, CardContent, CardTitle } from "@/app/_components/_shadcn/ui/card";
import { Avatar, AvatarImage } from "@/app/_components/_shadcn/ui/avatar";
import {Button} from "@/app/_components/_shadcn/ui/button";
import { Triangle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/_components/_shadcn/ui/dialog";
import Image from "next/image";
const products = [
  "Heladeras",
  "Calefactores",
  "Lavarropas"
];

export default function DiscussionsPage() {
    return <div className="container w-full h-screen py-10">
        <div className="grid items-center pb-10">
            <div>
                <h1 className="text-7xl font-bold text-center">
                    Foro
                </h1>
                <div className="flex justify-between my-10 border-b border-foreground pb-3">
                    <h2 className="text-foreground text-4xl">
                        Discusiones
                    </h2>
                    <div className="flex gap-5 items-center">
                        <Button  className="text-base border border-sidebar-foreground">
                            Nueva discusión
                        </Button>
                        <Button className="border border-sidebar-foreground bg-foreground">
                            <p className="text-base">
                                Ordenar por
                            </p>
                            <Triangle className="rotate-180 fill-sidebar-primary-foreground size-3"/>
                        </Button>
                        <Button className="border border-sidebar-foreground bg-primary-foreground">
                            <p className="text-base text-sidebar-foreground">
                                Filtros
                            </p>
                            <Triangle className="rotate-180 fill-sidebar-foreground stroke-sidebar-foreground size-3"/>
                        </Button>
                    </div>
                </div>
                
            </div>

            <ScrollArea className="rounded-md h-101 justify-center">
                <div className="space-y-3">
                    {foros.map((foro) => (
                        <Card key={foro.name} className="p-3 flex">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-5 justify-center items-center">
                                    <Avatar className="size-25 border bg-white">
                                        <AvatarImage src={foro.img} alt="Heladera" />
                                    </Avatar>
                                    <span className="text-2xl text-center font-bold text-blue-500 underline">
                                        {foro.name}
                                    </span>
                            </div>
                            <span className="flex gap-2 text-2xl text-foreground">
                                <p>
                                    {foro.answers} respuestas
                                </p>
                                <p>
                                    {foro.date}
                                </p>
                            </span>
                            </div>
                        </Card>
                    ))}
                </div>
            </ScrollArea>

            <div>
                <div className="flex justify-between my-10 border-b border-foreground">
                    <h2 className="text-foreground text-4xl pb-3">
                        Categorías con más discusiones
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                    {products.map((product) => (
                        <Dialog key={product}>
                            <DialogTrigger asChild>
                                <Card className="w-full p-3 bg-primary-foreground border-border">
                                    <div className="w-full h-full flex items-center gap-2 ">
                                        <div className="size-12 flex items-center justify-center">
                                            <Image
                                            src="https://placehold.co/64x64"
                                            alt="icon"
                                            width="64"
                                            height="64"
                                            className="object-contain rounded w-full h-full"/>
                                        </div>
                                        <CardTitle className="w-full text-center overflow-hidden text-ellipsis font-medium text-2xl">
                                            {product}
                                        </CardTitle>
                                    </div>
                                </Card>
                            </DialogTrigger>
                            <DialogContent/>
                        </Dialog>
                    ))}
                </div>

            </div>
        </div>
    </div>
};