import { Button } from "@/components/ui/button";
import Link from "next/link";

type LinkButtonProps = {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export const LinkButton = ({ href, icon, children }: LinkButtonProps) => (
  <Button className="my-4" asChild>
    <Link href={href}>
      {icon && icon}
      {children}
    </Link>
  </Button>
);
