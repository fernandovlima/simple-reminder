import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function NavigationBar() {
  return (
    <nav
      className={"flex h-[60px] w-full items-center justify-between p-4 px-8"}
    >
      <h1 className={"green-blue-gradient text-2xl font-bold tracking-wide"}>
        Simple Reminder
      </h1>

      <div className={"flex items-center gap-4"}>
        <UserButton afterSignOutUrl="/" />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
