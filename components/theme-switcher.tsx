"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComputerIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <Tabs defaultValue={theme}>
      <TabsList className={"dark:bg=[#030303] border dark:border-neutral-800"}>
        <TabsTrigger value={"light"} onClick={() => setTheme("light")}>
          <SunIcon className={"h-[1.2rem] w-[1.2rem]"} />
        </TabsTrigger>
        <TabsTrigger value={"dark"} onClick={() => setTheme("dark")}>
          <MoonIcon className={"h-[1.2rem] w-[1.2rem]"} />
        </TabsTrigger>
        <TabsTrigger value={"system"} onClick={() => setTheme("system")}>
          <ComputerIcon className={"h-[1.2rem] w-[1.2rem]"} />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
