"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "@/actions/auth";

export const SideBar = () => {
  const pathname = usePathname();
  const items = [
    { title: "マイページ", href: "/mypage" },
    { title: "設定", href: "/mypage/settings" },
  ];

  return (
    <nav className="flex flex-col space-y-1">
      {items.map((item) => (
        <Button
          variant="ghost"
          key={item.href}
          className={cn(
            pathname === item.href && "bg-muted",
            "justify-start hover:bg-muted"
          )}
          asChild
        >
          <Link href={item.href}>{item.title}</Link>
        </Button>
      ))}
    </nav>
  );
};
