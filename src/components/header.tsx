import { BotMessageSquare, LogOut, Search } from "lucide-react";
import { ModeToggle } from "./theme/theme-toggle";
import { Button } from "./ui/button";
import { Keys } from "./utils/keys";
import { SearchHistory } from "./search-history";

export function Header() {
  return (
    <header className="h-14 border-b flex justify-center w-full sticky top-0 px-4">
      <nav className="w-full flex justify-between items-center h-full">
        <div>
          <p className="flex items-center  gap-2 font-black tracking-tight text-2xl">
            <BotMessageSquare />
            Hackaton 7.0
          </p>
        </div>
        <SearchHistory />
        <div className="items-center flex gap-2">
          <Button className="flex gap-1" variant="destructive">
            Log out <LogOut size={15} />
          </Button>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
