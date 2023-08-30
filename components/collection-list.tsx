import { currentUser } from "@clerk/nextjs";
import { prisma } from "@/lib/prisma";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Frown } from "lucide-react";
import { CreateCollectionButton } from "@/components/create-collection-button";
import { CollectionCard } from "@/components/collection-card";

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
      <div className={"flex w-full flex-col gap-5"}>
        <Alert>
          <Frown className={"h-6 w-6"} />
          <AlertTitle className={"ml-4"}>
            You don&apos;t have any collections yet.
          </AlertTitle>
          <AlertDescription className={"ml-4"}>
            Create a collection to get started.
          </AlertDescription>
        </Alert>
        <CreateCollectionButton />
      </div>
    );
  }

  return (
    <div>
      <CreateCollectionButton />

      <div className="mt-6 flex flex-col gap-4">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
}
