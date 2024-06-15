import { histories } from "@/dummy/db";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SendIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import QuestionAnswer from "@/components/question-answer";
import TranslateLanguage from "@/components/translate-language";

export default function ChatSection({ params }: { params: { uuid: string } }) {
  const history = histories.find((history) => history.uuid === params.uuid);

  return (
    <div className="p-10 w-full">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {history?.penanya}
      </h1>
      <h4 className="scroll-m-20 text-xl font-semibold text-muted-foreground tracking-tight">
        {new Date(history?.date ?? "").toLocaleString("id-ID", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Jakarta",
        })}
      </h4>

      <QuestionAnswer params={params} />
      {/* <TranslateLanguage params={params} />
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Peringkas Percakapan</CardTitle>
            <CardDescription>
              Peringkas percakapan dengan customer, disajikan dalam bullet
              point.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-1">
            <Textarea
              placeholder="Masukkan percakapan anda"
              value={history?.pertanyaan}
            />
            <Button size="icon" className="flex-none">
              <SendIcon size={15} />
            </Button>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="bg-accent w-full rounded p-2 space-y-2">
              <div className="text-sm text-muted-foreground">
                Berikut adalah saran jawaban yang dapat Anda berikan:
              </div>
              <div className="bg-background rounded p-2">
                <ul className="list-disc list-inside">
                  <li>
                    <strong>Pelanggan:</strong> Meminta bantuan untuk
                    menggunakan fitur tertentu
                  </li>
                  <li>
                    <strong>Agen:</strong> Memberikan langkah-langkah untuk
                    menggunakan fitur tersebut
                  </li>
                  <li>
                    <strong>Pelanggan:</strong> Menyatakan terima kasih atas
                    bantuan yang diberikan
                  </li>
                </ul>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Analisa Sentimen</CardTitle>
            <CardDescription>
              Analisa sentimen dari percakapan yang diberikan, apakah positif
              atau negatif.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-1">
            <Textarea
              placeholder="Masukkan percakapan anda"
              value={history?.pertanyaan}
            />
            <Button size="icon" className="flex-none">
              <SendIcon size={15} />
            </Button>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="bg-accent w-full rounded p-2 space-y-2">
              <div className="text-sm text-muted-foreground">
                Berikut adalah saran jawaban yang dapat Anda berikan:
              </div>
              <div className="bg-background rounded p-2">
                <div className="">
                  <p className="text-3xl font-black w-full flex justify-center p-10 text-green-400">
                    Positif 90%
                  </p>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card> */}
    </div>
  );
}
