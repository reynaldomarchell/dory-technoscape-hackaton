import {
  BotMessageSquare,
  LogIn,
  LogOut,
  Search,
  UserIcon,
} from "lucide-react";
import { ModeToggle } from "./theme/theme-toggle";
import { Button } from "./ui/button";
import { Keys } from "./utils/keys";
import { SearchHistory } from "./search-history";

import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export async function Header() {
  const session = await auth();
  return (
    <header className="h-14 border-b flex justify-center w-full sticky top-0 px-4">
      <nav className="w-full flex justify-between items-center h-full">
        <div>
          <p className="flex items-center  gap-2 font-black tracking-tight text-2xl">
            <BotMessageSquare />
            Televize
          </p>
        </div>
        <SearchHistory />
        <div className="items-center flex gap-2">
          <Popover>
            <PopoverTrigger>
              <Avatar>
                <AvatarFallback>
                  <UserIcon />
                </AvatarFallback>
                <AvatarImage
                  src={session?.user?.image ?? ""}
                  alt="User avatar"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent
              className="flex flex-col gap-1"
              sideOffset={20}
              collisionPadding={10}
            >
              <ModeToggle />
              {session ? (
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <Button
                    type="submit"
                    variant="ghost"
                    className={cn(
                      "flex items-center justify-between font-normal w-full"
                    )}
                  >
                    <p>Log out</p>
                    <LogOut strokeWidth={1} />
                  </Button>
                </form>
              ) : (
                <form
                  action={async () => {
                    "use server";
                    await signIn();
                  }}
                >
                  <Button
                    type="submit"
                    variant="ghost"
                    className="flex justify-between font-normal w-full"
                  >
                    <p>Sign in</p>
                    <LogIn strokeWidth={1} />
                  </Button>
                </form>
              )}
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </header>
  );
}
