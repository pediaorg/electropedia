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

export default function OneDiscussion() {
    return <div className="DEBUG grid gap-10 mx-auto py-10 container">
        <div className="flex justify-between items-center self-center gap-20">
            <div className="flex gap-10">

                {/* Foto y nombre de usuario */}
                <div className="flex flex-col mx-5 items-center">
                    <div>
                        <Avatar className="size-36 border border-sidebar-foreground m-5">
                            <AvatarImage src="https://placehold.co/600x400" className="mx-auto max-w-screen" />
                            <AvatarFallback>JC</AvatarFallback>
                        </Avatar>
                    </div>
                    <h1 className="font-bold text-2xl">
                        Juan I. Casareski
                    </h1>
                    <p className="font-normal">
                        @JuanICasareski
                    </p>
                </div>

                {/* Pregunta */}
                <div className="flex flex-col justify-around">
                    <div>
                        <p className="text-xs text-foreground font-extralight">
                            [Fecha de publicación]
                        </p>
                        <h1 className="text-4xl font-bold">
                            [Pregunta]
                        </h1>
                    </div>
                    <p className="text-2xl text-foreground">
                        [Descripción]
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
                    <Image src="https://placehold.co/600x400" alt="Imagen de un producto" width="222" height="148" className="mx-auto max-w-screen" />
                </div>
                <p className="font-semibold text-center text-foreground">
                    [Nombre del producto]
                </p>
            </div>
        </div>

        <div className="grid gap-10">

            {/* Respuestas */}
            <div className="flex">
                <h1 className="text-5xl font-bold">
                    Respuestas
                </h1>
                
                {/* Filtros */}

            </div>

            {/* Respuesta 1 */}
            <Card className="bg-primary-foreground border-primary border-2 p-0">
                <div className="flex gap-x-10">
                    {/* Foto y nombre de usuario */}    
                    <div className="flex flex-col mx-5 items-center">
                        <div>
                            <Avatar className="size-36 border border-sidebar-foreground m-5">
                                <AvatarImage src="https://placehold.co/600x400" className="mx-auto max-w-screen"/>
                                <AvatarFallback>JC</AvatarFallback>
                            </Avatar>
                        </div>
                        <h1 className="text-center font-bold text-2xl">
                            Juan I. Casareski
                        </h1>
                        <p className="text-center font-normal">
                            @JuanICasareski
                        </p>
                    </div>

                    {/* Respuesta */}
                    <div className="flex flex-col gap-2 justify-around w-full">
                        <CardHeader className="flex flex-row justify-between">
                            <div>
                                <CardDescription className="text-xs text-foreground font-extralight">
                                    [Fecha de publicación]
                                </CardDescription>
                                <CardTitle className="text-2xl text-foreground">
                                    [Respuestas]
                                </CardTitle>
                            </div>
                            <Badge className="text-base">
                                Más votada
                            </Badge>
                        </CardHeader>

                        <CardContent className="flex gap-5">
                            <p className="text-foreground font-extralight">
                                Me gusta
                            </p>
                            <p className="text-foreground font-extralight">
                                No me gusta
                            </p>
                        </CardContent>
                    </div>
                </div>
            </Card>

            {/* Respuesta 2 */}
            <Card className="bg-primary-foreground border-border border-2">
                <div className="flex gap-x-10">
                    {/* Foto y nombre de usuario */}    
                    <div className="flex flex-col mx-5 items-center">
                        <div>
                            <Avatar className="size-36 border border-sidebar-foreground m-5">
                                <AvatarImage src="https://placehold.co/600x400" className="mx-auto max-w-screen" />
                                <AvatarFallback>JC</AvatarFallback>
                            </Avatar>
                        </div>
                        <h1 className="text-center font-bold text-2xl">
                            Juan I. Casareski
                        </h1>
                        <p className="text-center font-normal">
                            @JuanICasareski
                        </p>
                    </div>

                    {/* Respuesta */}
                    <div className="flex flex-col gap-2 justify-around">
                        <div className="flex flex-col">
                            <p className="text-xs text-foreground font-extralight">
                                [Fecha de publicación]
                            </p>
                            <h2 className="text-2xl text-foreground">
                                [Respuestas]
                            </h2>
                        </div>

                        <div className="flex gap-5">
                            <p className="text-foreground font-extralight">
                                Me gusta
                            </p>
                            <p className="text-foreground font-extralight">
                                No me gusta
                            </p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
}