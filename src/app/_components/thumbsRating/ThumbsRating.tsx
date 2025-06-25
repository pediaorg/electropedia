import { ThumbsUp, ThumbsDown } from "lucide-react";

type Props = {
  likes: number;
  dislikes: number;
};

export default function ThumbsRating(props: Props) {
  return (
    <div className="flex gap-2 py-10 lg:py-8">
      <ThumbsUp />
      <p className="text-foreground font-medium mr-3">{props.likes}</p>
      <ThumbsDown />
      <p className="text-foreground font-medium">{props.dislikes}</p>
    </div>
  );
}
