import { Avatar, AvatarImage } from "@/app/_components/_shadcn/ui/avatar";
import Link from "next/link";

type Props = {
  name: string;
  user: string;
  img: string;
};

export default function UserAvatar({ name, user, img }: Props) {
  return (
    <div className="flex flex-row justify-baseline place-items-center text-center gap-5 lg:flex-col lg:justify-center">
      <Avatar className="size-24 border border-sidebar-foreground sm:size-36">
        <AvatarImage src={img} className="mx-auto max-w-screen" />
      </Avatar>
      <div>
        <Link href="profile/JuanICasareski">
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="font-normal text-xs">{user}</p>
        </Link>
      </div>
    </div>
  );
}
