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
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { UserAvatar } from "../_components/userAvatar";
import { RespondDiscussion } from "../_components/respondDiscussion";
import { cn } from "../lib/utils";

function ThumbsRating() {
  return (
    <div className="flex gap-2 py-10 lg:py-15">
      <ThumbsUp />
      <p className="text-foreground font-medium mr-3">10</p>
      <ThumbsDown />
      <p className="text-foreground font-medium">1</p>
    </div>
  );
}

type Props = {
  name: string;
  user: string;
  img: string;
  date: string;
  answer: string;
  featured?: boolean;
  likes: number;
  dislikes: number;
};

function DiscussionAnswers(props: Props) {
  return (
    <Card
      className={cn(
        "bg-input border-border border-2 p-0 lg:pl-5",
        props.featured && "border-primary"
      )}
    >
      <div className="flex flex-col lg:flex-row gap-10 pl-5 pt-5 lg:pt-0 lg:pl-0">
        <div className="flex flex-col justify-center pr-5 lg:pr-0">
          <UserAvatar name={props.name} user={props.user} img={props.img} />
        </div>

        <div className="flex flex-col pr-1 pt-1 w-full lg:pl-0">
          <CardHeader className="flex flex-col-reverse p-0">
            <div className="pt-5 pr-4">
              <CardDescription className="text-xs text-foreground font-extralight">
                {props.date}
              </CardDescription>
              <CardTitle className="text-2xl text-foreground">
                {props.answer}
              </CardTitle>
            </div>
            <div className="place-self-end">
              {props.featured ? (
                <Badge className="text-base">Más votada</Badge>
              ) : null}
            </div>
          </CardHeader>

          <CardContent className="flex px-0">
            <ThumbsRating />
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

const answers = [
  {
    name: "Juan Pérez",
    user: "11/08/2024",
    img: "https://placehold.co/150x150",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi harum pariatur nobis aliquam, nemo quisquam ipsam necessitatibus voluptas officia consequuntur cumque dolorum mollitia, voluptate reprehenderit velit voluptatem molestias doloribus praesentium.",
    date: "11/08/2024",
    likes: 5,
    dislikes: 1,
    feature: true,
  },
  {
    name: "María López",
    user: "12/08/2024",
    img: "https://placehold.co/150x150",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Doloribus, cumque. Quasi, asperiores. Doloremque, voluptatibus. Quisquam, voluptatum. Doloribus, cumque. Quasi, asperiores.",
    date: "12/08/2024",
    likes: 3,
    dislikes: 0,
    feature: false,
  },
  {
    name: "Carlos García",
    user: "13/08/2024",
    img: "https://placehold.co/150x150",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fuga quis amet minima laborum molestias tempore sunt aperiam ad! Exercitationem vitae est quam, animi quia non atque architecto sequi sit?",
    date: "13/08/2024",
    likes: 2,
    dislikes: 2,
    feature: false,
  },
];

export default function OneDiscussion() {
  return (
    <div className="py-10 px-8 mx-auto container">
      <div className="grid items-center pb-10">
        <div className="flex items-center">
          <div className="flex flex-col lg:flex-row gap-10 w-full">
            <UserAvatar
              name="Juan I. Casareski"
              user="JuanICasareski"
              img="https://placehold.co/150x150"
            />

            {/* Pregunta */}
            <div className="flex flex-col justify-around min-w-0">
              <div>
                <p className="text-xs text-foreground font-extralight">
                  11/08/2024
                </p>
                <h1 className="text-4xl font-bold">
                  Alguien sabe cómo puedo arreglar un auto-mate que se le rompió
                  la bombilla?
                </h1>
              </div>
              <p className="text-2xl text-foreground pt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fuga
                quis amet minima laborum molestias tempore sunt aperiam ad!
                Exercitationem vitae est quam, animi quia non atque architecto
                sequi sit?
              </p>

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
                    <RespondDiscussion productName="BESPOKE French Door con Family Hub 32' de 699L" />
                  </DialogContent>
                </Dialog>
                <Button variant="secondary" size="sm" className="text text-sm">
                  Yo también tengo este problema
                </Button>
              </div>
            </div>

            {/* Producto */}
            <div className="flex-col gap-1 bg-input rounded-sm border-border border shadow-xl p-1 m-auto">
              <div>
                <Image
                  src="https://placehold.co/222x148"
                  alt="Imagen de auto-mate"
                  width="222"
                  height="148"
                  className="mx-auto max-w-screen"
                />
              </div>
              <p className="font-semibold text-center text-foreground">
                Auto-mate Stanley
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-10 w-full">
        {/* Respuestas */}
        <div className="flex justify-between">
          <h1 className="text-5xl font-bold">Respuestas</h1>

          {/* Filtros */}
        </div>

        {answers.map((answer) => (
          <DiscussionAnswers
            key={answer.content}
            name={answer.name}
            user={answer.user}
            img={answer.img}
            date={answer.date}
            answer={answer.content}
            featured={answer.feature}
            likes={answer.likes}
            dislikes={answer.dislikes}
          />
        ))}
      </div>
    </div>
  );
}
