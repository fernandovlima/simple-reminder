import { WelcomeMessage } from "@/components/welcome-message";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { CollectionList } from "@/components/collection-list";

export default async function Dashboard() {
  return (
    <div className={"w-full"}>
      <Suspense fallback={<Skeleton className={"h-[32px] w-[300px]"} />}>
        <WelcomeMessage />
      </Suspense>

      <Suspense fallback={<Skeleton className={"h-[460px] w-full"} />}>
        <CollectionList />
      </Suspense>
    </div>
  );
}
