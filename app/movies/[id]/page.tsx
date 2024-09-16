import { getUser } from "@/app/data/auth";
import { redirect } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { getCasts, getMovie } from "@/app/data/movie";
import { ChevronLeft, Plus } from "lucide-react";
import { getPostsByMovie } from "@/app/data/post";
import { Cast, Movie } from "@/types/movie";
import { Post } from "@/types/post";
import { MoviePosts } from "./components/posts";
import { MovieDetail } from "./components/movie-detail";
import { LinkButton } from "@/components/buttons/link-button";

export default async function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const movie: Movie = await getMovie(id);

  if (!movie) {
    console.error("映画が見つかりません");
    redirect("/movies");
  }

  const casts: Cast[] = await getCasts(id);

  const user = await getUser();

  const posts: Post[] | null =
    user && (await getPostsByMovie(movie.id, user.id));

  return (
    <main className="md:w-[800px] p-10 mx-auto">
      <LinkButton href={"/movies"} icon={<ChevronLeft size={20} />}>
        映画一覧へ戻る
      </LinkButton>
      <MovieDetail movie={movie} casts={casts} />
      <Separator />
      {user && (
        <>
          {posts && posts.length > 0 && <MoviePosts posts={posts} />}
          <LinkButton href={`${id}/post`} icon={<Plus size={20} />}>
            投稿する
          </LinkButton>
        </>
      )}
    </main>
  );
}
