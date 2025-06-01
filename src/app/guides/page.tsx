import Image from "next/image";
import { ScrollArea } from "@/app/_components/_shadcn/ui/scroll-area";
import { Button } from "@/app/_components/_shadcn/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/app/_components/_shadcn/ui/dialog";
import { Card } from "@/app/_components/_shadcn/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/app/_components/_shadcn/ui/accordion";
import { Caracteristics } from "../_components/Specifications";

export default function GuidesPage() {
  return (
    <div className="DEBUG p-6 space-y-6">
      <div className="flex gap-4 items-center w-full">
        <Image
          src=""
          alt=""
          width="64"
          height="64"
          className="rounded-full border object-cover flex-shrink-0"
        />
        <div className="flex flex-col gap-1 flex-1">
          <h1 className="font-semibold text-xl w-full">
            BESPOKE French Door con Family Hub 32" de 699L
          </h1>
          <h2 className="text-lg font-normal w-full">Samsung</h2>
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
          <h2 className="text-lg font-semibold">Guías</h2>
          <Button size="sm">Publicar guía</Button>
        </div>
        <hr className="w-full border-t-2 border-[#cfc7bb] mb-6" />
        <Card className="hidden w-40 h-40 bg-[#cfc7bb] rounded-xl shadow sm:flex flex-col items-center justify-between p-2">
          <div className="relative w-full flex-1 flex items-center justify-center">
            <div className="w-32 h-16 bg-white rounded-md shadow-inner flex items-center justify-center overflow-hidden">
              <p className="text-[11px] font-semibold italic text-black text-center leading-tight px-1">
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
          <h2 className="text-lg font-semibold">Discusiones</h2>
          <div className="flex gap-2">
            <Button size="sm">Hacer una pregunta</Button>
            <Button size="sm">Foro</Button>
            <Button size="sm">Filtros </Button>
          </div>
        </div>
        <hr className="w-full border-t-2 border-[#cfc7bb] mb-6" />
        <ScrollArea className="h-48 rounded-md border p-4">
          <div className="space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="p-3 flex">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 justify-center items-center">
                    <Image
                      src=""
                      alt="Foro"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="text-sm text-center font-medium text-blue-800 underline">
                      Nombre del foro
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    16/4/2025
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
      {/* TODO: Buscar mejor forma de implementar Multimedia!  */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Multimedia</h2>
        <hr className="w-full border-t-2 border-[#cfc7bb] mb-4" />
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
        <h2 className="text-lg font-semibold">Preguntas frecuentes</h2>
        <hr className="w-full border-t-2 border-[#cfc7bb] mb-2" />
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
      {/* TODO: Buscar Tecnico */}
    </div>
  );
}
