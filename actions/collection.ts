"use server";
import { prisma } from "@/lib/prisma";
import { createCollectionSchemaType } from "@/schema/create-collection";
import { currentUser } from "@clerk/nextjs";

export async function createCollection(form: createCollectionSchemaType) {
  const user = await currentUser();

  if (!user) {
    throw new Error("user not found");
  }

  return await prisma.collection.create({
    data: {
      userId: user.id,
      color: form.color,
      name: form.name,
    },
  });
}

export async function deleteCollection(id: string) {
  const user = await currentUser();
  if (!user) {
    throw new Error("user not found");
  }

  return await prisma.collection.delete({
    where: {
      id,
      userId: user.id,
    },
  });
}
