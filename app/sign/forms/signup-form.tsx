"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { signupSchema } from "@/schemas/auth";
import { signUp } from "@/actions/auth";
import Link from "next/link";

type FormData = z.infer<typeof signupSchema>;

export const SignupForm = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: FormData) => {
    try {
      signUp(data.email, data.password);
    } catch (error) {
      toast({ title: "Error" });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ユーザー名</FormLabel>
              <FormControl>
                <Input autoComplete="off" placeholder="@johndoe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Eメール</FormLabel>
              <FormControl>
                <Input
                  autoComplete="email"
                  placeholder="you@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>パスワード</FormLabel>
              <FormControl>
                <Input autoComplete="new-password" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          新規登録
        </Button>
        <Button className="w-full" type="submit" variant="outline" asChild>
          <Link href="/">キャンセル</Link>
        </Button>
      </form>
    </Form>
  );
};
