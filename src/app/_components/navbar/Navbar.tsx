import { BrandLogo } from "@/app/_components/logos";
import { Button } from "@/app/_components/_shadcn/ui/button";
import { Menu } from "lucide-react";
import { Input } from "@/app/_components/_shadcn/ui/input";

export default function Navbar() {
  return (
    <div className="p-5 border flex justify-between lg:gap-13 md:gap-8 gap-2">
      <div className="flex gap-4 lg:gap-6 item-center justify-between w-full md:w-fit ">
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-unset cursor-pointer"
        >
          <Menu className="size-8 stroke-secondary" />
        </Button>
        <BrandLogo />
      </div>

      <div className="w-full hidden sm:block max-w-xl">
        <Input
          className="w-full rounded-2xl bg-input text-secondary placeholder:text-secondary/80"
          placeholder="Encuentra tu dispositivo"
        />
      </div>

      <div className="sm:flex hidden gap-y-1 gap-x-5 items-center">
        <Button
          variant="secondary"
          size="sm"
          className="bg-input text-secondary px-4 hover:bg-input/80"
        >
          Ingresar
        </Button>
        <Button variant="secondary" size="sm" className="px-4">
          Registrarse
        </Button>
      </div>
    </div>
  );
}
