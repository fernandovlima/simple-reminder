import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <section
      className={
        "mx-auto my-0 flex min-h-screen w-full max-w-4xl flex-col items-start justify-start"
      }
    >
      {children}
    </section>
  );
}
