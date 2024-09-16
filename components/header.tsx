import Link from "next/link";

import { AuthButton } from "@/components/buttons/auth-button";
import { Button } from "@/components/ui/button";
import { HamburgerMenu } from "./hamburger-menu";
import { AppConfig } from "@/app.config";

export const Header = () => {
  return (
    <header className="p-4 md:px-10 md:py-4 border-b">
      <div className="flex justify-between items-center">
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
        <Link href="/" className="text-xl font-bold">
          {AppConfig.appName}
        </Link>
        <div className="md:hidden" />
        <div className="gap-2 hidden md:flex">
          <Button variant="ghost" asChild>
            <Link href="/movies">映画一覧</Link>
          </Button>
          <AuthButton />
        </div>
      </div>
    </header>
  );
};
