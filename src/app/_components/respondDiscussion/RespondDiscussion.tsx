import { Input } from "@/app/_components/_shadcn/ui/input";
import { Card } from "../_shadcn/ui/card";
import { Bold, Italic, Link2, Image, Plus, Send } from "lucide-react";

export default function RespondDiscussion() {
  return (
    <div className="flex flex-col gap-5">
      <div className="border-b border-secondary pb-5">
        <h1 className="text-5xl font-bold text-center w-full">Respuesta</h1>
      </div>
      <div className="flex flex-col gap-3">
        <Card className="flex flex-row items-center bg-input p-2 w-full justify-between">
          <div className="flex gap-2">
            <Bold className="size-5" />
            <Italic className="size-5" />
            <Link2 className="size-5" />
            <Image className="size-5" />
            <div className="border-l-2 border-secondary px-1">
              <Plus className="size-5" />
            </div>
          </div>
          <div className="place-items-center place-content-center rounded-full bg-background size-8">
            <Send className="size-5" />
          </div>
        </Card>
        <Input
          type="answer"
          id="answer"
          placeholder="Escriba su respuesta..."
          className="bg-input border-border"
        />
      </div>
    </div>
  );
}
