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
import { signIn } from "@/actions/auth";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { loginSchema } from "@/schemas/auth";

type FormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: FormData) => {
    try {
      signIn(data.email, data.password);
    } catch (error) {
      toast({ title: "Error" });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ユーザー名</FormLabel>
              <FormControl>
                <Input autoComplete="off" placeholder="@johndoe" {...field} />
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
                <div className="relative">
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder=""
                    {...field}
                  />
                  <Button
                    size="icon"
                    type="button"
                    className="absolute top-0 right-0"
                    variant="ghost"
                    onClick={() => setPasswordVisible((v) => !v)}
                  >
                    {passwordVisible ? <Eye size={16} /> : <EyeOff size={16} />}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          ログイン
        </Button>
        <Button className="w-full" type="submit" variant="outline" asChild>
          <Link href="/">キャンセル</Link>
        </Button>
      </form>
    </Form>
  );
};
