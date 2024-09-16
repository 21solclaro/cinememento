import "@/app/globals.css";

import { NavBar } from "../../components/nav-bar";
import { Metadata } from "next";
import { Contact, FileQuestion, Info, Notebook, Settings, User } from "lucide-react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "cineMemento",
};

const navItems = [
  {
    href: "/my-page",
    icon: <User />,
    title: "マイページ",
  },
  {
    href: "/my-page/settings",
    icon: <Settings />,
    title: "設定",
  },
];

type MyPageLayoutProps = { children: React.ReactNode };

export default function MyPageLayout({ children }: MyPageLayoutProps) {
  return (
    <div className="flex flex-1 flex-col md:flex-row">
      <aside className="md:w-72">
        <NavBar items={navItems} />
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
