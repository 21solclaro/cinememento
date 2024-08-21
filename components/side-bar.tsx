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

export const SideBar = () => {
  const pathname = usePathname();
  const items = [
    { title: "映画一覧", href: "/movies" },
    { title: "設定", href: "/settings" },
    { title: "マイページ", href: "/mypage" },
  ];

  return (
    <nav className="flex flex-col space-y-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button>新規投稿</Button>
        </DialogTrigger>
        <DialogContent className="md:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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
