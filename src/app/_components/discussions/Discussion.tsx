import { Card } from "@/app/_components/_shadcn/ui/card";
import { Avatar, AvatarImage } from "@/app/_components/_shadcn/ui/avatar";

interface props {
  name: string;
  img: string;
  date: string;
}

export default function Discussion({ name, img, date }: props) {
  return (
    <Card key={name} className="p-3 flex">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 justify-center items-center">
          <Avatar className="size-14 border bg-white">
            <AvatarImage src={img} alt="Heladera" />
          </Avatar>
          <span className="text-sm text-center font-medium text-blue-800 underline">
            {name}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
    </Card>
  );
}
