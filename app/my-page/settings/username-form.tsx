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
import { usernameSchema } from "@/schemas/auth";

type FormData = z.infer<typeof usernameSchema>;

export const UsernameForm = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(usernameSchema),
  });

  const onSubmit = (data: FormData) => {
    try {
      toast({ title: "Success" });
    } catch (error) {
      toast({ title: "Error" });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
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
        />
        <Button type="submit">保存</Button>
      </form>
    </Form>
  );
};
