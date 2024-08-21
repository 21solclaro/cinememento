import { getUser } from "@/app/data/auth";
import { getMovies } from "@/app/data/movie";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getUser();

  if (!user) {
    redirect("/sign");
  }

  const movies = await getMovies();

  return (
    <div className="p-10 mx-auto max-w-[800px]">
      <div className="grid gird-cols-1 md:grid-cols-2 gap-4">
        {movies ? (
          movies.map((movie) => {
            return (
              <div
                key={movie.id}
                className="hover:shadow-lg transition duration-500 relative p-4 border rounded-lg shadow-sm bg-card hover:bg-card/10"
              >
                <div className="flex gap-3">
                  <div className="aspect-[2/3] min-w-16 bg-slate-400 rounded-md"></div>
                  <div className="flex flex-col">
                    <h2 className="text-md font-semibold truncate">
                      <Link href={`/movies/${movie.id}`}>
                        {movie.title}
                        <span className="absolute inset-0"></span>
                      </Link>
                    </h2>
                    <h3 className="text-sm text-muted-foreground">
                      {movie.view_date}
                    </h3>
                    <span className="flex-1" />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No content...</div>
        )}
      </div>
    </div>
  );
}
