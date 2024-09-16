import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types/movie";

export const MovieList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="hover:shadow-lg transition duration-500 relative p-4 border rounded-lg shadow-sm bg-card hover:bg-card/10"
        >
          <div className="flex gap-3">
            <Image
              src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              alt={movie.title}
              width={100}
              height={150}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <h2 className="text-md font-semibold overflow-hidden">
                <Link href={`/movies/${movie.id}`}>
                  {movie.title}
                  <span className="absolute inset-0"></span>
                </Link>
              </h2>
              <span className="flex-1" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
