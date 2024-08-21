import { z } from "zod";

const password = z.string().min(6, "8文字以上で入力して下さい");
const username = z.string().min(3, "3文字以上で入力して下さい");

export const loginSchema = z.object({
  email: z.string().email(),
  password: password,
});

export const signupSchema = z.object({
  email: z.string().email(),
  password: password,
});

export const usernameSchema = z.object({ username: username });
