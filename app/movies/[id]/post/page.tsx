import { getUser } from "@/app/data/auth";
import { redirect } from "next/navigation";
import { getMovie } from "@/app/data/movie";
import { MovieForm } from "./movie-form";
import { format } from "date-fns";

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

  return (
    <div className="w-full md:w-[600px] p-6 md:px-0 mx-auto">
      <h2 className="text-xl font-bold">
        {`${movie.title} (${format(movie.release_date, "yyyy")})`}
      </h2>
      <MovieForm />
    </div>
  );
}
