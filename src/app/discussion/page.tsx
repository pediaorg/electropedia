import Image from "next/image"
import { Badge } from "@/app/_components/_shadcn/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/_shadcn/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/app/_components/_shadcn/ui/avatar"
import { Button } from "@/app/_components/_shadcn/ui/button"
import { ThumbsUp } from 'lucide-react';
import { ThumbsDown } from 'lucide-react';

export default function OneDiscussion() {
    return <div className="grid gap-10 mx-auto py-10 container w-full">
        <div className="flex justify-between items-center self-center gap-20 w-full">
            <div className="flex gap-10">

                {/* Foto y nombre de usuario */}
                <div className="flex flex-col mx-5 items-center text-center">
                    <div>
                        <Avatar className="size-36 border border-sidebar-foreground mb-5">
                            <AvatarImage src="https://placehold.co/144x144" className="mx-auto max-w-screen" />
                            <AvatarFallback>JC</AvatarFallback>
                        </Avatar>
                    </div>
                    <h1 className="font-bold text-2xl mb-1">
                        Juan I. Casareski
                    </h1>
                    <p className="font-normal mb-2">
                        @JuanICasareski
                    </p>
                </div>

                {/* Pregunta */}
                <div className="flex flex-col justify-around">
                    <div>
                        <p className="text-xs text-foreground font-extralight">
                            11/08/2024
                        </p>
                        <h1 className="text-4xl font-bold">
                            Alguien sabe cómo puedo arreglar un auto-mate que se le rompió la bombilla?
                        </h1>
                    </div>
                    <p className="text-2xl text-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fuga quis amet minima laborum molestias tempore sunt aperiam ad! Exercitationem vitae est quam, animi quia non atque architecto sequi sit?
                    </p>

                    {/* Botones */}
                    <div className="flex gap-5">
                        <Button size="sm" className="text text-sm border border-sidebar-foreground">
                            Contestar
                        </Button>
                        <Button variant="secondary" size="sm" className="text text-sm">
                            Yo también tengo este problema
                        </Button>
                    </div>

                </div>
            </div>

            {/* Producto */}
            <div className="grid gap-1 bg-primary-foreground rounded-sm border-border border shadow-xl p-1">
                <div>
                    <Image src="https://placehold.co/222x148" alt="Imagen de auto-mate" width="222" height="148" className="mx-auto max-w-screen" />
                </div>
                <p className="font-semibold text-center text-foreground">
                    Auto-mate Stanley
                </p>
            </div>
        </div>

        <div className="grid gap-10 w-full">

            {/* Respuestas */}
            <div className="flex justify-between">
                <h1 className="text-5xl font-bold">
                    Respuestas
                </h1>
                
                {/* Filtros */}

            </div>

            {/* Respuesta 1 */}
            <Card className="bg-primary-foreground border-primary border-2 p-0">
                <div className="flex gap-x-10">
                    {/* Foto y nombre de usuario */}
                    <div className="flex flex-col mx-5 items-center place-content-center">
                        <div>
                            <Avatar className="size-36 border border-sidebar-foreground mb-5">
                                <AvatarImage src="https://placehold.co/144x144" className="mx-auto max-w-screen"/>
                                <AvatarFallback>JC</AvatarFallback>
                            </Avatar>
                        </div>
                        <h1 className="text-center font-bold text-2xl mb-1">
                            Manuel Núñez
                        </h1>
                        <p className="text-center font-normal mb-2">
                            @ManuelNuñez
                        </p>
                    </div>

                    {/* Respuesta */}
                    <div className="flex flex-col pr-1 pt-1 justify-between w-full">
                        <CardHeader className="flex flex-row justify-between p-0">
                            <div className="py-11">
                                <CardDescription className="text-xs text-foreground font-extralight">
                                    11/08/2024
                                </CardDescription>
                                <CardTitle className="text-2xl text-foreground">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi harum pariatur nobis aliquam, nemo quisquam ipsam necessitatibus voluptas officia consequuntur cumque dolorum mollitia, voluptate reprehenderit velit voluptatem molestias doloribus praesentium.
                                </CardTitle>
                            </div>
                            <Badge className="text-base">
                                Más votada
                            </Badge>
                        </CardHeader>

                        <CardContent className="flex gap-2 py-15 px-0">
                            <ThumbsUp/>
                            <p className="text-foreground font-medium mr-3">
                                10
                            </p>
                            <ThumbsDown/>
                            <p className="text-foreground font-medium">
                                1
                            </p>
                        </CardContent>
                    </div>
                </div>
            </Card>

            {/* Respuesta 2 */}
            <Card className="bg-primary-foreground border-border border-2 p-0">
                <div className="flex gap-x-10">
                    {/* Foto y nombre de usuario */}    
                    <div className="flex flex-col mx-5 items-center place-content-center">
                        <div>
                            <Avatar className="size-36 border border-sidebar-foreground m-5">
                                <AvatarImage src="https://placehold.co/144x144" className="mx-auto max-w-screen"/>
                                <AvatarFallback>JC</AvatarFallback>
                            </Avatar>
                        </div>
                        <h1 className="text-center font-bold text-2xl mb-1">
                            Santiago Ribecca
                        </h1>
                        <p className="text-center font-normal mb-2">
                            @SantiagoRibecca
                        </p>
                    </div>

                    {/* Respuesta */}
                    <div className="flex flex-col pr-1 pt-1 justify-between w-full">
                        <CardHeader className="flex flex-row justify-between p-0">
                            <div className="py-11">
                                <CardDescription className="text-xs text-foreground font-extralight">
                                    11/10/2024
                                </CardDescription>
                                <CardTitle className="text-2xl text-foreground pr-30">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores perferendis rem quibusdam laudantium accusamus, autem, eius, vel quis aut blanditiis ipsa? Adipisci odio ullam suscipit explicabo cumque sunt aut deleniti.
                                </CardTitle>
                            </div>
                        </CardHeader>

                        <CardContent className="flex gap-2 py-15 px-0">
                            <ThumbsUp/>
                            <p className="text-foreground font-medium mr-3">
                                2
                            </p>
                            <ThumbsDown/>
                            <p className="text-foreground font-medium">
                                0
                            </p>
                        </CardContent>
                    </div>
                </div>
            </Card>
        </div>
    </div>
}