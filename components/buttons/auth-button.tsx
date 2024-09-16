import Link from "next/link";

import { getUser } from "@/app/data/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const AuthButton = async () => {
  const user = await getUser();

  return user ? (
    <div className="flex gap-2">
      <Button asChild variant="ghost">
        <Link href="/my-page">マイページ</Link>
      </Button>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  ) : (
    <Button asChild>
      <Link href="/sign">ログイン</Link>
    </Button>
  );
};
