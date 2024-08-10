import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getUser } from "@/app/data/auth";
import { signOut } from "@/actions/auth";

export default async function Page() {
  const user = await getUser();

  return (
    <div className="p-10">
      <Button asChild>
        <Link href={"/auth/login"}>ログインページ</Link>
      </Button>
      <Button asChild>
        <Link href={"/auth/signup"}>新規登録ページ</Link>
      </Button>
      {user ? (
        <div>
          Hello {user.email}
          <form action={signOut}>
            <Button variant="outline">ログアウト</Button>
          </form>
        </div>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}
