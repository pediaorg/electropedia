import Link from "next/link";
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
import { api } from "@/trpc/server";

// const foros = [
//   {
//     name: "¿Cómo arreglar mi heladera Samsung?",
//     date: "16/4/2025",
//   },
//   {
//     name: "Se salió la puerta de mi heladera ¿Cómo la reparo?",
//     date: "11/4/2025",
//   },
//   {
//     name: "TOP 5 mejores heladeras marca Samsung",
//     date: "7/3/2025",
//   },
// ];

// const guides = [
//   {
//     title: "BESPOKE French Door con Family Hub 32' de 699L",
//     img: "/Bespoke-French.png",
//     date: "24/06/25",
//   },
//   {
//     title: "Lavarropas Frontal Digital 8kg con EcoBubble™ y Motor Inverter",
//     img: "/LavarropasBGH.jpg",
//     date: "17/04/25",
//   },
//   {
//     title: "Microondas Grill 30L con Tecnología HotBlast™ y Control Táctil",
//     img: "/Microonda-grill.jpg",
//     date: "18/09/24",
//   },
//   {
//     title:
//       "Aspiradora Robot Jet Bot con Sensor LiDAR y Base de Carga Automática",
//     img: "/Aspiradora.png",
//     date: "03/05/25",
//   },
// ];

const loggedUser = "68571baf81c56ec2ba5fd6aa";

async function UserData(props: {
  user: Awaited<ReturnType<typeof api.users.getById>>;
}) {
  return (
    <div className="w-full flex flex-col md:my-9 md:flex-row justify-between ">
      <div className="flex w-full md:w-fit">
        <div className="flex flex-col items-center">
          <Avatar className="size-16 md:size-40 lg:size-64 border border-black">
            <AvatarImage src="/blank-profile.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/* Boton visible solo en mobile en el perfil propio */}
          {props.user.id === loggedUser && (
            <Button variant="secondary" className="md:hidden w-fit mt-2">
              Editar
            </Button>
          )}
        </div>

        <div className="flex flex-col md:mt-4 ml-10 xl:ml-14 flex-1">
          <div className="flex flex-col md:flex-row text-xl md:text-2xl xl:text-3xl">
            <p className="font-bold">{props.user.name}</p>
          </div>
          <p className="font-extralight text-sm md:text-xl italic">
            Miembro desde: 31/05/2025{" "}
            {/*TODO: Añadir atributo tipo DATE de cuándo se unió */}
          </p>
          <div className="font-normal text-lg md:text-2xl md:space-y-3 md:my-5 xl:space-y-5">
            {/* <p>15 soluciones</p> */}
            <p>24 comentarios</p>
            <p>3 guias</p>
          </div>
        </div>
      </div>
      {props.user.id === loggedUser && (
        <div className="hidden md:flex justify-center md:justify-end p-2">
          <Button variant="secondary">Editar perfil</Button>
        </div>
      )}
    </div>
  );
}

async function UserGuides(props: { userId: string }) {
  const guides = await api.guides.getByUserId({ id: props.userId });
  console.log(props.userId);
  return (
    <div className="w-full flex flex-col">
      {/* Manuales */}

      <Card className="flex flex-col space-x-4 p-4 border-none shadow-none">
        <CardHeader className="pl-0 ml-0">
          <CardTitle className="text-4xl font-medium">Manuales</CardTitle>
        </CardHeader>

        <Separator />

        <ScrollArea className="pb-3 whitespace-nowrap">
          <div className="flex gap-2">
            {guides.map((guide) => (
              <div
                key={guide.name}
                className="p-2 flex flex-row bg-input items-center h-20 w-70 md:h-28 md:w-96 border border-border rounded-sm"
              >
                <Avatar className="size-16 md:size-24 border border-border">
                  <AvatarImage src={guide.attachments.at(0)} />
                </Avatar>
                <CardContent className="p-0 truncate">
                  <Link href={`/guides`}>
                    <p className="ml-2 text-lg md:text-xl font-bold text-blue-600 truncate">
                      {guide.name}
                    </p>
                  </Link>
                  <p className="ml-2 text-sm md:text-lg text-medium">
                    {guide.created_at.toLocaleDateString()}
                  </p>
                </CardContent>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Card>
    </div>
  );
}

async function UserRecentActivity(props: { userId: string }) {
  const discussions = await api.discussions.getByUserId({
    id: props.userId,
  });

  const answers = await api.answers.getByUserId({ id: props.userId });

  // console.log(recentDiscussions);
  return (
    <div className="w-full flex flex-col">
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
              {discussions.map(async (foro) => {
                const product = await api.products.getByDiscussion({
                  id: String(foro.product_id),
                });
                console.log(product?.name);
                return (
                  <Card
                    key={foro.title}
                    className="p-3 md:h-32 flex border borde-border bg-input"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex  gap-2 ">
                        <div className="flex items-center">
                          <Avatar className="size-16 md:size-24 border border-border">
                            <AvatarImage src={product?.image} />
                          </Avatar>
                          <CardContent className="p-0">
                            <Link href={`/discussion/${foro._id}`}>
                              {" "}
                              {/*TODO: Cambiar este href, debe ser dinámico */}
                              <p className="ml-2 text-lg md:text-2xl font-bold text-blue-600 truncate">
                                {foro.title}
                              </p>
                            </Link>
                          </CardContent>
                        </div>
                      </div>
                      <span className="text-sm md:text-lg text-muted-foreground">
                        {foro.last_update.toLocaleDateString()}
                      </span>
                    </div>
                  </Card>
                );
              })}

              {answers.map(async (answer) => {
                const discussion = await api.discussions.getByAnswerId({
                  replied_id: String(answer.replied_id),
                });

                return (
                  <Card
                    key={discussion.title}
                    className="p-3 md:h-32 flex border borde-border bg-input"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex  gap-2 ">
                        <div className="flex items-center">
                          <Avatar className="size-16 md:size-24 border border-border">
                            <AvatarImage src="/discussion.svg" />
                          </Avatar>
                          <CardContent className="p-0">
                            <Link href={`/discussion/${discussion._id}`}>
                              {" "}
                              {/*TODO: Cambiar este href, debe ser dinámico */}
                              <p className="ml-2 text-lg md:text-2xl font-bold text-blue-600 truncate">
                                {discussion.title}
                              </p>
                            </Link>
                          </CardContent>
                        </div>
                      </div>
                      <span className="text-sm md:text-lg text-muted-foreground">
                        {discussion.last_update.toLocaleDateString()}
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </Card>
    </div>
  );
}

type PageProps = { params: Promise<{ id: string }> };
export default async function ProfilePage(props: PageProps) {
  const params = await props.params;
  const id = params.id;
  const user = await api.users.getById({ id });

  return (
    <div className="flex flex-col mx-auto container py-10 gap-15 px-8 ">
      <UserData user={user} />

      <UserGuides userId={id} />

      <UserRecentActivity userId={id} />
    </div>
  );
}
