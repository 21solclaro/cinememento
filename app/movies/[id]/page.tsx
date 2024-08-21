import { getUser } from "@/app/data/auth";
import { getMovie, getMovies } from "@/app/data/movie";
import { redirect, usePathname } from "next/navigation";
import { error } from "console";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { DeleteButton } from "./delete-button";

export default async function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const user = await getUser();

  if (!user) {
    redirect("/sign");
  }
  const movie = await getMovie(id);

  if (!movie) {
    console.log(error);
  }

  return (
    <main className="max-w-[800px] px-10 py-20 mx-auto">
      <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-start items-center justify-center">
        <div className="aspect-[2/3] min-w-40 bg-slate-400 rounded-md"></div>
        <div className="md:items-end">
          <h2 className="font-bold text-2xl">{movie.title}</h2>
          <h3 className="text-muted-foreground text-center md:text-end">
            {movie.view_date}
          </h3>
        </div>
      </div>
      <div className="space-x-2 pt-4">
        <Badge>SF</Badge>
        <Badge>Action</Badge>
      </div>
      <Separator className="my-6" />
      {movie.memo && (
        <div className="hover:shadow-lg transition duration-500 relative p-4 border rounded-lg shadow-sm bg-card hover:bg-card/10 space-y-1">
          {movie.memo}
        </div>
      )}
      <DeleteButton id={movie.id} />
    </main>
  );
}
