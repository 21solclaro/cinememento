import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getUser } from "@/app/data/auth";

export default async function Page() {
  const user = await getUser();
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Button asChild>
        <Link href={"/login"}>ログインページ</Link>
      </Button>
      {user ? <p>Hello {user.email}</p> : <p>Please login</p>}
    </div>
  );
}
