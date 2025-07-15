import Image from "next/image";
import { ScrollArea } from "@/app/_components/_shadcn/ui/scroll-area";
import { Button } from "@/app/_components/_shadcn/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/app/_components/_shadcn/ui/dialog";
import { Card } from "@/app/_components/_shadcn/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/app/_components/_shadcn/ui/accordion";
import { ProductSpecs } from "@/app/_components/dialogs";
import { Avatar, AvatarImage } from "@/app/_components/_shadcn/ui/avatar";
import { NewGuide } from "@/app/_components/newGuide";
import { Discussion } from "@/app/_components/discussions";
import { TechnicianCard } from "@/app/_components/technicians";
import Link from "next/link";
import { api } from "@/trpc/server";
import { now } from "mongoose";

const technicians = [
  { name: "Manuel Nuñez", user: "@manununiez" },
  { name: "Santiago Ferreyra", user: "@sanferreyra" },
  { name: "Juan I. Casareski", user: "@juanicasareski" },
  { name: "Santiago Ribecca", user: "@sribecca" },
];

async function ProductInfo(props: { productId: string }) {
  const response = await api.products.get({ id: props.productId });

  return (
    <div className="flex gap-4 items-center w-full">
      <Avatar className="size-32 border bg-white hidden sm:block">
        <AvatarImage src={response.image} alt="Heladera" />
      </Avatar>
      <div className="flex flex-col gap-1 flex-1">
        <h1 className="font-bold text-2xl w-full">{response.name}</h1>
        <h2 className="text-lg font-semibold w-full">{response.brand}</h2>
        <h3 className="text-sm text-muted-foreground w-full">
          {response.n_comments} Comentarios
        </h3>
        <div className="flex gap-4 text-sm justify-between w-full">
          <Dialog>
            <DialogTrigger asChild>
              <p className="underline text-blue-500 font-light italic cursor-default">
                Especificaciones
              </p>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle />
              <ProductSpecs productId={props.productId} />
            </DialogContent>
          </Dialog>
          <Link href="technicians/">
            <p className="underline text-blue-500 font-light italic cursor-default">
              ¿Tenés dudas? Contactate con un profesional!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

async function AuthorOfGuide(props: { authorId: string }) {
  const user = await api.users.get({ id: props.authorId });
  return user;
}

async function PublishGuides(props: { productId: string }) {
  const guides = await api.guides.getByProductId({ id: props.productId });
  const product = await api.products.get({ id: props.productId });

  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <h2 className="text-2xl font-semibold">Guías</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">Publicar guía</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle />
            <NewGuide productName={product.name} />
          </DialogContent>
        </Dialog>
      </div>
      <hr className="w-full border-t-2 border-border mb-6" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:place-items-center gap-2 mb-4">
        {guides.length > 0
          ? guides.map(async (guide, index) => {
              const author = await AuthorOfGuide({
                authorId: guide.author_id.toString(),
              });
              return (
                <Card
                  className="size-40 bg-input rounded-xl shadow sm:flex flex-col items-center justify-between p-2"
                  key={index}
                >
                  <div className="relative size-full flex items-center justify-center">
                    <div className="w-32 h-20 bg-white rounded-md shadow-inner flex items-center justify-center overflow-hidden">
                      <p className="text-xs font-semibold italic text-black text-center leading-tight px-1">
                        {guide.description}
                      </p>
                    </div>
                    <Image
                      src="/pdf.svg"
                      alt="PDF"
                      width={40}
                      height={40}
                      className="absolute -bottom-4 -left-2 drop-shadow-lg"
                    />
                  </div>
                  <p className="text-xs font-semibold text-center text-foreground mt-2 mb-1">
                    Hecho por{" "}
                    <Link href="profile/JuanICasareski">
                      {" "}
                      {/*TODO: Cambiar el href */}
                      <span className="text-foreground font-bold">
                        {author?.name}
                      </span>
                    </Link>
                  </p>
                </Card>
              );
            })
          : null}
      </div>
    </div>
  );
}

async function Discussions(props: { productId: string }) {
  const foros = await api.discussions.getByProductId({ id: props.productId });
  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <h2 className="text-2xl font-semibold">Discusiones</h2>
        <div className="flex flex-wrap gap-2">
          <Button size="sm">Hacer una pregunta</Button>
          <Link href="discussions/">
            {" "}
            {/*TODO: fix it */}{" "}
            <Button size="sm" variant="secondary" className="size-full">
              Foro
            </Button>
          </Link>
          <Button size="sm" variant="outline">
            Filtros
          </Button>
        </div>
      </div>
      <hr className="w-full border-t-2 border-border mb-6" />
      <ScrollArea className="max-h-48 overflow-auto rounded-md p-4">
        <div className="space-y-3">
          {foros.map((foro, index) => (
            <Discussion
              key={index}
              name={foro.title}
              img="/discussion.svg"
              date={foro.last_update}
              answers={0}
              id={foro.id.toString()}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

async function Multimedia(props: { productId: string }) {
  const product = await api.products.get({ id: props.productId });

  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold">Multimedia</h2>
      <hr className="w-full border-t-2 border-border mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {product.videos.map((url, index) => (
          <div key={index} className="aspect-video">
            <iframe className="w-full h-full" src={url} allowFullScreen />
          </div>
        ))}
        {product.images.map((url, index) => (
          <div key={index} className="aspect-video">
            <Image
              src={url}
              className="w-full h-full"
              alt={""}
              width={128}
              height={128}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

async function ProductFAQ(props: { productId: string }) {
  const response = await api.products.get({ id: props.productId });
  const faqs = (response.faq ?? []).slice(0, 3);

  if (!faqs.length) return null;

  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
      <hr className="w-full border-t-2 border-border mb-6" />
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq: { question: string; answer: string }, idx: number) => (
          <AccordionItem value={`item-${idx + 1}`} key={idx}>
            <AccordionTrigger className="text-base font-normal px-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="italic text-base p-3 bg-input rounded-md">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

async function RecommendedTechnician() {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold truncate">Técnicos recomendados</h2>
      <hr className="w-full border-t-2 border-border mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {technicians.map((technician, index) => (
          <TechnicianCard
            key={index}
            name={technician.name}
            user={technician.user}
          />
        ))}
      </div>
    </div>
  );
}

type PageProps = { params: Promise<{ id: string }> };
export default async function GuidesPage(props: PageProps) {
  const params = await props.params;
  console.log(now());
  return (
    <div className="px-8 py-10 space-y-6 container mx-auto">
      <ProductInfo productId={params.id} />
      <PublishGuides productId={params.id} />
      <Discussions productId={params.id} />
      <Multimedia productId={params.id} />
      <ProductFAQ productId={params.id} />
      <RecommendedTechnician />
    </div>
  );
}
