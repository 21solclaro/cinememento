import { getUser } from "@/app/data/auth";
import { getMovies } from "@/app/data/movie";
import { redirect } from "next/navigation";
import { MovieForm } from "@/app//movies/movie-form";

export default async function Page() {
  const user = await getUser();

  if (!user) {
    redirect("/sign");
  }

  const movies = await getMovies();

  return (
    <div className="p-10 mx-auto max-w-[800px]">
      <MovieForm />
    </div>
  );
}
