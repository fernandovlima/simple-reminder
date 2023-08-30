import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  createCollectionSchema,
  createCollectionSchemaType,
} from "@/schema/create-collection";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { CollectionColor, CollectionColors } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LoaderIcon } from "lucide-react";
import { createCollection } from "@/actions/collection";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};
export function CreateCollectionSheet({ open, onOpenChange }: Props) {
  const router = useRouter();
  const form = useForm<createCollectionSchemaType>({
    resolver: zodResolver(createCollectionSchema),
    defaultValues: {},
  });

  const openChangeWrapper = (open: boolean) => {
    form.reset();
    onOpenChange(open);
  };

  const onSubmit = async (data: createCollectionSchemaType) => {
    try {
      await createCollection(data);

      // Close the sheet
      openChangeWrapper(false);
      router.refresh();

      toast({
        title: "Success",
        description: "Collection created successfully!",
        variant: "success",
      });
    } catch (e: any) {
      // Show toast
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later",
        variant: "destructive",
      });
      console.log("Error while creating collection", e);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create Collection</SheetTitle>
          <SheetDescription>
            Collections are a great way to organize your reminders. You can
            create as many as you want.
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={"mt-4 flex flex-col space-y-4"}
          >
            <FormField
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={"eg. Personal"} />
                  </FormControl>
                </FormItem>
              )}
              name={"name"}
            />
            <FormField
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Color</FormLabel>
                  <FormControl>
                    <Select onValueChange={(color) => field.onChange(color)}>
                      <SelectTrigger
                        className={cn(
                          "h-8 w-full text-white",
                          CollectionColors[field.value as CollectionColor],
                        )}
                      >
                        <SelectValue
                          placeholder={"Color"}
                          className={"h-8 w-full"}
                        />
                      </SelectTrigger>

                      <SelectContent className={"w-full"}>
                        {Object.keys(CollectionColors).map((color) => (
                          <SelectItem
                            key={color}
                            value={color}
                            className={cn(
                              `my-1 h-8 w-full rounded-md text-white ring-neutral-600 focus:px-8 focus:font-bold focus:text-white focus:ring-2 focus:ring-inset dark:focus:ring-white`,
                              CollectionColors[color as CollectionColor],
                            )}
                          >
                            {color.toUpperCase()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Select a color for your collection
                  </FormDescription>
                </FormItem>
              )}
              name={"color"}
            />
          </form>
        </Form>

        <div className={"mt-4 flex flex-col gap-4"}>
          <Separator />
          <Button
            variant={"outline"}
            className={cn(
              form.watch("color") &&
                CollectionColors[form.getValues("color") as CollectionColor],
            )}
            onClick={form.handleSubmit(onSubmit)}
          >
            Confirm
            {form.formState.isSubmitting && (
              <LoaderIcon className="ml-2 h-4 w-4 animate-spin" />
            )}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
