import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { BotMessageSquare } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SiDiscord } from "react-icons/si";
import { providerMap } from "@/auth";
import { signIn } from "@/auth";

export function ProviderSignIn() {
  return (
    <>
      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async (formData) => {
            "use server";
            if (provider.id === "credentials") {
              await signIn(provider.id, {
                redirectTo: "/",
                password: formData.get("password"),
              });
            } else {
              await signIn(provider.id, { redirectTo: "/profile" });
            }
          }}
        >
          {provider.id === "credentials" && (
            <>
              <Label>Password</Label>
              <Input
                required
                data-1p-ignore
                placeholder="password"
                name="password"
                type="password"
              />
            </>
          )}
          <Button
            type="submit"
            className="flex justify-center items-center px-4 mt-2 space-x-2 w-full h-12 text-base font-light text-white rounded transition focus:ring-2 focus:ring-offset-2 focus:outline-none bg-zinc-800 hover:bg-zinc-900 focus:ring-zinc-800"
          >
            <span>Sign in with {provider.name}</span>
          </Button>
          <Separator className="my-4" />
        </form>
      ))}
    </>
  );
}
