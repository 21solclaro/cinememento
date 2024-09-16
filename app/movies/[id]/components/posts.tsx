import { Post } from "@/types/post";
import { format } from "date-fns";

export const MoviePosts = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="py-6 space-y-4">
      {posts.map((post) => {
        return (
          <div key={post.id} className="border rounded-md p-4 bg-card">
            <h2>{format(post.view_date, "yyyy年M月d日")}</h2>
            <p>{post.comment}</p>
          </div>
        );
      })}
    </div>
  );
};
