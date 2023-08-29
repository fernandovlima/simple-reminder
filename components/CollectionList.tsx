import { currentUser } from "@clerk/nextjs";
import { prisma } from "@/lib/prisma";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Frown } from "lucide-react";

export async function CollectionList() {
  const user = await currentUser();

  const collections = await prisma.collection.findMany({
    where: {
      userId: user?.id,
    },
  });

  const hasCollections = collections.length > 0;

  if (!hasCollections) {
    return (
      <Alert>
        <Frown className={"h-6 w-6"} />
        <AlertTitle className={"ml-4"}>
          You don&apos;t have any collections yet.
        </AlertTitle>
        <AlertDescription className={"ml-4"}>
          Create a collection to get started.
        </AlertDescription>
      </Alert>
    );
  }

  return <div>CollectionList</div>;
}
