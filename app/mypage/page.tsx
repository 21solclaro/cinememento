import { getUser } from "@/app/data/auth";
import { redirect } from "next/navigation";
import { UsernameForm } from "./username-form";

export default async function Page() {
  const user = await getUser();

  if (!user) {
    redirect("/sign");
  }

  return (
    <div className="p-10 mx-auto max-w-[400px]">
      <UsernameForm />
    </div>
  );
}
