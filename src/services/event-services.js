import { prisma } from "@/utils/prisma";

export async function getAllEvents() {
  try {
    const events = await prisma.event.findMany();
    return events;
  } catch (error) {
    console.log(`Error getting events: ${error}`);
    return [];
  }
}
