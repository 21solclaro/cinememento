import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="p-4 md:px-10 md:py-4 border-b">
      <div className="flex justify-between items-center">
        <Button asChild variant="ghost" className="text-xl font-bold">
          <Link href="/">cineMEmento</Link>
        </Button>
        {/* <div className="gap-2 hidden md:flex">
          <AuthButton />
          <ThemeSwitcher />
        </div>
        <div className="block md:hidden">
          <HamburgerMenu />
        </div> */}
      </div>
    </header>
  );
};
