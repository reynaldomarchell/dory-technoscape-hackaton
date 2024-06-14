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
            <Input
              value={history?.pertanyaan}
              placeholder="Masukkan pertanyaan anda"
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
                <p>
                  Terima kasih telah menghubungi kami. Untuk mengatasi masalah
                  Anda, kami sarankan Anda melakukan hal-hal berikut:
                </p>
                <ul className="list-disc list-inside">
                  <li>Periksa kembali pengaturan perangkat Anda</li>
                  <li>Coba perbarui aplikasi ke versi terbaru</li>
                  <li>
                    Jika masalah masih berlanjut, silakan hubungi kami kembali
                    dan kami akan membantu Anda
                  </li>
                </ul>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Terjemahkan dalam bahasa lain</CardTitle>
            <CardDescription>
              Terjemahkan pertanyaan anda dalam bahasa lain.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-1">
            <Input
              value={history?.pertanyaan}
              placeholder="Masukkan teks yang ingin anda terjemahkan"
            />
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
          <CardFooter className="flex justify-between">
            <div className="bg-accent w-full rounded p-2 space-y-2">
              <div className="text-sm text-muted-foreground">
                Berikut adalah saran jawaban yang dapat Anda berikan:
              </div>
              <div className="bg-background rounded p-2">
                <div>
                  <p>
                    <strong>Question:</strong> How do I use this feature?
                  </p>
                  <p>
                    <strong>Answer:</strong> To use this feature, you need to
                    perform the following steps:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Open the app settings</li>
                    <li>Search for the feature you want</li>
                    <li>Follow the instructions provided</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardFooter>
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
