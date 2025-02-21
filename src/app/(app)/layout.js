import { auth } from "@/libs/auth";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import Avatar from "boring-avatars";

export default async function Layout({ children }) {
  const session = await auth();

  return (
    <div className="relative">
      <header className="w-full px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-medium text-lg">
          eventmakers.
        </Link>
        {session ? (
          <div className="flex gap-2 items-center">
            <div>{session.user.name}</div>
            <Avatar size={24} name={session.user.name} variant="beam" colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]} />
          </div>
        ) : (
          <Button as={Link} href="/login" variant="bordered">
            Sign in
          </Button>
        )}
      </header>
      <main className="max-w-3xl m-auto py-12 flex flex-col justify-between min-h-[88vh]">{children}</main>
      <footer className="max-w-3xl m-auto px-4 border-t py-4 flex justify-between items-center">
        <div className="flex gap-5">
          <div className="font-medium">events.</div>
          <div className="font-medium">categories.</div>
          <div className="font-medium">eventmakers.</div>
        </div>
        <div className="font-medium">@2025.</div>
      </footer>
    </div>
  );
}
