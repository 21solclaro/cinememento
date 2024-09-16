"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavBarProps = {
  items: {
    href: string;
    icon: React.ReactNode;
    title: string;
  }[];
};

export const NavBar = ({ items }: NavBarProps) => {
  const pathname = usePathname() || "";

  return (
    <nav className="flex space-x-2 overflow-x-scroll md:flex-col md:space-x-0 md:space-y-2 p-6">
      {items.map((item) => (
        <Button
          key={item.href}
          variant="outline"
          className={cn(
            pathname === item.href && "border-blue-500 border-2",
            "hover:bg-muted md:justify-start"
          )}
          asChild
        >
          <Link href={item.href}>
            <span className="md:hidden">{item.icon}</span>
            <span className="hidden md:block justify-start">{item.title}</span>
          </Link>
        </Button>
      ))}
    </nav>
  );
};
