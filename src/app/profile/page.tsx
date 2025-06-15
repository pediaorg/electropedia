import { Avatar, AvatarImage } from "@/app/_components/_shadcn/ui/avatar";
import { Card } from "@/app/_components/_shadcn/ui/card";

export default function ProfilePage() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between p-3 DEBUG">
      {/* Sección izquierda: Avatar + texto */}
      <div className="flex w-full md:w-fit">
        {/* Avatar + Botón SOLO visible en mobile */}
        <div className="flex flex-col items-center">
          <div className="size-16 md:size-40 lg:size-64 bg-red-500" />

          {/* Botón visible SOLO en mobile */}
          <div className="w-16 h-8 bg-green-500 mt-2 block md:hidden" />
        </div>

        {/* Texto */}
        <div className="flex flex-col px-2 flex-1">
          <div className="flex flex-col md:flex-row text-xl md:text-3xl">
            <p className="font-bold">Usuario</p>
            <p className="font-normal overflow-hidden text-ellipsis">
              @idDeUsuarioooooooooooo
            </p>
          </div>
          <p className="font-extralight text-sm md:text-xl italic">
            Miembro desde: 31/05/2025
          </p>
          <div className="font-normal text-lg md:text-2xl md:space-y-3">
            <p>15 soluciones</p>
            <p>24 comentarios</p>
            <p>3 guias</p>
          </div>
        </div>
      </div>

      {/* Botón visible SOLO en pantallas grandes */}
      <div className="hidden md:flex justify-center md:justify-end py-3">
        <div className="w-16 h-8 bg-green-500" />
      </div>
    </div>
  );
}
