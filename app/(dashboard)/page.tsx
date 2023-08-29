import { WelcomeMessage } from "@/components/welcome-message";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { CollectionList } from "@/components/CollectionList";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<Skeleton className={"h-[32px] w-[300px]"} />}>
        <WelcomeMessage />
      </Suspense>

      <CollectionList />
    </>
  );
}
