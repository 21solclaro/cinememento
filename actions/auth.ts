"use server";

import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signIn = async (email: string, password: string) => {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  redirect("/");
};

export const signUp = async (email: string, password: string) => {
  const origin = headers().get("origin");
  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  // if (!error && user) {
  //   const supabaseAdmin = createAdminClient();

  //   const { error } = await supabaseAdmin
  //     .from("username")
  //     .insert([{ id: user.id, username, email }]);
  // }

  redirect("/");
};

export const signOut = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  redirect("/");
};
