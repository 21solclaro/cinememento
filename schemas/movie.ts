import { z } from "zod";

export const movieSchema = z.object({
  title: z
    .string()
    .min(1, "必須入力です")
    .max(255, "255文字以内で入力して下さい"),
  view_date: z.date(),
  view_method: z
    .string()
    .min(1, "必須入力です")
    .max(255, "255文字以内で入力して下さい"),
  comment: z.string().max(1000, "1000文字以内で入力して下さい").optional(),
});
