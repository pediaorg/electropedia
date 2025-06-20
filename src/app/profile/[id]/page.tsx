import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/_shadcn/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/_shadcn/ui/avatar";
import { Button } from "@/app/_components/_shadcn/ui/button";
import { Separator } from "@/app/_components/_shadcn/ui/separator";
import {
  ScrollArea,
  ScrollBar,
} from "@/app/_components/_shadcn/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/_components/_shadcn/ui/dropdown-menu";
import React from "react";

type PageProps = { params: Promise<{ id: string }> };
export default async function ProfilePage(props: PageProps) {
  const params = await props.params;
  const id = params.id;

  const loggerUserId = "MandarinasForTheWin";

  const filtros = Array.from({ length: 10 }).map(
    (_, i, a) => `filtro.${a.length - i}`
  );

  return (
    <div className="flex flex-col mx-auto container py-10 gap-15 px-8 ">
      <div className="w-full flex flex-col md:my-9 md:flex-row justify-between ">
        <div className="flex w-full md:w-fit">
          <div className="flex flex-col items-center">
            <Avatar className="size-16 md:size-40 lg:size-64 border border-black">
              <AvatarImage src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* Boton visible solo en mobile en el perfil propio */}
            {params.id === loggerUserId && (
              <Button variant="secondary" className="md:hidden w-fit mt-2">
                Editar
              </Button>
            )}
          </div>

          <div className="flex flex-col md:mt-4 ml-10 xl:ml-14 flex-1">
            <div className="flex flex-col md:flex-row text-xl md:text-2xl xl:text-3xl">
              <p className="font-bold">Usuario</p>
              <p className="font-normal overflow-hidden md:ml-2 text-ellipsis">
                @{id}
              </p>
            </div>
            <p className="font-extralight text-sm md:text-xl italic">
              Miembro desde: 31/05/2025
            </p>
            <div className="font-normal text-lg md:text-2xl md:space-y-3 md:my-5 xl:space-y-5">
              <p>15 soluciones</p>
              <p>24 comentarios</p>
              <p>3 guias</p>
            </div>
          </div>
        </div>
        {params.id === loggerUserId && (
          <div className="hidden md:flex justify-center md:justify-end p-2">
            <Button variant="secondary">Editar perfil</Button>
          </div>
        )}
      </div>

      <div className="w-full flex flex-col">
        {/* Manuales */}
        <Card className="flex flex-col space-x-4 p-4 border-none shadow-none">
          <CardHeader className="pl-0 ml-0">
            <CardTitle className="text-4xl font-medium">Manuales</CardTitle>
          </CardHeader>

          <Separator />

          <ScrollArea className="pb-3 whitespace-nowrap">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="p-2 flex flex-row bg-input items-center h-20 w-70 md:h-28 md:w-96 border border-border rounded-sm"
                >
                  <Avatar className="size-16 md:size-24 border border-border">
                    <AvatarImage src="https://samsungar.vtexassets.com/arquivos/ids/192242-1200-auto?width=1200&height=auto&aspect=true" />
                  </Avatar>
                  <CardContent className="p-0 truncate">
                    <p className="ml-2 text-lg md:text-xl font-bold text-blue-600 truncate">
                      Heladera Samsung M345 texto extra para probar
                    </p>
                    <p className="ml-2 text-sm md:text-lg text-medium">
                      16/4/2025
                    </p>
                  </CardContent>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </Card>
      </div>

      <div className="w-full flex flex-col">
        {/* Actividad */}
        <Card className="border-none shadow-none">
          <CardHeader className="pl-0 ml-0">
            <CardTitle className="text-4xl font-medium">Actividad</CardTitle>
          </CardHeader>
          <Separator />

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="size-20">
              <Button variant="secondary" className="ml-3">
                Filtros
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-40"></DropdownMenuContent>
          </DropdownMenu>

          <div>
            <ScrollArea className="h-40 md:h-72 p-2">
              <div className="space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <Card
                    key={item}
                    className="p-3 md:h-32 flex border borde-border bg-input"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex  gap-2 ">
                        <div className="flex items-center">
                          <Avatar className="size-16 md:size-24 border border-border">
                            <AvatarImage
                              src={
                                "https://samsungar.vtexassets.com/arquivos/ids/192242-1200-auto?width=1200&height=auto&aspect=true"
                              }
                            />
                          </Avatar>
                          <CardContent className="p-0">
                            <p className="ml-2 text-lg md:text-2xl font-bold text-blue-600 truncate">
                              Foro Heladera
                            </p>
                          </CardContent>
                        </div>
                      </div>
                      <span className="text-sm md:text-lg text-muted-foreground">
                        16/4/2025
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </Card>
      </div>
    </div>
  );
}
