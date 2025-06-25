import Image from "next/image";
import { ScrollArea } from "@/app/_components/_shadcn/ui/scroll-area";
import { Button } from "@/app/_components/_shadcn/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/app/_components/_shadcn/ui/dialog";
import { Card } from "@/app/_components/_shadcn/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/app/_components/_shadcn/ui/accordion";
import { ProductSpecs } from "@/app/_components/dialogs";
import { Avatar, AvatarImage } from "@/app/_components/_shadcn/ui/avatar";
import { NewGuide } from "@/app/_components/newGuide";
import { Discussion } from "@/app/_components/discussions";
import { TechnicianCard } from "@/app/_components/technicians";
import Link from "next/link";

const technicians = [
  { name: "Manuel Nuñez", user: "@manununiez" },
  { name: "Santiago Ferreyra", user: "@sanferreyra" },
  { name: "Juan I. Casareski", user: "@juanicasareski" },
  { name: "Santiago Ribecca", user: "@sribecca" },
];

const foros = [
  {
    name: "¿Es malo meter la mano en un enchufe?",
    img: "discussion.svg",
    date: "16/4/2025",
  },
  {
    name: "¿Cómo arreglar mi heladera Samsung?",
    img: "discussion.svg",
    date: "21/5/2025",
  },
  {
    name: "Se salió la puerta de mi heladera ¿Cómo la reparo?",
    img: "discussion.svg",
    date: "11/4/2025",
  },
  {
    name: "TOP 5 mejores heladeras marca Samsung",
    img: "discussion.svg",
    date: "7/3/2025",
  },
];

export default function GuidesPage() {
  return (
    <div className="px-8 py-10 space-y-6 container mx-auto">
      <div className="flex gap-4 items-center w-full">
        <Avatar className="size-32 border bg-white hidden sm:block">
          <AvatarImage src="frenchDoor.svg" alt="Heladera" />
        </Avatar>
        <div className="flex flex-col gap-1 flex-1">
          <h1 className="font-bold text-2xl w-full">
            BESPOKE French Door con Family Hub 32&#39; de 699L
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
                <DialogTitle />
                <ProductSpecs />
              </DialogContent>
            </Dialog>
            <Link href="technicians/">
              <p className="underline text-blue-500 font-light italic cursor-default">
                ¿Tenés dudas? Contactate con un profesional!
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <h2 className="text-2xl font-semibold">Guías</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">Publicar guía</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle />
              <NewGuide productName="BESPOKE French Door con Family Hub 32' de 699L" />
            </DialogContent>
          </Dialog>
        </div>
        <hr className="w-full border-t-2 border-border mb-6" />
        <Card className="hidden size-40 bg-input rounded-xl shadow sm:flex flex-col items-center justify-between p-2">
          <div className="relative size-full flex items-center justify-center">
            <div className="w-32 h-20 bg-white rounded-md shadow-inner flex items-center justify-center overflow-hidden">
              <p className="text-xs font-semibold italic text-black text-center leading-tight px-1">
                Lorem ipsum dolor sit amet consectetur adipiscing elit augue
                tortor, interdum risus mus ac fames nullam parturient cubilia
                dictum
              </p>
            </div>
            <Image
              src="pdf.svg"
              alt="PDF"
              width={40}
              height={40}
              className="absolute -bottom-4 -left-2 drop-shadow-lg"
            />
          </div>
          <p className="text-xs font-semibold text-center text-foreground mt-2 mb-1">
            Hecho por{" "}
            <Link href="profile/JuanICasareski">
              <span className="text-foreground font-bold">@JuanICasareski</span>
            </Link>
          </p>
        </Card>
      </div>
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <h2 className="text-2xl font-semibold">Discusiones</h2>
          <div className="flex flex-wrap gap-2">
            <Button size="sm">Hacer una pregunta</Button>
            <Link href="discussions/">
              <Button size="sm" variant="secondary" className="size-full">
                Foro
              </Button>
            </Link>
            <Button size="sm" variant="outline">
              Filtros
            </Button>
          </div>
        </div>
        <hr className="w-full border-t-2 border-border mb-6" />
        <ScrollArea className="max-h-48 overflow-auto rounded-md p-4">
          <div className="space-y-3">
            {foros.map((foro, index) => (
              <Discussion
                key={index}
                name={foro.name}
                img={foro.img}
                date={foro.date}
                answers={0}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
      {/* TODO: Buscar mejor forma de implementar Multimedia!  */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Multimedia</h2>
        <hr className="w-full border-t-2 border-border mb-6" />
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
        <hr className="w-full border-t-2 border-border mb-6" />
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base font-normal px-4">
              ¿Es marca Samsung?
            </AccordionTrigger>
            <AccordionContent>
              <p className="italic text-base p-3 bg-input rounded-md">
                Si, en efecto, la heladera BESPOKE French Door con Family Hub
                32' de 699L es un producto de la marca Samsung. Esta heladera
                combina tecnología avanzada con un diseño elegante y moderno,
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base font-normal px-4">
              ¿Qué funciones ofrece la heladera Family Hub de 32 pulgadas y cómo
              mejora la experiencia del usuario?
            </AccordionTrigger>
            <AccordionContent>
              <p className="italic text-base p-3 bg-input rounded-md">
                La heladera Family Hub de 32 pulgadas ofrece una amplia gama de
                funciones inteligentes, como una pantalla táctil que permite ver
                recetas, hacer listas de compras y reproducir música. Además,
                cuenta con cámaras internas que permiten ver el contenido del
                refrigerador desde el teléfono móvil.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-base font-normal px-4">
              Qué tecnologías de enfriamiento y eficiencia energética incorpora
              este modelo?
            </AccordionTrigger>
            <AccordionContent>
              <p className="italic text-base p-3 bg-input rounded-md">
                Incorpora tecnologías avanzadas de enfriamiento como el sistema
                Twin Cooling Plus, que optimiza la temperatura y la humedad en
                el refrigerador y el congelador por separado, y la tecnología
                Digital Inverter, que ajusta la velocidad del compresor según
                las necesidades de enfriamiento, lo que mejora la eficiencia.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold truncate">
          Técnicos recomendados
        </h2>
        <hr className="w-full border-t-2 border-border mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technicians.map((technician, index) => (
            <TechnicianCard
              key={index}
              name={technician.name}
              user={technician.user}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
