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
import { useToast } from "@/components/ui/use-toast";
import { loginSchema } from "@/schemas/auth";
import { signIn } from "@/actions/auth";

type FormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: FormData) => {
    try {
      signIn(data.username, data.password);
    } catch (error) {
      toast({ title: "Error" });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Eメール</FormLabel>
              <FormControl>
                <Input autoComplete="off" placeholder="John" {...field} />
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
                <Input
                  autoComplete="current-password"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">ログイン</Button>
      </form>
    </Form>
  );
};
