import { Card } from "@/app/_components/_shadcn/ui/card";
import { Avatar, AvatarImage } from "@/app/_components/_shadcn/ui/avatar";
import Link from "next/link";

type Props = {
  name: string;
  img: string;
  date: string;
  answers: number;
};

export default function Discussion({ name, img, date, answers }: Props) {
  return (
    <Card key={name} className="p-3 flex w-full">
      <div className="flex justify-between items-center gap-2">
        <div className="flex gap-2 justify-center items-center">
          <Avatar className="size-14 border bg-white items-center justify-center">
            <AvatarImage src={img} alt="Heladera" className="size-10" />
          </Avatar>
          <Link href="discussion/" className="">
            <span className="text-sm font-medium text-blue-800 underline">
              {name}
            </span>
          </Link>
        </div>
        <div className="flex flex-col-reverse items-center lg:flex-row gap-2 text-xs text-foreground">
          <p className="truncate">{answers} respuestas</p>
          <p>{date}</p>
        </div>
      </div>
    </Card>
  );
}
