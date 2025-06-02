import Image from "next/image";
import { ScrollArea } from "@/app/_components/_shadcn/ui/scroll-area";
import { Button } from "@/app/_components/_shadcn/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/app/_components/_shadcn/ui/dialog";
import { Card, CardContent } from "@/app/_components/_shadcn/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/app/_components/_shadcn/ui/accordion";
import { Caracteristics } from "@/app/_components/Specifications";
import { Avatar, AvatarImage } from "@/app/_components/_shadcn/ui/avatar";

const technicians = [
  { name: "Manuel Nuñez", user: "@manununiez" },
  { name: "Santiago Ferreyra", user: "@sanferreyra" },
  { name: "Juan I. Casareski", user: "@juanicasareski" },
  { name: "Santiago Ribecca", user: "@sribecca" },
];

const foros = [
  { name: "¿Es malo meter la mano en un enchufe?", img: "", date: "16/4/2025" },
  { name: "¿Cómo arreglar mi heladera Samsung?", img: "", date: "21/5/2025" },
  {
    name: "Se salió la puerta de mi heladera ¿Cómo la reparo?",
    img: "",
    date: "11/4/2025",
  },
  { name: "TOP 5 mejores heladeras marca Samsung", img: "", date: "7/3/2025" },
];

export default function GuidesPage() {
  return (
    <div className="DEBUG mx-30 my-10 space-y-6 ">
      <div className="flex gap-4 items-center w-full">
        <Avatar className="size-32 border bg-white">
          <AvatarImage src="" alt="Heladera" />
        </Avatar>
        <div className="flex flex-col gap-1 flex-1">
          <h1 className="font-bold text-2xl w-full">
            BESPOKE French Door con Family Hub 32" de 699L
          </h1>
          <h2 className="text-lg font-semibold w-full">Samsung</h2>
          <h3 className="text-sm text-muted-foreground w-full">
            17 Comentarios
          </h3>
          <div className="flex gap-4 text-sm justify-between w-full">
            <Dialog>
              <DialogTrigger asChild>
                <p className="underline text-blue-500 font-light italic cursor-default">
                  Especificaciones
                </p>
              </DialogTrigger>
              <DialogContent>
                <Caracteristics />
              </DialogContent>
            </Dialog>
            <a
              href=""
              className="underline text-blue-500 font-light italic cursor-default"
            >
              ¿Tenés dudas? Contactate con un profesional!
            </a>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center-safe">
          <h2 className="text-2xl font-semibold">Guías</h2>
          <Button size="sm">Publicar guía</Button>
        </div>
        <hr className="w-full border-t-2 border-[#cfc7bb] mb-6" />
        <Card className="hidden size-40 bg-lime-50 rounded-xl shadow sm:flex flex-col items-center justify-between p-2">
          <div className="relative size-full flex items-center justify-center">
            <div className="w-32 h-20 bg-white rounded-md shadow-inner flex items-center justify-center overflow-hidden">
              <p className="text-xs font-semibold italic text-black text-center leading-tight px-1">
                Lorem ipsum dolor sit amet consectetur adipiscing elit augue
                tortor, interdum risus mus ac fames nullam parturient cubilia
                dictum
              </p>
            </div>
            <Image
              src=""
              alt="PDF"
              width={40}
              height={40}
              className="absolute -bottom-4 -left-2 drop-shadow-lg"
              style={{ zIndex: 2 }}
            />
          </div>
          <p className="text-[12px] font-semibold text-center text-gray-700 mt-2 mb-1">
            Hecho por{" "}
            <span className="text-gray-500 font-bold">@JuanICasareski</span>
          </p>
        </Card>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Discusiones</h2>
          <div className="flex gap-2">
            <Button size="sm">Hacer una pregunta</Button>
            <Button size="sm">Foro</Button>
            <Button size="sm">Filtros </Button>
          </div>
        </div>
        <hr className="w-full border-t-2 border-[#cfc7bb] mb-6" />
        <ScrollArea className="h-48 rounded-md p-4">
          <div className="space-y-3">
            {foros.map((foro) => (
              <Card key={foro.name} className="p-3 flex">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 justify-center items-center">
                    <Avatar className="size-14 border bg-white">
                      <AvatarImage src={foro.img} alt="Heladera" />
                    </Avatar>
                    <span className="text-sm text-center font-medium text-blue-800 underline">
                      {foro.name}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {foro.date}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
      {/* TODO: Buscar mejor forma de implementar Multimedia!  */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Multimedia</h2>
        <hr className="w-full border-t-2 border-[#cfc7bb] mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-video bg-black rounded-md flex items-center justify-center"
            >
              <svg
                width="48"
                height="34"
                viewBox="0 0 48 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="34" rx="8" fill="#FF0000" />
                <polygon points="19,11 19,23 31,17" fill="white" />
              </svg>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
        <hr className="w-full border-t-2 border-[#cfc7bb] mb-6" />
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base font-normal px-4">
              Pregunta #1
            </AccordionTrigger>
            <AccordionContent>
              <p className="italic text-base p-3 bg-amber-300 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipiscing elit augue
                tortor, interdum risus sociosqu fames nullam volutpat cubilia
                dictum eros, magna pharetra
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base font-normal px-4">
              Pregunta #2
            </AccordionTrigger>
            <AccordionContent>
              <p className="italic text-base p-3 bg-amber-300 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipiscing elit augue
                tortor, interdum risus sociosqu fames nullam volutpat cubilia
                dictum eros, magna pharetra
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-base font-normal px-4">
              Pregunta #3
            </AccordionTrigger>
            <AccordionContent>
              <p className="italic text-base p-3 bg-amber-300 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipiscing elit augue
                tortor, interdum risus sociosqu fames nullam volutpat cubilia
                dictum eros, magna pharetra
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Técnicos recomendados</h2>
        <hr className="w-full border-t-2 border-[#cfc7bb] mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technicians.map((technician) => (
            <Card
              key={technician.user}
              className="rounded-xl shadow flex flex-col items-center py-6 px-4 size-full"
            >
              <div className="relative mb-3 flex flex-col items-center">
                <Avatar className="size-32 border bg-white">
                  <AvatarImage src="" alt={technician.name} />
                </Avatar>
                <img
                  src=""
                  alt="Casquito"
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-10"
                />
              </div>
              <div className="text-center mb-3">
                <div className="font-bold text-lg">{technician.name}</div>
                <div className="text-muted-foreground text-sm">
                  {technician.user}
                </div>
              </div>
              <Button className="font-medium px-6 py-2">Contactar</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
