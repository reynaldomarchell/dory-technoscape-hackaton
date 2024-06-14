"use client";

import {
  Calculator,
  Calendar,
  CreditCard,
  HomeIcon,
  PlusIcon,
  Search,
  Settings,
  Smile,
  User,
  UserIcon,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";

import { Keys } from "./utils/keys";
import Image from "next/image";
import { Button } from "./ui/button";
import { histories, type History } from "@/dummy/db";
import { useQuery } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import Link from "next/link";
import { Badge } from "./ui/badge";

export function SearchHistory() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="rounded-full flex w-fit gap-3 h-[60%] text-sm text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <Search size={15} />
        Cari history chat anda disini...
        <Keys>
          <span className="text-xs">⌘</span>K
        </Keys>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Masukkan teks atau nama di percakapan..." />
        <CommandList className="p-1 flex-1 text-foreground">
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
              <HomeIcon size={15} className="mr-2" />
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/profile"))}
            >
              <UserIcon size={15} className="mr-2" />
              <span>Profile</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/create-session"))}
            >
              <PlusIcon size={15} className="mr-2" />
              <span>Buat sesi baru</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Session history">
            {histories.map((history, index) => (
              <CommandItem
                key={index}
                className="text-foreground cursor-pointer"
                onSelect={() => {
                  runCommand(() => router.push(`/history/${history.uuid}`));
                }}
              >
                <div className="flex gap-1 flex-col">
                  <span className="text-foreground font-bold text-lg">
                    {history.penanya}
                  </span>
                  <p className="text-xs w-fit">{history.pertanyaan}</p>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
        <CommandEmpty>
          Pencarian tidak ditemukan... <br />{" "}
          <span className="font-bold italic">
            Coba masukkan kata kunci yang berbeda
          </span>
        </CommandEmpty>
        <div className="border-t bg-primary/20 text-sm p-1">
          <Keys>↑</Keys> <Keys>↓</Keys> untuk navigasi dan <Keys>↵</Keys> untuk
          memilih
        </div>
      </CommandDialog>
    </>
  );
}
