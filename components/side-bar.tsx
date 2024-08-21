"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MovieForm } from "@/app/movies/movie-form";

export const SideBar = () => {
  const pathname = usePathname();
  const items = [
    { title: "映画一覧", href: "/movies" },
    { title: "設定", href: "/settings" },
    { title: "マイページ", href: "/mypage" },
  ];

  return (
    <nav className="flex flex-col space-y-2">
      <Button asChild>
        <Link href="/movies/post">新規投稿</Link>
      </Button>
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
