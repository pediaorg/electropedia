import { Avatar, AvatarImage } from "@/app/_components/_shadcn/ui/avatar";
import Link from "next/link";

type Props = {
  name: string;
  img: string;
  user_id: string;
};

export default function UserAvatar({ name, img, user_id }: Props) {
  return (
    <div className="flex flex-row justify-baseline place-items-center text-center gap-5 lg:flex-col lg:justify-center lg:py-5">
      <Avatar className="size-24 border border-sidebar-foreground sm:size-36">
        <AvatarImage src={img} className="mx-auto max-w-screen" />
      </Avatar>
      <div>
        <Link href={`/profile/${user_id}`}>
          <h1 className="font-bold text-xl">{name}</h1>
        </Link>
      </div>
    </div>
  );
}
