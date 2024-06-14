import { Home, HomeIcon, UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { histories, History } from "@/dummy/db";

export function Sidebar() {
  return (
    <aside className="flex-col gap-1 p-5 border-r w-[270px] h-[calc(100svh-3.5rem)] flex sticky top-0">
      <Link href="/">
        <Button variant="ghost" className="flex justify-start gap-2 w-full">
          <HomeIcon />
          Dashboard
        </Button>
      </Link>

      <Link href="/profile">
        <Button variant="ghost" className="flex justify-start gap-2 w-full">
          <UserIcon />
          Profile
        </Button>
      </Link>

      <Separator className="my-4" />

      <p className="text-muted-foreground tracking-widest text-xs mb-2">
        RIWAYAT TOPIK
      </p>

      {histories.map((history, index) => (
        <CardChatHistory key={index} history={history} />
      ))}
    </aside>
  );
}

function CardChatHistory({ history }: { history: History }) {
  return (
    <Link href={`/history/${history.uuid}`}>
      <div className="flex gap-2 hover:bg-accent rounded-lg p-4">
        <div className="flex flex-col  w-full">
          <p className="font-bold">{history.penanya}</p>
          <p className="truncate text-xs text-muted-foreground">
            {history.pertanyaan}
          </p>
        </div>
      </div>
    </Link>
  );
}
