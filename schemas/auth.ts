import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "1文字以上で入力して下さい"),
  password: z.string().min(8, "6文字以上で入力して下さい"),
});

export const signupSchema = z.object({
  username: z.string().min(1, "1文字以上で入力して下さい"),
  email: z.string().email(),
  password: z.string().min(8, "8文字以上で入力して下さい"),
});
