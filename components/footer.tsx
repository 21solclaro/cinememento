import Link from "next/link";
import { ThemeButton } from "@/components/buttons/theme-button";
import { AppConfig } from "@/app.config";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 sticky top-full border-t">
      <div className="px-10 text-muted-foreground flex items-center justify-center md:justify-between text-sm">
        <p>&copy; 2024 {AppConfig.appName}</p>
        <div className="hidden md:flex gap-3 items-center">
          <Button variant="ghost" size="icon" asChild>
            <Link href={"/about"}>
              <Info size={20} />
            </Link>
          </Button>
          <ThemeButton />
        </div>
      </div>
    </footer>
  );
};
