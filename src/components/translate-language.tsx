"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import Markdown from "react-markdown";
import { SendIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
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

export default function TranslateLanguage({
  params,
}: {
  params: { uuid: string };
}) {
  const history = histories.find((history) => history.uuid === params.uuid);
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [selectedLanguage, setSelectedLanguage] = useState("inggris");

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Terjemahkan dalam bahasa lain</CardTitle>
        <CardDescription>
          Terjemahkan pertanyaan anda dalam bahasa lain.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="w-full flex gap-2">
          <Input
            value={input}
            placeholder="Masukkan teks yang ingin anda terjemahkan"
            onChange={handleInputChange}
          />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Bahasa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="ingris"
                onClick={() => setSelectedLanguage("inggris")}
              >
                Inggris
              </SelectItem>
              <SelectItem
                value="prancis"
                onClick={() => setSelectedLanguage("prancis")}
              >
                Prancis
              </SelectItem>
              <SelectItem
                value="jepang"
                onClick={() => setSelectedLanguage("jepang")}
              >
                Jepang
              </SelectItem>
            </SelectContent>
          </Select>
          <Button size="icon" className="flex-none">
            <SendIcon size={15} />
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="bg-accent w-full rounded p-2 space-y-2">
          <div className="text-sm text-muted-foreground">
            {messages.length > 0
              ? "Berikut adalah terjemahan untuk teks yang anda berikan:"
              : "Tulis sesuatu untuk mendapatkan terjemahan."}
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
