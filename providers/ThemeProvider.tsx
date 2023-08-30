"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <NextThemeProvider attribute={"class"} enableSystem>
      {children}
    </NextThemeProvider>
  );
}
