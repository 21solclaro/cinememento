"use client";

import { format } from "date-fns";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { movieSchema } from "@/schemas/movie";
import { createPost } from "@/actions/post";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

type FormData = z.infer<typeof movieSchema>;

export const MovieForm = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(movieSchema),
  });

  const onSubmit = (data: FormData) => {
    try {
      createPost(data);
    } catch (error) {
      toast({ title: "Error" });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="py-4 space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>タイトル</FormLabel>
              <FormControl>
                <Input
                  defaultValue={"あいうえお"}
                  autoComplete="off"
                  placeholder="ジュラシックパーク"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="view_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>鑑賞日</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "yyyy年M月d日")
                      ) : (
                        <span>{format(new Date(), "yyyy年M月d日")}</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="view_method"
          render={({ field }) => (
            <FormItem>
              <FormLabel>鑑賞方法</FormLabel>
              <FormControl>
                <Input autoComplete="off" placeholder="映画館" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>コメント</FormLabel>
              <FormControl>
                <Textarea
                  autoComplete="off"
                  placeholder=""
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">投稿</Button>
      </form>
    </Form>
  );
};
