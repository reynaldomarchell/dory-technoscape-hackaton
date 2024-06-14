import { histories } from "@/dummy/db";

export default function ChatSection({ params }: { params: { uuid: string } }) {
  const history = histories.find((history) => history.uuid === params.uuid);

  return (
    <div className="p-10 w-full">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {history?.penanya}
      </h1>
      <h4 className="scroll-m-20 text-xl font-semibold text-muted-foreground tracking-tight">
        {history?.pertanyaan}
      </h4>

      <div className="grid mt-5 w-full gap-4 grid-cols-1 md:grid-cols-2">
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Tanya Saran Jawaban</CardTitle>
            <CardDescription>
              Tanya saran jawaban dari pertanyaan yang anda berikan.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-1">
            <Input placeholder="Masukkan pertanyaan anda" />
            <Button size="icon" className="flex-none">
              <SendIcon size={15} />
            </Button>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Terjemahkan dalam bahasa lain</CardTitle>
            <CardDescription>
              Terjemahkan pertanyaan anda dalam bahasa lain.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-1">
            <Input placeholder="Masukkan teks yang ingin anda terjemahkan" />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Bahasa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ingriss">Inggris</SelectItem>
                <SelectItem value="prancis">Prancis</SelectItem>
                <SelectItem value="jepang">Jepang</SelectItem>
              </SelectContent>
              <Button size="icon" className="flex-none">
                <SendIcon size={15} />
              </Button>
            </Select>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Peringkas Percakapan</CardTitle>
            <CardDescription>
              Peringkas percakapan dengan customer, disajikan dalam bullet
              point.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-1">
            <Textarea placeholder="Masukkan percakapan anda" />
            <Button size="icon" className="flex-none">
              <SendIcon size={15} />
            </Button>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
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
            <Textarea placeholder="Masukkan percakapan anda" />
            <Button size="icon" className="flex-none">
              <SendIcon size={15} />
            </Button>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
      </div>
    </div>
  );
}

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SendIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
