import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/_shadcn/ui/accordion";
import { Card, CardContent, CardTitle } from "@/app/_components/_shadcn/ui/card";
import { Avatar, AvatarImage } from "@/app/_components/_shadcn/ui/avatar";
import { Search } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/_components/_shadcn/ui/dialog";
import Image from "next/image";

const brands = [
  {
    id: "Samsung",
    image: "https://placehold.co/64x64",
  },
  {
    id: "LG",
    image: "https://placehold.co/64x64",
  },
  {
    id: "Whirlpool",
    image: "https://placehold.co/64x64",
  },
  {
    id: "Mabe",
    image: "https://placehold.co/64x64",
  },
  {
    id: "Bosch",
    image: "https://placehold.co/64x64",
  },
];

const parts = [
  { name: "Condensador Whirlpool", img: "https://placehold.co/64x64", stars: "", price: "$22.99" },
  { name: "Ensamblaje de máquina de hielo del refrigerador-congelador Samsung",
     img: "https://placehold.co/64x64", stars: "", price: "$104.99" },
  { name: "Sensor de temperatura Samsung", img: "https://placehold.co/64x64", stars: "", price: "$11.99" },
  { name: "Ventilador Bosch", img: "https://placehold.co/64x64", stars: "", price: "$84.20" },
  { name: "Módulo PCB de heladera Whirlpool", img: "https://placehold.co/64x64", stars: "", price: "$132.46" }
];

export default function SparePartsPage() {
    return <div className="DEBUG container w-full py-10 mx-auto">
        <div className="grid items-center">
            <div className="flex gap-15 items-center pb-10">
                <Avatar className="size-64">
                    <AvatarImage src="https://placehold.co/256x256" className="mx-auto max-w-screen" />
                </Avatar>
                <div className="flex flex-col justify-baseline">
                    <h1 className="text-3xl font-semibold">
                        Encuentra todo tipo de repuestos de heladeras
                    </h1>
                    <p className="text-2xl">
                        Todas las partes son oficiales o similares en calidad, encuentra lo que necesites a un precio entendible.
                    </p>
                </div>
            </div>

            <div className="flex items-baseline gap-10">
                <div className="grid items-center">
                    <h1 className="text-4xl border-b border-foreground text-foreground py-3 px-4">
                        Filtros
                    </h1>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="px-4 text-2xl font-semibold items-center">
                                Marca
                            </AccordionTrigger>

                            <AccordionContent className="p-0">
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {brands.map((brand) => (
                                    <Dialog key={brand.id}>
                                        <DialogTrigger asChild>
                                            <Image
                                                src={brand.image}
                                                alt={brand.id}
                                                width="64"
                                                height="64"
                                                className="object-contain w-full h-full cursor-pointer p-4"
                                            />
                                        </DialogTrigger>
                                    </Dialog>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="px-4 text-2xl font-semibold items-center">
                                Tipo de parte
                            </AccordionTrigger>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="px-4 text-2xl font-semibold items-center">
                                Precio
                            </AccordionTrigger>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="grid">
                    <div className="flex items-center justify-between pr-2">
                        <div className="flex gap-2 items-baseline py-2">
                            <h1 className="text-4xl text-foreground">
                                Catálogo
                            </h1>
                            <p className="text-xl">
                                (10 resultados)
                            </p>
                        </div>
                        <div className="flex border border-sidebar-foreground rounded-2xl gap-2 bg-primary-foreground p-2">
                            <Search/>
                            <p className="text-base">
                                Encuentra tu repuesto...
                            </p>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            {parts.map((part) => (
                                <Card key={part.name} className="rounded-none shadow flex flex-col bg-primary-foreground justify-around p-5 size-full">
                                    <div className="relative mb-3 flex flex-col items-center">
                                        <Image
                                            src={part.img}
                                            alt={part.name}
                                            width="200"
                                            height="200"
                                            className="object-contain p-4"
                                        />
                                    </div>
                                    
                                    <div className="flex justify-between mb-3 items-center">
                                        <div className="font-semibold text-secondary text-base">
                                            {part.name}
                                        </div>
                                        <div className="font-semibold text-secondary text-base">
                                            {part.price}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};