import { BrandLogo } from "@/app/_components/logos";
import { Button } from "@/app/_components/_shadcn/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="p-5 border flex justify-between">
      <div className="flex gap-6">
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-unset cursor-pointer"
        >
          <Menu className="size-8 stroke-secondary" />
        </Button>
        <BrandLogo />
      </div>

      <div className="flex gap-5 items-center">
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
