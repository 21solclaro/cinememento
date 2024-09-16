export type Movie = {
  id: string;
  title: string;
  release_date: Date;
  poster_path: string;
  runtime: number;
  overview?: string;
  genres: { id: number; name: string }[];
};

export type Cast = {
  id: string;
  name: string;
};

export type Director = {
  id: string;
  name: string;
};
