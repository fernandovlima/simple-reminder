import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import { Arimo } from "next/font/google";
import { NavigationBar } from "@/components/navigation-bar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { ReactNode } from "react";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

// If loading a variable font, you don't need to specify the font weight
const font = Arimo({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Reminders",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html
        lang="en"
        className={cn(font.className, "dark")}
        style={{ colorScheme: "dark" }}
      >
        <body>
          <ThemeProvider>
            <div className={"flex min-h-screen w-full flex-col items-center"}>
              <NavigationBar />
              <main
                className={
                  "flex w-full flex-grow items-center justify-center p-4 dark:bg-slate-900"
                }
              >
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
