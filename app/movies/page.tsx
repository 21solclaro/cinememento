import { getTrendingMovies, searchMovies } from "@/app/data/movie";
import { Movie } from "@/types/movie";
import { MovieList } from "./movie-list";
import { SearchBox } from "./search-box";

export default async function MovieSearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const { q } = searchParams;
  const movies: Movie[] = q ? await searchMovies(q) : await getTrendingMovies();

  return (
    <div className="px-4 md:px-0 py-10 mx-auto max-w-[800px]">
      <SearchBox />
      <MovieList movies={movies} />
    </div>
  );
}
