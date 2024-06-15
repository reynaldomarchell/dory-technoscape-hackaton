import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BotMessageSquare } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SiDiscord } from "react-icons/si";
import { providerMap, signIn } from "@/auth";

import { RandomText } from "@/components/random-text";

export default async function LoginPage() {
  return (
    <>
      <section className="flex h-screen w-screen justify-between bg-primary">
        <div className="flex flex-col justify-between p-5">
          <BotMessageSquare />
          <RandomText />
          <p>Televize!</p>
        </div>
        <div className="relative flex h-full w-[500px] flex-col items-center justify-center bg-accent">
          <div className="relative flex h-full w-4/5 flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-5">
              <p className="mb-4 text-4xl font-bold text-foreground">
                Selamat datang!
              </p>

              <p className="mx-4 text-muted-foreground">
                Silahkan pilih cara untuk login
              </p>

              <div className="flex flex-col gap-4">
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
                        await signIn(provider.id, { redirectTo: "/" });
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
                    <Button className="justify-start gap-2 bg-black dark:bg-white text-background">
                      <SiDiscord />
                      Lanjutkan dengan {provider.name}
                    </Button>
                  </form>
                ))}
              </div>

              <div className="flex gap-2">
                <p className="text-sm">Tidak punya akun?</p>
                <Link href="/signup" className="text-sm text-[#D36A7B]">
                  Daftar
                </Link>
              </div>
            </div>
            <div className="relative top-[25%] flex flex-col items-center">
              <div className="flex">
                <BotMessageSquare />
                <p className="text-lg">Televize</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
