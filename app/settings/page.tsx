import { getUser } from "@/app/data/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getUser();

  if (!user) {
    redirect("/sign");
  }

  return <div className="p-10">設定</div>;
}
