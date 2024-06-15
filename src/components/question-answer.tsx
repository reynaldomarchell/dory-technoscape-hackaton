"use client";

import { useChat } from "@ai-sdk/react";
import Markdown from "react-markdown";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SendIcon } from "lucide-react";
import { histories } from "@/dummy/db";

const divStyle = {
  user: "flex justify-end ",
  model: "flex justify-start ",
};

const textStyle = {
  user: "ml-6 w-max max-w-full rounded-xl rounded-tr-none bg-gray-900 px-2 py-1 whitespace-pre-wrap",
  model:
    "mr-6 w-max max-w-full rounded-xl rounded-tl-none bg-slate-800 px-2 py-1 whitespace-pre-wrap",
};

export default function QuestionAnswer({
  params,
}: {
  params: { uuid: string };
}) {
  const history = histories.find((history) => history.uuid === params.uuid);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Tanya Saran Jawaban</CardTitle>
        <CardDescription>
          Tanya saran jawaban dari pertanyaan yang anda berikan.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="w-full flex gap-2">
          <Input
            value={input}
            placeholder="Masukkan pertanyaan anda"
            onChange={handleInputChange}
          />
          <Button size="icon" className="flex-none">
            <SendIcon size={15} />
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="bg-accent w-full rounded p-2 space-y-2">
          <div className="text-sm text-muted-foreground">
            {messages.length > 0
              ? "Berikut adalah saran jawaban yang dapat Anda berikan:"
              : "Tanya sesuatu untuk mendapatkan saran jawaban."}
          </div>
          <div className="bg-background rounded p-2 min-h-40 max-h-screen overflow-auto flex flex-col gap-2">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`${
                  m.role == "user" ? divStyle.user : divStyle.model
                }`}
              >
                <span
                  className={`overflow-auto ${
                    m.role == "user" ? textStyle.user : textStyle.model
                  }`}
                >
                  <Markdown>{m.content}</Markdown>
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
