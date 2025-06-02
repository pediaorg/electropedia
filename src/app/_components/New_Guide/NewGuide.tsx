import { Label } from "../_shadcn/ui/label";
import { Input } from "../_shadcn/ui/input";
import { Button } from "../_shadcn/ui/button";


interface Props{
    productName: string;
};

export default function NewGUide({productName}: Props){
    return (
        <div className="grid grid-cols-1 items-center gap-2">
            <div>
                <h1 className="text-2xl font-extrabold text-center">Nueva Guía</h1>
                <h2 className="text-xl font-normal text-center italic">{productName}</h2>
            </div>
            <hr className="mb-3"></hr>
            <div className="grid grid-cols-1 items-center gap-3">
                <p className="text-sm font-medium italic overflow text-ellipsis">
                    Desde Electropedia le pedimos que ingrese titulo, descripción y el archivo del instructivo en formato PDF para que de esa forma podamos verificar la información proporcionada. En caso de que podamos confirmar la veracidad del aporte, la guía será publicada con éxito y el autor correspondiente estará etiqutado sobre esta.
                </p>
                <div className="grid w-full gap-3">
                    <Label htmlFor="Name" className="mt-2">Nombre</Label>
                    <Input type="name" id="name" placeholder="Escriba su nombre..." className="bg-amber-200"/>
                    <Label htmlFor="Description" className="mt-2">Descripción</Label>
                    <Input type="description" id="description" placeholder="Escriba una descripción..." className="bg-amber-200"/>
                    <Label htmlFor="Instructive" className="mt-2">Instructivo</Label>
                    <Input id="instructive" type="file" className="w-48 h-9" />
                </div>
                <div className="items-center justify-center">
                    <Button size="sm" className="w-42">Subir guía</Button>
                </div>
            </div>
        </div>
    );
}