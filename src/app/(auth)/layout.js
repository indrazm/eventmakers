import { Button, Card, CardBody } from "@heroui/react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="relative h-screen flex justify-center items-center">
      <header className="absolute top-0 left-0 w-full px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-medium text-lg">
          eventmakers.
        </Link>
        <Button as={Link} href="/" variant="bordered">
          explore events
        </Button>
      </header>
      <Card shadow="sm" className="w-[360px] p-6">
        <CardBody>{children}</CardBody>
      </Card>
    </div>
  );
}
