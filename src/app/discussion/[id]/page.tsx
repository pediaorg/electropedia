import Image from "next/image";
import { Badge } from "@/app/_components/_shadcn/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/_shadcn/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/app/_components/_shadcn/ui/dialog";
import { Button } from "@/app/_components/_shadcn/ui/button";
import { UserAvatar } from "@/app/_components/userAvatar";
import { NewAnswer } from "@/app/_components/dialogs";
import { ThumbsRating } from "@/app/_components/thumbsRating";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { api } from "@/trpc/server";

type DiscussionAnswerProps = {
  id: string;
  name: string;
  img: string;
  date: string;
  answer: string;
  featured?: boolean;
  likes: number;
  dislikes: number;
};

function DiscussionAnswer(props: DiscussionAnswerProps) {
  return (
    <Card
      className={cn(
        "bg-input border-border border-2 p-0 lg:pl-5",
        props.featured && "border-primary"
      )}
    >
      <div className="flex flex-col lg:flex-row gap-10 pl-5 pt-5 lg:pt-0 lg:pl-0">
        <div className="flex flex-col justify-center pr-5 lg:pr-0">
          <UserAvatar name={props.name} user_id={props.id} img={props.img} />
        </div>

        <div className="flex flex-col pr-1 pt-1 justify-between w-full lg:pl-0">
          <CardHeader className="flex flex-col-reverse lg:flex-row lg:justify-between p-0">
            <div className="pt-5 pr-4">
              <CardDescription className="text-xs text-foreground font-extralight">
                {props.date}
              </CardDescription>
              <CardTitle className="text-2xl text-foreground">
                {props.answer}
              </CardTitle>
            </div>
            <div className="place-self-end lg:place-self-start">
              {props.featured ? (
                <Badge className="text-base">Más votada</Badge>
              ) : null}
            </div>
          </CardHeader>

          <CardContent className="flex px-0">
            <ThumbsRating likes={props.likes} dislikes={props.dislikes} />
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

async function DiscussionInfo(props: { discussionId: string }) {
  const discussion = await api.discussions.getById({ id: props.discussionId });
  const user = await api.users.getById({ id: String(discussion.user_id) });
  const product = await api.products.getByDiscussion({
    id: String(discussion.product_id),
  });

  return (
    <div className="grid items-center pb-10">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex flex-col lg:flex-row gap-10 w-full">
          <UserAvatar
            name={user.name}
            user_id={user.id}
            img="/blank-profile.png"
          />

          {/* Pregunta */}
          <div className="flex flex-col justify-around min-w-0">
            <div>
              <p className="text-xs text-foreground font-extralight">
                {discussion.publication_date.toLocaleDateString()}
              </p>
              <h1 className="text-4xl font-bold">{discussion.title}</h1>
            </div>
            <p className="text-2xl text-foreground">{discussion.description}</p>

            {/* Botones */}
            <div className="flex flex-wrap gap-5 pt-5">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" className="text text-sm">
                    Contestar
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle />
                  <NewAnswer />
                </DialogContent>
              </Dialog>
              <Button variant="secondary" size="sm" className="text text-sm">
                Yo también tengo este problema
              </Button>
            </div>
          </div>
        </div>

        {/* Producto */}
        <Link href={`/guides/${product._id}`} className="m-auto">
          <div className="flex-col gap-1 bg-input rounded-sm border-border border shadow-xl p-1 m-auto">
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width="222"
                height="148"
                className="mx-auto max-w-screen"
              />
            </div>
            <p className="font-semibold text-center text-foreground">
              {product?.name}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

type PageProps = { params: Promise<{ id: string }> };
export default async function Discussion(props: PageProps) {
  const params = await props.params;
  const discussion = await api.discussions.getById({ id: params.id });
  const answers = await api.answers.getByDiscussionId({ id: params.id });

  return (
    <div className="py-10 px-8 mx-auto container">
      <DiscussionInfo discussionId={discussion.id} />

      <div className="grid gap-10 w-full">
        {/* Respuestas */}
        <div className="flex justify-between">
          <h1 className="text-5xl font-bold">Respuestas</h1>

          {/* Filtros */}
        </div>

        {answers.map(async (answer) => {
          const user = await api.users.getById({
            id: String(answer.user_id),
          });

          return (
            <DiscussionAnswer
              key={answer.message}
              id={user.id}
              name={user.name}
              img="/blank-profile.png"
              date={answer.date.toLocaleDateString()}
              answer={answer.message}
              featured={false}
              likes={answer.likes}
              dislikes={answer.dislikes}
            />
          );
        })}
      </div>
    </div>
  );
}
