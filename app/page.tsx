import { getUser } from "@/app/data/auth";

export default async function Page() {
  const user = await getUser();

  return (
    <div className="p-10">
      {user ? <div>Hello {user.email}</div> : <p>Please login!</p>}
    </div>
  );
}
