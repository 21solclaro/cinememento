import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-6 sticky top-full border-t">
      <div className="px-10 text-muted-foreground flex justify-center md:justify-between text-sm">
        <p>&copy; 2024 Yoh</p>
        <div className="hidden md:flex gap-3">
          <Link href={"/privacy"}>プライバシーポリシー</Link>
          <Link href={"/terms"}>利用規約</Link>
        </div>
      </div>
    </footer>
  );
};
