"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { CreateCollectionSheet } from "@/components/create-collection-sheet";
export function CreateCollectionButton() {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (open: boolean) => setOpen(open);

  return (
    <div className={"green-blue-gradient w-full rounded-md p-[1px]"}>
      <Button
        variant={"outline"}
        className={"w-full"}
        onClick={() => setOpen(true)}
      >
        <PlusIcon className={"mr-2 h-4 w-4 text-teal-500"} />
        <span className={"green-blue-gradient bg-clip-text text-transparent"}>
          Create Collection
        </span>
      </Button>

      <CreateCollectionSheet open={open} onOpenChange={handleOpenChange} />
    </div>
  );
}
