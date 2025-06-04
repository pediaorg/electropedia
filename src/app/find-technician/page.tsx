const technicians = [
  { name: "Manuel Núñez", user: "@manununiez" },
  { name: "Santiago Ferreyra", user: "@sanferreyra" },
  { name: "Juan I. Casareski", user: "@juanicasareski" },
  { name: "Santiago Ribecca", user: "@sribecca" },
  { name: "Juan Pérez", user: "@jperez" },
  { name: "Julián Álvarez", user: "@jalvarez" },
  { name: "Perdo González", user: "@pgonzalez" },
  { name: "Pablo Lippi", user: "@plippi" },
];
import { Card, CardContent } from "@/app/_components/_shadcn/ui/card";
import {
    Avatar,
    AvatarImage
} from "@/app/_components/_shadcn/ui/avatar"
import { HardHat } from "lucide-react";
import { Button } from "@/app/_components/_shadcn/ui/button";
import { Triangle } from 'lucide-react';



export default function FindTechnicianPage() {
    return <div className="grid py-10 px-8 place-items-center w-full h-screen">
        <div className="container">
            <h1 className="text-center font-bold text-7xl">
                Encuentra técnicos
            </h1>
            <div className="flex items-center justify-between">
                <h2 className="text-5xl font-bold py-10">
                    Técnicos
                </h2>
                <Button className="border items-center border-sidebar-foreground flex">
                    <p> Filtros </p>
                    <Triangle className="rotate-180"/>
                </Button>
            </div>

            <div className="space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {technicians.map((technician) => (
                        <Card key={technician.user} className="rounded-xl shadow flex flex-col items-center bg-primary-foreground py-6 px-4 size-full">
                            <div className="relative mb-3 flex flex-col items-center">
                                <Avatar className="size-32 border border-sidebar-foreground">
                                    <AvatarImage src="https://placehold.co/128x128x" alt={technician.name} />
                                </Avatar>
                                <HardHat className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-10" />
                            </div>
                            
                            <div className="text-center mb-3">
                                <div className="font-bold text-secondary text-xl">{technician.name}</div>
                                <div className="text-muted-foreground text-base">
                                {technician.user}
                                </div>
                            </div>
                            <Button className="font-medium px-6 text-base border border-sidebar-foreground py-2"> Contactar </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    </div>
};