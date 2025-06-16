import Image from "next/image";
import { Badge } from "@/app/_components/_shadcn/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/_shadcn/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/_shadcn/ui/avatar";
import { Button } from "@/app/_components/_shadcn/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";

function ThumbsRating() {
  return (
    <div className="flex gap-2 py-10 lg:py-15">
      <ThumbsUp />
      <p className="text-foreground font-medium mr-3">10</p>
      <ThumbsDown />
      <p className="text-foreground font-medium">1</p>
    </div>
  );
}

function UserProfileHeader() {
  return (
    <div className="flex flex-row justify-baseline place-items-center text-center gap-5 lg:flex-col lg:justify-center">
      <Avatar className="size-24 border border-sidebar-foreground sm:size-36">
        <AvatarImage
          src="https://placehold.co/144x144"
          className="mx-auto max-w-screen"
        />
        <AvatarFallback>JC</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="font-bold text-xl">Juan I. Casareski</h1>
        <p className="font-normal text-xs">@JuanICasareski</p>
      </div>
    </div>
  );
}

export default function OneDiscussion() {
  return (
    <div className="py-10 px-8 mx-auto container">
      <div className="grid items-center pb-10">
        <div className="flex items-center">
          <div className="flex flex-col lg:flex-row gap-10 w-full">
            <UserProfileHeader />

            {/* Pregunta */}
            <div className="flex flex-col justify-around min-w-0">
              <div>
                <p className="text-xs text-foreground font-extralight">
                  11/08/2024
                </p>
                <h1 className="text-4xl font-bold">
                  Alguien sabe cómo puedo arreglar un auto-mate que se le rompió
                  la bombilla?
                </h1>
              </div>
              <p className="text-2xl text-foreground pt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fuga
                quis amet minima laborum molestias tempore sunt aperiam ad!
                Exercitationem vitae est quam, animi quia non atque architecto
                sequi sit?
              </p>

              {/* Botones */}
              <div className="flex flex-wrap gap-5 pt-5">
                <Button size="sm" className="text text-sm">
                  Contestar
                </Button>
                <Button variant="secondary" size="sm" className="text text-sm">
                  Yo también tengo este problema
                </Button>
              </div>
            </div>

            {/* Producto */}
            <div className="flex-col gap-1 bg-input rounded-sm border-border border shadow-xl p-1 m-auto">
              <div>
                <Image
                  src="https://placehold.co/222x148"
                  alt="Imagen de auto-mate"
                  width="222"
                  height="148"
                  className="mx-auto max-w-screen"
                />
              </div>
              <p className="font-semibold text-center text-foreground">
                Auto-mate Stanley
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-10 w-full">
        {/* Respuestas */}
        <div className="flex justify-between">
          <h1 className="text-5xl font-bold">Respuestas</h1>

          {/* Filtros */}
        </div>

        {/* Respuesta 1 */}
        <Card className="bg-input border-primary border-2 p-0 lg:pl-5">
          <div className="flex flex-col lg:flex-row gap-10 pl-5 pt-5 lg:pt-0 lg:pl-0">
            <div className="flex flex-col justify-center pr-5 lg:pr-0">
              <UserProfileHeader />
            </div>

            {/* Respuesta */}
            <div className="flex flex-col pr-1 pt-1 w-full lg:pl-0">
              <CardHeader className="flex flex-col-reverse p-0">
                <div className="pt-5 pr-4">
                  <CardDescription className="text-xs text-foreground font-extralight">
                    11/08/2024
                  </CardDescription>
                  <CardTitle className="text-2xl text-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi harum pariatur nobis aliquam, nemo quisquam ipsam
                    necessitatibus voluptas officia consequuntur cumque dolorum
                    mollitia, voluptate reprehenderit velit voluptatem molestias
                    doloribus praesentium.
                  </CardTitle>
                </div>
                <div className="place-self-end">
                  <Badge className="text-base">Más votada</Badge>
                </div>
              </CardHeader>

              <CardContent className="flex px-0">
                <ThumbsRating />
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
