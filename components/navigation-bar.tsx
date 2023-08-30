import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function NavigationBar() {
  return (
    <nav
      className={
        "flex h-[60px] w-full items-center justify-between border-b-[1px] border-b-slate-300 bg-white p-4 px-8 dark:border-b-slate-600 dark:bg-slate-950"
      }
    >
      <h1
        className={
          "green-blue-gradient bg-clip-text text-2xl font-bold tracking-wide text-transparent"
        }
      >
        Simple Reminder
      </h1>

      <div className={"flex items-center gap-4"}>
        <UserButton afterSignOutUrl="/" />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
