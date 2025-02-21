"use client";

import { Button, Input, Textarea } from "@heroui/react";
import React, { useActionState } from "react";
import { createEventAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(createEventAction, null);

  return (
    <div>
      <form action={formAction} className="space-y-2">
        <Input name="title" placeholder="Title" variant="underlined" />
        <Input name="image" type="file" variant="underlined" />
        <Input name="datetime" type="datetime-local" variant="underlined" />
        <Input name="location" placeholder="Location" variant="underlined" />
        <Textarea name="description" placeholder="Description" variant="underlined" />
        <Button isLoading={pending} type="submit" color="primary" radius="sm">
          Create Event
        </Button>
        {state?.status === "error" && <div className="text-center text-rose-600 bg-rose-50 p-2 rounded-lg">{state.message}</div>}
        {state?.status === "success" && <div className="text-center text-emerald-600 bg-emerald-50 p-2 rounded-lg">{state.message}</div>}
      </form>
    </div>
  );
}
