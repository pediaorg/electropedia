import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/_shadcn/ui/carousel";
import { Card, CardTitle } from "@/app/_components/_shadcn/ui/card";
import React from "react";

const milestones = [
  { n: 271, label: "Manuales" },
  { n: 144, label: "Repuestos" },
  { n: 101, label: "Foros" },
  { n: 479, label: "Miembros" },
];

const products = [
  { name: "Heladeras", img: "heladera.svg" },
  { name: "Lavavajillas", img: "lavavajillas.svg" },
  { name: "Secadoras", img: "secadoras.svg" },
  { name: "Lavarropas", img: "lavarropas.svg" },
  { name: "Hornos Eléctricos", img: "hornoElectrico.svg" },
  { name: "Batidoras", img: "batidora.svg" },
  { name: "Planchas", img: "plancha.svg" },
  { name: "Aspiradoras", img: "aspiradora.svg" },
];

function Guide() {
  return (
    <Card className="hidden size-40 rounded-xl shadow sm:flex flex-col items-center justify-between p-2 bg-background">
      <div className="relative size-full flex items-center justify-center">
        <div className="w-32 h-20 bg-white rounded-md shadow-inner flex items-center justify-center overflow-hidden border">
          <p className="text-xs font-semibold italic text-black text-center leading-tight px-1">
            Lorem ipsum dolor sit amet consectetur adipiscing elit augue tortor,
            interdum risus mus ac fames nullam parturient cubilia dictum
          </p>
        </div>
        <Image
          src="/pdf.svg"
          alt="PDF"
          width={40}
          height={40}
          className="absolute -bottom-4 -left-2 drop-shadow-lg"
        />
      </div>
      <p className="text-xs font-semibold text-center text-foreground mt-2 mb-1">
        Hecho por{" "}
        <span className="text-foreground font-bold">@JuanICasareski</span>
      </p>
    </Card>
  );
}

function ProductsCategories(props: { product: string; img: string }) {
  return (
    <Card className="w-full p-3">
      <div className="w-full h-full flex items-center gap-2 ">
        <div className="size-12 flex items-center justify-center">
          <Image
            src={props.img}
            alt="icon"
            width="64"
            height="64"
            className="object-contain rounded w-full h-full"
          />
        </div>
        <CardTitle className="w-full text-center overflow-hidden text-ellipsis font-medium text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap">
          {props.product}
        </CardTitle>
      </div>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="min-h-content">
      <div className="h-content grid [grid-template-area:'overlap'] shadow-sm">
        <div className="[grid-area:overlap] w-[calc(100vw-1rem)] h-content relative">
          <Image
            src="/man-fixing-fridge.svg"
            alt="a"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="[grid-area:overlap] w-[calc(100vw-1rem)] h-content z-10">
          <div className="lg:w-1/2 h-content flex flex-col justify-center bg-black/35 px-4 md:px-6 lg:px-9">
            <div
              className="text-white font-bold text-4xl sm:text-6xl text-center md:text-left truncate whitespace-normal"
              style={{
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <span className="text-primary font-[900] italic">Tu</span> guía{" "}
              <br className="hidden lg:block" /> para{" "}
              <span className="text-primary font-[900] italic">reparar</span> y{" "}
              <br className="hidden lg:block" />{" "}
              <span className="text-primary font-[900] italic">mantener</span>{" "}
              tus <br className="hidden lg:block" />
              electrodomésticos
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-around py-11">
        {milestones.map((m) => (
          <div key={m.label} className="flex flex-col items-center gap-4">
            <span className="text-3xl">{m.n}</span>
            <span className="text-base">{m.label}</span>
          </div>
        ))}
      </div>

      <div className="w-full h-11 bg-gradient-to-b from-background to-input">
        &nbsp;
      </div>

      <div className="bg-input py-8 px-2">
        <h2 className="font-bold text-6xl text-center">Actividad reciente</h2>
        <p className="font-medium text-2xl text-center mt-2">
          Visita los electrodomésticos más visitados por los usuarios
        </p>

        <Carousel
          className="w-full max-w-4xl mt-7 mx-auto"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: 20 }).map((_, index) => (
              <React.Fragment key={index}>
                <CarouselItem className="basis-1/3">
                  <div className="p-1 flex justify-center">
                    <Guide />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div className="p-1 flex justify-center">
                    <Guide />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div className="p-1 flex justify-center">
                    <Guide />
                  </div>
                </CarouselItem>
              </React.Fragment>
            ))}
          </CarouselContent>

          <CarouselNext variant="ghost" />
          <CarouselPrevious variant="ghost" />
        </Carousel>
      </div>

      <div className="w-full h-11 bg-gradient-to-b from-input to-foreground">
        &nbsp;
      </div>

      <div className="bg-foreground py-8 px-4 md:px-8 lg:px-12">
        <h2 className="font-bold text-6xl text-center text-background">
          Categorias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-10 mt-10">
          {products.map((p) => (
            <ProductsCategories key={p.name} product={p.name} img={p.img} />
          ))}
        </div>
      </div>

      <div className="w-full h-11 bg-gradient-to-b from-foreground to-secondary">
        &nbsp;
      </div>
    </div>
  );
}
