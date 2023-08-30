"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Collection } from "@prisma/client";
import { Button } from "./ui/button";
import { useState, useTransition } from "react";
import { cn } from "@/lib/utils";
import { CollectionColor, CollectionColors } from "@/lib/constants";
import { ArrowDown, ArrowUp, PlusIcon, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Props = {
  collection: Collection;
};
export function CollectionCard({ collection }: Props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isLoading, startTransition] = useTransition();

  return (
    <>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant={"ghost"}
            className={cn(
              "flex w-full justify-between p-6",
              isOpen && "rounded-b-none",
              CollectionColors[collection.color as CollectionColor],
            )}
          >
            <span className="font-bold text-white">{collection.name}</span>
            {!isOpen && <ArrowDown className="h-6 w-6" />}
            {isOpen && <ArrowUp className="h-6 w-6" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col rounded-b-md shadow-lg dark:bg-neutral-900">
          {/*{tasks.length === 0 && (*/}
          {/*  <Button*/}
          {/*    variant={"ghost"}*/}
          {/*    className="flex items-center justify-center gap-1 rounded-none p-8 py-12"*/}
          {/*    onClick={() => setShowCreateModal(true)}*/}
          {/*  >*/}
          {/*    <p>There are no tasks yet:</p>*/}
          {/*    <span*/}
          {/*      className={cn(*/}
          {/*        "bg-clip-text text-sm text-transparent",*/}
          {/*        CollectionColors[collection.color as CollectionColor],*/}
          {/*      )}*/}
          {/*    >*/}
          {/*      Create one*/}
          {/*    </span>*/}
          {/*  </Button>*/}
          {/*)}*/}
          {/*{tasks.length > 0 && (*/}
          {/*  <>*/}
          {/*    <Progress className="rounded-none" value={progress} />*/}
          {/*    <div className="flex flex-col gap-3 p-4">*/}
          {/*      {tasks.map((task) => (*/}
          {/*        <TaskCard key={task.id} task={task} />*/}
          {/*      ))}*/}
          {/*    </div>*/}
          {/*  </>*/}
          {/*)}*/}
          <Separator />
          <footer className="flex h-[40px] items-center justify-between p-[2px] px-4 text-xs text-neutral-500 ">
            <p>Created at {collection.createdAt.toLocaleDateString("en-US")}</p>
            {isLoading && <div>Deleting...</div>}
            {!isLoading && (
              <div>
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  onClick={() => setShowCreateModal(true)}
                >
                  <PlusIcon />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size={"icon"} variant={"ghost"}>
                      <TrashIcon />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your collection and all tasks inside it.
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => {
                          // startTransition(removeCollection);
                        }}
                      >
                        Proceed
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            )}
          </footer>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}
