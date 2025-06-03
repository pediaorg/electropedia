import Image from "next/image"

import { Button } from "@/app/_components/_shadcn/ui/button"
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/_shadcn/ui/tabs"

export default async function SubscriptionPage(){


    return(
        <div className="flex flex-col items-center mx-auto container py-10 gap-12 DEBUG">
            <h1 className="font-bold text-6xl">Electropedia Plus</h1>
            <p className="font-medium text-2xl">Hazte usuario premium y aprovecha todas las funcionalidades disponibles</p>
            <div>
                <Tabs defaultValue="account" className="items-center">
                    <TabsList className="gap-3 ">
                        <TabsTrigger value="account">Mensual</TabsTrigger>
                        <TabsTrigger value="password">Anual</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <div className="grid grid-cols-3 gap-15"> 
                            <Card className="w-64 text-center border rounded-xl bg-primary-foreground">
                                <CardHeader>
                                <CardTitle>Title</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold mb-2">
                                        <span className="text-lg align-super">$</span>50
                                        <span className="text-sm font-normal text-foreground">/mo</span>
                                    </div>
                                    <ul className="text-muted-foreground space-y-1 text-left list-disc list-inside mb-4">
                                        {Array(5).fill("List item").map((item, i) => (
                                        <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    <Button className="w-full">Button</Button>
                                </CardContent>
                            </Card>

                            {/* Tarjeta destacada */}
                            <Card className="w-full text-center border rounded-xl bg-black text-white shadow-lg">
                                <CardHeader>
                                <CardTitle>Title</CardTitle>
                                </CardHeader>
                                <CardContent>
                                <div className="text-3xl font-bold mb-2">
                                    <span className="text-lg align-super">$</span>50
                                    <span className="text-sm font-normal text-white/70">/mo</span>
                                </div>
                                <ul className="space-y-1 text-left list-disc list-inside mb-4">
                                    {Array(5).fill("List item").map((item, i) => (
                                    <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="w-full border-white text-white hover:text-black hover:bg-white">
                                    Button
                                </Button>
                                </CardContent>
                            </Card>

                            {/* Tarjeta 3 */}
                            <Card className="w-full text-center border rounded-xl bg-primary-foreground">
                                <CardHeader>
                                <CardTitle>Title</CardTitle>
                                </CardHeader>
                                <CardContent>
                                <div className="text-3xl font-bold mb-2">
                                    <span className="text-lg align-super">$</span>50
                                    <span className="text-sm font-normal text-muted-foreground">/mo</span>
                                </div>
                                <ul className="text-muted-foreground space-y-1 text-left list-disc list-inside mb-4">
                                    {Array(5).fill("List item").map((item, i) => (
                                    <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <Button className="w-full">Button</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="password">
                        <div className="grid grid-cols-3 gap-15"> 
                            <Card className="w-64 text-center border rounded-xl bg-primary-foreground">
                                <CardHeader>
                                <CardTitle>Title</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold mb-2">
                                        <span className="text-lg align-super">$</span>500
                                        <span className="text-sm font-normal text-foreground">/mo</span>
                                    </div>
                                    <ul className="text-muted-foreground space-y-1 text-left list-disc list-inside mb-4">
                                        {Array(5).fill("List item").map((item, i) => (
                                        <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    <Button className="w-full">Button</Button>
                                </CardContent>
                            </Card>

                            {/* Tarjeta destacada */}
                            <Card className="w-full text-center border rounded-xl bg-black text-white shadow-lg">
                                <CardHeader>
                                <CardTitle>Title</CardTitle>
                                </CardHeader>
                                <CardContent>
                                <div className="text-3xl font-bold mb-2">
                                    <span className="text-lg align-super">$</span>500
                                    <span className="text-sm font-normal text-white/70">/mo</span>
                                </div>
                                <ul className="space-y-1 text-left list-disc list-inside mb-4">
                                    {Array(5).fill("List item").map((item, i) => (
                                    <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="w-full border-white text-white hover:text-black hover:bg-white">
                                    Button
                                </Button>
                                </CardContent>
                            </Card>

                            {/* Tarjeta 3 */}
                            <Card className="w-full text-center border rounded-xl bg-primary-foreground">
                                <CardHeader>
                                <CardTitle>Title</CardTitle>
                                </CardHeader>
                                <CardContent>
                                <div className="text-3xl font-bold mb-2">
                                    <span className="text-lg align-super">$</span>500
                                    <span className="text-sm font-normal text-muted-foreground">/mo</span>
                                </div>
                                <ul className="text-muted-foreground space-y-1 text-left list-disc list-inside mb-4">
                                    {Array(5).fill("List item").map((item, i) => (
                                    <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <Button className="w-full">Button</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
                    
            </div>

        </div>
        
    )   
}