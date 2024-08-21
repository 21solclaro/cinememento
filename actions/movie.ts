"use server";

import { z } from "zod";
import { getUser } from "@/app/data/auth";
import { createClient } from "@/lib/supabase/server";
import { movieSchema } from "@/schemas/movie";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type FormData = z.infer<typeof movieSchema>;

export const createMovie = async (formData: FormData) => {
  const supabase = createClient();
  const user = await getUser();

  if (!user) {
    redirect("/sign");
  }

  const { error } = await supabase.from("movies").insert(formData);

  if (error) {
    throw new Error(error.message);
  }

  redirect("/movies");
};

export const updateMovie = async (id: string, formData: FormData) => {
  const supabase = createClient();
  const user = await getUser();

  if (!user) {
    redirect("/sign");
  }

  const { error } = await supabase.from("movies").update(formData).eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  redirect("/movies");
};

export const deleteMovie = async (id: string) => {
  const supabase = createClient();
  const user = await getUser();

  if (!user) {
    redirect("/sign");
  }

  const { error } = await supabase.from("movies").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  redirect("/movies");
};
