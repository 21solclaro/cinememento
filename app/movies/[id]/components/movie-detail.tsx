import { Badge } from "@/components/ui/badge";
import { Cast, Movie } from "@/types/movie";
import { format } from "date-fns";
import Image from "next/image";

export const MovieDetail = ({
  movie,
  casts,
}: {
  movie: Movie;
  casts: Cast[];
}) => {
  return (
    <div className="flex flex-col space-y-4 py-4">
      <div className="flex flex-col md:flex-row gap-4 md:justify-start md:items-start items-center justify-center">
        <Image
          src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          alt={""}
          width={200}
          height={300}
          className="rounded-lg"
        />
        <div className="md:items-start">
          <h2 className="font-bold text-2xl">{movie.title}</h2>
          <h3 className="text-muted-foreground text-center md:text-start">
            {format(movie.release_date, "yyyy年")}・
            {Math.floor(movie.runtime / 60)}時間
            {movie.runtime % 60}分
          </h3>
        </div>
      </div>
      {casts && (
        <div className="space-x-2">
          {casts.map((actor) => {
            return (
              <Badge key={actor.id} variant="outline">
                {actor.name}
              </Badge>
            );
          })}
        </div>
      )}
      {movie.overview && <p>{movie.overview}</p>}
      <div className="space-x-2">
        {movie.genres.map((genre: any) => {
          return <Badge key={genre.id}>{genre.name}</Badge>;
        })}
      </div>
    </div>
  );
};
