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
        <div className="flex flex-col items-center mx-auto container py-10 gap-12">
            <h1 className="font-bold text-6xl">Electropedia Plus</h1>
            <p className="font-medium text-2xl">Hazte usuario premium y aprovecha todas las funcionalidades disponibles</p>
            <div className="w-full">
                <Tabs defaultValue="monthly" className="items-center">
                    <TabsList className="gap-3">
                        <TabsTrigger value="monthly">Mensual</TabsTrigger>
                        <TabsTrigger value="yearly">Anual</TabsTrigger>
                    </TabsList>
                    <TabsContent value="monthly" className="w-full">
                        <div className="grid grid-cols-3 gap-10 max-w-215 mx-auto DEBUG"> 
                            <Card className="w-full text-center border border-black rounded-xl bg-primary-foreground">
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
                                    <Button variant="outline" className="w-full bg-black text-white hover:bg-white hover:text-black border-black">Button</Button>
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
                                <Button variant="outline" className="w-full border-white text-black hover:text-white hover:bg-black">
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
                                <Button variant="outline" className="w-full bg-black text-white hover:bg-white hover:text-black border-black">Button</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="yearly" className="w-full">
                        <div className="grid grid-cols-3 gap-10 max-w-215 mx-auto"> 
                            <Card className="w-full text-center border border-black rounded-xl bg-primary-foreground">
                                <CardHeader>
                                <CardTitle>Title</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold mb-2">
                                        <span className="text-lg align-super">$</span>500
                                        <span className="text-sm font-normal text-foreground">/year</span>
                                    </div>
                                    <ul className="text-muted-foreground space-y-1 text-left list-disc list-inside mb-4">
                                        {Array(5).fill("List item").map((item, i) => (
                                        <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    <Button variant="outline" className="w-full bg-black text-white hover:bg-white hover:text-black border-black">Button</Button>
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
                                    <span className="text-sm font-normal text-foreground">/year</span>
                                </div>
                                <ul className="space-y-1 text-left list-disc list-inside mb-4">
                                    {Array(5).fill("List item").map((item, i) => (
                                    <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="w-full border-white text-black hover:text-white hover:bg-black">
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
                                    <span className="text-sm font-normal text-foreground">/year</span>
                                </div>
                                <ul className="text-muted-foreground space-y-1 text-left list-disc list-inside mb-4">
                                    {Array(5).fill("List item").map((item, i) => (
                                    <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="w-full bg-black text-white hover:bg-white hover:text-black border-black">Button</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
                    
            </div>

        </div>
        
    )   
}