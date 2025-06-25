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

type DiscussionAnswerProps = {
  name: string;
  user: string;
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
            <ThumbsRating likes={props.likes} dislikes={props.dislikes} />
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
    img: "blank-profile.png",
    content:
      "A mí me pasó algo parecido con mi BESPOKE después de un corte de luz. Estuvo como muerta, sin encender ni hacer ruido.\nLa desenchufé unos 10 minutos y después la volví a enchufar.\nAl principio no hizo nada, pero después de unos 5 minutos arrancó sola.\nMe habían dicho que algunas Samsung entran en modo de protección, así que es normal que tarden un poco en volver a andar.",
    date: "11/08/2024",
    likes: 5,
    dislikes: 1,
    feature: true,
  },
  {
    name: "María López",
    user: "12/08/2024",
    img: "blank-profile.png",
    content:
      "Fijate también que el disyuntor no haya saltado, porque a veces parece que hay luz pero ese enchufe no tiene corriente. Y si el panel no prende nada de nada, puede ser que se haya quemado la placa por una subida de tensión. En ese caso, lo mejor es llamar a un técnico porque si seguís probando capaz la dañás más.",
    date: "12/08/2024",
    likes: 3,
    dislikes: 0,
    feature: false,
  },
];

export default function Discussion() {
  return (
    <div className="py-10 px-8 mx-auto container">
      <div className="grid items-center pb-10">
        <div className="flex items-center">
          <div className="flex flex-col lg:flex-row gap-10 w-full">
            <UserAvatar
              name="Juan I. Casareski"
              user="@JuanICasareski"
              img="blank-profile.png"
            />

            {/* Pregunta */}
            <div className="flex flex-col justify-around min-w-0">
              <div>
                <p className="text-xs text-foreground font-extralight">
                  11/08/2024
                </p>
                <h1 className="text-4xl font-bold">
                  Cómo arreglar mi heladera Samsung
                </h1>
              </div>
              <p className="text-2xl text-foreground">
                Buenas, el otro día se me cortó la luz y mi heladera BESPOKE
                dejó de funcionar, alguno sabe qué puede ser?
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
                    <NewAnswer />
                  </DialogContent>
                </Dialog>
                <Button variant="secondary" size="sm" className="text text-sm">
                  Yo también tengo este problema
                </Button>
              </div>
            </div>

            {/* Producto */}
            <Link href="guides/" className="m-auto">
              <div className="flex-col gap-1 bg-input rounded-sm border-border border shadow-xl p-1 m-auto">
                <div>
                  <Image
                    src="/Bespoke-French.png"
                    alt="Imagen de auto-mate"
                    width="222"
                    height="148"
                    className="mx-auto max-w-screen"
                  />
                </div>
                <p className="font-semibold text-center text-foreground">
                  Heladera Samsung BESPOKE
                </p>
              </div>
            </Link>
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
          <DiscussionAnswer
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
