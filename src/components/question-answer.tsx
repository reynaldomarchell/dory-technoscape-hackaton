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
import { chat_history_example, histories } from "@/dummy/db";
import { useEffect } from "react";
import { Badge } from "./ui/badge";

const divStyle = {
  user: "flex justify-end ",
  model: "flex justify-start ",
};

const textStyle = {
  user: "ml-6 w-max max-w-[80%] rounded-xl rounded-tr-none bg-primary/50 px-4 py-2 whitespace-pre-wrap",
  model:
    "mr-6 w-max max-w-[80%] rounded-xl rounded-tl-none bg-foreground/10 px-4 py-2 whitespace-pre-wrap",
};

export default function QuestionAnswer({
  params,
}: {
  params: { uuid: string };
}) {
  const history = histories.find((history) => history.uuid === params.uuid);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex w-full justify-center items-center">
      <div className="bg-background rounded p-2 max-w-[48rem] flex flex-col gap-4">
        {chat_history_example.map((m) => (
          <div
            key={m.id}
            className={`${m.role == "user" ? divStyle.user : divStyle.model}`}
          >
            <span
              className={`overflow-auto ${
                m.role == "user" ? textStyle.user : textStyle.model
              }`}
            >
              <Markdown>{m.content}</Markdown>
              {m.role !== "user" && (
                <div className="flex flex-col">
                  <span className="w-full mt-5 gap-2 flex justify-start">
                    <Button
                      className="w-fit p-1 h-fit text-xs"
                      variant="secondary"
                    >
                      Saran Jawaban
                    </Button>
                    <Button
                      className="w-fit p-1 h-fit text-xs"
                      variant="secondary"
                    >
                      Translate
                    </Button>
                    <Button
                      className="w-fit p-1 h-fit text-xs"
                      variant="secondary"
                    >
                      Sentimen
                    </Button>
                  </span>
                  {m.functions &&
                    m.functions.map((f, idx) => (
                      <div className="space-y-2 mt-2" key={idx}>
                        <span className="text-muted-foreground text-xs mt-1">
                          <Badge>{f.type.toLocaleUpperCase()}</Badge> Result:
                        </span>
                        <div className="rounded-md text-sm bg-background p-1">
                          {f.result}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
