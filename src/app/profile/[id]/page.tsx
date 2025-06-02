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
import { Separator } from "@/app/_components/_shadcn/ui/separator"
import {ScrollArea} from "@/app/_components/_shadcn/ui/scroll-area"
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "@/app/_components/_shadcn/ui/dropdown-menu"
import React from "react"





type PageProps = { params: Promise<{ id: string }> }
export default async function ProfilePage(props: PageProps) {
    const params = await props.params
    const id = params.id
    // return (<h1 className="text-red-500">este es mi perfil {id}</h1>

    const filtros = Array.from({ length: 10 }).map(
        (_, i, a) => `filtro.${a.length - i}`
    )
    return (
    <div className="flex flex-col mx-auto container ">
        <div>
            <Card className="w-full flex flex-row p-0">
                    <Avatar className="size-45">
                        <AvatarImage src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
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
                                <Button variant={"secondary"} className="m-3">Editar perfil</Button>
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

        <div className="w-full flex flex-col mt-10">
        {/* manuales */}
            <Card className="flex flex-col space-x-4 p-4">
                <CardHeader>
                    <CardTitle className="text-4xl font-medium">Manuales</CardTitle>
                </CardHeader>
                
                <Separator/>

                <ScrollArea className="h-22">
                    <div className="grid grid-cols-3 gap-2">
                        {[1,2,3,4,5,6,7,8].map((item)=>(
                            <div className="flex flex-row items-center h-18">
                                <Avatar className="size-14">
                                    <AvatarImage src={"https://samsungar.vtexassets.com/arquivos/ids/192242-1200-auto?width=1200&height=auto&aspect=true"}/>
                                </Avatar>
                                    <CardContent className="p-0">
                                        <p className="ml-2 text-xl font-semibold text-blue-600 truncate">
                                        Heladera Samsung M345
                                        </p>
                                        <p className="ml-2 text-medium">16/4/2025</p>
                                    </CardContent>
                            </div>
                        ))}
                    </div>        
                </ScrollArea>  
            </Card>

        </div>

        <div className="w-full flex flex-col mt-10">
        {/* actividad */}
        <Card>
            <CardHeader>
                <CardTitle className="text-4xl font-medium">Actividad</CardTitle>
            </CardHeader>
            <Separator />

            <DropdownMenu>
                <DropdownMenuTrigger asChild className="size-20">
                    <Button variant="secondary" className="ml-3">Filtros</Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-40">
                    {filtros.map((tag) => (
                        <React.Fragment key={tag}>
                            <Button className="text-sm">{tag}</Button>
                            <DropdownMenuSeparator className="my-2" />
                        </React.Fragment>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <div>
                <ScrollArea className="h-48 p-2">
                    <div className="space-y-3">
                        {[1, 2, 3, 4].map((item) => (
                            <Card key={item} className="p-3 flex">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <div className="flex">
                                            <Avatar className="size-14">
                                                <AvatarImage src={"https://samsungar.vtexassets.com/arquivos/ids/192242-1200-auto?width=1200&height=auto&aspect=true"}/>
                                            </Avatar>
                                            <CardContent className="p-0">
                                                <p className="ml-2 text-xl font-semibold text-blue-600 truncate">Foro Heladera</p>
                                                <p className="ml-2 text-medium">16/4/2025</p>
                                            </CardContent>
                                        </div>
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
        </Card>


        </div>
    </div>

    )
        
}

