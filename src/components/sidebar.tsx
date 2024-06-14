"use client";

import { Home, HomeIcon, PlusIcon, UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { histories, History } from "@/dummy/db";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <aside className="flex-col gap-1 p-5 border-r w-[270px] h-[calc(100svh-3.5rem)] flex sticky top-0">
      <Link href="/">
        <Button
          variant="ghost"
          className={cn(
            "flex justify-start gap-2 w-full",
            pathname == "/" && "bg-accent"
          )}
        >
          <HomeIcon />
          Dashboard
        </Button>
      </Link>

      <Link href="/profile">
        <Button
          variant="ghost"
          className={cn(
            "flex justify-start gap-2 w-full",
            pathname == "/profile" && "bg-accent"
          )}
        >
          <UserIcon />
          Profile
        </Button>
      </Link>

      <Separator className="my-4" />

      <p className="text-muted-foreground tracking-widest text-xs mb-2">
        RIWAYAT TOPIK
      </p>

      <Link href="/create-session">
        <Button
          className={cn("flex justify-start gap-2 w-full")}
          variant={pathname == "/create-session" ? "outline" : "default"}
        >
          <PlusIcon />
          Create New Session
        </Button>
      </Link>

      {histories.map((history, index) => (
        <CardChatHistory key={index} history={history} pathname={pathname} />
      ))}
    </aside>
  );
}

function CardChatHistory({
  history,
  pathname,
}: {
  history: History;
  pathname: string;
}) {
  return (
    <Link href={`/history/${history.uuid}`}>
      <div
        className={cn(
          "flex gap-2 hover:bg-accent rounded-lg p-4",
          pathname == `/history/${history.uuid}` && "bg-accent"
        )}
      >
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
