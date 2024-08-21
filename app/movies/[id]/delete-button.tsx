"use client"

import { deleteMovie } from "@/actions/movie";
import { Button } from "@/components/ui/button";

export const DeleteButton = ({ id }: { id: string }) => {
  return (
    <Button variant="outline" type="button" onClick={() => deleteMovie(id)}>
      削除
    </Button>
  );
};
