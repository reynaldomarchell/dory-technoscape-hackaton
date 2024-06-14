import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { ReactQueryProvider } from "@/components/ReactQueryProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="flex w-screen max-h-[calc(100svh-3.5rem)] overflow-auto">
              <Sidebar />
              {children}
            </div>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
