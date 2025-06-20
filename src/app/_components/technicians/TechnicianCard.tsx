import { Card } from "@/app/_components/_shadcn/ui/card";
import { Avatar, AvatarImage } from "@/app/_components/_shadcn/ui/avatar";
import { HardHat } from "lucide-react";
import { Button } from "@/app/_components/_shadcn/ui/button";

interface Props {
  name: string;
  user: string;
}

export default function TechnicianCard({ name, user }: Props) {
  return (
    <Card
      key={user}
      className="rounded-xl shadow flex flex-col items-center py-6 px-4 size-full bg-input"
    >
      <div className="relative mb-3 flex flex-col items-center">
        <Avatar className="size-32 border bg-white hidden sm:block">
          <AvatarImage src="https://placehold.co/64x64" alt={name} />
        </Avatar>
        <HardHat className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-10" />
      </div>
      <div className="text-center mb-3">
        <div className="font-bold text-lg">{name}</div>
        <div className="text-muted-foreground text-sm">{user}</div>
      </div>
      <Button size="sm" className="font-medium px-6 py-2">
        Contactar
      </Button>
    </Card>
  );
}
