import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-stone-100 dark:bg-slate-700",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
