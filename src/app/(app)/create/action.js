"use server";

import { auth } from "@/libs/auth";
import { uploadFile } from "@/libs/file-ops";
import { prisma } from "@/utils/prisma";

export async function createEventAction(_, formData) {
  const title = formData.get("title");
  const location = formData.get("location");
  const image = formData.get("image");
  const datetime = formData.get("datetime");
  const description = formData.get("description");

  const session = await auth();

  if (!session) {
    return {
      status: "error",
      message: "You must be logged in to create an event",
    };
  }

  if (!title || !datetime || !description || !location) {
    return {
      status: "error",
      message: "All fields are required",
    };
  }

  const newEvent = await prisma.event.create({
    data: {
      title,
      date: new Date(datetime),
      description,
      location,
      image: image.size !== 0 ? image.name : "",
      authorId: session.user.id,
    },
  });

  await uploadFile({ key: image.name, folder: newEvent.id, body: image });

  // devscale-batch8/asdfsa0idjf0oi232r/file.png

  return {
    status: "success",
    message: "Event created!",
  };
}
