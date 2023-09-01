"use client";
import { Task } from "@prisma/client";
import React, { useState, useTransition } from "react";
import { Checkbox } from "./ui/checkbox";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { deleteTask, setTaskToDone } from "@/actions/task";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { EditIcon, LoaderIcon, TrashIcon } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { ConfirmModal } from "@/components/confirm-modal";

function getExpirationColor(expiresAt: Date) {
  const days = Math.floor(expiresAt.getTime() - Date.now()) / 1000 / 60 / 60;

  if (days < 0) return "text-gray-300 dark:text-gray-400";

  if (days <= 3 * 24) return "text-red-500 dark:text-red-400";
  if (days <= 7 * 24) return "text-orange-500 dark:text-orange-400";
  return "text-green-500 dark:text-green-400";
}

function TaskCard({ task }: { task: Task }) {
  const [isSettingToDone, startTaskDoneTransition] = useTransition();
  const [isRemovingTask, startRemoveTransition] = useTransition();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const router = useRouter();

  const handleDeleteTask = async () => {
    try {
      await deleteTask(task.id);
      toast({
        title: "Task deleted",
        description: "Task deleted successfully",
        variant: "success",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while deleting the task",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-between ">
      <div className={"flex gap-2"}>
        <Checkbox
          id={task.id.toString()}
          className="h-5 w-5"
          checked={task.done}
          disabled={task.done || isSettingToDone}
          onCheckedChange={() => {
            startTaskDoneTransition(async () => {
              await setTaskToDone(task.id);
              router.refresh();
            });
          }}
        />
        <label
          htmlFor={task.id.toString()}
          className={cn(
            "text-sm font-medium leading-none decoration-1 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:decoration-white",
            task.done && "line-through",
          )}
        >
          {task.content}
          {task.expiresAt && (
            <p
              className={cn(
                "text-xs text-neutral-500 dark:text-neutral-400",
                getExpirationColor(task.expiresAt),
              )}
            >
              {format(task.expiresAt, "dd/MM/yyyy")}
            </p>
          )}
        </label>
      </div>

      <div>
        <Button
          variant={"ghost"}
          className={"group"}
          onClick={() => {
            setIsDeleteModalOpen(true);
          }}
        >
          {isRemovingTask ? (
            <LoaderIcon className={"h-4 w-4 animate-spin text-red-500"} />
          ) : (
            <TrashIcon
              className={"h-4 w-4 text-slate-500 group-hover:text-red-500"}
            />
          )}
        </Button>
      </div>

      <ConfirmModal
        open={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        onConfirm={() => {
          startRemoveTransition(handleDeleteTask);
        }}
      />
    </div>
  );
}

export default TaskCard;
