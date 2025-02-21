import { prisma } from "@/utils/prisma";
import { PinIcon } from "lucide-react";
import moment from "moment";
import React from "react";

export default async function Page({ params }) {
  const { id } = await params;

  const event = await prisma.event.findUnique({
    where: {
      id,
    },
  });

  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <main className="grid grid-cols-8 gap-8">
      <div className="col-span-3">
        <div className="w-full h-72 bg-slate-300 rounded-lg"></div>
      </div>
      <div className="col-span-5 space-y-6">
        <h1 className="text-5xl">{event.title}</h1>
        <section className="flex gap-4 items-center">
          <div className="border rounded-lg divide-y-1 overflow-hidden">
            <div className="px-3 py-0.5 text-center text-sm font-semibold bg-slate-100">{moment(event.date).format("MMM")}</div>
            <div className="px-3 py-1 text-lg font-semibold text-center">{moment(event.date).format("DD")}</div>
          </div>
          <div>
            <p>{moment(event.date).format("ddd, MMM YYYY")}</p>
            <p>{moment(event.date).format("hh:mm a")}</p>
          </div>
        </section>
        <section className="flex gap-4 items-center">
          <div className="w-12 h-12 flex justify-center items-center rounded-lg bg-slate-100">
            <PinIcon size={16} />
          </div>
          <div>
            <p>{event.location}</p>
            <p>Indonesia</p>
          </div>
        </section>
        <section>
          <h3>About Event</h3>
          <p>{event.description}</p>
        </section>
      </div>
    </main>
  );
}
