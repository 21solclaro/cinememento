import "server-only";

import { createClient } from "@/lib/supabase/server";

export const getMovies = async () => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("movies")
    .select("id, title, memo, view_date");

  if (error) {
    console.log(error);
  }

  return data;
};
