import Image from "next/image"
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



type PageProps = { params: Promise<{ id: string }> }
export default async function ProfilePage(props: PageProps) {
    const params = await props.params
    const id = params.id
    // return (<h1 className="text-red-500">este es mi perfil {id}</h1>
    return (
    <div className="flex flex-col mx-auto container DEBUG">
        <div>
            <Card className="w-full flex flex-row p-0">
                    <Avatar className="size-45">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/66040481?v=4" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="w-full flex flex-col justify-center">
                        <CardHeader className="p-0">
                                <div className="flex flex-row space-x-2">
                                    <CardTitle className="font-bold text-3xl">Usuario</CardTitle>
                                    <CardTitle className="font-normal text-3xl">@{id}</CardTitle>
                                </div>
                            <CardDescription className="font-extralight text-xl italic">Miembro desde: 31/05/2025</CardDescription> 
                            <CardAction>
                                <Button variant={"secondary"}>Editar perfil</Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent className="font-normal text-2xl space-y-3 p-0">
                            <p>15 soluciones</p>
                            <p>24 comentarios</p>
                            <p>3 guias</p>
                        </CardContent>
                    </div>
                </Card>
        </div>

        <div className="w-full flex flex-col mt-5">
        {/* manuales */}
            <Card className="flex flex-col space-x-4 p-4">
                <CardHeader>
                    <CardTitle className="">Manuales</CardTitle>
                </CardHeader>
                <div className="flex flex-row flex-wrap">
                    
                    <div className="w-1/3 flex flex-row p-2">
                        <Avatar className="size-10" />
                            <CardContent className="p-0">
                                <p className="text-sm font-semibold text-blue-600 truncate">
                                Guía: Nombre electrodoméstico...
                                </p>
                                <p className="text-sm text-muted-foreground">16/4/2025</p>
                            </CardContent>
                    </div>
                    <div className="w-1/3 flex flex-row p-2">
                        <Avatar className="size-10" />
                            <CardContent className="p-0">
                                <p className="text-sm font-semibold text-blue-600 truncate">
                                Guía: Nombre electrodoméstico...
                                </p>
                                <p className="text-sm text-muted-foreground">16/4/2025</p>
                            </CardContent>
                    </div>
                    <div className="w-1/3 flex flex-row p-2">
                        <Avatar className="size-10" />
                            <CardContent className="p-0">
                                <p className="text-sm font-semibold text-blue-600 truncate">
                                Guía: Nombre electrodoméstico...
                                </p>
                                <p className="text-sm text-muted-foreground">16/4/2025</p>
                            </CardContent>
                    </div>
                    <div className="w-1/3 flex flex-row p-2">
                        <Avatar className="size-10" />
                            <CardContent className="p-0">
                                <p className="text-sm font-semibold text-blue-600 truncate">
                                Guía: Nombre electrodoméstico...
                                </p>
                                <p className="text-sm text-muted-foreground">16/4/2025</p>
                            </CardContent>
                    </div>
                    <div className="w-1/3 flex flex-row p-2">
                        <Avatar className="size-10" />
                            <CardContent className="p-0">
                                <p className="text-sm font-semibold text-blue-600 truncate">
                                Guía: Nombre electrodoméstico...
                                </p>
                                <p className="text-sm text-muted-foreground">16/4/2025</p>
                            </CardContent>
                    </div>
                    
                </div>
            </Card>

        </div>

        <div>
        {/* actividad */}

        </div>
    </div>

    )
        
}

