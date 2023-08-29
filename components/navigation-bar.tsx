import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function NavigationBar() {
  return (
    <nav
      className={"flex h-[60px] w-full items-center justify-between p-4 px-8"}
    >
      <h1
        className={
          "bg-gradient-to-r from-teal-500 via-sky-500 to-violet-500 bg-clip-text text-2xl font-bold text-transparent"
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
