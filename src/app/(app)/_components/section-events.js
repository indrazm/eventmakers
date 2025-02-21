import React from "react";
import { EventCard } from "./event-card";
import { getAllEvents } from "@/services/event-services";

export const SectionEvents = async () => {
  const events = await getAllEvents();

  return (
    <section className="space-y-4">
      <h1>Popular Events</h1>
      <div className="grid grid-cols-2 gap-8">
        {events.map((event) => {
          return <EventCard key={event.id} image={event.image} id={event.id} title={event.title} datetime={event.date.toString()} location={event.location} />;
        })}
      </div>
    </section>
  );
};
