"use client";

import { useState, useEffect } from "react";
import { MovieList } from "./movie-list";
import { getTrendingMovies, getNowPlayingMovies } from "@/app/data/movie";
import { Movie } from "@/types/movie";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectBox({ defaultMovies }: { defaultMovies: Movie[] }) {
  const [selectedCategory, setSelectedCategory] = useState("trending"); 
  const [movies, setMovies] = useState<Movie[]>(defaultMovies);

  useEffect(() => {
    async function fetchMovies() {
      let data: Movie[] = [];
      if (selectedCategory === "trending") {
        data = await getTrendingMovies();
      } else if (selectedCategory === "playing") {
        data = await getNowPlayingMovies();
      }
      setMovies(data);
    }

    fetchMovies();
  }, [selectedCategory]);

  return (
    <div>
      <Select onValueChange={(value) => setSelectedCategory(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue defaultValue="trending" placeholder="トレンド" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="trending">トレンド</SelectItem>
          <SelectItem value="playing">上映中</SelectItem>
        </SelectContent>
      </Select>
      <MovieList movies={movies} />
    </div>
  );
}
