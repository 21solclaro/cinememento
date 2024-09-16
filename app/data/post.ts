import "server-only";

import { createClient } from "@/lib/supabase/server";
import { cache } from "react";

export const getPosts = cache(async () => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("id, title, comment, view_date, view_method");

  if (error) {
    console.log(error);
  }

  return data;
});

export const getPostsByMovie = cache(async (movie: string, user: string) => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("user_id", user)
      .eq("movie_id", movie);

    if (error) {
      throw new Error();
    }

    return data;
  } catch (error) {
    throw new Error();
  }
});

export const getPost = cache(async (id: string) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("posts")
    .select()
    .eq("id", id)
    .single();

  if (error) {
    return { error: error.message };
  }

  return data;
});
