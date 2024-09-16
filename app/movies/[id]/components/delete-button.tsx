"use client";

import { deletePost } from "@/actions/post";
import { Button } from "@/components/ui/button";

export const DeleteButton = ({ id }: { id: string }) => {
  return (
    <Button variant="outline" type="button" onClick={() => deletePost(id)}>
      削除
    </Button>
  );
};
