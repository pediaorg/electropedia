"use client";

import { Input } from "@/app/_components/_shadcn/ui/input";
import { Card } from "@/app/_components/_shadcn/ui/card";
import { Bold, Italic, Link2, Image, Plus, Send } from "lucide-react";
import { useState } from "react";
import { createAnswer } from "@/app/lib/actions";
import { useMutation } from "@tanstack/react-query";
import { Button } from "../_shadcn/ui/button";
import { Loader2Icon } from "lucide-react";

export default function NewAnswer() {
  const [answer, setAnswer] = useState("");

  const answerMutation = useMutation({
    mutationFn: () =>
      createAnswer({
        replied_id: "68669bb23e299ff65f4ab51f",
        user_id: "68571baf81c56ec2ba5fd6aa",
        message: answer,
      }),
  });

  const handleNewAnswer = () => {
    answerMutation.mutate();
  };

  return (
    <form>
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

            <Button
              className="size-8 rounded-full"
              variant="ghost"
              disabled={answerMutation.isPending}
              type="submit"
              onClick={handleNewAnswer}
            >
              {answerMutation.isPending ? (
                <Loader2Icon className="size-5" />
              ) : (
                <Send className="size-5" />
              )}
            </Button>
          </Card>

          <Input
            type="answer"
            id="answer"
            autoFocus
            placeholder="Escriba su respuesta..."
            onChange={(e) => setAnswer(e.target.value)}
            className="bg-input border-border"
            disabled={answerMutation.isPending}
          />
        </div>
      </div>
    </form>
  );
}
