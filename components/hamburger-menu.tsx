import { getUser } from "@/app/data/auth";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CircleHelp, Menu, Settings, User, Video } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const hamburgerMenuItems = [
  {
    href: "/movies",
    icon: <Video size={20} className="mr-3" />,
    title: "映画一覧",
  },
  {
    href: "/my-page/settings",
    icon: <Settings />,
    title: "設定",
  },
];

export const HamburgerMenu = async () => {
  const user = await getUser();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          {user && <SheetTitle>{`${user.email!}`}</SheetTitle>}
        </SheetHeader>
        {hamburgerMenuItems.map((item) => {
          return (
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="">
                {item.icon}
                {item.title}
              </Link>
            </Button>
          );
        })}
      </SheetContent>
    </Sheet>
  );
};
