import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
  title: "Next.js 13 with Clerk",
};

import { Arimo } from "next/font/google";
import { NavigationBar } from "@/components/navigation-bar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

// If loading a variable font, you don't need to specify the font weight
const font = Arimo({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={cn(font.className, "dark")}
        style={{ colorScheme: "dark" }}
      >
        <body>
          <ThemeProvider>
            <div
              className={
                "flex min-h-screen w-full flex-col items-center dark:bg-slate-900"
              }
            >
              <NavigationBar />
              <main className={"flex w-full flex-grow p-4 dark:bg-slate-900"}>
                {children}
              </main>
            </div>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
